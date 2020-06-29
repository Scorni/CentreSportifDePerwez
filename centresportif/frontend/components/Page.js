import React, {Component} from 'react';
import Header from './common/Header';
import Meta from './common/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme ={
    primary : 'orange',
    second : 'red',
    text : 'black',
    maxWidth : '1200px'
};
const StyledPage = styled.div`
    background: ${props => props.theme.second};
    color: ${props => props.theme.text};
`;

const StyledPageContent = styled.div`
    background: ${props => props.theme.primary};
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 1.5rem;
`;

class Page extends Component {
    render(){
        return(
            <div>
                <Meta ></Meta>
                <Header ></Header>
                
                { this.props.children }
            </div>    
            
        )
    }
}
export default Page;