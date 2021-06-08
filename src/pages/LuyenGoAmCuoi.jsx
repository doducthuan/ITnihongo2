import React, { useEffect, useState } from "react";
import Header from "../components/LuyenGo/Header";
import Lessons from "../components/LuyenGo/Lessons";
import LuyenGo from "../components/LuyenGo/LuyenGo";
import MainSlideBarContainer from "../components/MainSlideBarContainer";
import NavBar from "../components/NavBar";
import KeyData from "../constants/KeyData";
import AmCuoi from "../utils/AmCuoi";

const LuyenGoAmCuoi = () => {
	const [state, setState] = useState({
		lesson: 0,
		data: [],
		numberOfLesson: 0,
	});

	useEffect(() => {
		let data = [];
		const numberOfLesson = Math.ceil(KeyData.AmCuoi.length / 5);
		for (let i = 0; i < numberOfLesson; i++) {
			data.push(KeyData.AmCuoi.slice(i * 5, (i + 1) * 5));
		}
		setState(state => ({...state, data, numberOfLesson}))
	}, []);

	const setLesson = (selected, lesson) => {
		setState(state => ({...state, selected, lesson}));
	};
	return (
		<div>
			<MainSlideBarContainer />
			<NavBar />
			<div className="content-wrapper">
				<Header selected={state.selected} title={'Luyện gõ âm cuối'} lesson={state.lesson} setLesson={setLesson} />
				<div style={{display: 'flex', flexDirection: 'row'}}>
					{state.lesson === 0 ? <div style={{flex: 1, marginLeft: 200, marginRight: 200}}>
						<Lessons data={state.data} setLesson={setLesson} />
					</div> : <LuyenGo title={'Luyện gõ âm cuối'} lesson={state.lesson} currentData={state.data[state.lesson - 1]} listKeys={AmCuoi.amCuoiN} />}
				</div>
			</div>
		</div>
	);
};

export default LuyenGoAmCuoi;
