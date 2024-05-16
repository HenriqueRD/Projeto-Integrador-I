import './Home.css'
import Header from "../../components/Header/Header";
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import  axios  from 'axios';
import { Faders, FadersHorizontal, MagnifyingGlass } from '@phosphor-icons/react';

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

export default function Home() {
  const [ pets, setPets ]= useState<PetProps[]>([]);
  const [ city, setCity ] = useState("");
  const [ tag, setTag ] = useState("");

  const getList = async () => {
    const x = await axios.get("http://localhost:8080/pet");
    setPets(x.data);
  }
  useEffect(()=>{
    getList();
  },[]);

  async function handleFindCity() {
    event?.preventDefault();
    if(city.trim() == "") {
      getList()
      return
    }
    await axios.get(`http://localhost:8080/pet/findByCity`, { params: { "query" : city }}).then(x => setPets(x.data));
  }

  async function handleFilterTag() {
    event?.preventDefault();
    if(tag == "") {
      getList()
      return
    }
    await axios.get(`http://localhost:8080/pet/findByTag`, { params: { "query" : tag }}).then(x => setPets(x.data));
  }
  
  return (
    <div id="home">
      <Header />
      <div className="list">
        <div className="listHeader">
         <div className='info'>
          <h2>Animais para doação:</h2>
          <span>{pets.length}</span>
         </div>
          <div className='options'>
            <div className='city'>
              <form onSubmit={handleFindCity}>
                <input value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='Digite o nome da cidade'/>
                <button type='submit'><MagnifyingGlass size={20} />Pesquisar</button>
              </form>
            </div>

            <div className='tag'>
              <form onSubmit={handleFilterTag}>
                <select name="plataforma" value={tag} onChange={e => setTag(e.target.value)}>
                  <option value="">Escolher categoria</option>
                  <option value="1">Macho</option>
                  <option value="2">Fêmea</option>
                  <option value="3">Gato(a)</option>
                  <option value="4">Cachorro(a)</option>
                </select>
                <button type='submit' ><FadersHorizontal size={20} />Filtrar</button>
              </form>
            </div>
          </div>
        </div>
        <div className="listCards">
         {
           pets.map(x => {
            return (
              <Card key={x.id} id={x.id} local={x.localeOwner} imagePet={x.imagePet} name={x.namePet} categories={x.categories}/>
            )
          })
         }
        </div>
      </div>
      <Footer />
    </div>
  )
}