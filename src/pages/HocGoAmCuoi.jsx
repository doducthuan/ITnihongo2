import React, {useEffect, useState} from "react";
import CardView from "../components/HocGo/CardView";
import Header from "../components/HocGo/Header";
import Lessons from "../components/HocGo/Lessons";
import LuyenViet from "../components/HocGo/LuyenViet";
import QuyTacGoAmCuoi from "../components/HocGo/QuyTacGoAmCuoi";
import MainSlideBarContainer from "../components/MainSlideBarContainer";
import NavBar from "../components/NavBar";
import KeyData from "../constants/KeyData";
import AmCuoi from "../utils/AmCuoi";

const HocGoAmCuoi = () => {
	const [state, setState] = useState({
		selected: 0,
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

	const setSelected = (selected) => {
		setState(state => ({...state, selected}));
	};

	const setLesson = (selected, lesson) => {
		setState(state => ({...state, selected, lesson}));
	};

	return (
		<div>
			<MainSlideBarContainer />
			<NavBar />
			<div className="content-wrapper">
				<Header selected={state.selected} setSelected={setSelected} title={'Học gõ âm đầu'} lesson={state.lesson} setLesson={setLesson} />
				<div style={{display: 'flex', flexDirection: 'row'}}>
					{state.lesson === 0 ? <QuyTacGoAmCuoi /> : state.selected === 0 ? <CardView title={'Học gõ âm đầu'} lesson={state.lesson} currentData={state.data[state.lesson - 1]} /> : <LuyenViet title={'Học gõ âm đầu'} lesson={state.lesson} currentData={state.data[state.lesson - 1]} listKeys={AmCuoi.amDauN} />}
					{state.lesson === 0 && <Lessons data={state.data} setLesson={setLesson} />}
				</div>
			</div>
		</div>
	);
};

export default HocGoAmCuoi;
