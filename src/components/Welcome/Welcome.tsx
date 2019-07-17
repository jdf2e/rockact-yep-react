import * as React from "react";

import logo from "./logo.svg";
import "./Welcome.scss";
import {Button} from '@jdcfe/yep-react';

const Welcome: React.FunctionComponent<{ message: string }> = props => {
    return (
        <div className="welcome-container">
            <img src={logo}/>
            <Button type="primary">{props.message}</Button>
        </div>
    );
};

export default Welcome;
