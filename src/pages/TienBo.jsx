import React, { useState } from 'react';
import MainSlideBarContainer from '../components/MainSlideBarContainer';
import NavBar from '../components/NavBar';
const formatNumber = (number) => number < 10 ? `0${number}` : `${number}`;

const formatDate = (time) => {
	const year = time.getFullYear();
	const month = time.getMonth() + 1;
	const date = time.getDate();
	return `${year}-${formatNumber(month)}-${formatNumber(date)}`;
};

const TienBo = () => {
	const [fromDate, setFromDate] = useState(formatDate(new Date(new Date().getTime() - 86400000 * 6)));
	const [toDate, setToDate] = useState(formatDate(new Date()));

	const onChangeFromDate = (event) => {
		const time = new Date();
		const [year, month, date] = event.target.value.split('-');
		time.setFullYear(year);
		time.setMonth(month - 1);
		time.setDate(date);
		setFromDate(formatDate(time));
		setToDate(formatDate(new Date(time.getTime() + 86400000 * 6)));
	};
	return (
		<div style={{}}>
			<MainSlideBarContainer />
			<NavBar />
			<div className="content-wrapper">
				<div className="card">
					<div className="card-header border-0">
						<div className="d-flex justify-content-between">
							<h3 className="card-title">Tần suất học của tôi</h3>
						</div>
					</div>
					<div className="card-body">
						<div className="d-flex">
							<p className="d-flex flex-column">
								<span className="text-bold text-lg">Giờ</span>
							</p>
							<p className="ml-auto d-flex flex-column text-right">
								<span className="text-success">
									<i className="fas fa-arrow-up"></i> 12.5%
								</span>
								<span className="text-muted">Tuần này</span>
							</p>
						</div>

						<div className="position-relative mb-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
							<canvas id="visitors-chart" height="200" width="525" className="chartjs-render-monitor" style={{ display: 'block', width: 525, height: 200 }}></canvas>
						</div>

						<div className="d-flex flex-row justify-content-end">
							<span className="mr-2">
								Từ <input value={fromDate} onChange={onChangeFromDate} type="date" /> ~ Đến <input type="date" value={toDate} disabled />
							</span>
						</div>
					</div>
				</div>
				<div className="row" style={{ height: "80px", backgroundColor: "#f4f6f9", alignItems: "center" }}><b style={{ marginLeft: "30px" }}>Thống kê lịch sử học - luyện tập</b></div>
				<div className="statistic" style={{ display: "flex", flexWrap: "wrap", margin: "50px 50px", padding: " 0", borderTop: "1px solid #d8d8d8", borderBottom: "1px solid #d8d8d8" }}>
					<div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
						<div style={{ flex: 1, fontWeight: 600, fontSize: 24 }}>43</div>
						<div style={{ flex: 1 }}>Tổng số bài đã xem</div>
						<div style={{ flex: 1, fontWeight: 600, fontSize: 24, marginTop: 40 }}>14m 45s</div>
						<div style={{ flex: 1 }}>Tổng thời gian học</div>
					</div>
					<div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
						<div style={{ flex: 1, fontWeight: 600, fontSize: 24, display: "inline-flex" }}>39</div>
						<div style={{ flex: 1, display: "inline-flex" }}>Số bài đã đạt</div>
						<div style={{ flex: 1, fontWeight: 600, fontSize: 24, marginTop: 40 }}>38WPM</div>
						<div style={{ flex: 1 }}>Tốc độ trung bình</div>
					</div>
					<div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
						<div style={{ flex: 1, fontWeight: 600, fontSize: 24 }}>3</div>
						<div style={{ flex: 1 }}>Số bài chưa đạt</div>
						<div style={{ flex: 1, fontWeight: 600, fontSize: 24, marginTop: 40 }}>98%</div>
						<div style={{ flex: 1 }}>Độ chính xác trung bình</div>
					</div>
					<div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
						<div style={{ flex: 1, fontWeight: 600, fontSize: 24 }}>1</div>
						<div style={{ flex: 1 }}>Số bài đang học</div>
						<div style={{ flex: 1, fontWeight: 600, fontSize: 24, marginTop: 40 }}> <b>25%</b> </div>
						<div style={{ flex: 1 }}> <b>Hoàn Thành Khóa Học</b> </div>
					</div>
				</div>
				<table class="table table-hover" style={{ marginLeft: "20px" }}>
					<thead>
						<tr>
							<th scope="col">Ngày</th>
							<th scope="col">Học gõ</th>
							<th scope="col">Thời gian</th>
							<th scope="col">Độ chính xác</th>
							<th scope="col">Không đạt</th>
							<th scope="col">Chưa hoàn thành</th>
							<th scope="col">Thời lượng</th>
							<th scope="col">Stars</th>
							<th scope="col">Tổng điểm</th>
							<th scope="col">WPM</th>
							<th scope="col">Accuracy</th>
							<th scope="col">Real Accuracy</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Học gõ âm đầu</td>
							<td>30</td>
							<td>40</td>
							<td>30</td>
							<td>10</td>
							<td>0</td>
							<td>5h 32m</td>
							<td>173<i style={{ color: "yellow" }} className="fas fa-star" /></td>
							<td>417962</td>
							<td>60</td>
							<td>90%</td>
							<td>87%</td>
						</tr>
						<tr>
							<td>Học gõ âm chính</td>
							<td>30</td>
							<td>40</td>
							<td>35</td>
							<td>10</td>
							<td>0</td>
							<td>3h 32m</td>
							<td style={{ display: 'inline-flex', alignItems: 'center' }}>173<i style={{ color: "yellow" }} className="fas fa-star" /></td>
							<td>417962</td>
							<td>60</td>
							<td>90%</td>
							<td>87%</td>
						</tr>
						<tr>
							<td>Học gõ âm cuối</td>
							<td>40</td>
							<td>30</td>
							<td>10</td>
							<td>30</td>
							<td>0</td>
							<td>4h 12m</td>
							<td>173<i style={{ color: "yellow" }} className="fas fa-star" /></td>
							<td>417962</td>
							<td>60</td>
							<td>90%</td>
							<td>87%</td>
						</tr>
						<tr>
							<td>Học gõ số</td>
							<td>20</td>
							<td>30</td>
							<td>10</td>
							<td>40</td>
							<td>0</td>
							<td>5h 32m</td>
							<td>173<i style={{ color: "yellow" }} className="fas fa-star" /></td>
							<td>417962</td>
							<td>60</td>
							<td>90%</td>
							<td>87%</td>
						</tr>
					</tbody>
				</table>
				<div className="row" style={{ height: "80px", backgroundColor: "#f4f6f9", alignItems: "center" }}><b style={{ marginLeft: "30px" }}>Thống kê lịch sử học - luyện tập</b></div>

			</div>
		</div>
	);
};

export default TienBo;
