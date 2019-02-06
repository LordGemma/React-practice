import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}> 
            <div>Menu</div>
            <Logo />
            <nav>
                <Navigation />
            </nav>
        </header>
    );
};

export default toolbar;