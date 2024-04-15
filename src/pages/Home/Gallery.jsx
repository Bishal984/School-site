import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
	const image = [
		'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
		'https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
		'https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg',
		'https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg',
		'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
		'https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
		'https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg',
		'https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg',
	];
	// const rotateImage = ['translate-x-6', 'translate-x-6', 'translate-x-6', 'translate-x-12'];
	return (
		<div className="w-[80%] mx-auto space-y-8 py-12">
			<div className="text-center">
				<h2 className="text-2xl font-semibold">
					Image of <span className="text-teal-500">Gallery of</span> Our Campus
				</h2>
			</div>

			{/* <div className="w-[30vw] grid grid-cols-6 grid-rows-6 gap-1 diamondGallery">
				{image?.map((img, index) => (
					// <Link to="" traget="_blank" key={index}>
					<img
						src={img}
						alt="images"
						className={`h-32 w-32 rounded-xl rotate-[45deg] cover ${
							index !== 3 ? 'grid col-span-2' : 'grid col-start-2 col-span-2'
						}`}
					/>
					// </Link>
				))}
			</div> */}
			<div className="grid grid-cols-4 gap-4">
				{image?.map((img) => (
					<Link to={img} target="_blank">
						<img src={img} alt="images" className="h-80 object-cover rounded-sm w-80 gap-x-20" />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Gallery;
