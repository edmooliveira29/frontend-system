import React from 'react'
import { Facebook, Twitter, Instagram } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './styles.sass'


export const Footer = () => {
  return (
    <>
      <div className='bg-secondary' >
        < div className='container ' >
          <footer className='m-0 p-3'>
            <div className='row'>
              <div className='col-12'>
                <ul className='nav text-center'>
                  <Link to='/' className='link-icon-website'>Início</Link>
                  <Link to='/caracteristicas' className='link-icon-website'>Característica</Link>
                  {/* <Link to='/preco' className='link-icon-website'>Preço</Link> */}
                  <Link to='/sobre' className='link-icon-website'>Sobre</Link>
                  <Link to='/contato' className='link-icon-website'>Contato</Link>
                </ul>
              </div>
            </div>

            <div className='link-icon-website d-flex flex-column flex-sm-row justify-content-between py-4 border-top'>
              <p>© {new Date().getFullYear()} Sistema Gerenciador. Todos os direitos reservados</p>
              <ul className='list-unstyled d-flex'>
                <a className='link-icon-social-media' href='http://www.instagram.com'><Instagram /></a>
                <a className='link-icon-social-media' href='https://www.facebook.com'><Facebook /></a>
                <a className='link-icon-social-media' href='https://www.twitter.com'><Twitter to='www.twitter.com' /></a>
                <li className='ms-3'><a className='link-dark' href='www.twitter.com'><svg className='bi' width='24' height='24'><use xlinkHref='#twitter'></use></svg></a></li>
                <li className='ms-3'><a className='link-dark' href='www.facebook.com'><svg className='bi' width='24' height='24'><use xlinkHref='#facebook'></use></svg></a></li>
              </ul>
            </div>
          </footer>
        </div >
      </div >

    </>)
}

export default Footer
