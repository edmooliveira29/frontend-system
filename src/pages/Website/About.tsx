import React from 'react'
import NavBar from '../../components/navBar/NavBar'

export const AboutPage = () => (
  <div>
    <NavBar />
    <div className="container">
      <h2 className='text-center pt-5'>
        Sobre nós
      </h2>
      <div className="header">
        <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Responsiva" className="img-fluid"/>
        <p className="read-time ">Tempo de Leitura: 2 minutos</p>
      </div>

      <div className="h5 text-justify">
        <p>Em 2023, surge no cenário empresarial a Sistema Gerenciador, uma empresa inovadora dedicada a auxiliar outras organizações a prosperarem através da eficaz gestão de seus negócios. Comprometida com a oferta de soluções acessíveis e eficientes, a Sistema Gerenciador visa democratizar o acesso a ferramentas essenciais para o sucesso corporativo.</p>

        <p>O propósito central da Sistema Gerenciador é capacitar empresas de todos os portes, proporcionando-lhes as ferramentas necessárias para otimizar processos, tomar decisões estratégicas e alcançar seus objetivos de maneira sustentável. Consciente das demandas variadas do mercado, a empresa busca constantemente a inovação, adaptando-se às necessidades específicas de cada cliente.</p>

        <p>Através de uma abordagem personalizada, a Sistema Gerenciador visa estabelecer parcerias sólidas com seus clientes, entendendo profundamente suas operações e oferecendo soluções sob medida. Além disso, a empresa destaca-se por manter preços acessíveis, garantindo que organizações de todos os portes possam se beneficiar de suas ferramentas de gestão de alta qualidade.</p>

        <p>Com uma visão centrada no cliente, a Sistema Gerenciador almeja ser referência no mercado, não apenas como uma fornecedora de sistemas, mas como uma parceira estratégica no crescimento e na excelência operacional das empresas que atende. Sua trajetória é marcada pela busca incessante pela inovação, eficiência e acessibilidade, redefinindo os padrões de gestão empresarial no cenário corporativo contemporâneo.</p>
      </div>

    </div>
  </div>
)
