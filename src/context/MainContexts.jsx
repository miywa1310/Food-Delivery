import { createContext } from "react";


export const MainContext = createContext(null)


// const MainContexts = (props) => {
//     const [cartItems, setCartItems] = useState({});
//     const [page, setpage] = useState("")

//     const addToCart = (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
//         } else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//         }
//     }

//     const deleteToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//     }
//     const TotalCartAmount = () => {
//         let totalAmount = 0
//         for (let item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = food_list.find(product => product._id === item)
//                 totalAmount += itemInfo.price * cartItems[item]
//             }
//         }
//         return totalAmount
//     }

//     useEffect(() => {

//     }, [cartItems])

//     const contextValue = {
//         food_list,
//         page, setpage,
//         cartItems,
//         setCartItems,
//         addToCart,
//         deleteToCart,
//         TotalCartAmount
//     }
//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }
