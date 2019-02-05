import React, {Fragment} from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((ingKey, index) => {
            if(props.ingredients[ingKey] <= 0) return null;
            return (
                <li key={ingKey + index}>
                    <span style={{textTransform: 'capitalize'}}>{ingKey}</span>:
                    {props.ingredients[ingKey]}
                </li>
            )
        })
        .filter(ing => ing);
    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Fragment>
    );
};

export default orderSummary;