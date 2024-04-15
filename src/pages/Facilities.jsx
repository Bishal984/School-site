import React from 'react';
import Card from '../components/Card';
import { FaStar } from 'react-icons/fa';
const Facilities = () => {
	const facilitiesItems = [
		{
			id: 30,
			title: 'World Class Library',
			src: 'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae minus officiis quis harum quia?',
		},
		{
			id: 31,
			title: 'Largest Play ground',
			src: 'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae minus officiis quis harum quia?',
		},
		{
			id: 32,
			title: 'Healty and tasty food',
			src: 'https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',

			description:
				'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam molestiae minus officiis quis harum quia?',
		},
	];
	return (
		<div className="w-[80%] mx-auto">
			<div className="flex items-center justify-center flex-col space-y-2">
				<h2 className="text-2xl font-bold leading-3 tracking-normal">Our Facilities</h2>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, possimus.</p>
			</div>
			<div className="grid grid-cols-3 gap-x-4 py-12">
				{facilitiesItems?.map((item) => (
					<>
						<Card
							key={item?.id}
							className="w-92 space-y-3 rounded-xl hover:scale-105 transition-all ease-in-out duration-150 cursor-pointer"
						>
							<Card.Image src={item?.src} alt="picture" className="rounded-t-xl h-60 object-cover" />
							<Card.Body className="px-2 pb-8">
								<Card.Title className="">
									<h1 className="font-bold tracking-normal capitalize">{item?.title}</h1>
								</Card.Title>
								<Card.Description className="space-y-3">
									<p className="text-slate-500">{item?.description}</p>
									<span className="flex gap-x-1 text-yellow-600">
										{Array.from({ length: 5 }, (v, i) => i).map((item) => (
											<FaStar />
										))}
										{/* <FaStar /> */}
									</span>
								</Card.Description>
							</Card.Body>
						</Card>
					</>
				))}
			</div>
		</div>
	);
};

export default Facilities;
