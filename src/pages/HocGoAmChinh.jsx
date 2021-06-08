import React, {useEffect, useState} from "react";
import CardView from "../components/HocGo/CardView";
import Header from "../components/HocGo/Header";
import Lessons from "../components/HocGo/Lessons";
import LuyenViet from "../components/HocGo/LuyenViet";
import QuyTacGoAmChinh from "../components/HocGo/QuyTacGoAmChinh";
import MainSlideBarContainer from "../components/MainSlideBarContainer";
import NavBar from "../components/NavBar";
import KeyData from "../constants/KeyData";
import AmChinh from "../utils/AmChinh";

const HocGoAmChinh = () => {
	const [state, setState] = useState({
		selected: 0,
		lesson: 0,
		data: [],
		numberOfLesson: 0,
	});

	useEffect(() => {
		let data = [];
		const numberOfLesson = Math.ceil(KeyData.AmChinh.length / 5);
		for (let i = 0; i < numberOfLesson; i++) {
			data.push(KeyData.AmChinh.slice(i * 5, (i + 1) * 5));
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
				<Header selected={state.selected} setSelected={setSelected} title={'Học gõ âm chính'} lesson={state.lesson} setLesson={setLesson} />
				<div style={{display: 'flex', flexDirection: 'row'}}>
					{state.lesson === 0 ? <QuyTacGoAmChinh /> : state.selected === 0 ? <CardView title={'Học gõ chính'} lesson={state.lesson} currentData={state.data[state.lesson - 1]} /> : <LuyenViet title={'Học gõ âm đầu'} lesson={state.lesson} currentData={state.data[state.lesson - 1]} listKeys={AmChinh.amChinhN} />}
					{state.lesson === 0 && <Lessons data={state.data} setLesson={setLesson} />}
				</div>
			</div>
		</div>
	);
};

export default HocGoAmChinh;
