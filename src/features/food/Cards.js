import React, {useId} from 'react';
import styles from './Cards.module.css';
import SingleCard from "../../Components/singleCard";

export function Cards({food}) {
    const id = useId()

    return (
        <div className={styles.cardsPage}>
            <div className={styles.cardsBlock}>
                {food.map(index=>
                    <SingleCard id={id+index}
                                goodsTypeName={food.category}
                                goodsName={food.name}
                                price={food.price}/>
                )}


            </div>


        </div>
    );
}
