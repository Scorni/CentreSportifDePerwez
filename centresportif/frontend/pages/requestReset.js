import React from 'react';
import Reset from '../components/common/Reset'
import {HeadGenerator} from '../components/sports/category/generator';

const requestReset = props => (

        <div>
            <HeadGenerator title={"Nouveau mot de passe"} />
            <Reset resetToken={props.query.resetToken}/>
        </div>
   
);

export default requestReset;