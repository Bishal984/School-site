import React from 'react';
import { useState } from 'react';
const Carousel = () => {
	const images = [
		'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
		'https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
		'https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg',
		'https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg',
	];

	const [image, setImage] = useState(0);
	// const [preImage, setpreImage] = useState(0);
	// const [nextImage, setNextImage] = useState(1);
	// const handleImage = () => {
	// 	// setImage((prev) => (prev !== 0 ? prev - 1 : images?.length));
	// };
	console.log(image, 'image');
	return (
		<div className="w-full h-full relative">
			<div className="">
				<div className="flex">
					<button
						type="button"
						className="text-slate-100 absolute left-[8px] top-1/2 h-12 w-12 bg-slate-400 rounded-full hover:bg-slate-300/80 transition-all duration-150"
						onClick={() => setImage((prev) => (prev !== 0 ? prev - 1 : images?.length - 1))}
					>
						❮
					</button>
					<div className="w-full">
						<img src={images[image]} className="w-screen h-[calc(100dvh-5rem)] object-cover" />
					</div>
					<button
						onClick={() => setImage((prev) => (prev !== images?.length - 1 ? prev + 1 : 0))}
						className="text-slate-100 absolute right-[8px] top-1/2 h-12 w-12 bg-slate-400 rounded-full hover:bg-slate-300/80 transition-all duration-150"
					>
						❯
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
