import React, {useEffect, useRef, useState} from 'react';
import KeyCode from '../../utils/KeyCode';
import KeyBoard from '../KeyBoard';
import KeyBoard2 from '../KeyBoard2';

const LuyenViet = ({title, lesson, currentData, listKeys}) => {
	const [state, setState] = useState({
		text: currentData[Math.round(Math.random() * (currentData.length - 1))],
		nextTexts: [currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))]],
		prevTexts: [],
		keys: [],
		shouldSearch: true,
		numberOfKeys: 0,
		isSuggest: false,
	});
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	useEffect(() => {
		setState(currentState => ({
			...currentState,
			text: currentData[Math.round(Math.random() * (currentData.length - 1))],
			nextTexts: [currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))], currentData[Math.round(Math.random() * (currentData.length - 1))]],
			prevTexts: [],
			keys: [],
			shouldSearch: true,
			numberOfKeys: 0,
		}));
	}, [currentData]);

	console.log(state.text);

	const handleKeyDown = (event) => {
		const {key} = event;
		if (listKeys.includes(key)) {
			if (!state.keys.includes(key)) setState(state => ({...state, keys: [...state.keys, key], numberOfKeys: state.numberOfKeys + 1}));
		} else {
			setState(state => ({...state, numberOfKeys: state.numberOfKeys + 1, shouldSearch: false}));
		}
	};

	const handleKeyUp = () => {
		if (state.numberOfKeys === 1) {
			if (state.shouldSearch) {
				if (state.keys.map(key => KeyCode.convertKey(key)).sort().join('').split('-').join('') === state.text.tk.toLowerCase().split('').sort().join('').split('-').join('')) {
					setState(state => ({
						...state,
						text: state.nextTexts[0],
						nextTexts: state.nextTexts.map((key, index) => {
							if (index < 3) return state.nextTexts[index + 1];
							return currentData[Math.round(Math.random() * (currentData.length - 1))];
						}),
						prevTexts: state.prevTexts.length === 4 ? state.prevTexts.map((key, index) => {
							if (index < 3) return state.prevTexts[index + 1];
							return state.text;
						}) : [...state.prevTexts, state.text],
						keys: [],
						shouldSearch: true,
						numberOfKeys: 0
					}));
				} else {
					setState(state => ({...state, keys: [], shouldSearch: true, numberOfKeys: 0}));
				}
			} else {
				setState(state => ({...state, keys: [], shouldSearch: true, numberOfKeys: 0}));
			}
		} else {
			setState(state => ({...state, numberOfKeys: state.numberOfKeys - 1}));
		}
	};

	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 6, marginLeft: 20, marginRight: 20, marginTop: 20}}>
			<div style={{width: '100%'}}><b style={{fontFamily: 'Monda-Bold'}}>{title} - Bài {lesson}</b></div>
			<div style={{width: '100%'}}><div style={{display: 'flex', flexDirection: 'row-reverse'}}><div onClick={() => setState(currentState => ({...currentState, isSuggest: !currentState.isSuggest}))} className="button2">{state.isSuggest ? 'Ẩn gợi ý' : 'Hiện gợi ý'}</div></div></div>
			<div style={{display: 'flex', flexDirection: 'column', marginTop: 10, width: 600, height: 80, backgroundColor: 'white', borderRadius: 20}}>
				<div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', userSelect: 'none'}}>
					<div style={{display: 'flex', flex: 1, justifyContent: 'space-around', marginTop: 18}}>
						{state.prevTexts.map(key => <p style={{width: 40, color: '#999', textAlign: 'center'}}>{key.vn}</p>)}
					</div>
					<p style={{fontFamily: 'Monda-Bold', fontSize: 30}}>{state.text.vn}</p>
					<div style={{display: 'flex', flex: 1, justifyContent: 'space-around', marginTop: 18}}>
						{state.nextTexts.map(key => <p style={{width: 40, color: '#999', textAlign: 'center'}}>{key.vn}</p>)}
					</div>
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'column', marginLeft: 60, marginRight: 60, marginTop: 10, alignItems: 'center'}}>
				<input ref={inputRef} value={''} style={{height: 30, width: 400}} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
			</div>
			<div style={{marginTop: 10, width: 1000}}>
				<div className="zerodot8" style={{display: 'flex'}}>
					<KeyBoard keys={state.keys} listKeys={listKeys} suggestKeys={state.isSuggest ? state.text.tk.split('').sort().join('').split('-').join('').split('') : []} />
					<div style={{marginLeft: 20}}>
						<KeyBoard2 keys={state.keys} listKeys={listKeys} suggestKeys={state.isSuggest ? state.text.tk.split('').sort().join('').split('-').join('').split('') : []} />
					</div>
				</div>
				
			</div>
			<div style={{display:"flex", justifyContent:"center"}}>
				{state.isSuggest && state.text.tk === "TP" && <img style={{maxWidth: '80%'}} src={`${window.location.origin}/dist/img/d.png`} alt="" />}
				{state.isSuggest && state.text.tk === "P" && <img style={{maxWidth: '80%'}} src={`${window.location.origin}/dist/img/b.png`} alt="" />}
				{state.isSuggest && state.text.tk === "KR" && <img style={{maxWidth: '80%'}} src={`${window.location.origin}/dist/img/ngh.png`} alt="" />}
				{state.isSuggest && state.text.tk === "KP" && <img style={{maxWidth: '80%'}} src={`${window.location.origin}/dist/img/gh.png`} alt="" />}
				{state.isSuggest && state.text.tk === "KH" && <img style={{maxWidth: '80%'}} src={`${window.location.origin}/dist/img/kh.png`} alt="" />}
			</div>
		</div>
	)
};

export default LuyenViet;
