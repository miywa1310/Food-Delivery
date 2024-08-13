
import MenuLists from '../Components/Page-Comp/MenuLists';
import ExploreMenu from '../Components/Page-Comp/ExploreMenu';
import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/MainContexts';
import { getFoodData } from '../Hooks/GetFoodData';

const Menu = () => {

  const [category, setCategory] = useState("All")
  const { state, dispatch } = useContext(MainContext)
  const url = `https://delivery-data-base.onrender.com/food_list`

  useEffect(() => {
    getFoodData(url, dispatch)
  }, [])

  return (
    <div className='w-[90%] lg:w-[85%] mx-auto my-[30px] flex flex-col gap-[20px]  pb-[40px] ' >
      <div className="flex flex-col gap-[20px] text-center ">
        <h2 className='text-[45px] '>Our Menu</h2>
        <p className='text-[16px] text-gray-500'>We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens..</p>
      </div>
      <ExploreMenu category={category} setCategory={setCategory} />
      <MenuLists category={category} />
    </div>
  )
}

export default Menu