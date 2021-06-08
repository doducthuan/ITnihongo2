import React, { useEffect, useState } from "react";
import Header from "../components/LuyenGo/Header";
import Lessons from "../components/LuyenGo/Lessons";
import LuyenGo from "../components/LuyenGo/LuyenGo";
import MainSlideBarContainer from "../components/MainSlideBarContainer";
import NavBar from "../components/NavBar";
import KeyData from "../constants/KeyData";
import So from "../utils/So";

const LuyenGoSo = () => {
	const [state, setState] = useState({
		lesson: 0,
		data: [],
		numberOfLesson: 0,
	});

	useEffect(() => {
		let data = [];
		const numberOfLesson = Math.ceil(KeyData.So.length / 5);
		for (let i = 0; i < numberOfLesson; i++) {
			data.push(KeyData.So.slice(i * 5, (i + 1) * 5));
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
				<Header selected={state.selected} title={'Luyện gõ số'} lesson={state.lesson} setLesson={setLesson} />
				<div style={{display: 'flex', flexDirection: 'row'}}>
					{state.lesson === 0 ? <div style={{flex: 1, marginLeft: 200, marginRight: 200}}>
						<Lessons data={state.data} setLesson={setLesson} />
					</div> : <LuyenGo title={'Luyện gõ số'} lesson={state.lesson} currentData={state.data[state.lesson - 1]} listKeys={So.soN} />}
				</div>
			</div>
		</div>
	);
};

export default LuyenGoSo;
