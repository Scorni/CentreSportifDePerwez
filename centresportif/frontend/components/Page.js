import React, {Component} from 'react';
import Header from './common/Header';
import Meta from './common/Meta';
import Footer from './common/Footer';
class Page extends Component {
    render(){
        return(
            <div>
                <Meta ></Meta>
                <Header ></Header>
                { this.props.children }
                <Footer></Footer>
            </div>    
        )
    }
}
export default Page;