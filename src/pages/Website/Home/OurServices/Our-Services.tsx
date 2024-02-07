import React from 'react';
import {Link} from 'react-router-dom';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import './styles.scss';

export const OurServices = () => (
  <div className='container'>
    <div className='text-center mx-auto m-5' style={{maxWidth: '500px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
      <h1 className='display-5 '>Serviços digitais que oferecemos</h1>
    </div>
    <div className='row g-4'>
      <div className='col-lg-4 col-md-6' >
        <div className='position-relative rounded-5 bg-light rounded-5 bg-light' id='div-card-services'>
          <Link to='/caracteristicas' style={{textDecoration: 'none', color: '#000000'}}>
            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <AppShortcutOutlinedIcon fontSize='large' sx={{alignContent: 'center'}} />
              </div>
              <h5 className='mb-3 text-center'>Acesse pelo smartphone</h5>
              <p className='mb-0 text-center'>O sistema é adaptavel a todos os tamanhos de tela como tablets, desktops e smartphones.</p>						</div>
          </Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6' style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/caracteristicas' style={{textDecoration: 'none', color: '#000000'}}>
            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <LanguageOutlinedIcon fontSize='large' sx={{alignContent: 'center'}} />
              </div>
              <h5 className='mb-3 text-center'>100% online</h5>
              <p className='mb-0 text-center'>Seu negócio fica disponível 24 horas por dia, 7 dias por semana.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 ' style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/caracteristicas' style={{textDecoration: 'none', color: '#000000'}}>
            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <ComputerOutlinedIcon fontSize='large' />
              </div>
              <h5 className='mb-3 text-center'>Gestão de Vendas </h5>
              <p className='mb-0 text-center'>Gere vendas facilmente com o sistema.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 '>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/caracteristicas' style={{textDecoration: 'none', color: '#000000'}}>
            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <InterestsOutlinedIcon fontSize='large' />							</div>
              <h5 className='mb-3 text-center'>Gestão de produtos e serviços</h5>
              <p className='mb-0 text-center'>Gestão personalizada de produtos e serviços</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6'>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/caracteristicas' style={{textDecoration: 'none', color: '#000000'}}>

            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <WebOutlinedIcon fontSize='large' sx={{alignContent: 'center'}} />
              </div>

              <h5 className='mb-3 text-center text-center'>Emissão de pdfs</h5>
              <p className='mb-0 text-center'>Emita pdfs com as informações do seu negócio.</p>
            </div>
          </Link>

        </div>
      </div>
      <div className='col-lg-4 col-md-6 ' style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/caracteristicas' style={{textDecoration: 'none', color: '#000000'}}>

            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <SettingsOutlinedIcon fontSize='large' sx={{alignItems: 'center'}} />
              </div>
              <h5 className='mb-3 text-center'>Gestão de colaboradores</h5>
              <p className='mb-0 text-center'>Tenha em mãos facilmente os dados de seus colaboradores.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <br />
  </div >
);
