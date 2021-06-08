import React from 'react';

const QuyTacGoAmChinh = () => {
	return (
		<div style={{flex: 6, height: window.innerHeight - 120, overflowX: 'auto', backgroundColor: 'white', marginLeft: 10, marginRight: 10, borderRadius: 10, boxShadow: 5}}>
			<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 40}}>Bàn phím tốc ký</div>
			<div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
				<img style={{height: 200}} src={"https://i.imgur.com/iJ1cjx4.png"} alt={"BanPhimTocKy"} />
			</div>
			<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 30}}>Quy tắc gõ âm chính</div>
			<div style={{marginLeft: 60, marginRight: 60}}>
				<p style={{color: '#666'}}>Sử dụng 11 phím ở giữa bàn phím để gõ âm chính là NHS*IUOEAWY. Trong đó sử dụng 3 phím NHS để gõ thanh điệu, 8 phím còn lại gõ phần âm đệm và âm chính.</p>
				<p style={{color: '#666'}}>Các nguyên âm đơn ngắn là biến thể của các nguyên âm dài phân biệt bằng cách gõ thêm phím * ở trước.</p>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img style={{height: 150}} src={"https://htkien.github.io/HCI_05/img/goamchinh1-removebg-preview.png"} alt="" />
				</div>
				<b style={{color: '#666'}}>1. Âm chính có dấu thanh</b>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img style={{height: 150}} src={"https://htkien.github.io/HCI_05/img/goamchinh2.png"} alt="" />
				</div>
				<p style={{color: '#666'}}>Sử dụng 3 phím: NHS để gõ 5 thanh điệu tiếng Việt: huyền, nặng, sắc, ngã, hỏi.</p>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Dấu thanh</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>Huyền</td><td>H</td></tr>
										<tr><td>Sắc</td><td>S</td></tr>
										<tr><td>Nặng</td><td>N</td></tr>
										<tr><td>Ngã</td><td>NS</td></tr>
										<tr><td>Hỏi</td><td>HS</td></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<b style={{color: '#666'}}>2. Âm chính không có dấu thanh</b>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img style={{height: 150}} src={"https://htkien.github.io/HCI_05/img/goamchinh3.png"} alt="" />
				</div>
				<p style={{color: '#666'}}>Sử dụng 8 phím: *IUOEAWY để gõ 1 âm đệm (u/o) + 16 nguyên âm tiếng Việt: i/y, ê, e, ư, ơ, a, u, ô, o, e, ă, â, o, iê, ươ, uô.</p>
			</div>
		</div>
	);
};

export default QuyTacGoAmChinh;
