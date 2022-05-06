import React, {useState} from 'react';
import styles from './Cards.module.css';
import SingleCard from "../../Components/singleCard";
import SpinnerComponent from "../../Components/spinner";
import Modal from "../../Components/modal";
import GoodsTypeName from "../../Components/smallComponents/goodsTypeName";
import GoodsName from "../../Components/smallComponents/goodsName";
import PriceBlock from "../../Components/smallComponents/priceBlock";
import Form from "../../Components/form";

export function Cards({food, loading, cheapestFood}) {
    const [putInBasket, setPutInBasket] = useState(false);
    const [selectedFoodItem, setSelectedFoodItem] = useState(null)

    const category = food[selectedFoodItem] === undefined ? 'Loading...' : food[selectedFoodItem].category
    const name = food[selectedFoodItem] === undefined ? 'Loading...' : food[selectedFoodItem].name
    const price = food[selectedFoodItem] === undefined ? 'Loading...' : food[selectedFoodItem].price


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

                <Modal active={putInBasket} setActive={setPutInBasket}>
                    <div className={styles.goodsTitleBlock}>
                        <GoodsTypeName goodsTypeName={category}/>
                        <GoodsName goodsName={name}/>
                        <div className={styles.centeredPrice}>
                            <PriceBlock price={price}/>
                        </div>
                        <Form
                            setActive={setPutInBasket}
                            category={category}
                            foodName={name}
                            price={price}
                        />
                    </div>
                </Modal>

                {/*<MyVerticallyCenteredModal*/}
                {/*    item={food[Number(selectedFoodItem)] }*/}
                {/*    show={putInBasket}*/}
                {/*    onHide={() => setPutInBasket(false)}*/}
                {/*/>*/}


            </div>


        </div>
    );
}
