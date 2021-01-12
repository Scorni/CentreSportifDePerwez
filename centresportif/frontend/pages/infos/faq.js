import React from 'react';
import Faq from '../../components/infos/Faq'

const faq = props => {
    
    return (
        <div>
            <Faq page={parseFloat(props.query.page) || 1} />
        </div>
    );
};


export default faq;