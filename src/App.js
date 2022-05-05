import {Cards} from "./features/food/Cards";
import {fetchFoodFromServer, setCheapestFood} from "./features/food/foodSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from './App.module.css'

function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const food = useSelector(state => state.foodStore.food)
    const cheapestFood = useSelector(state => state.foodStore.cheapestFood)
    function findCheapestGoods() {
        food.forEach((foodItem, index)=>{
            if (!cheapestFood) {dispatch(setCheapestFood(index))}
            if (cheapestFood > foodItem.price) {dispatch(setCheapestFood(index))}
        })
    }


    const startApp = ()=> {
        dispatch(fetchFoodFromServer())
    }

    useEffect(()=>{
        if (food.length < 1) {
            setLoading(true)
            startApp()
        }
    },[])

    useEffect(()=>{
        if (food.length > 1) {
            setLoading(false)
            findCheapestGoods()
        }
        console.log('cheapestFood: ', cheapestFood)
    },[food,cheapestFood])




    return (
        <div className={styles.app}>
             <Cards food={food} loading={loading} cheapestFood={cheapestFood}/>

        </div>
    );
}

export default App;
