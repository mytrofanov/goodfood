import React, {useState} from 'react';
import styles from './Cards.module.css';
import SingleCard from "../../Components/singleCard";
import SpinnerComponent from "../../Components/spinner";
import {MyVerticallyCenteredModal} from "../../Components/modalBuy";

export function Cards({food, loading, cheapestFood}) {
    const [putInBasket, setPutInBasket] = useState(false);
    const [selectedFoodItem, setSelectedFoodItem] = useState(null)

    return (
        <div className={styles.cardsPage}>
            <div className={styles.cardsBlock}>
                {loading && <SpinnerComponent/>}
                {food.map((food, index) =>
                    <SingleCard key={index + food.name}
                                foodId={index}
                                goodsTypeName={food.category}
                                goodsName={food.name}
                                price={food.price}
                                setPutInBasket={setPutInBasket}
                                setSelectedFoodItem={setSelectedFoodItem}
                    />
                )}
            </div>
            <div className={styles.bottom}>
                <button className={styles.buyCheapest} onClick={() => {
                    setPutInBasket(true)
                    setSelectedFoodItem(cheapestFood)
                }}>
                    <span className={styles.buyCheapestName}>Buy Cheapest</span>
                </button>


                    <MyVerticallyCenteredModal
                        item={food[Number(selectedFoodItem)] }
                        show={putInBasket}
                        onHide={() => setPutInBasket(false)}
                    />


            </div>


        </div>
    );
}
