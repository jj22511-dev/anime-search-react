import React from 'react';
import { Card, Button, Container, Badge } from 'react-bootstrap';


function Details({ location }) {
    let state = location.state;
    let { attributes } = state;
    console.log(attributes)
    return(
        <Container>
            <div className="pt-5">
                <Card>
                    <Card.Header className="text-capitalize">
                    <Badge pill variant="primary">{ state.type }</Badge> {' '}
                    <Badge pill variant="primary">{ attributes.subtype }</Badge> {' '}
                    <Badge pill variant="success">{ attributes.status }</Badge> {' '}
                    </Card.Header>
                        <Card.Img src={ attributes.coverImage?.small} />
                        <Card.Body className="text-center">
                            <Card.Title className="text-uppercase">{ attributes.canonicalTitle }</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Subtitle</Card.Subtitle>
                            <Card.Text>{ attributes.synopsis }</Card.Text>
                        </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Details;