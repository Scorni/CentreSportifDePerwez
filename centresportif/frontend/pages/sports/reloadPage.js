import React,{useEffect} from "react";
import { useRouter } from 'next/router'


const reloadPage = props => {
    const router = useRouter();
    function getUrlParameter(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      let results = regex.exec(window.location.search);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    useEffect(() => {
        if (window.performance) {
          if (performance.navigation.type == 1 ) {
            router.push(getUrlParameter('link'))
            
          } 
        }
      })
      return(<p>reloading...</p>)
}
export default reloadPage;