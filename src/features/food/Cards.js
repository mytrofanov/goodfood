import React from 'react';
import styles from './Cards.module.css';
import SingleCard from "../../Components/singleCard";
import SpinnerComponent from "../../Components/spinner";
import {MyVerticallyCenteredModal} from "../../Components/modalBuy";

export function Cards({food, loading}) {
    const [putInBasket, setPutInBasket] = React.useState(false);

    
    return (
        <div className={styles.cardsPage}>
            <div className={styles.cardsBlock}>
                {loading && <SpinnerComponent/>}
                {food.map(food=>
                    <SingleCard key={food.id + food.name}
                                foodId={food.id}
                                goodsTypeName={food.category}
                                goodsName={food.name}
                                price={food.price}
                                setPutInBasket={setPutInBasket}
                    />
                )}
            </div>
<div className={styles.bottom}>
    <button className={styles.buyCheapest} onClick={() => setPutInBasket(true)}>
        <span className={styles.buyCheapestName}>Buy Cheapest</span>
    </button>

    <MyVerticallyCenteredModal
        show={putInBasket}
        onHide={() => setPutInBasket(false)}
    />
</div>





        </div>
    );
}
