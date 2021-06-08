import React from 'react';

const Instruction = ({setStep}) => {
	return (
		<div className="game1__step1">
			<div className="game1__title">Trò chơi: Người treo cổ</div>
			<div className="game1__instruction">
				<div className="game1__cat-img">
					<img className="flip" src="https://i.imgur.com/yjRBm24.png" alt="CuteCat" style={{height: 256, width: 256}} />
				</div>
				<div className="game1__instruction-content">
					<div className="game1__instruction-body">
						<b>Hướng dẫn</b>
						<br />
						<br />
						Hệ thống sẽ chọn ra 1 từ ngẫu nhiên và đưa ra số ký tự của từ đó dưới dạng một hàng gạch ngang. Người dùng sẽ lần lượt đoán các chữ cái mà họ cho là có mặt trong từ. 
						<br />
						<br />
						Mỗi lần đoán đúng thì các gạch ngang tương ứng sẽ được thay bằng chữ cái đoán được, mỗi lần đoán sai thì "giá treo cổ" sẽ được vẽ thêm một nét của "người treo cổ".
						<br />
						<br />
						Cuộc chơi kết thúc khi một từ được đoán đúng hoặc hình người treo cổ (thường gồm 6 nét, tương ứng 6 lần đoán sai) bị hoàn tất.
					</div>
					<div className="game1__start-img">
						<img onClick={() => setStep(1)} src="https://i.imgur.com/yFKoNfe.png" alt="Start" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Instruction;
