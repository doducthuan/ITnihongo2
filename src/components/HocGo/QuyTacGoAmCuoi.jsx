import React from 'react';

const QuyTacGoAmCuoi = () => {
	return (
		<div style={{flex: 6, height: window.innerHeight - 120, overflowX: 'auto', backgroundColor: 'white', marginLeft: 10, marginRight: 10, borderRadius: 10, boxShadow: 5}}>
			<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 40}}>Bàn phím tốc ký</div>
			<div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
				<img style={{height: 200}} src={"https://i.imgur.com/iJ1cjx4.png"} alt={"BanPhimTocKy"} />
			</div>
			<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 30}}>Quy tắc gõ âm đầu</div>
			<div style={{marginLeft: 60, marginRight: 60}}>
				<p style={{color: '#666'}}>Tiếng Việt có 8 âm vị âm cuối được viết bằng 12 kí tự: m, n, ng/nh, p, t, c/ch, u/o, i/y.</p>
				<p style={{color: '#666'}}>Trên bàn phím tốc kí sử dụng 5 phím JNGTK ở phía bên phải của bàn phím để biểu diễn các âm cuối.</p>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img style={{height: 150}} src={"https://htkien.github.io/HCI_05/img/hocgo_amcuoi.png"} alt="" />
				</div>
				<b style={{color: '#666'}}>1. Nhóm âm cuối cùng dạng chữ</b>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Âm đầu</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>n</td><td>N</td></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<b style={{color: '#666'}}>2. Nhóm âm cuối phát âm gần giống nhau</b>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Âm đầu</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>o</td><td>-JK</td></tr>
										<tr><td>u</td><td>-JG</td></tr>
										<tr><td>i</td><td>-J</td></tr>
										<tr><td>y</td><td>-JN</td></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<b style={{color: '#666'}}>3. Nhóm âm cuối viết gần giống nhau</b>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Âm đầu</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>c</td><td>NK</td></tr>
										<tr><td>ch</td><td>GK</td></tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<b style={{color: '#666'}}>4. Nhóm âm cuối ngoại lệ</b>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Âm đầu</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>p</td><td>-TK</td></tr>
										<tr><td>t</td><td>-NT</td></tr>
										<tr><td>ng</td><td>-G</td></tr>
										<tr><td>nh</td><td>-K</td></tr>
										<tr><td>m</td><td>-T</td></tr>
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

export default QuyTacGoAmCuoi;
