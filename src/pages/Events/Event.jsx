import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEventAvailable } from 'react-icons/md';
import { MdOutlineEventNote } from 'react-icons/md';
const Event = () => {
	const ele = Array.from({ length: 8 }, (v, i) => i).map((i) => i);
	return (
		<div className="w-full !h-1/2 pb-10 flex justify-center gap-16 my-8">
			<div className="w-1/3 h-96 space-y-2">
				<h1 className="text-xl font-semibold text-teal-500 flex gap-x-1 items-center">
					<MdOutlineEventNote /> Notice Board
				</h1>
				<div className="bg-slate-50 border-2 border-sky-400 h-full rounded-xl overflow-scroll hideScrollBar">
					<ul className="p-4 space-y-3">
						{ele.map((i) => (
							<li className="text-lg">
								<span className="text-white bg-orange-400 px-2 py-1 rounded-lg !text-base mr-2">new</span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quod.
							</li>
						))}

						{/* */}
					</ul>
				</div>
			</div>
			<div className="w-1/3 h-96 space-y-2">
				<h1 className="text-xl font-semibold text-teal-500 flex gap-x-1 items-center">
					<MdEventAvailable />
					Upcomming Events
				</h1>
				<div className="bg-slate-50 border-2 border-sky-400 h-full rounded-xl overflow-scroll hideScrollBar">
					<ul className="p-4 space-y-3">
						{ele.map((i) => (
							<li className="flex border p-2 rounded-xl">
								<div className="flex gap-x-2 justify-between items-center">
									<div className="border rounded-xl flex justify-center items-center flex-col w-32">
										<div className="flex flex-col justify-center items-center text-lg font-semibold">
											<span>27</span>
											<span>April</span>
										</div>
										<div className="bg-purple-900 flex flex-col rounded-b-xl w-full text-center text-sm font-semibold text-slate-200">
											<span>9:00 AM</span>
											<span>4:00 PM</span>
										</div>
									</div>
									<div className="flex justify-between flex-col gap-2">
										<div>
											<p>Lorem ipsum dolor sit amet consectetur.</p>
											<p className="flex gap-x-8 items-center">
												<span className="flex gap-x-1 font-semibold text-teal-500">
													<FaUser /> Jhon bood
												</span>
												<span className="flex gap-x-1 items-center font-semibold text-teal-500">
													<FaLocationDot /> Syangja
												</span>
											</p>
										</div>
										<hr />
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis quisquam beatae?
										</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Event;
