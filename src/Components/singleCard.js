import React, {useId} from 'react';
import styles from './singleCard.module.css'
import basket from './../img/shopping-bag.svg'
import SpinnerComponent from "./spinner";

const SingleCard = ({goodsTypeName, goodsName, price,setPutInBasket, foodId}) => {
    const id = useId()


    return (
        <div className={styles.singleCard} key={id+goodsName}>
            <div className={styles.contentBlock}  >
                <div className={styles.goodsTypeName}>
                    {!goodsTypeName ? <SpinnerComponent/> :  goodsTypeName}
                </div>
                <div className={styles.goodsName}>
                    {goodsName}
                </div>
                <div className={styles.priceBlock}>
                    <div className={styles.dollar}>
                        $
                    </div>
                    <div className={styles.price}>
                        {price}
                    </div>
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
