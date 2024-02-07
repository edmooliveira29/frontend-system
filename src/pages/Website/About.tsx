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
        <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1605256585681-455837661b18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem Responsiva" className="img-fluid" />
        <p className="read-time ">Tempo de Leitura: 2 minutos</p>
      </div>

      <div className=" text-justify">
        <p>Nos últimos 8 anos, houve um notável aumento no número de Microempreendedores Individuais (MEIs), totalizando 14,8 milhões de cadastros. Diante dessa crescente demanda, a proposta deste sistema é oferecer uma solução abrangente e simplificada para auxiliar os proprietários de pequenos negócios MEI no gerenciamento eficiente de seus colaboradores, produtos, categorias, clientes e vendas, atendendo assim às necessidades específicas desse público-alvo. Este sistema foi projetado para ser acessível em diferentes dispositivos, graças à sua capacidade responsiva, proporcionando uma experiência consistente e intuitiva em qualquer plataforma utilizada.</p>
        <p>O sistema possui registros de clientes, controle de acesso, menus interativos, validações de dados e exportação em PDF, entre outros, o sistema oferece uma gama completa de funcionalidades essenciais para simplificar e otimizar as operações do dia a dia dos proprietários de MEI. Além disso, o sistema é 100% web e responsivo, empregando as melhores tecnologias do mercado para garantir desempenho, confiabilidade e segurança aos usuários.</p>

      </div>

    </div>
  </div>
)
