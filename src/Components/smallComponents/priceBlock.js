import React from 'react';
import  "../singleCard.css";

const PriceBlock = ({price}) => {
    return (
        <div className={'priceBlock'}>
            <div className={'dollar'}>
                $
            </div>
            <div className={'price'}>
                {price}
            </div>
        </div>
    );
};

export default PriceBlock;
