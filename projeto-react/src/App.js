import Cart from './Cart/Cart'
import Filters from './Filters/Filters'
import Navbar from './Nav/Nav'
import Banner from './Banner/Banner'
import Order from './Order/Order'
import products from './products.json'
import { useState } from 'react'
import { GlobalStyled, ContainerProducts } from "./GlobalStyled";
import ProductCard from './ProductCard/ProductCard'

function App() {

  const [product] = useState(products)
  const [screen, setScreen] = useState("Home")
  const [name, setName] = useState("")
  const [minPrice, setMinPrice] = useState(-Infinity)
  const [maxPrice, setMaxPrice] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("title")
  const [order, setOrder] = useState("asc")
  const [cartList, setCartList] = useState([])
  
  const goToCart = () => {
    setScreen("Cart")
  }

  const goToHome = () => {
    setScreen("Home")
  }

  const addCart = (product) => {
    const newItem = cartList.find(selectedProduct => selectedProduct.id === product.id)
    if(newItem === undefined) {
      setCartList([...cartList, {...product, amount: 1}])
    } else {
      const newCart = cartList.map((item) => {
        if(item.id === product.id) {
          return {
            ...newItem, amount:newItem.amount+1
          }
        } else {
          return item
        }
      })
      setCartList(newCart)
    }
    }

    const deleteProductToCart = (product) => {
      const productToRemove = cartList.find((item) => item.id === product.id)
      if(productToRemove.amount > 1){
        const newCart = cartList.map((item) => {
          if(item.id === product.id) {
            return {
              ...productToRemove, amount:productToRemove.amount-1
            }
          } else {
            return item
          }
        })

        setCartList(newCart)
      } else {
        const newCart = cartList.filter((item) => {
          return item.id !== product.id
        })
        setCartList(newCart)
      }
    }
    
/*     const addArrayValue = () => {
      const valores = cartList.map((item) => {
        return item.valor
      })
      console.log(valores)
    } */

  switch (screen) {
    case "Home":
      return (
        <div>
          <GlobalStyled/>
          <Navbar goToCart={goToCart}/>
          <Banner/>
          <Filters 
            name={name} 
            setName={setName}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
          <Order
            sortingParameter={sortingParameter}
            setSortingParameter={setSortingParameter}
            order={order}
            setOrder={setOrder}
            product={product}
          />
          <ContainerProducts>
            {product
            .filter((trip) => {
              return trip.nome.includes(name)
            })
            .filter((trip) => {
              return trip.valor >= minPrice
            })
            .filter((trip) => {
              return trip.valor <= maxPrice
            })
            .sort((currentValue, nextValue) => {
              switch(sortingParameter) {
                case "price":
                  return currentValue.valor - nextValue.valor
                default:
                  return currentValue.nome.localeCompare(nextValue.nome)
              }
            })
            .sort(() => {
              if(order === "asc"){
                return 0
              } else {
                return -1
              }
            })
            .map((trip) => {
              return <ProductCard 
              trip={trip} 
              key={trip.id} 
              addCart={addCart} 
              product={product}/>
            })
            }

          </ContainerProducts>
        </div>
      )
    
    case "Cart":
      return (
        <div>
          <GlobalStyled/>
          <Navbar/>
          <Cart goToHome={goToHome} cartList={cartList} deleteProductToCart={deleteProductToCart}/>
        </div>
      )
    
    default:
        return "Página não encontrada"
  }

}

export default App;
