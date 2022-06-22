import React from 'react'
import { BookContainer, ServiceBox,BookButton,ServiceBook,ServiceName,ServicePrice, BookBox, InterfaceBox, InterfaceHeading, InterfaceContent, InterfacePets, InterfacePetsImg, ServiceTop, ServiceBody, ServiceDescription, ServicePets, ServicePetImg } from './BookElements'

const Book = () => {

    const [service, setService] = React.useState(null);
    const [test, setTest] = React.useState([1,2,3,4,5,6,7,8,9,10,11,12,13.4,4,5,6,5,4,3,2,1,1]);

    const toggleservice = (s1,s2) => {
        setService({name : s1,description : s2});
    }
  return (
      <BookContainer>
        <InterfaceBox>
          <InterfaceHeading>
            {service ? service.name : 'Service Name'}
          </InterfaceHeading>
          <InterfaceContent>
            {service ? service.description : 'Service Description'}
          </InterfaceContent>
          <InterfacePets>
            <InterfacePetsImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
            <InterfacePetsImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
            <InterfacePetsImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
            <InterfacePetsImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
          </InterfacePets>
        </InterfaceBox>

        <BookBox>
        {test.map((key,index) => {
          return <ServiceBox tabIndex={key} onClick = {()=>toggleservice(key,index)}>
            <ServiceTop>
              <ServiceName>{key}</ServiceName>
              <ServicePrice>{index}</ServicePrice>
            </ServiceTop>

            <ServiceBody>
              <ServiceDescription>sakdjakls ask jdlaksj dklasjdklasjkdlajskldakljdklasdkl</ServiceDescription>
              <ServicePets>
                <ServicePetImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
                <ServicePetImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
                <ServicePetImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
                <ServicePetImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
                <ServicePetImg src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
              </ServicePets>
            </ServiceBody>
            <BookButton>Add to cart</BookButton>
          </ServiceBox>
        }
        )}
        </BookBox>
      </BookContainer>
  )
}

export default Book