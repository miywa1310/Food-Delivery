import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../context/MainContexts'
import { getFoodData } from '../../Hooks/GetFoodData'
import FoodItem from './FoodItem'

const MenuLists = ({ category }) => {
    const { state, dispatch } = useContext(MainContext)
    const url = "https://delivery-data-base.onrender.com/food_list"

    useEffect(() => {
        getFoodData(url, dispatch)
    }, [])

    return (
        <div className="mb-[30px] flex justify-between  flex-col gap-[20px] ">
            <h2 className="text-[26px] mb-[20px]">Top dishes near you</h2>
            <div className="cards flex flex-col items-center sm:grid gap-[20px] justify-center ">
                {
                    state.loadingFoods?
                        [1, 2, 3, 4].map((item, index) => (
                            <FoodItem key={index} />
                        )) :
                        state.foodList.map((item, index) => {
                            if (category === "All" || category === item.category) {
                                return <FoodItem key={index} item={item} />
                            }
                        })
                }

            </div>
        </div>
    )
}

export default MenuLists