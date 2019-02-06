import React from 'react';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <Logo />
            <Navigation />
        </div>
    );
};

export default sideDrawer;