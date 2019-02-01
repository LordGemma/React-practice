import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<h1>Text</h1>
					<BurgerBuilder />s
				</Layout>
			</div>
		);
	}
}

export default App;