import React from 'react'
import Card from 'react-bootstrap/Card'
import './SideCard.css'

function SideCard() {
    return (
        <div>
            <Card.Img variant="top" src="https://i.imgur.com/YdAv1hSm.jpg" />

            <Card bg={'secondary'} style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Text>
                        <strong><p align='center' className='para'>Fossil</p></strong>
                        <p align='center' className='para-below'>Men Black Analogue Watch BQ2365</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SideCard
