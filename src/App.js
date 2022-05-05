import {Cards} from "./features/food/Cards";
import {fetchFoodFromServer} from "./features/food/foodSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import styles from './App.module.css'

function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const food = useSelector(state => state.foodStore.food)
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
        if (food.length > 1) {setLoading(false)}
        console.log('App food: ', food)
    },[food])




    return (
        <div className={styles.app}>
            {loading && <div>Loading ...</div>}
            <Cards/>
        </div>
    );
}

export default App;
