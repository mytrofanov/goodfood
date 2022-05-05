import React from 'react';
import styles from "../singleCard.module.css";

const GoodsName = ({goodsName}) => {
    return (
        <div className={styles.goodsName}>
            {goodsName}
        </div>
    );
};

export default GoodsName;
