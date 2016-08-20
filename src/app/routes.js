import React from "react";
import ReactDom from "react-dom";
import { Route, IndexRoute } from 'react-router';
import { App, Home } from "./container"

export default () => {
	return(
		<Route path="/" component={ App }>
		    <IndexRoute component={ Home }/>
			<Route path='/home'/>
		</Route>
	)
}