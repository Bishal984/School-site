import React from 'react';
import Card from '../../components/Card';
const Courses = () => {
	const courseList = [
		{
			id: 40,
			title: 'Diploma in Pharmacy',
			src: './assets/pharmacy.png',
		},
		{
			id: 41,
			title: 'Pre School Courses',
			src: './assets/school.png',
		},
		{
			id: 42,
			title: 'Diploma in hydropower',
			src: './assets/hydropower.png',
		},
	];
	return (
		<div className="w-[80%] mx-auto space-y-4 py-12">
			<div className="text-center">
				<h1 className="text-2xl font-semibold ">Courses We Offer</h1>
			</div>
			<div className="grid grid-cols-3">
				{courseList?.map((course) => (
					<Card className="p-4 rounded-xl" key={course?.id}>
						<Card.Body className="flex p-4 items-center">
							<div className="space-y-8">
								<h2 className="text-xl font-semibold capitalize">{course?.title}</h2>
								<button className="bg-blue-400 p-2 rounded-xl hover:scale-105 hover:shadow-md text-white transition-all ease-in-out duration-150">
									Learn More
								</button>
							</div>
							<img
								src={course?.src}
								alt="pharmacy"
								className="w-48 h-48 object-cover hover:scale-105 transition-all ease-in-out duration-150"
							/>
						</Card.Body>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Courses;
