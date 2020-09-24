import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Result(props) {
    const title = queryString.parse(props.location.search).title;
    const [animeList, setAnimeList] = useState([]);
    
    useEffect(() => {
        const urlParams = queryString.parse(props.location.search);
        const fetchData = async () => {
            const response = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${urlParams.title}`);
            const fetchedData = await response.json();
            setAnimeList(fetchedData.data);
        }

        fetchData();
    }, [props]);


    return(
        <Container>
            <h1> Search Results for: "{title}" </h1>
            <Row>
                {animeList.map((anime) => (
                <Link to={{pathname: "/details", state: anime}} key={ anime.id }>
                    <Col className="p-3">
                        <Card style={{ width: '18rem' }} bg="light">
                        <Card.Img variant="top" src={ anime.attributes.posterImage.small } />
                        <Card.Body>
                            <Card.Text>{ anime.attributes.canonicalTitle }</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Link>
                ))}
                </Row>
        </Container>
    )
}

export default Result;