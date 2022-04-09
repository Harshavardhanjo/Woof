import { Container,Icon,IconTab,IconTabSelected,Name,Row1,Row2 } from "./PetsElements";
import {useEffect,useState} from 'react';
import {useStateValue} from '../../StateProvider'
import {FaBeer} from 'react-icons/fa';
import {db,firebase} from '../../Firebase'
import React from 'react';
import loading from '../../img/loading.gif';


const Pets = () => {
  const [{pet}, dispatch] = useStateValue();
  const [selected, setSelected] = useState('');
  const [pets, setPets] = useState([]);
  const [petName, setPetName] = useState([]);

  const handleClick = (e,val) => {
    setSelected(val);
    console.log(val);
    dispatch({
      type : "SET_PET",
      pet : val
    })
    localStorage.setItem('pet',val);
  };

  async function getPetImages() {
    let petimages = null;
    setPets([]);
    setPetName([]);
    petimages = await db.collection('Images').doc('pets').get()
    let data = petimages.data();
    var keys = Object.keys(data);
    console.log('getPetImages',data);
    Object.keys(data).map(function(key,index) {
      setPets(prevState => [...prevState, data[key]])
      setPetName(prevState => [...prevState, key])
    })
    dispatch({
      type : "SET_PETS",
      all_pets : keys,
    })
    localStorage.setItem('all_pets',JSON.stringify(keys));
  }

  useEffect(() => {
    getPetImages();
  }, []);


  return <div className="Pets">
    <Container>
      <Row1>
        {/* {pets != [] ? pets.map((pet,index) => {
          return <div>
            <IconTab key={index} onClick={(e) => handleClick(e,petName[index])}>
              <Icon src={pets[index]}/>
              <Name>{petName[index]}</Name>
          </IconTab> </div>
        }) : <Icon src={loading}/>} */}

        

        {pets != [] ? pets.map((pet,index) => {
          return <div>
          {selected == petName[index] ? <IconTabSelected key={index} onClick={(e) => handleClick(e,petName[index])}>
            <Icon src={pets[index]}/>
            <Name>{petName[index]}</Name>
          </IconTabSelected> : <IconTab key={index} onClick={(e) => handleClick(e,petName[index])}>
          {console.log('inside',petName[index])}
            <Icon src={pets[index]}/>
            <Name>{petName[index]}</Name>
          </IconTab>}
        </div>}) : <Icon src={loading}/>}
      </Row1>
    </Container>
  </div>;
};

export default Pets;

