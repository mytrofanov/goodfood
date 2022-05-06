import React from 'react';
import "../singleCard.css";
import SpinnerComponent from "../spinner";

const GoodsTypeName = ({goodsTypeName}) => {
    return (
        <div className={'goodsTypeName'}>
            {!goodsTypeName ? <SpinnerComponent/> :  goodsTypeName}
        </div>
    );
};

export default GoodsTypeName;
