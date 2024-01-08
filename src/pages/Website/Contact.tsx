import React from 'react'
import { TextFieldInput, TextAreaInput } from '../../components/inputs'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import { ComponentButtonCommon, NavBar, Footer } from '../../components'
export const ContactUs = () => {
  const [state, setState] = React.useState({ name: '', email: '', subject: '', message: '' })
  return (<>
    <NavBar />
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-12'>
          <div className='wrapper'>
            <div className='row no-gutters'>
              <div className='col-md-7'>
                <div className='contact-wrap w-100 p-md-5 p-4'>
                  <h3 className='mb-4'>Contate-nos</h3>
                  <form method='POST' id='contactForm' name='contactForm' className='contactForm'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <TextFieldInput
                            id={'name'}
                            required={true} label='Nome' typeInput='text'
                            value={state.name}
                            onChange={(value: string) => {
                              return setState({ ...state, name: value })
                            }}
                          />
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <TextFieldInput
                            id={`email`}
                            required={true} label='E-mail' typeInput='text'
                            value={state.email}
                            onChange={(value: string) => {
                              setState({ ...state, email: value })
                            }}
                          />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <TextFieldInput
                            id='subject'
                            required={true} label='Assunto' typeInput='text'
                            value={state.subject}
                            onChange={(value: string) => { setState({ ...state, subject: value }) }}
                          />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='form-group'><TextAreaInput id='message'/></div>
                      </div>
                      <div className='col-md-12 m-2'>
                        <div className='form-group'>
                          <ComponentButtonCommon text='Enviar' sizeWidth='100%' id='contact' />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-md-5 d-flex align-items-stretch p-5'>
                <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120048.47545183754!2d-44.046450938287975!3d-19.902697333643328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690cacacf2c33%3A0x5b35795e3ad23997!2sBelo%20Horizonte%2C%20State%20of%20Minas%20Gerais!5e0!3m2!1sen!2sbr!4v1682961567336!5m2!1sen!2sbr' width='800' height='450' style={{ border: '0' }} loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>	</div>
            </div>
            <div className='row '>
              <div className='col-md-4'>
                <div className='dbox w-100 text-center '>
                  <NearMeOutlinedIcon className='mb-2' fontSize='large' />
                  <div className='text'>
                    <p><span>Endereço:</span> <a className='text-dark h6'>Belo Horizonte</a></p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='dbox w-100 text-center'>
                  <PhoneOutlinedIcon className='mb-2' fontSize='large' />
                  <div className='text'>
                    <p><span>Telefone:</span> <a className='text-dark h6' href=''>(31)99999-9999</a></p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='dbox w-100 text-center '>
                  <EmailOutlinedIcon className='mb-2' fontSize='large' />
                  <div className='text'>
                    <p><span>Email:</span> <a className='text-dark h6' href='mailto:info@yoursite.com'>website@contato.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>)
}
