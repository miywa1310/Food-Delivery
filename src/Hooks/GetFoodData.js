import axios from "axios";

export async function getFoodData(url, dispatch){
    try{
        dispatch({type:"FETCHING_FOODS_DATA"})
        const res=await axios.get(url)
        dispatch({type:"FETCHED_FOODS_DATA", payload:res.data?res.data:[]})
    }catch(err){
        dispatch({type:"FETCHED_FOODS_DATA_ERROR"})
        console.log(err);
    }
}

