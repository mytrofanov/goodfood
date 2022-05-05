import React from 'react';
import styles from './singleCard.module.css'
import basket from './../img/shopping-bag.svg'

const SingleCard = () => {
    return (
        <div className={styles.singleCard}>
            <div className={styles.contentBlock}>
                <div className={styles.goodsTypeName}>DRINKS</div>
                <div className={styles.goodsName}>Orange Juice</div>
                <div className={styles.priceBlock}>
                    <div className={styles.dollar}>
                    $
                    </div>
                    <div className={styles.price}>
                        14.99
                    </div>
                    <div className={styles.basketBlock}>
                        <img src={basket} alt="Basket image" className={styles.basketImage}/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleCard;
