import React from 'react'
import { BookContainer, ServiceBox,BookButton,ServiceBook,ServiceName,ServicePrice, BookBox, DetailsBox, DetailsHeading, DetailsContent, DetailsPets, DetailsPetsImg } from './BookElements'

const Book = () => {

    const [service, setService] = React.useState(null);

    const toggleservice = (s) => {
        setService({name : 'woses',description : 'stedi'});
    }
  return (
    <div>
      <BookContainer>
        <BookBox>
        <ServiceBox tabIndex='1'>
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
            <BookButton onClick={(s)=>toggleservice(s)}>View</BookButton>
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
        <ServiceBox>
          <ServiceName>Service Name</ServiceName>
          <ServicePrice>Service Price</ServicePrice>
          <ServiceBook>
            <BookButton onClick={(s)=>toggleservice(s)}>View</BookButton>
          </ServiceBook>
        </ServiceBox>
        
        </BookBox>

        <DetailsBox>
          <DetailsHeading>
            {service ? service.name : 'Service Name'}
          </DetailsHeading>
          <DetailsContent>
            {service ? service.description : 'Service Description'}
          </DetailsContent>
          <DetailsPets>
            <DetailsPetsImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
            <DetailsPetsImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
            <DetailsPetsImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
            <DetailsPetsImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
          </DetailsPets>
        </DetailsBox>
      </BookContainer>
    </div>
  )
}

export default Book