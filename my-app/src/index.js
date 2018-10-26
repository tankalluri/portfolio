import React from 'react';
import ReactDOM from 'react-dom';

// import CSS Files
import "./css/bootstrap.min.css";
import "./css/styles.css";

// import Custom Modules
import App from "./components/App";


const rootNode = document.getElementById("root");

ReactDOM.render(<App />, rootNode);
