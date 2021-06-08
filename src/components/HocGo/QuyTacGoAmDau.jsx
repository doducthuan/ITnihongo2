import React from 'react';

const QuyTacGoAmDau = () => {
	return (
		<div style={{flex: 6, height: window.innerHeight - 120, overflowX: 'auto', backgroundColor: 'white', marginLeft: 10, marginRight: 10, borderRadius: 10, boxShadow: 5}}>
			<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 40}}>Bàn phím tốc ký</div>
			<div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
				<img style={{height: 200}} src={"https://i.imgur.com/iJ1cjx4.png"} alt={"BanPhimTocKy"} />
			</div>
			<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 30}}>Quy tắc gõ âm đầu</div>
			<div style={{marginLeft: 60, marginRight: 60}}>
				<p style={{color: '#666'}}>Tiếng Việt có 22 âm đầu, sử dụng 6 phím STKPRH ở phía tay trái để gõ các âm đầu và tổ hợp âm đầu.</p>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img style={{height: 150}} src={"https://htkien.github.io/HCI_05/img/anh1-removebg-preview.png"} alt="" />
				</div>
				<p style={{color: '#666'}}>1. Nhóm âm đầu cùng dạng chữ, cùng cách phát âm (7 âm)</p>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Âm đầu</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>s</td><td>S</td></tr>
										<tr><td>t</td><td>T</td></tr>
										<tr><td>k</td><td>K</td></tr>
										<tr><td>c</td><td>K</td></tr>
										<tr><td>h</td><td>H</td></tr>
										<tr><td>r</td><td>R</td></tr>
										<tr><td>b</td><td>P</td></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<p style={{color: '#666'}}>2. Nhóm âm đầu có cách phát âm gần giống nhau (8 âm)</p>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Âm đầu</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>ng</td><td>KR</td></tr>
										<tr><td>ngh</td><td>KR</td></tr>
										<tr><td>g</td><td>KP</td></tr>
										<tr><td>gh</td><td>KP</td></tr>
										<tr><td>gi</td><td>SH</td></tr>
										<tr><td>d</td><td>SP</td></tr>
										<tr><td>n</td><td>PR</td></tr>
										<tr><td>l</td><td>SR</td></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<p style={{color: '#666'}}>3. Nhóm âm đầu có dạng chữ gần giống nhau (6 âm)</p>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Âm đầu</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>ch</td><td>SK</td></tr>
										<tr><td>nh</td><td>TK</td></tr>
										<tr><td>d</td><td>SP</td></tr>
										<tr><td>đ</td><td>TP</td></tr>
										<tr><td>m</td><td>RH</td></tr>
										<tr><td>n</td><td>PR</td></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<p style={{color: '#666'}}>4. Nhóm âm đầu ngoại lệ (3 âm)</p>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Âm đầu</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>q</td><td>SPH</td></tr>
										<tr><td>p</td><td>STK</td></tr>
										<tr><td>v</td><td>SPR</td></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuyTacGoAmDau;
