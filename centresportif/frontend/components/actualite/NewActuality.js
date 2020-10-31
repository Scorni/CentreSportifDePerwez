import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import {HeadGenerator} from '../sports/category/generator';
import { Container, Row, Col } from 'reactstrap';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)
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
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <HeadGenerator title="Créer une nouvelle actualité"/>
        
              <Editor 
                editorState={editorState}
                wrapperClassName="rich-editor demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                 
                className = "customEditor"/>
              <h4 className = "editorTitle">version HTML</h4>
              <div className="html-view">
                {getHtml(editorState)}
                  
                <PreviewModal output={getHtml(editorState)} />
              </div>
              <button className="btn btn-success previewButton" data-toggle="modal" data-target="#previewModal">
                  Version pré-rendue
              </button>
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
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default MyEditor;