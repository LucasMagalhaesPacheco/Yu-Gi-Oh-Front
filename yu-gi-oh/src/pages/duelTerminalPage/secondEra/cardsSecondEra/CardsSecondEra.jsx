import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../../../constants/BaseUrl'
import { CartsContainer, ImageCart, MainContainer } from './styled'
import { goToDetails } from '../../../../routes/coordinator'
import axios from 'axios'

const CardsSecondEra = () => {
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

export default CardsSecondEra