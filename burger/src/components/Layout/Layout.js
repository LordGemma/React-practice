import React, {Component} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
	state = {
		sideDrawerVisibility: false
	}

	sideDrawerVisibilityHandler = () => {
		this.setState((prevState) => {
			return {sideDrawerVisibility: !prevState.sideDrawerVisibility}
		})
	}

	render() {
		return (
			<React.Fragment>
				<Toolbar closed={this.sideDrawerVisibilityHandler}/>
				<SideDrawer 
					opened={this.state.sideDrawerVisibility} 
					closed={this.sideDrawerVisibilityHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</React.Fragment>
		);
	}
}

export default Layout;