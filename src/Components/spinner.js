import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const SpinnerComponent = () => {
    return (
        <Spinner animation="grow" size="sm" >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default SpinnerComponent;
