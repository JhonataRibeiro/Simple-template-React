import React from "react";
import React-dom from "react-dom";
import { IndexRoute, Route } from 'react-router';
import App from "./container/App"

export default () => {
	return(
		<Route path="/" component={ App }>
			<IndexRoute component={ App }/>
		</Route>
	)
}