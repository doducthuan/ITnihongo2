import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

const Lessons = ({data, setLesson}) => {
	return (
			<div style={{flex: 3, display: 'flex', flexDirection: 'column', height: window.innerHeight - 120, backgroundColor: 'white', marginLeft: 10, marginRight: 10, borderRadius: 10, boxShadow: 5}}>
				<div style={{flex: 1, overflowX: 'auto'}}>
					<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 40}}>Danh sách bài học ({data.length} bài học)</div>
					{data.map((lesson, index) => (
						<div key={index} style={{backgroundColor: '#FEECDC', padding: 10, paddingBottom: 0, margin: 10, borderRadius: 10}}>
							<p style={{fontFamily: 'Monda-Bold', fontSize: 20}}>Bài {index + 1}</p>
							<p>Âm {lesson.map(item => item.vn).join(', ')}</p>
							<div style={{display: 'flex', flexDirection: 'row'}}>
								<div style={{flex: 1}} />
								<div onClick={() => setLesson(0, index + 1)} className="button4">Thẻ ghi nhớ</div>
								<div onClick={() => setLesson(1, index + 1)} className="button4">Luyện viết</div>
								<div style={{flex: 1}} />
							</div>
							{index < 2 && <Tooltip title={'100%'}><div style={{height: 5, backgroundColor: 'gray', marginTop: 10, borderRadius: 5}} /></Tooltip>}
							{index === 2 && <Tooltip title={'60%'}><div style={{height: 5, backgroundColor: 'whitesmoke', marginTop: 10, display: 'flex', borderRadius: 5}}>
								<div style={{flex: 3, backgroundColor: 'gray'}} />	
								<div style={{flex: 2}} />	
							</div></Tooltip>}
							{index > 2 && <Tooltip title={'0%'}><div style={{height: 5, backgroundColor: 'whitesmoke', marginTop: 10, display: 'flex', borderRadius: 5}} /></Tooltip>}
						</div>
					))}
				</div>
				<div style={{flex: 1, overflowX: 'auto'}}>
					<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 40}}>Danh sách bài đã học ({2} bài học)</div>
					{data.filter((item, index) => index < 2).map((lesson, index) => (
						<div key={index} style={{backgroundColor: '#FEECDC', padding: 10, margin: 10, borderRadius: 10}}>
							<p style={{fontFamily: 'Monda-Bold', fontSize: 20}}>Bài {index + 1}</p>
							<p>Âm {lesson.map(item => item.vn).join(', ')}</p>
							<div style={{display: 'flex', flexDirection: 'row'}}>
								<div style={{flex: 1}} />
								<div onClick={() => setLesson(0, index + 1)} className="button4">Thẻ ghi nhớ</div>
								<div onClick={() => setLesson(1, index + 1)} className="button4">Luyện viết</div>
								<div style={{flex: 1}} />
							</div>
						</div>
					))}
				</div>
			</div>
	);
};

export default Lessons;
