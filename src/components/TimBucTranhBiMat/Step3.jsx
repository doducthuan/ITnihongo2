import React from 'react';

const Step3 = ({ setStep, point }) => {
	return (
		<div>
			<div style={{ display: 'flex', height: 50, backgroundColor: '#C4C4C4', alignItems: 'center', paddingLeft: 50 }}>Trò chơi: Tìm Bức Tranh Bị Ẩn</div>
			<div style={{ flex: 1, backgroundColor: '#FDDFC5', marginTop: 30, marginRight: 40, marginLeft: 40, borderRadius: 20, paddingLeft: 20, paddingRight: 20, textAlign: 'justify', paddingTop: 40, paddingBottom: 40, fontSize: 20 }}>
				{point === 100 ? (
					<div style={{ textAlign: 'center' }}>
						<div>Chúc mừng, bạn đã chiến thắng</div>
					</div>
				) : (
					<div style={{ textAlign: 'center' }}>
						<h1 style={{ fontFamily: 'sans-serif' }}>Trò chơi đã kết thúc</h1>
						<div>Điểm của bạn: {point}</div>
					</div>
				)}
				<div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
					<div style={{ flex: 1 }} />
					<div onClick={() => setStep(0)} className="button4">Hướng dẫn</div>
					<div onClick={() => setStep(1)} className="button4">Chơi lại</div>
					<div style={{ flex: 1 }} />
				</div>
			</div>
			<div className="timtranh__scoreboard container">
				<h3 className="timtranh__scoreboard-heading text-center my-5">Bảng xếp hạng</h3>
				<table className="table table-bordered table-hover">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Tên</th>
							<th scope="col">ID</th>
							<th scope="col">Điểm</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Đỗ Đức Thuận</td>
							<td>20179999</td>
							<td>15340</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Nguyễn Việt Đức</td>
							<td>20176666</td>
							<td>12500</td>
						</tr>
						<tr className="font-weight-bold">
							<th scope="row">3</th>
							<td>Bạn</td>
							<td>20176969</td>
							<td>11700</td>
						</tr>
						<tr>
							<th scope="row">5</th>
							<td>Lại Thế Ngọc</td>
							<td>20171111</td>
							<td>6970</td>
						</tr>
					</tbody>
				</table>
				<nav className="timtranh__scoreboard-pagination mt-5">
					<ul class="pagination justify-content-center align-items-end">
						<li class="page-item disabled">
							<a class="page-link" href="#" tabIndex="-1">Previous</a>
						</li>
						<li class="page-item active"><a class="page-link" href="#" >1</a></li>
						<li class="page-item"><a class="page-link" href="#">2</a></li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item">
							<a class="page-link" href="#">Next</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Step3;
