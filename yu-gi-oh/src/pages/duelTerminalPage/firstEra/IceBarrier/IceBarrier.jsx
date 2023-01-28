import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Body, MainContainer } from './styled'
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
      <MainContainer key={carts.id}>
        <img  src={IceBarrierImages} alt={carts.name}/>
      </MainContainer>
    )
  })

  return (
    <Body>
    {IceBarrierCarts}
    </Body>
  )
}

export default IceBarrier