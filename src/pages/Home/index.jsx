import React from 'react';
import Hero from './Hero.jsx';
import Event from '../Events/Event.jsx';
import Testimonial from './Testimonial.jsx';
import Facilities from '../Facilities.jsx';
import UpdatedEvent from '../Events/UpdatedEvent.jsx';
import Gallery from './Gallery.jsx';
import Courses from './Courses.jsx';
const Home = () => {
	return (
		<>
			<Hero />
			{/* <Event /> */}
			<UpdatedEvent />
			<Courses />
			<Gallery />
			<Facilities />
			<Testimonial />
		</>
	);
};

export default Home;
