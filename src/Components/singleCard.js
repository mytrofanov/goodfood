import React, {useId} from 'react';
import styles from './singleCard.module.css'
import basket from './../img/shopping-bag.svg'
import SpinnerComponent from "./spinner";
import GoodsTypeName from "./smallComponents/goodsTypeName";
import GoodsName from "./smallComponents/goodsName";
import PriceBlock from "./smallComponents/priceBlock";

const SingleCard = ({goodsTypeName, goodsName, price,setPutInBasket, foodId}) => {
    const id = useId()


    return (
        <div className={styles.singleCard} key={id+goodsName}>
            <div className={styles.contentBlock}  >
                <GoodsTypeName goodsTypeName={goodsTypeName}/>
                <GoodsName goodsName={goodsName}/>
                <div className={styles.singleCardBottom}>
                    <PriceBlock price={price}/>
                    <div className={styles.basketBlock}
                         onClick={()=>{setPutInBasket(true)}}>
                        <img src={basket} alt="Basket image" className={styles.basketImage}/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SingleCard;
