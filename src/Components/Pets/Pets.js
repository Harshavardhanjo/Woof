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
  };

  async function getPetImages() {
    let petimages = null;
    setPets([]);
    setPetName([]);
    petimages = await db.collection('Images').doc('pets').get()
    let data = petimages.data();
    Object.keys(data).map(function(key,index) {
      setPets(prevState => [...prevState, data[key]])
      setPetName(prevState => [...prevState, key])
    })
  }

  useEffect(() => {
    getPetImages();
  }, []);


  return <div className="Pets">
    <Container>
      <Row1>
        {pets != [] ? pets.map((pet,index) => {
          return <IconTab key={index} onClick={(e) => handleClick(e,petName[index])}>
              <Icon src={pets[index]}/>
              <Name>{petName[index]}</Name>
          </IconTab>
        }) : <Icon src={loading}/>}
        {/* <IconTab>
          <Icon src={loading}/>
        </IconTab> */}
      </Row1>
    </Container>
  </div>;
};

export default Pets;

