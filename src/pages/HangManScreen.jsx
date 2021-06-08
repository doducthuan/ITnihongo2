import React, {useState} from 'react';
import Instruction from '../components/HangMan/Instruction';
import PlayScreen from '../components/HangMan/PlayScreen';
import ScoreBoard from '../components/HangMan/ScoreBoard';
import MainSlideBarContainer from '../components/MainSlideBarContainer';
import NavBar from '../components/NavBar';

const HangManScreen = () => {
	const [state, setState] = useState({
		step: 0,
		point: 0,
	});

	const setStep = (step) => {
		setState(state => ({...state, step}));
	};

	const goToStep2 = (point) => {
		setState(state => ({...state, step: 2, point}));
	};

	return (
		<div>
			<MainSlideBarContainer />
			<NavBar />
			<div className="content-wrapper">
				{state.step === 0 && <Instruction setStep={setStep} />}
				{state.step === 1 && <PlayScreen setStep={setStep} goToStep2={goToStep2} />}
			</div>
		</div>
	);
};

export default HangManScreen;
