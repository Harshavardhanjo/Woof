import React from 'react'
import { BookContainer, ServiceBox,BookButton,ServiceBook,ServiceName,ServicePrice } from './BookElements'

const Book = () => {
  return (
    <div>
      <BookContainer>
        <ServiceBox>
          <ServiceName>Service Name</ServiceName>
          <ServicePrice>Service Price</ServicePrice>
          <ServiceBook>
            <BookButton>Book</BookButton>
          </ServiceBook>
        </ServiceBox>
        <ServiceBox>
          <ServiceName>Service Name</ServiceName>
          <ServicePrice>Service Price</ServicePrice>
          <ServiceBook>
            <BookButton>Book</BookButton>
          </ServiceBook>
        </ServiceBox>
        <ServiceBox>
          <ServiceName>Service Name</ServiceName>
          <ServicePrice>Service Price</ServicePrice>
          <ServiceBook>
            <BookButton>Book</BookButton>
          </ServiceBook>
        </ServiceBox>
      </BookContainer>
    </div>
  )
}

export default Book