import React from 'react';
import {useParams} from "react-router-dom";

const TableIdPage = () => {
    const params = useParams()
    return (
        <div>
            <h1>Item ID: {params.id}</h1>
        </div>
    );
};

export default TableIdPage;