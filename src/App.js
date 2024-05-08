import React from 'react';
import './App.css';
import { FiUsers } from "react-icons/fi";
import Banner from "./images/CYBERCONNECTBANNER.png";
import CardImage1 from "./images/card1.png";
import CardImage2 from "./images/card2.png";
import CardImage3 from "./images/tim1.jpeg";
import CardImage4 from "./images/sky.png";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Importe BrowserRouter, Route, Link e Routes do react-router-dom
import SobreNos from './SobreNos'; 

function Card({ title, description, image }) {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Bem-vindo à CyberConnect</h1>
          <nav className="App-navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#planos">Planos de internet</a></li>
              <li><Link to="/sobre">Sobre nós</Link></li>
              <li><a href="#login"><FiUsers size={25} color="#27E400" /></a></li>
            </ul>
          </nav>
        </header>
        <main className="App-main">
          <div>
            <h2>Conectando Você ao Futuro</h2>
            <p>Descubra nossos planos de internet de alta velocidade e desfrute de uma conexão sem limites.</p>
          </div>
          <div className="banner">
            <img src={Banner} alt="Banner" />
          </div>
          <div>
            <h2>Conheça as Operadoras disponíveis</h2>
          </div>
          <div className="card-container">
            <Card
              title="Plano Básico com a Claro"
              description="Ideal para navegar na internet e usar redes sociais."
              image={CardImage1}
            />
            <Card
              title="Plano Premium com a Vivo"
              description="Perfeito para streaming de vídeo em alta definição e jogos online."
              image={CardImage2}
            />
            <Card
              title="TIM Controle"
              description="Redes sociais, muitas ligações e GB extra para aqueles que possuem C6Bank."
              image={CardImage3}
            />
             <Card
              title="SKY Fibra"
              description="Curta os programas que você gosta, acesse seus sites favoritos e jogue on-line, com estabilidade e segurança."
              image={CardImage4}
            />
          </div>
          <Routes>
            <Route path="/sobre" element={<SobreNos />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <div>
            <p>&copy; 2024 CyberConnect. Todos os direitos reservados.</p>
            <p>Entre em contato: contato@cyberconnect.com</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
