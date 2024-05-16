import './InfoPet.css'
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface CategoryProps  {
  id: number,
  description: string
}

interface PetProps  {
  id: number,
  namePet: string,
  genderPet:string,
  imagePet: string,
  descriptionPet: string,
  nameOwner: string,
  phoneOwner: string,
  emailOwner: string,
  localeOwner: string,
  categories: CategoryProps[]
}
 

export default function InfoPet() {
  const {id}  = useParams();
  const [ pet, setPet ] = useState<PetProps>()
  const getPet = async () => {
    const x = await axios.get(`http://localhost:8080/pet/${id}`);
    setPet(x.data);
  }

  useEffect(()=>{
    getPet();
  },[]);

  return (
    <div id="infoPet">
      <Header />
      <div className="content">
        <h2>Sobre o pet:</h2>
        <div className="pet">
          <div className="info">
            <p><strong>Nome: </strong>{pet?.namePet}</p>
            <p><strong>Sexo: </strong>{pet?.genderPet}</p>
            <p><strong>Descrição fisica do pet: </strong>{pet?.descriptionPet}</p>
          </div>
          <img src={pet?.imagePet} alt="" />
        </div>

        <h2>Sobre o dono:</h2>
        <div className="info">
          <p><strong>Nome: </strong>{pet?.nameOwner}</p>
          <p><strong>Email: </strong>{pet?.emailOwner}</p>
          <p><strong>Telefone: </strong>{pet?.phoneOwner}</p>
          <p><strong>Local: </strong>{pet?.localeOwner}</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}