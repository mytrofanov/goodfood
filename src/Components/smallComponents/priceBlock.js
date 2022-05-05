import React from 'react';
import styles from "../singleCard.module.css";

const PriceBlock = ({price}) => {
    return (
        <div className={styles.priceBlock}>
            <div className={styles.dollar}>
                $
            </div>
            <div className={styles.price}>
                {price}
            </div>
        </div>
    );
};

export default PriceBlock;
