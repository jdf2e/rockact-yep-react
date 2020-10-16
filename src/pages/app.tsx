import * as React from "react";
import * as ReactDOM from "react-dom";

import "./app.scss";

import Welcome from "../components/Welcome";
import {Loading} from "@jdcfe/yep-react";

ReactDOM.render(
    <div className="App">
        <Loading/>
        <Welcome message="Hello World!"/>
    </div>,
    document.getElementById("app") as HTMLElement
);
