import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { ComponentButtonCommon } from '../../../components/button/ComponentButtonCommon'
import { OurServices } from './OurServices/Our-Services'
export const Home = () => {
  return (
    <>
      <div className='page-header-ui-content' id='image-primary-carroussel'>
        <div className='container px-5'>
          <div className='row gx-5 align-items-center p-2'>
            <div className='col-lg-6 aos-init aos-animate' data-aos='fade-up'>
              <h1 className='page-header-ui-title' id='text-carroussel'>Gerencie seu pequeno negócio</h1>
              <h5 className='page-header-ui-text mb-5' id='text-carroussel'>Tenha o controle do seu pequeno negócio.</h5>
              <div className='d-flex flex-column flex-sm-row'>
                <Link to='/registrar'>
                  <ComponentButtonCommon text='Cadastre-se agora' sizeWidth='300px' id='home' />
                </Link>
                <Link to='/caracteristicas' id='link-more'>Saiba mais</Link>
              </div>
            </div>
            <div className='col-lg-6 d-none d-lg-block aos-init aos-animate' data-aos='fade-up' data-aos-delay='100'></div>
          </div>

        </div>
      </div>
      <OurServices />
    </>)
}
