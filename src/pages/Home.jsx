import React, { useState } from "react";
import MainSlideBarContainer from "../components/MainSlideBarContainer";
import NavBar from "../components/NavBar";
import AmChinh from "../utils/AmChinh";
import AmCuoi from "../utils/AmCuoi";
import AmDau from "../utils/AmDau";

const Home = () => {
	const [state, setState] = useState({
		amDau: [],
		amChinh: [],
		amCuoi: [],
		hasAmDau: false,
		hasAmChinh: false,
		hasAmCuoi: false,
		shouldSearch: true,
		numberOfKeys: 0,
		value: '',
	});
	const handleKeyDown = (event) => {
		const { key } = event;
		if (AmDau.amDauN.includes(key)) {
			if (!state.amDau.includes(key)) setState(state => ({ ...state, amDau: [...state.amDau, key], hasAmDau: true, numberOfKeys: state.numberOfKeys + 1 }));
		} else if (AmChinh.amChinhN.includes(key)) {
			if (!state.amChinh.includes(key)) setState(state => ({ ...state, amChinh: [...state.amChinh, key], hasAmChinh: true, numberOfKeys: state.numberOfKeys + 1 }));
		} else if (AmCuoi.amCuoiN.includes(key)) {
			if (!state.amCuoi.includes(key)) setState(state => ({ ...state, amCuoi: [...state.amCuoi, key], hasAmCuoi: true, numberOfKeys: state.numberOfKeys + 1 }));
		} else {
			setState(state => ({ ...state, numberOfKeys: state.numberOfKeys + 1, shouldSearch: false }));
		}
	};

	const handleKeyUp = () => {
		if (state.numberOfKeys === 1) {
			if (state.shouldSearch && state.hasAmChinh && (state.amDau || state.amCuoi)) {
				let amDau = '', amChinh = '', amCuoi = '';
				amChinh = AmChinh.convertKey(state.amChinh, state.hasAmDau, state.hasAmCuoi);
				if (state.hasAmDau) amDau = AmDau.convertKey(state.amDau, amChinh);
				if (state.hasAmCuoi) amCuoi = AmCuoi.convertKey(state.amCuoi);
				if (amChinh !== '') setState({ amDau: [], amChinh: [], amCuoi: [], hasAmChinh: false, hasAmDau: false, hasAmCuoi: false, shouldSearch: true, numberOfKeys: 0, value: state.value + amDau + amChinh + amCuoi + ' ' });
				else setState(state => ({ ...state, amDau: [], amChinh: [], amCuoi: [], hasAmChinh: false, hasAmDau: false, hasAmCuoi: false, shouldSearch: true, numberOfKeys: 0 }));
			} else {
				setState(state => ({ ...state, amDau: [], amChinh: [], amCuoi: [], hasAmChinh: false, hasAmDau: false, hasAmCuoi: false, shouldSearch: true, numberOfKeys: 0 }));
			}
		} else {
			setState(state => ({ ...state, numberOfKeys: state.numberOfKeys - 1 }));
		}
	};

	return (
		<div style={{overflowX:"hidden"}}>
			<MainSlideBarContainer />
			<NavBar />
			<div className="content-wrapper">
				{/* <input value={state.value} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} /> */}
				<div className="row" style={{height:"50px", backgroundColor:"#f4f6f9"}}></div>
				<div className="row">
					<div className="col-md-12">
						<div className="card">
							<div className="card-header">
								<h5 className="card-title">Tiến độ luyện tốc ký của tôi</h5>
							</div>
							<div className="card-body">
								<div className="row">
									{/* <div className="col-md-8">
										<p className="text-center">
											<strong>31 May, 2021 - 06 Jun, 2021</strong>
										</p>
										<div className="chart">
											<canvas id="salesChart" height="180" style={{ height: "180px" }}></canvas>
										</div>
									</div>
									<div className="col-md-4">
										<p className="text-center d-block">
											<strong>Lộ trình học của tôi</strong>
										</p>
										<div className="progress-group d-block">
											Học gõ âm
                      						<span className="float-right"><b>4</b>/38</span>
											<div className="progress progress-sm">
												<div className="progress-bar bg-primary" style={{ width: "10%" }}></div>
											</div>
										</div>
										<div className="progress-group">
											Học gõ số
                      						<span className="float-right"><b>1</b>/4</span>
											<div className="progress progress-sm">
												<div className="progress-bar bg-danger" style={{ width: "25%" }}></div>
											</div>
										</div>
										<div className="progress-group">
											<span className="progress-text">Học gõ ký tự đặc biệt</span>
											<span className="float-right"><b>0</b>/2</span>
											<div className="progress progress-sm">
												<div className="progress-bar bg-success" style={{ width: "0%" }}></div>
											</div>
										</div>
										<div className="progress-group">
											Học quy tắc xoá
                      						<span className="float-right"><b>0</b>/1</span>
											<div className="progress progress-sm">
												<div className="progress-bar bg-warning" style={{ width: "0%" }}></div>
											</div>
										</div>
									</div>*/}
									
										<div className="row text-center" style={{display: 'flex', flexDirection: 'row'}}>
											<img style={{maxWidth: '100%'}} src={`${window.location.origin}/dist/img/chart.png`} alt="" />
										</div>
								
								</div> 
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Các bài đã học gần đây</h3>
							</div>
							<div className="card-body">
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>Phạm vi</th>
											<th>Bài học</th>
											<th>Tiến độ</th>
											<th style={{ width: "40px" }}></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Học Gõ Âm đầu</td>
											<td>Bài học số 1</td>
											<td style={{ verticalAlign: "inherit" }}>
												<div className="progress progress-xs">
													<div className="progress-bar progress-bar-danger " style={{ width: "55%" }}></div>
												</div>
											</td>
											<td><span className="badge bg-danger">55%</span></td>
										</tr>
										<tr>
											<td>Học Gõ Âm đầu</td>
											<td>Bài học số 2</td>
											<td style={{ verticalAlign: "inherit" }}>
												<div className="progress progress-xs">
													<div className="progress-bar bg-warning" style={{ width: "70%" }}></div>
												</div>
											</td>
											<td><span className="badge bg-warning">70%</span></td>
										</tr>
										<tr>
											<td>Học Gõ Âm chính</td>
											<td>Bài học số 1</td>
											<td style={{ verticalAlign: "inherit" }}>
												<div className="progress progress-xs progress-striped active">
													<div className="progress-bar bg-primary" style={{ width: "30%" }}></div>
												</div>
											</td>
											<td><span className="badge bg-primary">30%</span></td>
										</tr>
										<tr>
											<td>Học Gõ Số</td>
											<td>Bài học số 1</td>
											<td style={{ verticalAlign: "inherit" }}>
												<div className="progress progress-xs progress-striped active">
													<div className="progress-bar bg-success" style={{ width: "90%" }}></div>
												</div>
											</td>
											<td><span className="badge bg-success">90%</span></td>
										</tr>
									</tbody>
								</table>
							</div>
							
						</div> 
						{/* card */}
					</div> 
					{/* md-6 */}
					<div className="col-md-6">
						<div className="card">
             				<div className="card-header">
                				<h3 className="card-title">Bảng xếp hạng tốc độ gõ tốc ký</h3>
                			</div>
             				<div className="card-body p-0">
                				<ul className="products-list product-list-in-card pl-2 pr-2">
                  					<li className="item">
                    					<div className="product-img">
                      						<img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
                    					</div>
                    					<div className="product-info">
                      						<a href="javascript:void(0)" className="product-title">Nguyễn Đức Nam
                        					<span className=" badge badge-info float-right">300 WPM</span></a>
											<span className="product-description">
											⭐️⭐️⭐️⭐️⭐️
                      						</span>
                    					</div>
                  					</li>

                  					<li className="item">
                    					<div className="product-img">
                     		 				<img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
                    					</div>
                    					<div className="product-info">
											<a href="javascript:void(0)" className="product-title">Phạm Hữu An
												<span className=" badge badge-info float-right">299 WPM</span></a>
												<span className="product-description">
											⭐️⭐️⭐️⭐️⭐️
                      						</span>
                    					</div>
                  					</li>

									<li className="item">
										<div className="product-img">
										<img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
										</div>
										<div className="product-info">
										<a href="javascript:void(0)" className="product-title">
											Hoàng Minh Nguyệt <span className="badge badge-info float-right">
											150 WPM
										</span>
										</a>
										<span className="product-description">
											⭐️⭐️⭐️⭐️
                      					</span>
										</div>
									</li>

									<li className="item">
										<div className="product-img">
											<img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50"/>
										</div>
										<div className="product-info">
											<a href="javascript:void(0)" className="product-title">Đỗ Đức Thuận<span className="badge badge-info float-right">100 WPM</span></a>
											<span className="product-description">
											⭐️⭐️⭐️
                      						</span>
										</div>
									</li>
                				</ul>
              				</div>
              				<div className="card-footer text-center">
                				<a href="javascript:void(0)" className="uppercase">Xem tất cả bảng xếp hạng</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	);
};

export default Home;
