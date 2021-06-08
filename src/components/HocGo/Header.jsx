import React from 'react';

const Header = ({selected, setSelected, title, lesson, setLesson}) => {
	return (
		<div style={{display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50}}>
			<div onClick={() => setLesson(0, 0)} style={{userSelect: 'none', cursor: 'grab'}}>Học gõ tốc ký &nbsp;&nbsp;&rarr;&nbsp;&nbsp; {title}</div>
			{lesson !== 0 && <div style={{userSelect: 'none'}}> &nbsp;&nbsp;&rarr;&nbsp;&nbsp; Bài {lesson}</div>}
			<div style={{flex: 1}} />
			{lesson !== 0 && <div className={`${selected === 0 ? 'button3' : 'button4'}`} onClick={() => setSelected(0)}>Thẻ ghi nhớ</div>}
			{lesson !== 0 && <div className={`${selected === 1 ? 'button3' : 'button4'}`} onClick={() => setSelected(1)}>Luyện viết</div>}
		</div>
	);
};

export default Header;
