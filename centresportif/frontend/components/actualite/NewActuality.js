import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {HeadGenerator} from '../sports/category/generator';
import { Button }  from 'reactstrap';
import DateFnsUtils from '@date-io/date-fns'; 
import TextField from '@material-ui/core/TextField';
import { Mutation } from 'react-apollo';
import {CREATE_ACTUALITY_MUTATION} from '../actualite/Mutation'
import {  MuiPickersUtilsProvider, KeyboardDatePicker,} from '@material-ui/pickers'
import Error from '../common/ErrorMessage'
import User from '../common/User';
import SweetAlert from 'react-bootstrap-sweetalert';

import { Container, Row, } from 'reactstrap';


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
    title :  "Actualité du "+ rightFormat(new Date),
    succeededMessage:false

    };
  this.handleClick = this.handleClick.bind(this);
  }
  
  /** update the state for the editor & html content for the submitting */
  onEditorStateChange = editorState => {
    this.setState({ editorState });
    this.setState( { ["content"] : getHtml(editorState) })
    
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
    if(!this.state.content){
      this.setState( {
        ["content"] : "<p>Contenu de l'actualité du " + rightFormat(new Date) + "</p>"
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
      <div className="writenewsvg">
        <HeadGenerator title="Créer une nouvelle actualité"/>
        <User>
                    {({data}) => {
                      const me = data ? data.me : null
                      if(me){
                        if(me.permissions[1] === "ADMIN" && me.permissions[2] === "SADMIN"){ 
                            return(
                                <>
                                    <Mutation mutation = {CREATE_ACTUALITY_MUTATION} 
                                      variables={this.state}>
                                        {(createActuality, { loading, error}) =>(
                                          
                                        
                                    <form onSubmit={async e=> {
                                      e.preventDefault(); 
                                      console.log(this.state);
                                      const res = await createActuality();
                                      console.log(res);
                                      this.setState({
                                        succeededMessage: !this.state.succeededMessage
                                    });
                                    }}>
                                      
                                      <div className ="fieldsetActuality">
                                      <fieldset disabled={loading}>
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
                                          },
                                          
                                        }} 
                                        className = "customEditor"
                                        disabled = {loading}/>
                                      <h4 className = "editorTitle">version HTML</h4>
                                      <div className="html-view">

                                        {getHtml(editorState)}
                                          
                                      </div>
                                      <Button className="previewButton" type="submit" onClick={this.handleClick} disabled={loading}>
                                        Valid{loading ? 'ation' : 'er' }
                                      </Button>
                                      {this.state.succeededMessage? 
                                      <SweetAlert
                                        success
                                        title="Modification sauvegardée!"
                                        onConfirm={() => this.setState({ succeededMessage: false,modalOne: false })}
                                        onCancel={() => this.setState({ succeededMessage: false,modalOne: false })}
                                        timeout={2000}
                                        >
                                        Vos nouvelles données ont bien été mises à jour dans la base de données !
                                      </SweetAlert>: true}
                                    </form>
                                    )}
                                    </Mutation>
                                </>
                            )
                            }else if(me.permissions[1] === "ADMIN"){
                                return(
                                    <>
                                        <Mutation mutation = {CREATE_ACTUALITY_MUTATION} 
                                          variables={this.state}>
                                            {(createActuality, { loading, error}) =>(
                                              
                                            
                                        <form onSubmit={async e=> {
                                          e.preventDefault(); 
                                          console.log(this.state);
                                          const res = await createActuality();
                                          console.log(res);
                                        }}>
                                          <Error error={error} />
                                          <div className ="fieldsetActuality">
                                          <fieldset disabled={loading}>
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
                                              },
                                              
                                            }} 
                                            className = "customEditor"
                                            disabled = {loading}/>
                                          <h4 className = "editorTitle">version HTML</h4>
                                          <div className="html-view">

                                            {getHtml(editorState)}
                                              
                                          </div>
                                          <Button className="previewButton" type="submit" onClick={this.handleClick}>
                                              Valider l'actualité
                                          </Button>
                                        </form>
                                        )}
                                        </Mutation>
                                    </>
                                )
                            }
                        else if(me.permissions[0] === "USER"){
                            return(
                              <Container className="themed-container " fluid={true} >
                                    <Row className="mx-auto justify-content-center">
                                        <div className= "styledDiv bluredInformations">
                                            <p>
                                                <strong>
                                                    <h3>Vous devez être administrateur pour accéder à cette page</h3>
                                                </strong>
                                            </p>
                                        </div>
                                    </Row>
                                </Container>
                            )
                        }}else{
                            return(
                                <Container className="themed-container " fluid={true} >
                                    <Row className="mx-auto justify-content-center">
                                        <div className= "styledDiv bluredInformations">
                                            <p>
                                                <strong>
                                                    <h3>Vous devez être connecté pour accéder à cette page</h3>
                                                </strong>
                                            </p>
                                        </div>
                                    </Row>
                                </Container>
                            )
                        }}}
                    </User>
        
      </div>
    );
  } 
}
export default MyEditor;