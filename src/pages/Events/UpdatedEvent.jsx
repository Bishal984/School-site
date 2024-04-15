import React, { useState } from 'react';
import Card from '../../components/Card';
import {useNavigate} from 'react-router-dom'
const UpdatedEvent = () => {
	const navigate=useNavigate();
	const eventList = [
		{
			id: 12,
			src: 'https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
			title: 'Epic Dance competition',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non possimus aperiam ea oditeaque magni incidunt ipsam reprehenderit deleniti!',
			date: '22 /n Mar 2024',
		},
		{
			id: 13,
			src: '',
			title: 'Admitted Student Day',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non possimus aperiam ea oditeaque magni incidunt ipsam reprehenderit deleniti!',
			date: '24 /n Jun 2024',
		},
		{
			id: 14,
			src: '',
			title: 'Yoga and Health Related Training',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non possimus aperiam ea oditeaque magni incidunt ipsam reprehenderit deleniti!',
			date: '30 /n July 2024',
		},
		{
			id: 15,
			src: '',
			title: 'Holi Festival and Related Program',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non possimus aperiam ea oditeaque magni incidunt ipsam reprehenderit deleniti!',
			date: '01 /n Mar 2024',
		},
		{
			id: 16,
			src: '',
			title: 'Speech and Poem competition',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur non possimus aperiam ea oditeaque magni incidunt ipsam reprehenderit deleniti!',
			date: '05 /n Mar 2024',
		},
	];
	const [showEvent, setShowEvent] = useState([eventList[0], eventList[1], eventList[2]]);
	const [showButton,setShowButton]=useState(true)
	return (
		<div className="w-[80%] mx-auto space-y-8 min-h-screen py-16">
			<div>
				<h1 className="text-2xl font-semibold font-notoSans">Our Events</h1>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, error!</p>
			</div>
			<div className="grid grid-cols-3 gap-y-12">
				{showEvent?.map((event) => (
					<Card className="relative space-y-4 hover:shadow-lg cursor-pointer hover:scale-105 ease-in-out duration-150">
						<Card.Image className="rounded-t-xl object-cover h-48" alt="" />
						<Card.Body className="space-y-4">
							<Card.Title className="px-2">
								<h1 className="text-xl">{event?.title}</h1>
							</Card.Title>
							<Card.Description className="space-y-4">
								<p className="absolute top-0 left-6 flex flex-col bg-slate-700 text-slate-100 text-center p-2 rounded-b-xl">
									<span className="text-2xl font-semibold leading-8 text-slate-100">
										{(event?.date).split('/n')[0]}
									</span>
									<span className="text-base">{(event?.date).split('/n')[1]}</span>
								</p>
								<p className="text-slate-800 px-2">{event?.description}</p>
								<button className="bg-slate-800 w-full p-2 text-center rounded-b-xl text-xl text-slate-100 hover:bg-slate-800/90 transition-all duration-150" onClick={()=>navigate('/event/123')}>
									Learn More
								</button>
							</Card.Description>
						</Card.Body>
					</Card>
				))}
			</div>
			<div className="text-center">
			{showButton &&	<button className="p-2 border shadow-md border-red-700 rounded-full text-lg font-semibold text-red-800 hover:bg-red-800 hover:text-slate-100 transition-all duration-150 hover:shadow-lg" onClick={()=>
				{
					setShowButton(false)
					setShowEvent((prev)=>[...prev,eventList[3],eventList[4]])
				}
				}>
					Show More
				</button>}
			</div>
		</div>
	);
};

export default UpdatedEvent;
