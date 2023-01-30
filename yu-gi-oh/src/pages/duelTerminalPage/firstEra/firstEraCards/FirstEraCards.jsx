import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CartsContainer, ImageCart, MainContainer } from './styled'
import { BASE_URL } from '../../../../constants/BaseUrl'
import { useNavigate, useParams } from 'react-router-dom'
import { goToDetails } from '../../../../routes/coordinator'

const FirstEraCards = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [cartList, setCartList] = useState([])
  let name = params.name.replace(/\s+/g,"%20")
  

  const getAllCarts = () => {
    
    axios.get(`${BASE_URL}&archetype=${name}`)
      
      .then((response) => {
        setCartList(response.data.data)

      })
      .catch((err) => {
        alert(err.message)
        
      })
  }
  useEffect(() => {
    getAllCarts()
  }, [])

  const totalCards = cartList && cartList.map((cards) => {

    const cardsImg = cards.card_images && cards.card_images.map((img) => {
      return img.image_url
    })

    return (
      <div key={cards.id}>
        <ImageCart src={cardsImg}  alt={cards.name} onClick={() => goToDetails(navigate, cards.id)}/>
      </div>
    )
  })

  return (

    <MainContainer>
      <CartsContainer>
        {totalCards}
      </CartsContainer>
    </MainContainer>

  )
}

export default FirstEraCards