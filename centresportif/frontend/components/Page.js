import React, {Component} from 'react';

class Page extends Component {
    render(){
        return(
            <div>
                Visible sur toutes les pages (From component)
                { this.props.children }
            </div>
        )
    }
}
export default Page;