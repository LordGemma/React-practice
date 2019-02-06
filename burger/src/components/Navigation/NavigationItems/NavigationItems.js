import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigatonItem/NavigationItem';

const navigationItems = (props) => {
    const navigationItems = [
        {link: '/', title: 'Burger Builder', active: true},
        {link: '/', title: 'Checkout', active: false},
    ]
    return (
        <ul className={classes.NavigationItems}>
            {
                navigationItems.map(navigationItem => <NavigationItem active={navigationItem.active} link={navigationItem.link}>{navigationItem.title}</NavigationItem>)
            }
        
        </ul>
    );
};

export default navigationItems;