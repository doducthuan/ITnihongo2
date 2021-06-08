import React from 'react';

const Header = ({title, lesson, setLesson}) => {
	return (
		<div style={{display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50}}>
			<div onClick={() => setLesson(0, 0)} style={{userSelect: 'none'}}>Luyện gõ tốc ký &nbsp;&nbsp;&rarr;&nbsp;&nbsp; {title}</div>
			{lesson !== 0 && <div style={{userSelect: 'none'}}> &nbsp;&nbsp;&rarr;&nbsp;&nbsp; Bài {lesson}</div>}
			<div style={{flex: 1}} />
		</div>
	);
};

export default Header;
