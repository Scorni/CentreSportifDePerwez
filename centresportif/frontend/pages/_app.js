import App, {Container} from 'next/app';
import Page from '../components/Page';
import '../public/static/style.css';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Loading from '../components/common/ProgressBar';
import { ApolloProvider } from 'react-apollo';
import withData from '../withData';


class MyApp extends App{
    /**state = {
        isRouteChanging: false,
        loadingKey: null,
      }
    */
      static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        pageProps.query = ctx.query;
        return { pageProps };
      }
     
      /**componentDidMount() {
        const { router } = this.props
    
        const routeChangeStartHandler = () => {
          this.setState(() => ({
            isRouteChanging: true,
            loadingKey: uuidv4().substr(0, 8),
          }))
        }
    
        const routeChangeEndHandler = () => {
          this.setState(() => ({
            isRouteChanging: false,
          }))
        }
    
        router.events.on('routeChangeStart', routeChangeStartHandler)
        router.events.on('routeChangeComplete', routeChangeEndHandler)
        router.events.on('routeChangeError', routeChangeEndHandler)
      }*/
    render(){
        const {Component, pageProps, apollo} = this.props;
        return (
          
            <ApolloProvider client={apollo}>
            <Page>
                {/*<Loading {...this.state}/> */}
                <Component {...pageProps}/>
            </Page>
            </ApolloProvider>
           
        )
    }
}

export default withData(MyApp);