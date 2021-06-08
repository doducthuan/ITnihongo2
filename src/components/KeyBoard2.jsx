import React from 'react';

const KeyBoard2 = ({keys, listKeys = [], suggestKeys = []}) => {
	console.log(keys);
	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<div className="key14" style={{display: 'flex', flexDirection: 'row'}}>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key15" style={keys.includes('q') ? {backgroundColor: 'red'} : listKeys.includes('q') && suggestKeys.includes('S') ? {backgroundColor: 'orange'} : {}}>
					S
				</div>
				<div className="key15" style={keys.includes('w') ? {backgroundColor: 'red'} : listKeys.includes('w') && suggestKeys.includes('K') ? {backgroundColor: 'orange'} : {}}>
					K
				</div>
				<div className="key15" style={keys.includes('e') ? {backgroundColor: 'red'} : listKeys.includes('e') && suggestKeys.includes('R') ? {backgroundColor: 'orange'} : {}}>
					R
				</div>
				<div className="key15" style={keys.includes('r') ? {backgroundColor: 'red'} : listKeys.includes('r') && suggestKeys.includes('N') ? {backgroundColor: 'orange'} : {}}>
					N
				</div>
				<div className="key15" style={keys.includes('t') ? {backgroundColor: 'red'} : listKeys.includes('t') && suggestKeys.includes('H') ? {backgroundColor: 'orange'} : {}}>
					H
				</div>
				<div className="key15" style={keys.includes('u') ? {backgroundColor: 'red'} : listKeys.includes('u') && suggestKeys.includes('*') ? {backgroundColor: 'orange'} : {}}>
					*
				</div>
				<div className="key15" style={keys.includes('i') ? {backgroundColor: 'red'} : listKeys.includes('i') && suggestKeys.includes('W') ? {backgroundColor: 'orange'} : {}}>
					W
				</div>
				<div className="key15" style={keys.includes('o') ? {backgroundColor: 'red'} : listKeys.includes('o') && suggestKeys.includes('J') ? {backgroundColor: 'orange'} : {}}>
					J
				</div>
				<div className="key15" style={keys.includes('p') ? {backgroundColor: 'red'} : listKeys.includes('p') && suggestKeys.includes('N') ? {backgroundColor: 'orange'} : {}}>
					N
				</div>
				<div className="key15" style={keys.includes('[') ? {backgroundColor: 'red'} : listKeys.includes('[') && suggestKeys.includes('T') ? {backgroundColor: 'orange'} : {}}>
					T
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key15" style={keys.includes('a') ? {backgroundColor: 'red'} : listKeys.includes('a') && suggestKeys.includes('T') ? {backgroundColor: 'orange'} : {}}>
					T
				</div>
				<div className="key15" style={keys.includes('s') ? {backgroundColor: 'red'} : listKeys.includes('s') && suggestKeys.includes('P') ? {backgroundColor: 'orange'} : {}}>
					P
				</div>
				<div className="key15" style={keys.includes('d') ? {backgroundColor: 'red'} : listKeys.includes('d') && suggestKeys.includes('H') ? {backgroundColor: 'orange'} : {}}>
					H
				</div>
				<div className="key15" style={keys.includes('f') ? {backgroundColor: 'red'} : listKeys.includes('f') && suggestKeys.includes('N') ? {backgroundColor: 'orange'} : {}}>
					N
				</div>
				<div className="key15" style={keys.includes('g') ? {backgroundColor: 'red'} : listKeys.includes('g') && suggestKeys.includes('S') ? {backgroundColor: 'orange'} : {}}>
					S
				</div>
				<div className="key15" style={keys.includes('j') ? {backgroundColor: 'red'} : listKeys.includes('j') && suggestKeys.includes('I') ? {backgroundColor: 'orange'} : {}}>
					I
				</div>
				<div className="key15" style={keys.includes('k') ? {backgroundColor: 'red'} : listKeys.includes('k') && suggestKeys.includes('Y') ? {backgroundColor: 'orange'} : {}}>
					Y
				</div>
				<div className="key15" style={keys.includes('l') ? {backgroundColor: 'red'} : listKeys.includes('l') && suggestKeys.includes('J') ? {backgroundColor: 'orange'} : {}}>
					J
				</div>
				<div className="key15" style={keys.includes(';') ? {backgroundColor: 'red'} : listKeys.includes(';') && suggestKeys.includes('G') ? {backgroundColor: 'orange'} : {}}>
					G
				</div>
				<div className="key15" style={keys.includes("'") ? {backgroundColor: 'red'} : listKeys.includes("'") && suggestKeys.includes('K') ? {backgroundColor: 'orange'} : {}}>
					K
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key15" style={keys.includes('c') ? {backgroundColor: 'red'} : listKeys.includes('c') && suggestKeys.includes('U') ? {backgroundColor: 'orange'} : {}}>
					U
				</div>
				<div className="key15" style={keys.includes('v') ? {backgroundColor: 'red'} : listKeys.includes('v') && suggestKeys.includes('O') ? {backgroundColor: 'orange'} : {}}>
					O
				</div>
				<div className="key15" style={keys.includes('n') ? {backgroundColor: 'red'} : listKeys.includes('n') && suggestKeys.includes('E') ? {backgroundColor: 'orange'} : {}}>
					E
				</div>
				<div className="key15" style={keys.includes('m') ? {backgroundColor: 'red'} : listKeys.includes('m') && suggestKeys.includes('A') ? {backgroundColor: 'orange'} : {}}>
					A
				</div>
			</div>
		</div>
	);
};

export default KeyBoard2;
