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
                navigationItems.map((navigationItem, index) => {
                return ( <NavigationItem 
                            active={navigationItem.active} 
                            link={navigationItem.link}
                            key={navigationItem.link + index}>{navigationItem.title}</NavigationItem>
                    )
                })
            }
        
        </ul>
    );
};

export default navigationItems;