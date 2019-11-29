import React, { Fragment } from "react";
import { version, Button } from "antd";
import ButtonAppBar from "./ButtonAppBar";

const About = (props) => {
    console.log(props)
    return (
        <Fragment>
            <div className="App">
                <h1>Please fork this codesandbox to reproduce your issue.</h1>
                <div>Current antd version: {version}</div>
                <div style={{ marginTop: "16px" }}>
                    <Button type="primary">Example button</Button>
                </div>
                {props.title}
            </div>
        </Fragment>
    );
};
export default About;
