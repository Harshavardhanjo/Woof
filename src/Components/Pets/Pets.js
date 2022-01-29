import { Container,Icon,IconTab,IconTabSelected,Name,Row1,Row2 } from "./PetsElements";
import {useEffect,useState} from 'react';
import {useStateValue} from '../../StateProvider'
import {FaBeer} from 'react-icons/fa';
import React from 'react';
import dog from '../../img/dog.png';
import cat from '../../img/cat.png';
import fish from '../../img/fish.png';
import bird from '../../img/bird.png';
import reptile from '../../img/reptile.png';
import hamster from '../../img/hamster.png';
import cancel from '../../img/cancel.png';

const Pets = () => {
  const [{pet}, dispatch] = useStateValue();
  const [selected, setSelected] = useState('');

  const handleClick = (e,val) => {
    setSelected(val);
    dispatch({
      type : "SET_PET",
      pet : val
    })
  };

  return <div className="Pets">
    <Container>
      <Row1>
        {selected == 'dog' ? <IconTabSelected onClick = {e => handleClick(e,'dog')}>
          <Icon src = {dog} />
          <Name>Dogs</Name>
        </IconTabSelected> : 
        <IconTab onClick={e => handleClick(e,'dog')}>
          <Icon src = {dog} />
          <Name>Dogs</Name>
        </IconTab>}
        {selected == 'cat' ? <IconTabSelected onClick = {e => handleClick(e,'cat')}>
          <Icon src = {cat} />
          <Name>Cats</Name>
        </IconTabSelected> :
        <IconTab onClick={e => handleClick(e,'cat')}>
          <Icon src = {cat} />
          <Name>Cats</Name>
        </IconTab>}
        {selected == 'fish' ? <IconTabSelected onClick = {e => handleClick(e,'fish')}>
          <Icon src = {fish} />
          <Name>Fish</Name>
        </IconTabSelected> :
        <IconTab onClick={e => handleClick(e,'fish')}>
          <Icon src = {fish} />
          <Name>Fish</Name>
        </IconTab>}
        {selected == 'bird' ? <IconTabSelected onClick = {e => handleClick(e,'bird')}>
          <Icon src = {bird} />
          <Name>Birds</Name>
        </IconTabSelected> :
        <IconTab onClick={e => handleClick(e,'bird')}>
          <Icon src = {bird} />
          <Name>Birds</Name>
        </IconTab>}
        {selected == 'reptile' ? <IconTabSelected onClick = {e => handleClick(e,'reptile')}>
          <Icon src = {reptile} />
          <Name>Reptiles</Name>
        </IconTabSelected> :
        <IconTab onClick={e => handleClick(e,'reptile')}>
          <Icon src = {reptile} />
          <Name>Reptiles</Name>
        </IconTab>}
        {selected == 'hamster' ? <IconTabSelected onClick = {e => handleClick(e,'hamster')}>
          <Icon src = {hamster} />
          <Name>Hamsters</Name>
        </IconTabSelected> :
        <IconTab onClick={e => handleClick(e,'hamster')}>
          <Icon src = {hamster} />
          <Name>Hamsters</Name>
        </IconTab>}
        {selected == 'pet' ? <IconTabSelected onClick = {e => handleClick(e,'pet')}>
          <Icon src = {cancel} />
          <Name>Cancel</Name>
        </IconTabSelected> :
        <IconTab onClick={e => handleClick(e,'pet')}>
          <Icon src = {cancel} />
          <Name>Cancel</Name>
        </IconTab>}
      </Row1>
    </Container>
  </div>;
};

export default Pets;

