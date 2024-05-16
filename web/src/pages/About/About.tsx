import './About.css'
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';

export default function About() {

  return (
    <div id="about">
      <Header />
      <h2>Sobre o site</h2>
      <div className="banner">
        <img src="https://www.petdoctor.com.br/wp-content/uploads/2021/04/10RacasDeCaesMaisPopularesNoBrasil-Topo-Abr21.jpg" alt="" />
      </div>
      <div className="content">
        <p>A criação de um site para doação é um projeto muito importante e necessário na atualidade, pois, o aumento do número de animais abandonados e em situação de vulnerabilidade e também, há um grande número de pessoas que já tem acesso à internet tem se tornado cada vez mais comum, o que torna um site de doação de animais uma opção acessível e um alto alcance de comunicação podendo chegar em qual quer lugar do mundo. </p>
        <p>O objetivo do site é tornar um processo fácil, rápido e sem enrolação, onde qualquer um pode entrar em contatado com o dono ou com a instituição por Email ou telefone, caso haja interesse com o animal cadastrado no site, e também não precisa ser uma instituição para cadastrar animais para doação, pode ser qualquer pessoa tendo acesso à internet consegue realizar as funcionalidades do site cadastrar e visualizar. </p>
      </div>
      <Footer />
    </div>
  )
}