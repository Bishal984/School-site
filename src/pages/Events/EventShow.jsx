import React, { useState } from 'react';
import Card from '../../components/Card';
import { FaCalendar } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaWindows } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaUsers } from 'react-icons/fa6';
import { RiSaveLine } from 'react-icons/ri';
import { RiShareFill } from 'react-icons/ri';
import { FaArrowDownLong } from 'react-icons/fa6';
import { FaArrowUpLong } from 'react-icons/fa6';
const EventShow = () => {
	const mapStyle = {
		border: 0,
		borderRadius: 5,
	};
	const [showMap, setShowMap] = useState(true);
	return (
		<div className="w-full mx-auto py-16">
			<div className={[`relative ${!showMap ? 'pb-40' : 'p-0'}`]}>
				<div className="bg-slate-700 p-4 text-center text-slate-50">
					<h2 className="text-xl uppercase text-slate-50">Conference/Symphosim</h2>
					<h1 className="text-3xl capitalize font-semibold">Stanford Cancer Institute Retreat</h1>
					<h3 className="text-lg capitalize ">Sponsored by Stanford Cancer Institute</h3>
				</div>
				<div className="w-[80%] mx-auto flex gap-x-8 p-2 justify-end">
					<div className={[`absolute top-1 left-20 translate-y-16 transition`]}>
						<Card className="w-96 pb-16">
							<Card.Image className="h-96 object-cover" />
							<Card.Body>
								<Card.Description className="p-2 space-y-6">
									<div className="flex gap-x-2 items-center pt-6">
										<FaCalendar />
										<span className="text-base font-bold">Tuesday,March 26,2024</span>{' '}
									</div>
									<div>
										<span className="text-base">Add to Calender</span>
										<div className="flex gap-x-1 text-sky-500">
											<FaGoogle />
											<FaApple />
											<FaWindows />
										</div>
									</div>
									<div>
										<div className="flex gap-x-2 items-center">
											<FaLocationDot />
											<span className="text-base font-bold text-sky-500">Kathmandu Nepal</span>
										</div>
										<span className="px-2 text-base">291 Campus Drive, Stanford, CA 94305</span>
									</div>
									<div className="space-y-1">
										<div className="flex gap-x-2 items-center">
											<FaUsers />
											<span className="text-base font-bold">This Event is Open to:</span>
										</div>
										<div className="space-x-2 text-slate-50 pl-8">
											<span className="bg-slate-700 hover:bg-slate-700/95 transition-all duration-150 p-1">
												Students
											</span>
											<span className="bg-slate-700 hover:bg-slate-700/95 transition-1ll duration-150 p-1">
												Faculty
											</span>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span className="flex gap-x-2 items-center bg-slate-300 p-1">
											<RiSaveLine className="text-sky-500" />
											Save
										</span>
										<span className="flex gap-x-2 items-center">
											Share
											<RiShareFill className="text-sky-500" fontSize={20} />
										</span>
									</div>
								</Card.Description>
							</Card.Body>
						</Card>
					</div>
					<div className="w-[70%]">
						<div className="space-y-4 py-4">
							<h2 className="text-xl font-semibold">Event Details</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed porro voluptatem perspiciatis rem maxime
								ullam, minus doloribus dolorem saepe non vitae nemo fugit ea quas nesciunt architecto beatae? Velit
								soluta, voluptatibus beatae provident molestiae non nemo quo magni dignissimos, unde voluptas facere
								deserunt corporis! Animi molestiae sint aperiam, odit ea quae iure unde quas tempora, eaque rem
								repellat, iusto
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus earum ut aliquam temporibus
								asperiores quo neque perferendis minus esse harum. Vel facilis similique, eum veniam quo fugiat ducimus
								sit suscipit dolorem optio rerum, sint rem dolore! Suscipit quibusdam praesentium, sed consequuntur ut
								id nulla minus repellat hic voluptate ab obcaecati. Soluta iusto dolore tenetur inventore architecto
								fugit consequuntur vel id. Exercitationem sit dolore nihil earum mollitia, distinctio cum iure error
								quia pariatur optio quisquam tempora quidem consequatur nesciunt inventore tenetur aspernatur vero ipsum
								repudiandae, temporibus ratione ab incidunt! Aliquid ullam quasi totam voluptate similique temporibus,
								cupiditate architecto distinctio impedit voluptates.
							</p>
							<hr />
							<div className="flex gap-x-4">
								<button className="bg-slate-700 p-1 text-slate-50 hover:bg-slate-700/95 transition-all duration-150">
									Conference
								</button>
								<button className="bg-slate-700 p-1 text-slate-50 hover:bg-slate-700/95 transition-all duration-150">
									Lecturer
								</button>
								<button className="bg-slate-700 p-1 text-slate-50 hover:bg-slate-700/95 transition-all duration-150">
									Social Event
								</button>
								<button className="bg-slate-700 p-1 text-slate-50 hover:bg-slate-700/95 transition-all duration-150">
									Medicine
								</button>
								<button className="bg-slate-700 p-1 text-slate-50 hover:bg-slate-700/95 transition-all duration-150">
									Science
								</button>
							</div>
							<hr />
							<div>
								<h2 className="text-xl font-semibold">Location:</h2>
								<button className="text-base font-bold text-sky-500 flex items-center">
									{showMap ? (
										<span className="flex items-center gap-x-1" onClick={() => setShowMap(false)}>
											{' '}
											Hide Map <FaArrowUpLong />
										</span>
									) : (
										<span className="flex items-center gap-x-1" onClick={() => setShowMap(true)}>
											Show Map <FaArrowDownLong />
										</span>
									)}
								</button>
								{showMap && (
									<iframe
										src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d114244.49601916959!2d87.2939114!3d26.5156054!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1711360998199!5m2!1sen!2snp"
										width="100%"
										height="450"
										style={mapStyle}
										allowfullscreen=""
										loading="lazy"
										referrerpolicy="no-referrer-when-downgrade"
									></iframe>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventShow;
