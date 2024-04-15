import React from 'react';
import { Link } from 'react-router-dom';

const CoursesDetails = () => {
	return (
		<div className="w-full py-16 h-min-screen">
			<div className="relative">
				<img src="../../assets/pharmacy1.jpg" alt="images" className="w-full h-[600px] object-cover" />
				<div className="absolute top-[20%] translate-x-1/2 translate-y-1/2 flex gap-x-2 items-center">
					<img src="../../assets/pharmacy.png" alt="pharmacyImage" className="w-32 h-32 object-cover" />
					<div className="flex flex-col gap-y-2">
						<h1 className="text-3xl font-bold text-slate-700 leading-9">
							Pharmacy Education (Deal With the World Of Medicine)
						</h1>
						<p className="text-lg font-semibold text-slate-700 leading-9 ">Diploma of Pharmacy</p>
					</div>
				</div>
				<div className="bg-yellow-600">
					<ul className="flex justify-between items-center py-2 px-20 text-lg text-slate-50">
						<li>
							<Link to="">Program Overview</Link>
						</li>
						<li>
							<Link to="">Career Opportunities </Link>
						</li>
						<li>
							<Link to="">Student Work + Success</Link>
						</li>
						<li>
							<Link to="">Stories </Link>
						</li>
						<li>
							<Link to="">Program Faculty + Events</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-slate-700 py-16 space-y-4 text-center">
				<h2 className="text-2xl font-bold text-center text-slate-50">Become a Pharmacy Teacher </h2>
				<img src="../../assets/pharmacy3.jpg" alt="images" className="w-1/2 h-1/3 object-cover mx-auto rounded-sm" />
				<p className="w-1/2 mx-auto text-slate-100">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam harum perspiciatis qui, quos
					voluptatibus pariatur laborum laboriosam vitae repudiandae rem laudantium, eius velit, dolor id ipsam incidunt
					architecto impedit hic facere? Tenetur temporibus est et omnis voluptates, sequi illum a velit. Libero eius
					quia id, odio tempore ullam ipsum iusto officiis. Vel, eveniet deserunt. Odit nisi ullam, eos aperiam incidunt
					cumque expedita deserunt eum blanditiis, ducimus ipsa commodi, sint dolor iure. Natus cum inventore
					reprehenderit! Hic maiores quos perferendis, eius natus odio eos cum autem accusantium nostrum! Ab
					necessitatibus omnis sapiente sint blanditiis! Illum culpa accusantium iste odio eaque?
				</p>
				<button className="bg-yellow-600 text-center py-1 text-slate-100 font-semibold px-2 rounded-sm hover:bg-slate-700 hover:text-yellow-600 transition-all ease-in-out duration-150 p-2">
					Are you ready to do something great in life?
				</button>
			</div>
			<div className="pt-16 flex gap-x-8">
				<div className="space-y-4 px-16 flex-1">
					<h2 className="text-5xl font-semibold tracking-wide leading-10">Pharmacy Education Program Overview</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repellat est sequi odit architecto soluta
						quis cupiditate quos reprehenderit cum dignissimos ad aliquam minima ducimus molestiae animi repudiandae
						fugiat aut quaerat delectus nemo sint. Nam eveniet quibusdam animi impedit dolorem? Consectetur numquam iste
						deserunt, hic provident maxime omnis ea eius?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, ducimus officia dolor, iure voluptatem
						nisi ut quae labore eius rerum odit. Eligendi consequuntur id sint. Hic quisquam obcaecati autem repellat
						commodi soluta beatae similique. Pariatur sapiente tenetur ad at, beatae nihil aperiam et vitae unde vel
						quidem maiores corrupti eos.
					</p>
					<p className="text-base font-bold text-slate-800">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia neque ab nisi eligendi consequuntur,
						autem explicabo suscipit nesciunt voluptatem illum.
					</p>
				</div>
				<div>
					<img src="../../assets/pharmacy.png" alt="image" className="w-full h-1/2 object-cover flex-1" />
				</div>
			</div>
			<div className="flex gap-x-16 px-8 items-center">
				<div className="flex-1">
					<img src="../../assets/pharmacy.png" alt="imaged" className="w-full h-full object-cover" />
				</div>
				<div className="space-y-3 flex-1">
					<h2 className="text-5xl font-semibold text-center uppercase">Tech + Tools</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis facere incidunt sint nostrum hic
						dolorem!
					</p>
					<ul className="px-2 space-y-1">
						<li className="flex gap-x-2 items-center">
							<div className="h-2 w-2 bg-black rounded-full"></div>
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
						</li>
						<li className="flex gap-x-2 items-center">
							<div className="h-2 w-2 bg-black rounded-full"></div>
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
						</li>{' '}
						<li className="flex gap-x-2 items-center">
							<div className="h-2 w-2 bg-black rounded-full"></div>
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
						</li>{' '}
						<li className="flex gap-x-2 items-center">
							<div className="h-2 w-2 bg-black rounded-full"></div>
							<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
						</li>{' '}
					</ul>
					<div className="text-center">
						<button className="bg-slate-700 text-slate-50 text-center p-2 rounded-lg hover:bg-slate-700/95 transition-all ease-in-out duration-150">
							View Program Materials
						</button>
					</div>
				</div>
				<div className="flex-1">
					<img src="../../assets/pharmacy.png" alt="image" className="w-full h-full object-cover" />
				</div>
			</div>
		</div>
	);
};
export default CoursesDetails;
