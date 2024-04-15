import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
const Testimonial = () => {
	return (
		<div className="w-full h-full">
			<div className="text-center">
				<h2 className="text-2xl capitalize font-bold">
					What <span className="text-teal-500">Student's Say </span>about our campus
				</h2>
				<p className="text-slate-900">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit velit amet cum magni, modi ipsum.
				</p>
			</div>
			<div className="w-full">
				<div className="flex justify-center">
					{Array.from({ length: 3 }, (v, i) => i).map((item) => (
						<div className="w-1/5 p-2 m-4 rounded-xl shadow-lg flex flex-col gap-y-3 py-4">
							<div className="flex items-center justify-between">
								<div className="flex gap-x-2 items-center">
									<img
										src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
										alt=""
										className="w-16 h-16 object-cover rounded-full"
									/>
									<div className="flex flex-col">
										<span className="text-xl font-semibold">Juna Dhungana</span>
										<span className="text-base text-slate-400">Web developer</span>
									</div>
								</div>
								<div className="">
									<FaQuoteRight className="text-4xl text-teal-400" />
								</div>
							</div>
							<div>
								<h3 className="text-xl font-bold text-purple-600 leading-8">Great Courses</h3>
								<p className="text-slate-800">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis rerum numquam temporibus
									repellendus incidunt labore qui, voluptatum quos nostrum?
								</p>
							</div>
							<div>
								<span className="flex text-yellow-600 gap-x-1">
									{Array.from({ length: 5 }, (v, i) => i).map((item) => (
										<FaStar />
									))}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
