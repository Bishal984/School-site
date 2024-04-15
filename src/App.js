import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/defaultLayout';
import Home from './pages/Home';
import UpdatedEvent from './pages/Events/UpdatedEvent';
import EventShow from './pages/Events/EventShow';
import CoursesDetails from './pages/Courses/CoursesDetails';
function App() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route index element={<Home />} />
				<Route path="/event/123" element={<EventShow />}></Route>
				<Route path="/courseDetail/123" element={<CoursesDetails />}></Route>
				<Route path="/event" element={<UpdatedEvent />}>
					<Route path="/event/123" element={<EventShow />}></Route>
				</Route>
				{/* <Route path="/aboutus" element={<h2>About US page</h2>}></Route> */}
			</Route>
		</Routes>
	);
}

export default App;
