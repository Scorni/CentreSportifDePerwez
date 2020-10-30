import React, { Component } from 'react';
import dynamic from 'next/dynamic'; 
import { Container, Row, Col,Button } from 'reactstrap';
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import {HeadGenerator} from '../sports/category/generator';

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
  )

const EditorComponent = () => <Editor />

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

const Actuality = (props) => {
    const classes = useStyles();

  return (
      <>
        <HeadGenerator title="Créer une actualité"/>
        <Container className="themed-container newsvg" fluid={true}>
                                        
            <Row className="mx-auto justify-content-center ">
                <Col>
                <Editor 
  wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"
                />
                </Col>
            </Row>
        </Container>
       
    </>
  );
  }
  
  export default Actuality;

