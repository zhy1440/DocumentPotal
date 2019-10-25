import React, { Fragment } from "react";
import { version, Button } from "antd";
import ButtonAppBar from "./ButtonAppBar";

export default function About() {
    return (
        <Fragment>
            <div className="App">
                <h1>Please fork this codesandbox to reproduce your issue.</h1>
                <div>Current antd version: {version}</div>
                <div style={{ marginTop: "16px" }}>
                    <Button type="primary">Example button</Button>
                </div>
            </div>
        </Fragment>
    );
}
