import React from 'react';
import  './singleCard.css'
import GoodsTypeName from "./smallComponents/goodsTypeName";
import GoodsName from "./smallComponents/goodsName";
import PriceBlock from "./smallComponents/priceBlock";

const SingleCard = ({goodsTypeName, goodsName, price,setPutInBasket,
                        foodId, setSelectedFoodItem, selectedFoodItem}) => {

    return (
        <div className={'singleCard'}>
            <div className={'contentBlock'}>
                <GoodsTypeName goodsTypeName={goodsTypeName}/>
                <GoodsName goodsName={goodsName}/>
                <div className={'singleCardBottom'}>
                    <PriceBlock price={price}/>
                    <button className={selectedFoodItem===foodId ? 'basketBlock active' : 'basketBlock' }
                         onClick={()=>{
                             setPutInBasket(prev=>!prev)
                             setSelectedFoodItem(foodId)
                         }}>
                        BUY
                        {/*<img src={basket} alt="Basket image" className={styles.basketImage}/>*/}
                    </button>
                </div>

            </div>

        </div>
    );
};

export default SingleCard;
