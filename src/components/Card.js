import React from 'react'
import "./Card.css"
import Card from 'react-bootstrap/Card'


function card() {
    return (
        <Card
            bg={'dark'}
            style={{ width: '18rem' }}
            text={'light'}
        >
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Card Title </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default card