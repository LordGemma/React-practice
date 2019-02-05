import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total price: {props.price.toFixed(1)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.modalClosed} type='Danger'>Cancel</Button>
            <Button clicked={() => {
                    props.purchaseContinue();
                    props.modalClosed();
                }}
                type='Success'>Continue</Button>
        </Fragment>
    );
};

export default orderSummary;