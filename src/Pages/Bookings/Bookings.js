import React from 'react'
import { BookingCardBody, BookingCardHeader, BookingCardDate, BookingHeaderContainer, BookingsCard, BookingsCardHeaderContainer, BookingsHeader, BookingCardBodyText, BookingCardBodyText2, BookingCardBodyBox } from './BookingsElements'
import './Bookings.css'
const Bookings = () => {

  const [body, setBody] = React.useState(false)

  const handleClick = (e) => {
    console.log(e.target.id)
    setBody(!body)
  }
  return (
    <div className='Container'>
        <BookingHeaderContainer>
            <BookingsHeader>Your Bookings</BookingsHeader>
        </BookingHeaderContainer>
            <BookingsCard>
                <BookingsCardHeaderContainer>
                    <BookingCardHeader>Company Name</BookingCardHeader>
                    <BookingCardDate onClick={handleClick} id='1'>Date</BookingCardDate>
                </BookingsCardHeaderContainer>

                <BookingCardBody>
                <BookingCardBodyBox>
                    <BookingCardBodyText>Order Name:</BookingCardBodyText>
                    <BookingCardBodyText2>Aquired</BookingCardBodyText2>
                  </BookingCardBodyBox>
                  <BookingCardBodyBox>
                    <BookingCardBodyText>Order Status:</BookingCardBodyText>
                    <BookingCardBodyText2>Aquired</BookingCardBodyText2>
                  </BookingCardBodyBox>
                  <BookingCardBodyBox>
                    <BookingCardBodyText>Order Total:</BookingCardBodyText>
                    <BookingCardBodyText2>2000</BookingCardBodyText2>
                  </BookingCardBodyBox>
                </BookingCardBody>
            </BookingsCard>

            <BookingsCard>
                <BookingsCardHeaderContainer>
                    <BookingCardHeader>Company Name</BookingCardHeader>
                    <BookingCardDate onClick={handleClick} id='1'>Date</BookingCardDate>
                </BookingsCardHeaderContainer>

                <BookingCardBody>
                <BookingCardBodyBox>
                    <BookingCardBodyText>Order Name:</BookingCardBodyText>
                    <BookingCardBodyText2>Aquired</BookingCardBodyText2>
                  </BookingCardBodyBox>
                  <BookingCardBodyBox>
                    <BookingCardBodyText>Order Status:</BookingCardBodyText>
                    <BookingCardBodyText2>Aquired</BookingCardBodyText2>
                  </BookingCardBodyBox>
                  <BookingCardBodyBox>
                    <BookingCardBodyText>Order Total:</BookingCardBodyText>
                    <BookingCardBodyText2>2000</BookingCardBodyText2>
                  </BookingCardBodyBox>
                </BookingCardBody>
            </BookingsCard>
        
    </div>
  )
}

export default Bookings