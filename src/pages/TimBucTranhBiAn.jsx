import React, {useState} from 'react';
import MainSlideBarContainer from '../components/MainSlideBarContainer';
import NavBar from '../components/NavBar';
import Step1 from '../components/TimBucTranhBiMat/Step1';
import Step2 from '../components/TimBucTranhBiMat/Step2';
import Step3 from '../components/TimBucTranhBiMat/Step3';
import '../css/TimBucTranhBiAn.css';

const TimBucTranhBiAn = () => {
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
				{state.step === 0 && <Step1 setStep={setStep} />}
				{state.step === 1 && <Step2 setStep={setStep} goToStep2={goToStep2} />}
				{state.step === 2 && <Step3 setStep={setStep} point={state.point} />}
			</div>
		</div>
	);
};

export default TimBucTranhBiAn;
