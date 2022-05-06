import React from 'react';
import "../singleCard.css";

const GoodsName = ({goodsName}) => {
    return (
        <div className={'goodsName'}>
            {goodsName}
        </div>
    );
};

export default GoodsName;
