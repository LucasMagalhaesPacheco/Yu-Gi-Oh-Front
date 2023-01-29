import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CartsContainer, ImageCart, MainContainer } from './styled'
import { BASE_URL } from '../../../../constants/BaseUrl'
import { useNavigate, useParams } from 'react-router-dom'
import { goToDetails } from '../../../../routes/coordinator'

const IceBarrier = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [cartList, setCartList] = useState([])


  const getAllCarts = () => {
    
    axios.get(`${BASE_URL}&archetype=${params.name}`)
    console.log(params.name)
      .then((response) => {
        setCartList(response.data.data)
        console.log(response)

      })
      .catch((err) => {
        alert(err.response.data.message)
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
        <ImageCart src={IceBarrierImages}  alt={carts.name} onClick={() => goToDetails(navigate, carts.id)}/>
      </div>
    )
  })

  return (

    <MainContainer>
      <CartsContainer>
        {IceBarrierCarts}

        VBBBBBBBBBBBBBBBB
      </CartsContainer>
    </MainContainer>

  )
}

export default IceBarrier