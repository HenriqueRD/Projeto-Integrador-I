import './CreatePet.css'
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import axios from 'axios';

export default function CreatePet() {

  const [ gender, setGender ] = useState(0);
  const [ pet, setPet ] = useState(0);
  const [ descriptionPet, setDescriptionPet ] = useState("");
  const [ namePet, setNamePet ] = useState("");
  const [ imagePet, setImagePet ] = useState("");

  const [ nameOwner, setNameOwner ] = useState("");
  const [ emailOwner, setEmailOwner ] = useState("");
  const [ phoneOwner, setPhoneOwner ] = useState("");
  const [ localeOwner, setLocaleOwner ] = useState("");


  async function handleCreatePet() {
    event?.preventDefault()
    await axios.post("http://localhost:8080/pet", {
      namePet: namePet,
      genderPet: gender === 1 ? "Macho" : "Fêmea",
      imagePet: imagePet,
      descriptionPet: descriptionPet,
      nameOwner: nameOwner,
      phoneOwner: emailOwner,
      emailOwner: phoneOwner,
      localeOwner: localeOwner,
      categories: [
        {
          id: gender
        },
        {
          id: pet
        }
      ]
    })
    setDescriptionPet("")
    setNamePet("")
    setImagePet("")
    setNameOwner("")
    setEmailOwner("")
    setPhoneOwner("")
    setLocaleOwner("")
    setGender(0)
    setPet(0)

  }

  return (
    <div id="createPet">
      <Header />
      <div className='container'>
        <h2>Cadastrar seu Pet</h2>
        <form onSubmit={handleCreatePet} className='content'>
          <div className='pet'>
            <h3>Informe os dados do Pet</h3>
            <div className="form">
              <div className='input'>
                <label>Nome do Pet:*</label>
                <input required type="text" value={namePet} onChange={e => setNamePet(e.target.value)} placeholder='Ex. Lessi'/>
              </div>
              <div className='input'>
                <label>URL da foto do Pet:*</label>
                <input required type="text" value={imagePet} onChange={e => setImagePet(e.target.value)} placeholder='Ex. https://t0.gstatic.com/licensed-image'/> 
              </div>
              <div className='input'>
                <label>Descrição fisica do pet:*</label>
                <textarea required value={descriptionPet} onChange={e => setDescriptionPet(e.target.value)} placeholder='Ex. Cor: ..., Tamanho: ..., Comportamento: ...'/>
              </div>
              <div className='input'>
                <h4>Selecione as caracteristicas do pet:*</h4>
                <div className='radios'>
                  <div className='div'>
                    <div className='radio'>
                      <input required id="1" name='gender' type="radio" value={1} onChange={e => setGender(parseInt(e.target.value))} />
                      <label htmlFor="1">Macho</label>
                    </div>
                    <div className='radio'>
                      <input required id="2" name='gender' type="radio" value={2} onChange={e => setGender(parseInt(e.target.value))}/>
                      <label htmlFor="2">Fêmea</label>
                    </div>
                  </div>
                  <div  className='div'>
                    <div className='radio'>
                      <input required id="3" name='pet' type="radio" value={3} placeholder='Ex. Lessi' onChange={e => setPet(parseInt(e.target.value))}/>
                      <label htmlFor="3">Gato(a)</label>
                    </div>
                    <div className='radio'>
                      <input required id="4" name='pet' type="radio" value={4} onChange={e => setPet(parseInt(e.target.value))}/>
                      <label htmlFor="4">Cachorro(a)</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='owner'>
            <h3>Informe os dados do dono</h3>
            <div className="form">
              <div className='input'>
                <label>Nome:*</label>
                <input required type="text" value={nameOwner} placeholder='Ex. Ana Paula' onChange={e => setNameOwner(e.target.value)}/>
              </div>
              <div className='input'>
                <label>Email:*</label>
                <input required type="email" value={emailOwner} onChange={e => setEmailOwner(e.target.value)} placeholder='Ex. anapaula@gmail.com'/>
              </div>
              <div className='input'>
                <label>Telefone:*</label>
                <input required type="number" value={phoneOwner} onChange={e => setPhoneOwner(e.target.value)} placeholder='Ex. 51985654322'/>
              </div>
              <div className='input'>
                <label>Endereço:*</label>
                <input required type="text" value={localeOwner} onChange={e => setLocaleOwner(e.target.value)} placeholder='Ex. Porto Alegre - RS'/>
              </div>
            </div>
          </div>
          <button type='submit'>Cadastrar</button>

        </form>
      </div>
      <Footer />
    </div>
  )
}