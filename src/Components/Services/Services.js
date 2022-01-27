import { Container,Icon,IconTab,Name,Row1,Row2 } from "./ServicesElements";
import {FaBeer} from 'react-icons/fa';
import {useStateValue} from '../../StateProvider'
import './Services.css'
import React from 'react';
import vet from '../../img/veterinary.png';
import breeding from '../../img/breeding.png';
import medicine from '../../img/medicine.png';
import petfood from '../../img/pet-food.png';
import comb from '../../img/comb.png';
import fishbowl from '../../img/fish-bowl.png';
import toys from '../../img/toys.png';
import trainer from '../../img/trainer.png';
import cage from '../../img/cage.png';
import stylist from '../../img/stylist.png';
import bathing from '../../img/bathing.png';
import adoption from '../../img/adoption.png';
import pebbles from '../../img/pebbles.png';
import animalshelter from '../../img/animal-shelter.png';

const Services = () => {

  const [{pet}, dispatch] = useStateValue();
  return <div className="Services">
    <Container>
      <Row1>
        {pet === 'dog' || pet === 'cat' || pet === 'reptile' || pet === 'bird' || pet === 'hamster' || pet === 'fish' || pet === 'pet' ? <IconTab>
          <Icon src = {vet}/>
          <Name>Veterinarian</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' ? <IconTab>
          <Icon src= {breeding}/>
          <Name>Breeding</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'reptile' || pet === 'bird' || pet === 'hamster' || pet === 'fish' || pet === 'pet' ? <IconTab>
          <Icon src= {medicine}/>
          <Name>Medicines</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'pet' ? <IconTab>
          <Icon src={comb}/>
          <Name>Grooming</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'reptile' || pet === 'bird' || pet === 'hamster' || pet === 'pet' ? <IconTab>
          <Icon src= {toys}/>
          <Name>Toys</Name>
        </IconTab> : null}
        {pet === 'fish' || pet === 'pet' ? <IconTab>
          <Icon src={fishbowl}/>
          <Name>Tank cleaning</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'reptile' || pet === 'bird' || pet === 'hamster' || pet === 'fish' || pet === 'pet' ? <IconTab>
          <Icon src= {petfood}/>
          <Name>Food</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'bird' || pet === 'pet' ? <IconTab>
          <Icon src= {trainer}/>
          <Name>Trainers</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'reptile' || pet === 'bird' || pet === 'hamster' || pet === 'pet' ? <IconTab>
          <Icon src= {cage}/>
          <Name>Cage</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'pet' ? <IconTab>
          <Icon src= {stylist}/>
          <Name>Stylist</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'pet' ? <IconTab>
          <Icon src= {bathing}/>
          <Name>Bathing</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'reptile' || pet === 'bird' || pet === 'hamster' || pet === 'fish' || pet === 'pet' ? <IconTab>
          <Icon src= {adoption}/>
          <Name>Adoption</Name>
        </IconTab> : null}
        {pet === 'reptile' || pet === 'bird' || pet === 'hamster' || pet === 'fish' || pet === 'pet' ? <IconTab>
          <Icon src= {pebbles}/>
          <Name>Decorations</Name>
        </IconTab> : null}
        {pet === 'dog' || pet === 'cat' || pet === 'pet' ? <IconTab>
          <Icon src= {animalshelter}/>
          <Name>Animal Shelter</Name>
        </IconTab> : null}
        


      </Row1>
    </Container>
  </div>;
};

export default Services;

