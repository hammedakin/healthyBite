import React from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

AOS.init();

function App() {

	return (
		<Routes>

			{/* Landing */}
			<Route path="/" element={<Home />} />

			{/* Error */}
			<Route path="*" element={<ErrorPage />} />

		</Routes>
	);
}
export default App;
