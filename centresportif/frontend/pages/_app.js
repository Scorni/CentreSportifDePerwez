import App, {Container} from 'next/app';
import Page from '../components/Page';
import 'bootstrap/dist/css/bootstrap.css';

class MyApp extends App{
    render(){
        const {Component, pageProps} = this.props;
        return (
            <Page>
                <Component {...pageProps}/>
            </Page>
        )
    }
}

export default MyApp;