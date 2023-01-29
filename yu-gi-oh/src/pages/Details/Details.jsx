import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/BaseUrl'

const Details = () => {
    const navigate = useNavigate()
    const params = useParams()
    const [card, setCard] = useState([])

    const getCart = () => {
        axios.get(`${BASE_URL}&id=${params.id}`)
            .then((response) => {
                setCard(response.data.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getCart()
    }, [])

    


    return (
        <div>Details</div>
    )
}

export default Details