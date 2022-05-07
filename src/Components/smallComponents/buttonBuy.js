import React from 'react';

const ButtonBuy = ({actionOnClick, children, changebleClass, condition}) => {
    return (
        <button className={changebleClass === condition ? 'basketBlock active' : 'basketBlock'}
                onClick={() => {
                    actionOnClick()
                }}>
            {children}
            BUY
        </button>
    );
};

export default ButtonBuy;
