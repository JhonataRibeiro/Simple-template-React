import React from "react";
import ReactDom from "react-dom";
import { Route, IndexRoute } from 'react-router';
import { App } from "./container"

export default () => {
	return(
		<Route path="/" component={App}/>
	)
}