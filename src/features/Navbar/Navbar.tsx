import React from 'react';
import {useNavigate} from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className={"navbar"}>
            <div className={"links"}>
                <div className={"coollink"} onClick={() => navigate("/")}>ProgressBar</div>
                <div className={"coollink"} onClick={() => navigate("/table")}>Table</div>
            </div>
        </div>
    );
};

export default Navbar;