import React from 'react'
import Card from 'react-bootstrap/Card'
import './SideCard.css'

function SideCard() {
    return (
        <div class="card border rounded mx-auto">
            <Card bg={'secondary'} style={{ width: '35rem' }}>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SideCard
