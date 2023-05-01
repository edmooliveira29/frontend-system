import React, {Component} from 'react';
import NavBar from '../../components/navBar/NavBar';
import CheckIcon from '@mui/icons-material/Check';
import Footer from '../../components/footer/Footer';
import {Link} from 'react-router-dom';
export const PricePage = () => (
	<>
		<NavBar />
		<div className='container'>

			<div className='section-title'>
				<h2>Pricing</h2>
				<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
			</div>

			<div className='row no-gutters'>

				<div className='col-lg-4 box'>
					<h3>Free</h3>
					<h4>$0<span>per month</span></h4>
					<ul>
						<li><i className='bx bx-check'></i> Quam adipiscing vitae proin</li>
						<li><i className='bx bx-check'></i> Nec feugiat nisl pretium</li>
						<li><i className='bx bx-check'></i> Nulla at volutpat diam uteera</li>
						<li className='na'><i className='bx bx-x'></i> <span>Pharetra massa massa ultricies</span></li>
						<li className='na'><i className='bx bx-x'></i> <span>Massa ultricies mi quis hendrerit</span></li>
					</ul>
					<a href='#' className='get-started-btn'>Get Started</a>
				</div>

				<div className='col-lg-4 box featured'>
					<h3>Business</h3>
					<h4>$29<span>per month</span></h4>
					<ul>
						<li><i className='bx bx-check'></i> Quam adipiscing vitae proin</li>
						<li><i className='bx bx-check'></i> Nec feugiat nisl pretium</li>
						<li><i className='bx bx-check'></i> Nulla at volutpat diam uteera</li>
						<li><i className='bx bx-check'></i> Pharetra massa massa ultricies</li>
						<li><i className='bx bx-check'></i> Massa ultricies mi quis hendrerit</li>
					</ul>
					<a href='#' className='get-started-btn'>Get Started</a>
				</div>

				<div className='col-lg-4 box'>
					<h3>Developer</h3>
					<h4>$49<span>per month</span></h4>
					<ul>
						<li><i className='bx bx-check'></i> Quam adipiscing vitae proin</li>
						<li><i className='bx bx-check'></i> Nec feugiat nisl pretium</li>
						<li><i className='bx bx-check'></i> Nulla at volutpat diam uteera</li>
						<li><i className='bx bx-check'></i> Pharetra massa massa ultricies</li>
						<li><i className='bx bx-check'></i> Massa ultricies mi quis hendrerit</li>
					</ul>
					<a href='#' className='get-started-btn'>Get Started</a>
				</div>

			</div>

		</div>
		<Footer />
	</>

);
