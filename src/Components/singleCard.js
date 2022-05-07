import React from 'react';
import './singleCard.css'
import GoodsTypeName from "./smallComponents/goodsTypeName";
import GoodsName from "./smallComponents/goodsName";
import PriceBlock from "./smallComponents/priceBlock";
import ButtonBuy from "./smallComponents/buttonBuy";

const SingleCard = ({
                        goodsTypeName, goodsName, price, setPutInBasket,
                        foodId, setSelectedFoodItem, selectedFoodItem
                    }) => {
    const actionOnClick = () => {
        setPutInBasket(prev => !prev)
        setSelectedFoodItem(foodId)
    }

    return (
        <div className={'singleCard'}>
            <div className={'contentBlock'}>
                <GoodsTypeName goodsTypeName={goodsTypeName}/>
                <GoodsName goodsName={goodsName}/>
                <div className={'singleCardBottom'}>
                    <PriceBlock price={price}/>
                    <ButtonBuy
                        changebleClass={selectedFoodItem}
                        condition={foodId}
                        actionOnClick={actionOnClick}/>
                </div>

            </div>

        </div>
    );
};

export default SingleCard;
