import {  ArrowFatLineRight } from '@phosphor-icons/react'
import './Card.css'
import { NavLink } from 'react-router-dom'

interface CategoryProps  {
  id: number,
  description: string
}

interface PetProps  {
  id: number,
  name: string,
  local: string,
  imagePet: string,
  categories: CategoryProps[]
}

export default function Card(props : PetProps) {
  return (
    <div id="card">
      <img src={props.imagePet} alt="Imagem do Pet" />
      <div>
        <div className='tags'>
          {
           props.categories.map(x => {
            return (
              <span>{x.description}</span>
            )
           })
          }
        </div>
        <h2>{props.name}</h2>
        <p>{props.local}</p>
        <NavLink to={`/pet/${props.id}`}>Mais Informação <ArrowFatLineRight size={24} /></NavLink>
      </div>
      
    </div>    
  )
}