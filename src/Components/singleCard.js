import React from 'react';
import styles from './singleCard.module.css'
import basket from './../img/shopping-bag.svg'
import GoodsTypeName from "./smallComponents/goodsTypeName";
import GoodsName from "./smallComponents/goodsName";
import PriceBlock from "./smallComponents/priceBlock";

const SingleCard = ({goodsTypeName, goodsName, price,setPutInBasket, foodId, setSelectedFoodItem}) => {

    return (
        <div className={styles.singleCard}>
            <div className={styles.contentBlock}>
                <GoodsTypeName goodsTypeName={goodsTypeName}/>
                <GoodsName goodsName={goodsName}/>
                <div className={styles.singleCardBottom}>
                    <PriceBlock price={price}/>
                    <div className={styles.basketBlock}
                         onClick={()=>{
                             setPutInBasket(prev=>!prev)
                             setSelectedFoodItem(foodId)
                         }}>
                        <img src={basket} alt="Basket image" className={styles.basketImage}/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SingleCard;
