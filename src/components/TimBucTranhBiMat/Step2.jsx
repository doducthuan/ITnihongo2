/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import BeautyImage from '../../constants/BeautyImage';
import KeyData from '../../constants/KeyData';
import 'react-toastify/dist/ReactToastify.css';

const Step2 = ({goToStep2}) => {
	const [state, setState] = useState({
		bgImage: BeautyImage.ImageUrl[~~(Math.random() * 9)],
		type: 0,
		totalPoint: 0,
		cards: [],
		cardLeft: 20,
		error: 0,
		selectedCard: null,
		selectedIndex: -1,
		expectedResult: '',
	});
	const [timeLeft, setTimeLeft] = useState(120);

	useEffect(() => {
		const interval = setInterval(() => {
			if (timeLeft > 0) {
				setTimeLeft(timeLeft - 1);
			}
		}, 1000);
		return () => clearInterval(interval);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeLeft]);

	const generateMap = useCallback(() => {
		let temp = [];
		if (state.type === 0) {
			temp = KeyData.AmDau;
		}
		if (state.type === 1) {
			temp = KeyData.AmChinh;
		}
		if (state.type === 2) {
			temp = KeyData.AmCuoi;
		}
		if (state.type === 3) {
			temp = KeyData.AmDau.concat(KeyData.AmChinh).concat(KeyData.AmCuoi);
		}
		temp = temp.map(x => {
			x.num = Math.random();
			return x;
		});
		temp.sort((x, y) => x.num - y.num);
		temp = temp.slice(0, 10);
		let cards = [];
		temp.forEach(x => {
			cards.push({text: x.tk, num: Math.random(), visible: true, selected: false});
			cards.push({text: x.vn, num: Math.random(), visible: true, selected: false});
		});
		cards = cards.sort((x, y) => x.num - y.num);
		setState({...state, cards});
		setTimeLeft(120);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.type]);

	useEffect(() => {
		generateMap();
	}, [generateMap]);

	const onSelect = useCallback((index) => {
		console.log(state);
		if (state.selectedCard === null) {
			let cards = state.cards;
			let allCardsData = [];
			if (state.type === 0) {
				allCardsData = KeyData.AmDau;
			}
			if (state.type === 1) {
				allCardsData = KeyData.AmChinh;
			}
			if (state.type === 2) {
				allCardsData = KeyData.AmCuoi;
			}
			if (state.type === 3) {
				allCardsData = KeyData.AmDau.concat(KeyData.AmChinh).concat(KeyData.AmCuoi);
			}
			cards[index].selected = true;
			let expectedResult = '';
			if (cards[index].text === cards[index].text.toLowerCase()) {
				let cardIndex = allCardsData.findIndex(x => x.vn === cards[index].text);
				expectedResult = allCardsData[cardIndex].tk;
			} else {
				let cardIndex = allCardsData.findIndex(x => x.tk === cards[index].text);
				expectedResult = allCardsData[cardIndex].vn;
			}
			setState({...state, selectedCard: state.cards[index], selectedIndex: index, expectedResult, cards: [...cards]});
		} else {
			if (index === state.selectedIndex) return;
			if (state.cards[index].text === state.expectedResult) {
				let cards = state.cards;
				cards[index].visible = false;
				cards[state.selectedIndex].visible = false;
				if (state.cardLeft === 2) {
					// toast('	', {type: 'success'});
					// generateMap();
					goToStep2(100);
				} else {
					setState({...state, cards: [...cards], selectedCard: null, selectedIndex: -1, cardLeft: state.cardLeft - 2, totalPoint: state.totalPoint + 10});
				}
			} else {
				let cards = state.cards;
				cards[state.selectedIndex].selected = false;
				if (state.error === 2) {
					// toast(`Trò chơi đã kết thúc, điểm của bạn: ${state.totalPoint}`, {type: 'info'});
					// generateMap();
					goToStep2(state.totalPoint);
				} else {
					setState({...state, error: state.error + 1, selectedCard: null, selectedIndex: -1, cards: [...cards]});
				}
			}
		}
	}, [goToStep2, state]);

	const game = useMemo(() => {
		if (state.cards.length < 1) return <div style={{display: 'flex', flexDirection: 'column', flex: 4, marginTop: 30, marginLeft: 30, backgroundImage: `url(${state.bgImage})`, backgroundSize: 'cover'}} />
		return (
			<div style={{display: 'flex', flexDirection: 'column', flex: 4, marginTop: 30, marginLeft: 30, backgroundImage: `url(${state.bgImage})`, backgroundSize: 'cover'}}>
				<div style={{display: 'flex', flex: 1}}>
					<div onClick={() => onSelect(0)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[0].selected ? 'lightblue' : 'white', opacity: state.cards[0].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[0].visible ? 'auto' : 'none'}}>
						{state.cards[0].text}
					</div>
					<div onClick={() => onSelect(1)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[1].selected ? 'lightblue' : 'white', opacity: state.cards[1].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[1].visible ? 'auto' : 'none'}}>
						{state.cards[1].text}
					</div>
					<div onClick={() => onSelect(2)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[2].selected ? 'lightblue' : 'white', opacity: state.cards[2].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[2].visible ? 'auto' : 'none'}}>
						{state.cards[2].text}
					</div>
					<div onClick={() => onSelect(3)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[3].selected ? 'lightblue' : 'white', opacity: state.cards[3].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[3].visible ? 'auto' : 'none'}}>
						{state.cards[3].text}
					</div>
					<div onClick={() => onSelect(4)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[4].selected ? 'lightblue' : 'white', opacity: state.cards[4].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[4].visible ? 'auto' : 'none'}}>
						{state.cards[4].text}
					</div>
				</div>
				<div style={{display: 'flex', flex: 1}}>
					<div onClick={() => onSelect(5)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[5].selected ? 'lightblue' : 'white', opacity: state.cards[5].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[5].visible ? 'auto' : 'none'}}>
						{state.cards[5].text}
					</div>
					<div onClick={() => onSelect(6)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[6].selected ? 'lightblue' : 'white', opacity: state.cards[6].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[6].visible ? 'auto' : 'none'}}>
						{state.cards[6].text}
					</div>
					<div onClick={() => onSelect(7)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[7].selected ? 'lightblue' : 'white', opacity: state.cards[7].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[7].visible ? 'auto' : 'none'}}>
						{state.cards[7].text}
					</div>
					<div onClick={() => onSelect(8)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[8].selected ? 'lightblue' : 'white', opacity: state.cards[8].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[8].visible ? 'auto' : 'none'}}>
						{state.cards[8].text}
					</div>
					<div onClick={() => onSelect(9)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[9].selected ? 'lightblue' : 'white', opacity: state.cards[9].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[9].visible ? 'auto' : 'none'}}>
						{state.cards[9].text}
					</div>
				</div>
				<div style={{display: 'flex', flex: 1}}>
					<div onClick={() => onSelect(10)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[10].selected ? 'lightblue' : 'white', opacity: state.cards[10].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[10].visible ? 'auto' : 'none'}}>
						{state.cards[10].text}
					</div>
					<div onClick={() => onSelect(11)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[11].selected ? 'lightblue' : 'white', opacity: state.cards[11].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[11].visible ? 'auto' : 'none'}}>
						{state.cards[11].text}
					</div>
					<div onClick={() => onSelect(12)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[12].selected ? 'lightblue' : 'white', opacity: state.cards[12].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[12].visible ? 'auto' : 'none'}}>
						{state.cards[12].text}
					</div>
					<div onClick={() => onSelect(13)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[13].selected ? 'lightblue' : 'white', opacity: state.cards[13].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[13].visible ? 'auto' : 'none'}}>
						{state.cards[13].text}
					</div>
					<div onClick={() => onSelect(14)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[14].selected ? 'lightblue' : 'white', opacity: state.cards[14].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[14].visible ? 'auto' : 'none'}}>
						{state.cards[14].text}
					</div>
				</div>
				<div style={{display: 'flex', flex: 1}}>
					<div onClick={() => onSelect(15)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[15].selected ? 'lightblue' : 'white', opacity: state.cards[15].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[15].visible ? 'auto' : 'none'}}>
						{state.cards[15].text}
					</div>
					<div onClick={() => onSelect(16)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[16].selected ? 'lightblue' : 'white', opacity: state.cards[16].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[16].visible ? 'auto' : 'none'}}>
						{state.cards[16].text}
					</div>
					<div onClick={() => onSelect(17)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[17].selected ? 'lightblue' : 'white', opacity: state.cards[17].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[17].visible ? 'auto' : 'none'}}>
						{state.cards[17].text}
					</div>
					<div onClick={() => onSelect(18)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[18].selected ? 'lightblue' : 'white', opacity: state.cards[18].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[18].visible ? 'auto' : 'none'}}>
						{state.cards[18].text}
					</div>
					<div onClick={() => onSelect(19)} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: state.cards[19].selected ? 'lightblue' : 'white', opacity: state.cards[19].visible ? 1 : 0, margin: 5, borderRadius: 5, pointerEvents: state.cards[19].visible ? 'auto' : 'none'}}>
						{state.cards[19].text}
					</div>
				</div>
			</div>
		)
	}, [onSelect, state.bgImage, state.cards]);

	const setType = useCallback((type) => {
		setState({...state, type});
	}, [state]);

	const getTypeName = useCallback(() => {
		if (state.type === 0) return 'Âm đầu';
		if (state.type === 1) return 'Âm chính';
		if (state.type === 2) return 'Âm cuối';
		if (state.type === 3) return 'Tổng hợp';
	}, [state.type]);

	const parseTime = useCallback(() => {
		const minute = Math.floor(timeLeft / 60);
		const second = timeLeft % 60;
		return (minute < 10 ? '0' : '') + minute + ':' + (second < 10 ? '0' : '') + second;
	}, [timeLeft]);

	const score = useMemo(() => (
		<div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
			<div className="score1" style={{display: 'flex', flexDirection: 'column', padding: 20, marginTop: 30, marginLeft: 10, marginRight: 10}}>
				<div class="btn-group">
          <button type="button" class="btn btn-default">{getTypeName()}</button>
          <button type="button" class="btn btn-default dropdown-toggle dropdown-icon" data-toggle="dropdown" aria-expanded="false">
            <span class="sr-only">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu" role="menu">
            <a class="dropdown-item" onClick={() => setType(0)}>Âm đầu</a>
            <a class="dropdown-item" onClick={() => setType(1)}>Âm chính</a>
            <a class="dropdown-item" onClick={() => setType(2)}>Âm cuối</a>
            <a class="dropdown-item" onClick={() => setType(3)}>Tổng hợp</a>
          </div>
        </div>
				<div style={{marginTop: 20, fontSize: 30}}>
					<p><i style={{fontSize: 30, marginRight: 10}} className="far fa-clock"></i>{parseTime()}</p>
					<p style={{fontSize: 20}}>{'Điểm: ' + state.totalPoint}</p>
				</div>
			</div>
			<img src="https://i.imgur.com/yjRBm24.png" alt="CuteCat" style={{height: 256, width: 256}} />
		</div>
	), [getTypeName, parseTime, setType, state.totalPoint]);

	return (
		<div>
			<div style={{display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50}}>Trò chơi: Tìm Bức Tranh Bị Ẩn</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				{game}
				{score}
			</div>
		</div>
	);
};

export default Step2;
