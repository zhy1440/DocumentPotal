import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Demo from "./view/Demo";
import './i18n';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


export default function App() {
    return <Demo></Demo>;
}
