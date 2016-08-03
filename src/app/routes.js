import React from "react";
import React-dom from "react-dom";
import { IndexRoute, Route } from 'react-router';
import App from "./app"

export default () => {
	return(
		<Route path="/" component={ App }>
		</Route>
	)
}