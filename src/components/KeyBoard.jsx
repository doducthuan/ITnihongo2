import React from 'react';

const KeyBoard = ({keys, listKeys = [], suggestKeys = []}) => {
	console.log(keys);
	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key1">
					~<br />`
				</div>
				<div className="key2">
					!<br />1
				</div>
				<div className="key2">
					@<br />2
				</div>
				<div className="key2">
					#<br />3
				</div>
				<div className="key2">
					$<br />4
				</div>
				<div className="key2">
					%<br />5
				</div>
				<div className="key2">
					^<br />6
				</div>
				<div className="key2">
					&<br />7
				</div>
				<div className="key2">
					*<br />8
				</div>
				<div className="key2">
					(<br />9
				</div>
				<div className="key2">
					)<br />0
				</div>
				<div className="key1">
					_<br />-
				</div>
				<div className="key1">
					+<br />=
				</div>
				<div className="key4">
					Backspace
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key5">
					Tab
				</div>
				<div className="key3" style={keys.includes('q') ? {backgroundColor: 'red'} : listKeys.includes('q') && suggestKeys.includes('S') ? {backgroundColor: 'orange'} : {}}>
					S<br />Q
				</div>
				<div className="key3" style={keys.includes('w') ? {backgroundColor: 'red'} : listKeys.includes('w') && suggestKeys.includes('K') ? {backgroundColor: 'orange'} : {}}>
					K<br />W
				</div>
				<div className="key3" style={keys.includes('e') ? {backgroundColor: 'red'} : listKeys.includes('e') && suggestKeys.includes('R') ? {backgroundColor: 'orange'} : {}}>
					R<br />E
				</div>
				<div className="key3" style={keys.includes('r') ? {backgroundColor: 'red'} : listKeys.includes('r') && suggestKeys.includes('N') ? {backgroundColor: 'orange'} : {}}>
					N<br />R
				</div>
				<div className="key3" style={keys.includes('t') ? {backgroundColor: 'red'} : listKeys.includes('t') && suggestKeys.includes('H') ? {backgroundColor: 'orange'} : {}}>
					H<br />T
				</div>
				<div className="key1">
					Y
				</div>
				<div className="key3" style={keys.includes('u') ? {backgroundColor: 'red'} : listKeys.includes('u') && suggestKeys.includes('*') ? {backgroundColor: 'orange'} : {}}>
					*<br />U
				</div>
				<div className="key3" style={keys.includes('i') ? {backgroundColor: 'red'} : listKeys.includes('i') && suggestKeys.includes('W') ? {backgroundColor: 'orange'} : {}}>
					W<br />I
				</div>
				<div className="key3" style={keys.includes('o') ? {backgroundColor: 'red'} : listKeys.includes('o') && suggestKeys.includes('J') ? {backgroundColor: 'orange'} : {}}>
					J<br />O
				</div>
				<div className="key3" style={keys.includes('p') ? {backgroundColor: 'red'} : listKeys.includes('p') && suggestKeys.includes('N') ? {backgroundColor: 'orange'} : {}}>
					N<br />P
				</div>
				<div className="key3" style={keys.includes('[') ? {backgroundColor: 'red'} : listKeys.includes('[') && suggestKeys.includes('T') ? {backgroundColor: 'orange'} : {}}>
					T<br />[
				</div>
				<div className="key1">
					&#125;<br />]
				</div>
				<div className="key6">
					|<br />\
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key7">
					Caps Lock
				</div>
				<div className="key3" style={keys.includes('a') ? {backgroundColor: 'red'} : listKeys.includes('a') && suggestKeys.includes('T') ? {backgroundColor: 'orange'} : {}}>
					T<br />A
				</div>
				<div className="key3" style={keys.includes('s') ? {backgroundColor: 'red'} : listKeys.includes('s') && suggestKeys.includes('P') ? {backgroundColor: 'orange'} : {}}>
					P<br />S
				</div>
				<div className="key3" style={keys.includes('d') ? {backgroundColor: 'red'} : listKeys.includes('d') && suggestKeys.includes('H') ? {backgroundColor: 'orange'} : {}}>
					H<br />D
				</div>
				<div className="key3" style={keys.includes('f') ? {backgroundColor: 'red'} : listKeys.includes('f') && suggestKeys.includes('N') ? {backgroundColor: 'orange'} : {}}>
					N<br />F
				</div>
				<div className="key3" style={keys.includes('g') ? {backgroundColor: 'red'} : listKeys.includes('g') && suggestKeys.includes('S') ? {backgroundColor: 'orange'} : {}}>
					S<br />G
				</div>
				<div className="key1">
					H
				</div>
				<div className="key3" style={keys.includes('j') ? {backgroundColor: 'red'} : listKeys.includes('j') && suggestKeys.includes('I') ? {backgroundColor: 'orange'} : {}}>
					I<br />J
				</div>
				<div className="key3" style={keys.includes('k') ? {backgroundColor: 'red'} : listKeys.includes('k') && suggestKeys.includes('Y') ? {backgroundColor: 'orange'} : {}}>
					Y<br />K
				</div>
				<div className="key3" style={keys.includes('l') ? {backgroundColor: 'red'} : listKeys.includes('l') && suggestKeys.includes('J') ? {backgroundColor: 'orange'} : {}}>
					J<br />L
				</div>
				<div className="key3" style={keys.includes(';') ? {backgroundColor: 'red'} : listKeys.includes(';') && suggestKeys.includes('G') ? {backgroundColor: 'orange'} : {}}>
					G<br />;
				</div>
				<div className="key3" style={keys.includes("'") ? {backgroundColor: 'red'} : listKeys.includes("'") && suggestKeys.includes('K') ? {backgroundColor: 'orange'} : {}}>
					K<br />'
				</div>
				<div className="key8">
					Enter
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key9">
					Shift
				</div>
				<div className="key1">
					Z
				</div>
				<div className="key1">
					X
				</div>
				<div className="key3" style={keys.includes('c') ? {backgroundColor: 'red'} : listKeys.includes('c') && suggestKeys.includes('U') ? {backgroundColor: 'orange'} : {}}>
					U<br />C
				</div>
				<div className="key3" style={keys.includes('v') ? {backgroundColor: 'red'} : listKeys.includes('v') && suggestKeys.includes('O') ? {backgroundColor: 'orange'} : {}}>
					O<br />V
				</div>
				<div className="key1">
					B
				</div>
				<div className="key3" style={keys.includes('n') ? {backgroundColor: 'red'} : listKeys.includes('n') && suggestKeys.includes('E') ? {backgroundColor: 'orange'} : {}}>
					E<br />N
				</div>
				<div className="key3" style={keys.includes('m') ? {backgroundColor: 'red'} : listKeys.includes('m') && suggestKeys.includes('A') ? {backgroundColor: 'orange'} : {}}>
					A<br />M
				</div>
				<div className="key1">
					&lt;<br />,
				</div>
				<div className="key1">
					&gt;<br />.
				</div>
				<div className="key1">
					?<br />/
				</div>
				<div className="key10">
					Shift
				</div>
			</div>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div className="key11">
					Ctrl
				</div>
				<div className="key1">
					Win
				</div>
				<div className="key5">
					Alt
				</div>
				<div className="key12">
					Space
				</div>
				<div className="key5">
					Alt
				</div>
				<div className="key1">
					Win
				</div>
				<div className="key13">
					Menu
				</div>
				<div className="key11">
					Ctrl
				</div>
			</div>
		</div>
	);
};

export default KeyBoard;
