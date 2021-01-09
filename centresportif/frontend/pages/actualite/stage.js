import React from 'react';
import Stage from '../../components/actualite/Stage'

const stage = props => {
    
    return (
        <div>
            <Stage page={parseFloat(props.query.page) || 1} />
        </div>
    );
};


export default stage;