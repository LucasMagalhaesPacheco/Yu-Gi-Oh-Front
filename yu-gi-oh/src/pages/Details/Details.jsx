import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/BaseUrl'
import { CardSection, ContentDiv, DisplayCard, H1, ImgStyled, MainContainer, Text } from "../Details/Styled"

const Details = () => {
    const params = useParams()
    const [card, setCard] = useState([])

    const getCart = () => {
        axios.get(`${BASE_URL}&id=${params.id}`)
            .then((response) => {
                setCard(response.data.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    useEffect(() => {
        getCart()
    }, [])

    const cardMap = card && card.map((item) => {
        console.log(item.atk)

        const img = item.card_images && item.card_images.map((img) => {
            return img.image_url
        })
        if (item.atk != undefined) {
            return (
                <CardSection key={item.id}>
                <ImgStyled src={img} />
                 <ContentDiv>
                  <H1>{item.name}</H1>
                   <DisplayCard>
                   <li> Arquetipo: {item.archetype}</li>
                  <li> Race: {item.race}</li>
                  <li>Tipo: {item.type}</li>
                  <li>Def: {item.def}</li>
                  <li>atk: {item.atk}</li>
                  <li>atribute: {item.attribute}</li>
                   </DisplayCard>
                  <Text>{item.desc}</Text>
                
                 </ContentDiv>
                </CardSection>
            ) 

        } else {
            return (
                <CardSection key={item.id}>
                <ImgStyled src={img} />
                 <ContentDiv>
                  <H1>{item.name}</H1>
                   <DisplayCard>
                   <li> Arquetipo: {item.archetype}</li>
                  <li> Race: {item.race}</li>
                  <li>Tipo: {item.type}</li>
                   </DisplayCard>
                  <Text>{item.desc}</Text>
                
                 </ContentDiv>
                </CardSection>
            ) 
        }
     


    })




    return (
        <MainContainer>
            {cardMap}
        </MainContainer>


    )
}

export default Details