import {Counter} from "./features/counter/Counter";
import {Food} from "./features/food/Food";
import {fetchFoodFromServer} from "./features/food/foodSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";


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
        <div>
            {loading && <div>Loading ...</div>}
            <Food/>
        </div>
    );
}

export default App;
