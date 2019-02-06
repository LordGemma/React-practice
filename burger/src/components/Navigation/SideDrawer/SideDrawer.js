import React, {Fragment} from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    return (
        <Fragment>
            <Backdrop show={props.opened} clicked={props.closed}/>
            <div className={[classes.SideDrawer, props.opened ? classes.Open : classes.Close].join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                
                <nav>
                    <Navigation />
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;