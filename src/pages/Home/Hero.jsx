import React from 'react';
import Carousel from '../../components/Carousel';

const Hero = () => {
	return (
		<div className="w-full min-h-screen pt-16">
			<div className="">
				<div className="relative">
					<Carousel />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-y-2 flex-1 flex-col justify-center items-center space-y-4">
						<h1 className="text-4xl capitalize text-slate-800 flex flex-col font-bold leading-9 tracking-normal items-center justify-center">
							<span>Welcome to </span>
							<span>Waling Scholars Foundation!!</span>
						</h1>
						<p className="text-left leading-5">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est totam ad possimus eum, blanditiis aut
							odit error nobis omnis, sit esse, asperiores accusamus. Cupiditate nostrum, sint quidem dolore accusantium
							facilis explicabo id reiciendis quia accusamus aut quis quibusdam, tenetur eligendi odit obcaecati dolorem
							libero? Officia fuga perspiciatis iusto rem?
						</p>
						<button
							type="button"
							className="px-4 py-2 rounded-xl hover:bg-cyan-600 shadow-lg bg-cyan-500 text-slate-50 text-base w-32"
						>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
