import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import './styles.scss';
import Footer from '../../components/footer/Footer';
export const Home = () => (
	<div>
		<NavBar />
		<div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='false'>
			<div className='carousel-indicators'>
				<button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
				<button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></button>
				<button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3'></button>
			</div>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img src='https://source.unsplash.com/800x200/?key' className='d-block w-100' alt='...' />
					<div className='carousel-caption d-none d-md-block'>
						<h3 id='text-carroussel'>Seja bem vindo</h3>
						<p id='text-carroussel'>Bem-vindo ao nosso site! Aqui você encontrará tudo o que precisa para deixar sua vida mais fácil e agradável.</p>
					</div>
				</div>
				<div className='carousel-item'>
					<img src='https://source.unsplash.com/800x200/?airplane' className='d-block w-100' alt='...' />
					<div className='carousel-caption d-none d-md-block'>
						<h3 id='text-carroussel'>Ofertas</h3>
						<p id='text-carroussel'>Não perca tempo procurando em outros lugares. Nós oferecemos os melhores preços, promoções exclusivas e uma equipe de atendimento ao cliente <br />sempre pronta para ajudá-lo. Além disso, garantimos a qualidade de todos os nossos produtos.</p>
					</div>
				</div>
				<div className='carousel-item'>
					<img src='https://source.unsplash.com/800x200/?computer' className='d-block w-100' alt='...' />
					<div className='carousel-caption d-none d-md-block'>
						<h3 id='text-carroussel'>Aproveite</h3>
						<p id='text-carroussel'>Não espere mais, navegue em nosso site e encontre o que você precisa! Estamos ansiosos para atendê-lo e tornar sua experiência de compra conosco a melhor possível.</p>
					</div>
				</div>
			</div>
			<button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
			</button>
			<button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
			</button>
		</div>

		<section className='container pt-2 pt-md-5'>
			<h2 className='text-center mb-5'>Produtos galeria</h2>
			<div className='row gallery'>
				<div className='swiper-container guides-slider mx-n2 pt-3 swiper-container-horizontal'>
					<div className='swiper-wrapper pb-5' style={{transform: 'translate3d(-1060px, 0px, 0px)', transitionDuration: '0ms'}}><div className='swiper-slide h-auto px-2 swiper-slide-duplicate swiper-slide-duplicate-active' data-swiper-slide-index='0' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/new-york.jpg' alt='Card image'/>
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>New York</h6>
								<p className='card-text text-sm'>The big apple</p>
							</div>
						</div>
					</div><div className='swiper-slide h-auto px-2 swiper-slide-duplicate swiper-slide-duplicate-next' data-swiper-slide-index='1' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/paris.jpg' alt='Card image'/>
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>Paris</h6>
								<p className='card-text text-sm'>Artist capital of Europe</p>
							</div>
						</div>
					</div><div className='swiper-slide h-auto px-2 swiper-slide-duplicate' data-swiper-slide-index='2' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/barcelona.jpg' alt='Card image'/>
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>Barcelona</h6>
								<p className='card-text text-sm'>Dalí, Gaudí, Barrio Gotico</p>
							</div>
						</div>
					</div><div className='swiper-slide h-auto px-2 swiper-slide-duplicate swiper-slide-prev' data-swiper-slide-index='3' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/prague.jpg' alt='Card image'/>
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>Prague</h6>
								<p className='card-text text-sm'>City of hundred towers</p>
							</div>
						</div>
					</div>
					<div className='swiper-slide h-auto px-2 swiper-slide-active' data-swiper-slide-index='0' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/new-york.jpg' alt='Card image'/>
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>New York</h6>
								<p className='card-text text-sm'>The big apple</p>
							</div>
						</div>
					</div>
					<div className='swiper-slide h-auto px-2 swiper-slide-next' data-swiper-slide-index='1' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/paris.jpg' alt='Card image'/>
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>Paris</h6>
								<p className='card-text text-sm'>Artist capital of Europe</p>
							</div>
						</div>
					</div>
					<div className='swiper-slide h-auto px-2' data-swiper-slide-index='2' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/barcelona.jpg' alt='Card image' />
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>Barcelona</h6>
								<p className='card-text text-sm'>Dalí, Gaudí, Barrio Gotico</p>
							</div>
						</div>
					</div>
					<div className='swiper-slide h-auto px-2 swiper-slide-duplicate-prev' data-swiper-slide-index='3' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/prague.jpg' alt='Card image' />
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>Prague</h6>
								<p className='card-text text-sm'>City of hundred towers</p>
							</div>
						</div>
					</div>
					<div className='swiper-slide h-auto px-2 swiper-slide-duplicate swiper-slide-duplicate-active' data-swiper-slide-index='0' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/new-york.jpg' alt='Card image' />
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>New York</h6>
								<p className='card-text text-sm'>The big apple</p>
							</div>
						</div>
					</div><div className='swiper-slide h-auto px-2 swiper-slide-duplicate swiper-slide-duplicate-next' data-swiper-slide-index='1' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/paris.jpg' alt='Card image' />
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>Paris</h6>
								<p className='card-text text-sm'>Artist capital of Europe</p>
							</div>
						</div>
					</div><div className='swiper-slide h-auto px-2 swiper-slide-duplicate' data-swiper-slide-index='2' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/barcelona.jpg' alt='Card image' />
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>Barcelona</h6>
								<p className='card-text text-sm'>Dalí, Gaudí, Barrio Gotico</p>
							</div>
						</div>
					</div><div className='swiper-slide h-auto px-2 swiper-slide-duplicate' data-swiper-slide-index='3' style={{width: '250px', marginRight: '15px'}}>
						<div className='card card-poster gradient-overlay hover-animate mb-4 mb-lg-0'><a className='tile-link' href='category.html'></a><img className='bg-image' src='https://d19m59y37dris4.cloudfront.net/directory/2-0-2/img/photo/prague.jpg' alt='Card image' />
							<div className='card-body overlay-content'>
								<h6 className='card-title text-shadow text-uppercase'>Prague</h6>
								<p className='card-text text-sm'>City of hundred towers</p>
							</div>
						</div>
					</div></div>
					<div className='swiper-pagination d-md-none swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-bullets-dynamic' style={{width: '40px'}}><span className='swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main' role='button' aria-label='Go to slide 1' style={{left: '12px'}}></span><span className='swiper-pagination-bullet swiper-pagination-bullet-active-next' role='button' aria-label='Go to slide 2' style={{left: '12px'}}></span><span className='swiper-pagination-bullet swiper-pagination-bullet-active-next-next' role='button' aria-label='Go to slide 3' style={{left: '12px'}}></span><span className='swiper-pagination-bullet' role='button' aria-label='Go to slide 4' style={{left: '12px'}}></span></div>
					<span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span></div>
			</div>
		</section>
		<Footer />
	</div>

);

