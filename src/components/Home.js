import React, { useState } from 'react';
import { Container, Row, InputGroup, FormControl, Button, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import _ from 'lodash';

function Home() {
    const history = useHistory(); // to redirect;
    const $center = { // refactor this to css
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': '80vh'
    }

    // my states
    const [title, setTitle] = useState("");

    function handleChanges(event) {
        setTitle(event.target.value)
    }

    function handleClick(event) {
        event.preventDefault()

        if (!_.isEmpty(title)) {
            history.push(`/result?title=${title}`)
        }
    }

    return(
        <Container>
            <Row style={$center}>
                <Col>
                    <InputGroup size="lg" onChange={handleChanges}>
                        <FormControl placeholder="Search Title" />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={handleClick}>Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;