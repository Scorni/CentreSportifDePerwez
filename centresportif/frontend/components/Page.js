import React, {Component} from 'react';
import Header from './common/Header';
import Meta from './common/Meta';

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