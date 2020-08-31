import App, {Container} from 'next/app';
import Page from '../components/Page';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/static/style.css';
import DateFnsUtils from '@date-io/date-fns';

import Loading from '../components/common/ProgressBar';
import uuidv4 from 'uuid/v4'
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
    
        return { pageProps }
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
          <Container>
            <ApolloProvider client={apollo}>
            <Page>
                {/*<Loading {...this.state}/> */}
                <Component {...pageProps}/>
            </Page>
            </ApolloProvider>
            </Container>
        )
    }
}

export default withData(MyApp);