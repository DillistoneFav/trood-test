import React from 'react';
import Props from "../features/Props/Props";
import ProgressBar from "../features/ProgressBar/ProgressBar";


const ProgressbarPage = () => {
    return (
        <div className={"pages"}>
            <h1>No validation there!</h1>
            <Props/>
            <ProgressBar/>
        </div>
    );
};

export default ProgressbarPage;