import React, {useState} from 'react';
import AboutUs from '../components/StartScreen/AboutUs';
import Introduce from '../components/StartScreen/Introduce';
import Login from '../components/StartScreen/Login';
import Register from '../components/StartScreen/Register';
import StartScreenNavBar from '../components/StartScreenNavBar';

const StartScreen = () => {
	const [selected, setSelected] = useState(0);
	return (
		<div>
			<StartScreenNavBar setSelected={setSelected} />
			{selected === 0 ? <Introduce setSelected={setSelected} /> : null}
			{selected === 1 ? <AboutUs /> : null}
			{selected === 2 ? <Login setSelected={setSelected} /> : null}
			{selected === 3 ? <Register setSelected={setSelected} /> : null}
		</div>
	);
};

export default StartScreen;
