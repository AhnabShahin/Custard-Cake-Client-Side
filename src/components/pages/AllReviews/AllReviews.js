import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import axios from 'axios';
import './AllReviews.css'
import { AiFillStar } from 'react-icons/ai';



const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const getReviews = async () => {
            await axios.get("https://custard-cake-backend-api.herokuapp.com/reviews")
                .then(res => {
                    setReviews(res.data);
                });
        };
        getReviews();
    }, []);
    return (
        <div className="featureProductsSection">
            <Container>
                <div className="title-contain">
                    <h2>Buyer`s Reviews</h2>
                    <p>All modern weaponts can appreciate our broad services akshay handge pharetra, eratd fermentum feugiat, gun are best velit mauris aks egestasut aliquam.</p>
                </div>
                <Row className="mt-5">
                    {reviews.map(e => (
                        <Col md={12} key={e._id} lg={6}>
                            <div className="reviewCard" >
                                <img className="w-50" alt="" src={e.image} /> 
                                <div className="d-flex flex-column">
                                    <Card.Body>
                                        <Card.Title className="cardTitle">{e.reviewAbout}</Card.Title>
                                        <Card.Text className="cardDisciption">
                                         {e.title}
                                        </Card.Text>
                                        <Card.Text className="cardPrice">
                                            <span> Shahin Alam</span>
                                        </Card.Text>
                                        <Card.Text className="cardPrice">
                                            { Array.apply(null, {length: parseInt(e.rating)}).map(()=>(
                                                <AiFillStar></AiFillStar>
                                            ))}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="button-holder">
                                        <button className="review-cart-left-button"><BsFillCalendarCheckFill />{e.addedOn}</button>
                                        <button className="review-cart-right-button" onClick={() => (history.push(`/review-details/${e._id}`))}> Read More</button>
                                    </Card.Footer>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <div className="d-flex justify-content-center mt-5">
                    <button onClick={() => (history.push('/reviews'))} className="main-button"><span>Explore More</span></button>
                </div>
            </Container>
        </div>
    );
};

export default AllReviews;