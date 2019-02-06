import React from 'react';
import burgerMenu from '../../../../assets/images/burger-menu-icon.svg';
import classes from './DrawerToggle.module.css';

const brawerToggle = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.closed}>
            <div />
        </div>
    );
};

export default brawerToggle;