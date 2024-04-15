import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { IoIosSend } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
const Footer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<div className="w-full bg-[url('https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg')] h-96 bg-cover bg-center relative pt-16">
			<div className="absolute inset-0 bg-black bg-opacity-85"></div>
			<div className="w-4/5 flex justify-between mx-auto relative z-10">
				<div className="flex-1 space-y-2">
					<h1 className="bg-gradient-to-b from-purple-400 to-indigo-600 text-transparent bg-clip-text font-bold text-2xl flex flex-col cursor-pointer">
						<span>Waling Scholars'</span>
						<span>Foundation</span>
					</h1>
					<p className="text-slate-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolor suscipit aliquid est nemo illum enim
						obcaecati incidunt nihil placeat laudantium minima eos explicabo iusto, temporibus modi provident.
						Recusandae, sint?
					</p>
					<ul className="flex items-center gap-x-4">
						<li className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center">
							<Link to="/facebook">
								<FaFacebookF color="white" />
							</Link>
						</li>
						<li className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center">
							<Link to="/instagram">
								<FaSquareInstagram color="white" />
							</Link>
						</li>
						<li className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center">
							<Link to="/twitter">
								<FaTwitter color="white" />
							</Link>
						</li>
						<li className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center">
							<Link to="/linkedin">
								<FaLinkedin color="white" />
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1">
					<ul className="text-slate-200 grid grid-cols-2 space-y-1">
						<li>
							<Link to="/aboutus" className="flex items-center">
								<IoIosArrowForward />
								About Us
							</Link>
						</li>
						<li>
							<Link to="/courses" className="flex items-center">
								<IoIosArrowForward />
								Courses Details
							</Link>
						</li>
						<li>
							<Link to="/events-details" className="flex items-center">
								<IoIosArrowForward />
								Events Details
							</Link>
						</li>
						<li>
							<Link to="/teachers" className="flex items-center">
								<IoIosArrowForward />
								Teachers
							</Link>
						</li>
						<li>
							<Link to="/login" className="flex items-center">
								<IoIosArrowForward />
								Login
							</Link>
						</li>
						<li>
							<Link to="/courses-grid" className="flex items-center">
								<IoIosArrowForward />
								Courses Grid
							</Link>
						</li>
						<li>
							<Link to="/events" className="flex items-center">
								<IoIosArrowForward />
								Events
							</Link>
						</li>
						<li>
							<Link to="/faq" className="flex items-center">
								<IoIosArrowForward />
								FAQ
							</Link>
						</li>
						<li>
							<Link to="/gallery" className="flex items-center">
								<IoIosArrowForward />
								Gallery
							</Link>
						</li>
						<li>
							<Link to="/contact-us" className="flex items-center">
								<IoIosArrowForward />
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
				<div className="flex-1 text-slate-200 w-full space-y-2">
					<h2 className="text-xl font-semibold capitalize">Get in touch</h2>
					<p>Subscribtion with us to get the notification of our latest updates.</p>
					<form onSubmit={handleSubmit} className="space-y-2">
						<div>
							<input
								type="text"
								placeholder="Name"
								{...register('name')}
								className="w-4/5 p-2 border-b-[1px] focus:outline-none text-slate-100 bg-transparent"
							/>
						</div>
						<div>
							<input
								type="email"
								placeholder="Email"
								{...register('email')}
								className="w-4/5 p-2 focus:outline-none text-slate-100 bg-transparent border-b-[1px]"
							/>
						</div>
						<button
							type="submit"
							className="w-4/5 flex justify-center items-center bg-orange-400 p-2 rounded-lg hover:bg-orange-300 transition-all duration-150 text-slate-100 text-lg font-semibold "
						>
							<IoIosSend fontSize={20} /> Submit
						</button>
					</form>
				</div>
			</div>
			<div>
				<p>© 2024 Waling Scholars' Foundation</p>
			</div>
		</div>
	);
};

export default Footer;
