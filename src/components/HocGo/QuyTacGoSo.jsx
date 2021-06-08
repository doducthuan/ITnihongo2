import React from 'react';

const QuyTacGoSo = () => {
	return (
		<div style={{flex: 6, height: window.innerHeight - 120, overflowX: 'auto', backgroundColor: 'white', marginLeft: 10, marginRight: 10, borderRadius: 10, boxShadow: 5}}>
			<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 40}}>Bàn phím tốc ký</div>
			<div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
				<img style={{height: 200}} src={"https://i.imgur.com/iJ1cjx4.png"} alt={"BanPhimTocKy"} />
			</div>
			<div style={{fontFamily: 'Monda-Bold', marginLeft: 50, fontSize: 20, marginTop: 30}}>Quy tắc gõ âm đầu</div>
			<div style={{marginLeft: 60, marginRight: 60}}>
				<div class="row" style={{display: 'flex', justifyContent: 'center'}}>
					<div class="col-8">
						<div class="card">
							<div class="card-body table-responsive p-0">
								<table class="table table-hover text-nowrap">
									<thead>
										<tr><th>Âm đầu</th><th>Phím tốc ký</th></tr>
									</thead>
									<tbody>
										<tr><td>1</td><td>#S-</td></tr>
										<tr><td>2</td><td>#K-</td></tr>
										<tr><td>3</td><td>#R-</td></tr>
										<tr><td>4</td><td>#N-</td></tr>
										<tr><td>5</td><td>#H</td></tr>
										<tr><td>6</td><td>#W</td></tr>
										<tr><td>7</td><td>#-J</td></tr>
										<tr><td>8</td><td>#-N</td></tr>
										<tr><td>9</td><td>#-T</td></tr>
										<tr><td>-1</td><td>#T-</td></tr>
										<tr><td>-2</td><td>#R-</td></tr>
										<tr><td>-3</td><td>#H-</td></tr>
										<tr><td>-4</td><td>#S</td></tr>
										<tr><td>-5</td><td>#I</td></tr>
										<tr><td>-6</td><td>#Y</td></tr>
										<tr><td>-7</td><td>#-G</td></tr>
										<tr><td>-8</td><td>#-K</td></tr>
										<tr><td>-9</td><td>#E</td></tr>
										<tr><td>0</td><td>#O</td></tr>
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

export default QuyTacGoSo;
