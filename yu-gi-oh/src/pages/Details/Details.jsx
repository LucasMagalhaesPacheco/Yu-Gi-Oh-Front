import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/BaseUrl'
import { CardSection, CardText, H1, ImgCard, MainContainerCards } from './Styled'

const Details = () => {
    const params = useParams()
    const [card, setCard] = useState([])

    const getCart = () => {
        axios.get(`${BASE_URL}&id=${params.id}`)
            .then((response) => {
                setCard(response.data.data)
                // console.log(response.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    useEffect(() => {
        getCart()
    }, [])

    const cardMap = card && card.map((item) => {

     const img = item.card_images && item.card_images.map((img) => {
        return img.image_url
     })

     return (
        <CardSection>
      
         <ImgCard src={img} alt={item.name}/>  
       
       
        </CardSection>
     )
       

    })
 
    


    return (
        <>
            {cardMap}
        </>
    )
}

export default Details