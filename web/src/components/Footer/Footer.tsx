
import { FacebookLogo, InstagramLogo, PawPrint, WhatsappLogo } from '@phosphor-icons/react'
import './Footer.css'

export default function Footer() {

  return (
      <footer id="footer">
        
        <div className="infoFooter">
          <div className="logo">
            <PawPrint size={38} />
            <h2>Doação de animais</h2>
          </div>
          <p>© 2023 Doação de animais <br></br>Todos os direitos reservados</p>
        </div>

        <div className="links">
          <a href="#"><InstagramLogo size={24} /> Doação de animais</a>
          <a href="#"><FacebookLogo size={24} /> Doação de animais</a>
          <a href="#"><WhatsappLogo size={24}/> (51) 9 1783-3421</a>
        </div>
      </footer>
  )
}