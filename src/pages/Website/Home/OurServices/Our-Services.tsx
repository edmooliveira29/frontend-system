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
          <Link to='/sobre' style={{textDecoration: 'none', color: '#000000'}}>
            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <AppShortcutOutlinedIcon fontSize='large' sx={{alignContent: 'center'}} />
              </div>
              <h5 className='mb-3 text-center'>Marketing Digital</h5>
              <p className='mb-0 text-center'>Alcance seu público-alvo de forma eficiente e mensurável. Marketing digital para potencializar seus resultados</p>						</div>
          </Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6' style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/sobre' style={{textDecoration: 'none', color: '#000000'}}>
            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <LanguageOutlinedIcon fontSize='large' sx={{alignContent: 'center'}} />
              </div>
              <h5 className='mb-3 text-center'>Internet Marketing</h5>
              <p className='mb-0 text-center'>Maximize sua presença online e aumente sua visibilidade na web. Internet marketing para destacar sua marca.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 ' style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/sobre' style={{textDecoration: 'none', color: '#000000'}}>
            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <ComputerOutlinedIcon fontSize='large' />
              </div>
              <h5 className='mb-3 text-center'>Conteúdo de Marketing</h5>
              <p className='mb-0 text-center'>Atraia e fidelize seu público com conteúdo estratégico e de qualidade para fortalecer sua marca e gerar resultados.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6 '>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/sobre' style={{textDecoration: 'none', color: '#000000'}}>
            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <InterestsOutlinedIcon fontSize='large' />							</div>
              <h5 className='mb-3 text-center'>Mídia Social</h5>
              <p className='mb-0 text-center'>Construa relacionamentos autênticos com sua audiência nas mídias sociais. Mídia social para engajamento e fidelização.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='col-lg-4 col-md-6'>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/sobre' style={{textDecoration: 'none', color: '#000000'}}>

            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <WebOutlinedIcon fontSize='large' sx={{alignContent: 'center'}} />
              </div>

              <h5 className='mb-3 text-center text-center'>Construção de website</h5>
              <p className='mb-0 text-center'>Crie um site único que reflita a identidade e valores da sua marca. Construção de site personalizado para se destacar na web</p>
            </div>
          </Link>

        </div>
      </div>
      <div className='col-lg-4 col-md-6 ' style={{visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp'}}>
        <div className='position-relative rounded-5 bg-light' id='div-card-services'>
          <Link to='/sobre' style={{textDecoration: 'none', color: '#000000'}}>

            <div className='service-text rounded p-5'>
              <div className='text-center' style={{margin: '20px'}}>
                <SettingsOutlinedIcon fontSize='large' sx={{alignItems: 'center'}} />
              </div>
              <h5 className='mb-3 text-center'>Construção de ERP</h5>
              <p className='mb-0 text-center'>Otimize a gestão do seu negócio com um sistema integrado e adaptado às suas necessidades.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <br />
  </div >
);
