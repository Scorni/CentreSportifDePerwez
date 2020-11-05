import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {HeadGenerator} from '../sports/category/generator';
import { Container, Row, Col } from 'reactstrap';
import DateFnsUtils from '@date-io/date-fns'; 
import TextField from '@material-ui/core/TextField';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)
const embedVideoCallBack = (link) =>{
        if (link.indexOf("youtube") >= 0){
            link = link.replace("watch?v=","embed/");
            link = link.replace("/watch/", "/embed/");
            link = link.replace("youtu.be/","youtube.com/embed/");
        }
        return link
    }
const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));

function defaultFormatedDate() {
  rightFormat(new Date())
 }

function rightFormat(el) {
  let formatedDate
  if((el.getMonth()+1) < 10){
    formatedDate  = el.getDate() + "/0" + (el.getMonth()+1) + "/"+ el.getFullYear()
  }else{
    formatedDate  = el.getDate() + "/" + (el.getMonth()+1) + "/"+ el.getFullYear()
  }
  return formatedDate
}
class MyEditor extends Component {

  
  constructor(props) {
  super(props);
  this.state = {
    editorState: EditorState.createEmpty(),
    date: new Date(),
    };
  this.handleClick = this.handleClick.bind(this);

  }
  
  /** update the state for the editor */
  onEditorStateChange = editorState => {
    this.setState({ editorState });
  };

  /** update all the labels that has been change*/
  handleChange = e => {
    const { name, type, value} = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val})

  }
  /** update the date picked in the calendar label and update to a formated one */
  handleDateChange = e => {
    this.setState({["formatedDate"]: rightFormat(e)})
    this.setState({ ["date"]:e})
  }

  /** if the basic date isn't choose, put a the default value which is the day when the news has been written */
  handleClick() {
    if(!this.state.formatedDate){
      this.setState( {
        ["formatedDate"] : rightFormat(new Date)
      })
    }
  }

  /** generic function to put the date in a custom */
  rightFormat(el) {
    if((el.getMonth()+1) < 10){
      el  = el.getDate() + "/0" + (el.getMonth()+1) + "/"+ el.getFullYear()
    }else{
      el  = el.getDate() + "/" + (el.getMonth()+1) + "/"+ el.getFullYear()
    }
    return el
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <HeadGenerator title="Créer une nouvelle actualité"/>
        <form onSubmit={(e)=> {
          e.preventDefault(); 
          console.log(this.state)
        }}>
          <div className ="fieldsetActuality">
          <fieldset >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>        
                  <KeyboardDatePicker
                      id="date"
                      name = "date"
                      label="Date"
                      type = "text"
                      format="dd/MM/yyyy"
                      value={this.state.date}
                      onChange={this.handleDateChange}
                      KeyboardButtonProps={{
                      'aria-label': 'change date',
                      }}   
                      className="labelActuality"                 
                  />      
              </MuiPickersUtilsProvider>
              <br/>
              <TextField
                  id="title"
                  label="Titre"
                  name ="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                  className="labelActuality"
                  >
              </TextField>
          </fieldset>
          </div>
          
          <Editor 
            editorState={editorState}
            wrapperClassName="rich-editor demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              embedded:{
                  embedCallback: embedVideoCallBack
              }
            }} 
            className = "customEditor"/>
          <h4 className = "editorTitle">version HTML</h4>
          <div className="html-view">

            {getHtml(editorState)}
              
            <PreviewModal output={getHtml(editorState)} />
          </div>
          <button className="btn btn-success previewButton" data-toggle="modal" data-target="#previewModal" onClick={this.handleClick}>
              Version pré-rendue
          </button>
        </form>
      </div>
    );
  } 
}
const PreviewModal = ({ output }) => (
  <div class="modal fade" id="previewModal" tabindex="-1"      role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel"> 
            Pré-rendu de votre actualité
          </h5>
          <button type="button" class="close" data-dismiss="modal"   aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" dangerouslySetInnerHTML={{ __html: output }} />
        <div class="modal-footer">
          <button type="submit"  class="btn btn-secondary" data-dismiss="modal">
            Valider l'actualité
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default MyEditor;