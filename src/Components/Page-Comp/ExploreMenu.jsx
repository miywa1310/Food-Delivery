import axios from "axios"
import { useEffect, useState } from "react"


const ExploreMenu = ({ category, setCategory }) => {
  const [categoryData, setCategoryData] = useState([])
  const [loadingCategory, setLoadingCategory] = useState(false)
  async function getCategory() {
    try {
      setLoadingCategory(true)
      const res = await axios.get("https://delivery-data-base.onrender.com/menuList")
      setCategoryData(res.data)
      setLoadingCategory(false)
    } catch (err) {
      console.log(err);
      setLoadingCategory(true)
    }
  }

  useEffect(() => {
    getCategory()
  }, [])
  return (
    <div className='overflow-x-auto p-[30px]'>
      <ul className='flex justify-between items-center gap-[30px] max-w-max'>
        {
          loadingCategory ?
            [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <li key={item} className='flex flex-col items-center justify-center animate-pulse cursor-pointer'>
                <div className={`bg-gray-100 max-w-[8vw] max-h-[16vh] min-h-[16vh] min-w-[8vw] overflow-cover rounded-full cursor-pointer `} ></div>
                <span className='text-gray-500 animate-pulse'>name...</span>
              </li>
            )) :
            categoryData.map((item, index) => (
              <li key={index} onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className='flex flex-col items-center justify-center cursor-pointer'>
                <img className={`max-w-[100px] min-w-[100px] min-h-[100px] max-h-[100px] overflow-cover rounded-full cursor-pointer ${category == item.menu_name && "active2"}`} src={item.menu_image} alt="" />
                <span className='text-gray-500'>{item.menu_name}</span>
              </li>
            ))}
      </ul>


    </div>
  )
}

export default ExploreMenu