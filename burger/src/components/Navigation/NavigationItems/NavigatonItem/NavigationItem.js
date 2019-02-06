import React from 'react';
import classes from './NavigationItem.module.css'

const navigationItem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a 
                href={props.link} 
                title={props.children}
                className={props.active ? classes.active : null}>{props.children}</a>
        </li>
    );
};

export default navigationItem;