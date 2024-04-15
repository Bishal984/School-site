import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Dropdown from '../../components/Dropdown';
const Header = () => {
	const navigate = useNavigate();
	const aboutUsItem = [
		{
			id: 1,
			path: '/ourboard',
			title: 'Our Board',
		},
		{
			id: 2,
			path: '/ourbelief',
			title: 'Our Belief',
		},
		{
			id: 3,
			path: '/ourteam',
			title: 'Our Team',
		},
	];
	console.log(typeof aboutUsItem);
	return (
		<div className="w-screen bg-slate-800 fixed z-[30]">
			<header className="flex justify-between items-center px-8">
				<div className="logo">
					{/* <img src="" alt="" /> */}
					<h1
						className="bg-gradient-to-b from-purple-400 to-indigo-600 text-transparent bg-clip-text font-bold text-3xl flex flex-col cursor-pointer"
						onClick={() => navigate('/')}
					>
						<span>Waling Scholars'</span>
						<span>Foundation</span>
					</h1>
				</div>
				<nav>
					<ul className="flex gap-16 text-xl text-white">
						<li className="showBottomBorder">
							<Link to="/" className="hover:text-slate-200 transition-all duration-150">
								Home
							</Link>
							<span className="border border-slate-100 block span"></span>
						</li>
						<li>
							<Dropdown items={aboutUsItem} title={'About Us'} />

							<Link to="/about-us" className="hover:text-slate-200 transition-all duration-150"></Link>
							{/* <span className="border border-slate-100 block span"></span> */}
						</li>
						<li className="showBottomBorder">
							<Link to="/event" className="hover:text-slate-200 transition-all duration-150">
								Event
							</Link>
							<span className="border border-slate-100 block span"></span>
						</li>
						<li className="showBottomBorder">
							<Link to="/gallery" className="hover:text-slate-200 transition-all duration-150">
								Gallery
							</Link>
							<span className="border border-slate-100 block span"></span>
						</li>
						<li className="showBottomBorder">
							<Link to="/facilites" className="hover:text-slate-200 transition-all duration-150">
								Facilites
							</Link>
							<span className="border border-slate-100 block span"></span>
						</li>
						<li className="showBottomBorder">
							<Link to="/contact" className="hover:text-slate-200 transition-all duration-150">
								Contact
							</Link>
							<span className="border border-slate-100 block span"></span>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
