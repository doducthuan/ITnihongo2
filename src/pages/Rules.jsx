import React, {useEffect, useState} from 'react';
import MainSlideBarContainer from '../components/MainSlideBarContainer';
import NavBar from '../components/NavBar';
import KeyData from '../constants/KeyData';

const Rules = () => {
	const [state, setState] = useState({
		selected: 0,
		data: KeyData.AmDau,
		filterText: '',
		displayData: [],
	});

	useEffect(() => {
		let displayData = state.data.filter(key => key.tk.toLowerCase().includes(state.filterText.toLowerCase()) || key.vn.includes(state.filterText.toLowerCase()));
		setState(state => ({...state, displayData}));
	}, [state.data, state.filterText]);

	const setSelected = (selected) => {
		setState(state => ({...state, selected, data: selected === 0 ? KeyData.AmDau : selected === 1 ? KeyData.AmChinh : KeyData.AmCuoi, filterText: '', displayData: []}));
	};

	const setFilterText = (event) => {
		setState(state => ({...state, filterText: event.target.value}));
	};

	return (
		<div>
			<NavBar />
			<MainSlideBarContainer />
			<div className="content-wrapper">
				<div style={{display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50}}>Quy tắc gõ tốc ký</div>
				<div style={{marginTop: 30, marginLeft: 50, marginRight: 50}}>
					<div style={{display: 'flex', flexDirection: 'row'}}>
						<div onClick={() => setSelected(0)} style={{display: 'flex', height: 40, width: 100, borderRadius: 10, color: state.selected === 0 ? 'white' : 'black', alignItems: 'center', justifyContent: 'center', backgroundColor: state.selected === 0 ? '#2F80ED' : '#FEECDC', userSelect: 'none'}}>
							Âm đầu
						</div>
						<div onClick={() => setSelected(1)} style={{display: 'flex', height: 40, width: 100, borderRadius: 10, color: state.selected === 1 ? 'white' : 'black', alignItems: 'center', justifyContent: 'center', backgroundColor: state.selected === 1 ? '#2F80ED' : '#FEECDC', userSelect: 'none', marginLeft: 20}}>
							Âm chính
						</div>
						<div onClick={() => setSelected(2)} style={{display: 'flex', height: 40, width: 100, borderRadius: 10, color: state.selected === 2 ? 'white' : 'black', alignItems: 'center', justifyContent: 'center', backgroundColor: state.selected === 2 ? '#2F80ED' : '#FEECDC', userSelect: 'none', marginLeft: 20}}>
							Âm cuối
						</div>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
						Tìm kiếm: <input value={state.filterText} onChange={setFilterText} style={{marginLeft: 20, borderWidth: 0.5, borderRadius: 10, borderColor: 'white'}} />
					</div>
					<div style={{display: 'flex', justifyContent: 'center', height: window.innerHeight * 0.6, overflowX: 'auto', marginTop: 20}}>
						<table class="table table-hover text-nowrap">
							<thead style={{textAlign: 'center'}}>
								<tr>
									<th>STT</th>
									<th>{state.selected === 0 ? 'Âm đầu' : state.selected === 1 ? 'Âm chính' : 'Âm cuối'}</th>
									<th>Tổ hợp phím tốc ký</th>
								</tr>
							</thead>
							<tbody style={{textAlign: 'center'}}>
								{state.displayData.map((key, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{key.vn}</td>
										<td>{key.tk}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rules;
