import React, {useState} from 'react';

const CardView = ({title, lesson, currentData}) => {
	const [state, setState] = useState({
		selected: 0,
		type: true,
	});

	const setSelected = (change) => {
		setState(state => ({...state, selected: state.selected + change}));
	};

	const toggleType = () => {
		setState(state => ({...state, type: !state.type}));
	};

	return (
		<div style={{flex: 6, marginLeft: 200, marginRight: 200, marginTop: 40}}>
			<b style={{fontFamily: 'Monda-Bold'}}>{title} - Bài {lesson}</b>
			<div style={{display: 'flex', flexDirection: 'column', marginLeft: 60, marginRight: 60, marginTop: 30, height: 300, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
				<div style={{display: 'flex',flex: 1, flexDirection: 'row', alignItems: 'center'}}>
					<div style={{visibility: state.selected === 0 ? 'hidden' : 'visible', userSelect: 'none', marginLeft: 20, fontSize: 20}} onClick={() => setSelected(-1)}>&larr;</div>
					<div onClick={toggleType} style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', userSelect: 'none', cursor: 'grab'}}>
						<p style={{fontFamily: 'Monda-Bold', fontSize: 40}}>{state.type ? currentData[state.selected].vn : currentData[state.selected].tk}</p>
					</div>
					<div style={{visibility: state.selected === currentData.length - 1 ? 'hidden' : 'visible', userSelect: 'none', marginRight: 20, fontSize: 20}} onClick={() => setSelected(1)}>&rarr;</div>
				</div>
				<div style={{paddingLeft: 20, paddingBottom: 10}}>{state.type ? 'Chữ quốc ngữ' : 'Tổ hợp phím tốc ký'}</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 60, marginRight: 60, marginTop: 20, height: 50, backgroundColor: 'white'}}>
				<div style={{flex: 1}} />
				<div style={{visibility: state.selected === 0 ? 'hidden' : 'visible', userSelect: 'none'}} onClick={() => setSelected(-1)}>&larr;</div>
				<div style={{marginLeft: 20, marginRight: 20}}>{state.selected + 1}/{currentData.length}</div>
				<div style={{visibility: state.selected === currentData.length - 1 ? 'hidden' : 'visible', userSelect: 'none'}} onClick={() => setSelected(1)}>&rarr;</div>
				<div style={{flex: 1}} />
			</div>
		</div>
	);
};

export default CardView;
