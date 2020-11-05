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
class MyEditor extends Component {

  
   constructor(props) {
   super(props);
   this.state = {
     editorState: EditorState.createEmpty()
     };
   }
 onEditorStateChange = editorState => {
    this.setState({ editorState });
 };
 handleChange = e => {
   const { name, type, value} = e.target;
   const val = type === 'number' ? parseFloat(value) : value;
   this.setState({ [name]: val})

 }
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <HeadGenerator title="Créer une nouvelle actualité"/>
        <form >
          <div className ="fieldsetActuality">
          <fieldset >
            
              
              <MuiPickersUtilsProvider utils={DateFnsUtils}>        
                  <KeyboardDatePicker
                      id="date"
                      name = "date"
                      label="Date"
                      format="dd/MM/yyyy"
                      value={this.state.date}
                      onChange={this.handleChange}
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
          <button className="btn btn-success previewButton" data-toggle="modal" data-target="#previewModal">
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
          <button type="submit" class="btn btn-secondary" data-dismiss="modal">
            Valider l'actualité
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default MyEditor;