import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

// import CSS Files
import "./css/bootstrap.min.css";
import "./css/styles.css";

// import Custom Modules
import App from "./components/App";


const rootNode = document.getElementById("root");

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootNode);
