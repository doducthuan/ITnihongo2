import React from 'react';

const Step1 = ({setStep}) => {
	return (
		<div className="game1__step1">
			<div className="game1__title">Trò chơi: Tìm Bức Tranh Bị Ẩn</div>
			<div className="game1__instruction">
				<div className="game1__cat-img">
					<img className="flip" src="https://i.imgur.com/yjRBm24.png" alt="CuteCat" style={{height: 256, width: 256}} />
				</div>
				<div className="game1__instruction-content">
					<div className="game1__instruction-body">
						<b>Hướng dẫn</b>
						<br />
						<br />
						Xoá các tấm thẻ để hiện ra bức tranh bị giấu bằng cách ghép cặp đúng cho tất cả các thẻ. Bạn cần chọn liên tiếp vào 2 ô mà 1 ô là âm chữ quốc ngữ, 1 ô là tổ hợp phím khi gõ tốc ký tương ứng.
						<br />
						<br />
						Thời gian là 5 phút, với 10 cặp thẻ, mỗi cặp chọn đúng sẽ được 10 điểm, tổng điểm 100.
						<br />
						<br />
						Trò chơi kết thúc khi xoá hết các thẻ, khi hết thời gian hoặc khi sai quá 3 lần.
						<br />
						<br />
						Người chơi có thể lựa chọn phạm vi chơi: Âm đầu, Âm chính, Âm cuối, .v.v
					</div>
					<div className="game1__start-img">
						<img onClick={() => setStep(1)} src="https://i.imgur.com/yFKoNfe.png" alt="Start" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Step1;
