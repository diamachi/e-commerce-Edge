import React from 'react'
import Card from 'react-bootstrap/Card'
import './SideCard.css'

function SideCard() {
    return (
        <div class="card">
            <Card bg={'secondary'} style={{ width: '35rem' }}>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SideCard
