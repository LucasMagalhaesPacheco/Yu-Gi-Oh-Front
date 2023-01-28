import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Body, CartsContainer, ImageCart, MainContainer } from './styled'
import { BASE_URL } from '../../../../constants/BaseUrl'


const IceBarrier = () => {
  const [cartList, setCartList] = useState([])


  const getAllCarts = () => {
    axios.get(`${BASE_URL}&archetype=Ice%20Barrier`)
    .then((response) => {
      setCartList(response.data.data)
      console.log(response.data.data)
     
    })
    .catch((err) => {
      alert(err.response.message)
      console.log(err)
    })
  }

  

  useEffect(() => {
    getAllCarts()

    
  }, [])

  const IceBarrierCarts = cartList && cartList.map((carts) => {
   
    const IceBarrierImages = carts.card_images && carts.card_images.map((img) => {
      return img.image_url
    })
    
    return (
      <div key={carts.id}>
        <ImageCart  src={IceBarrierImages} alt={carts.name}/>
      </div>
    )
  })

  return (

    <MainContainer>
    <CartsContainer>
    {IceBarrierCarts}
    </CartsContainer>
    </MainContainer>
    
  )
}

export default IceBarrier