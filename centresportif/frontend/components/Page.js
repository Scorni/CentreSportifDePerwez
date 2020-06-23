import React, {Component} from 'react';
import Header from './Header';
import Meta from './Meta';

class Page extends Component {
    render(){
        return(
            <div>
                <Meta />
                <Header />
                Visible sur toutes les pages (From component)
                { this.props.children }
            </div>
        )
    }
}
export default Page;