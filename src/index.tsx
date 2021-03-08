import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';

const App = () => <h1>React Typescript App: {CONFIG.ENVIRONMENT}</h1>

ReactDOM.render(
	<App />,
  	document.getElementById("root")
);