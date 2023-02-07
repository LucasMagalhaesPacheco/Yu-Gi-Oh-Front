import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../../constants/BaseUrl'
import { goToDetails } from '../../../routes/coordinator'
import { CartsContainer, ImageCart, MainContainer } from './styled'

const BrandedCards = () => {
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
  
      return (
        <div key={cards.id}>
          <ImageCart src={cards.card_images[0].image_url_cropped}  alt={cards.name} onClick={() => goToDetails(navigate, cards.id)}/>
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

export default BrandedCards