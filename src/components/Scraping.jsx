import axios from "axios"
import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel';

export default function Scraping() {
    const [ links, setLinks ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/')
        .then((response) => {
            console.log(response.data)
            setLinks(response.data)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [])

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
            <Carousel className="custom-carousel" style={{ width: '800px' }}>
                {links.map((item, index) => (
                    <Carousel.Item>
                        <div key={index}>
                            <a href={item[0]} classNameName="carousel-item">
                                <img src={item[1]} alt="" classNameName="d-block w-100" />
                            </a>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            </div>
            
        </>
    )
}