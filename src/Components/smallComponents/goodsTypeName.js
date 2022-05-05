import React from 'react';
import styles from "../singleCard.module.css";
import SpinnerComponent from "../spinner";

const GoodsTypeName = ({goodsTypeName}) => {
    return (
        <div className={styles.goodsTypeName}>
            {!goodsTypeName ? <SpinnerComponent/> :  goodsTypeName}
        </div>
    );
};

export default GoodsTypeName;
