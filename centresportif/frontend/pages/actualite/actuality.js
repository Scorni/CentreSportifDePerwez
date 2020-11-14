import React from 'react';
import Actuality from '../../components/actualite/Actuality'

const actuality = props => {
    
    return (
        <div>
            <Actuality page={parseFloat(props.query.page) || 1} />
        </div>
    );
};


export default actuality;