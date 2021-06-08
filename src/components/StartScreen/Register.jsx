import React from 'react';
import Color from '../../constants/Colors';

const Register = ({setSelected}) => {
	return (
		<div className="container-fluid">
			<div className="row" style={{display: 'flex', flexDirection: 'row', marginTop: 80}}>
				<div className="col-lg-6" style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
					<img
						src="https://cdn11.bigcommerce.com/s-803d4/images/stencil/1280x1280/products/4206/10583/v59ROV9E__28684.1600278897.jpg?c=2?imbypass=on"
						alt="StenoMachine"
						style={{width: 500, height: 500}}
					/>
				</div>
				<div className="col-lg-4" style={{display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center'}}>
					<div className="card-body register-card-body">
						<p className="login-box-msg" style={{fontFamily: 'Monda-Regular', fontWeight: 700, fontSize: 36, color: 'black', border:"none"}}>Đăng ký</p>

						<form>
							<div className="input-group mb-3">
								<input type="text" className="form-control" placeholder="Tên" />
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-user"></span>
									</div>
								</div>
							</div>
							<div className="input-group mb-3">
								<input type="email" className="form-control" placeholder="Email" />
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-envelope"></span>
									</div>
								</div>
							</div>
							<div className="input-group mb-3">
								<input type="password" className="form-control" placeholder="Mật khẩu" />
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-lock"></span>
									</div>
								</div>
							</div>
							<div className="input-group mb-3">
								<input type="password" className="form-control" placeholder="Nhập lại mật khẩu" />
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-lock"></span>
									</div>
								</div>
							</div>
							<p onClick={() => setSelected(2)} style={{textAlign: 'end', fontFamily: 'Monda-Regular', fontWeight: 700, fontSize: 18, color: 'black'}}>Đã có tài khoản?</p>
							<div style={{display: 'flex', justifyContent: 'center'}}>
								<button onClick={() => setSelected(2)} className="btn btn-primary btn-block" style={{backgroundColor: '#353A3F', borderRadius: 20, padding: 10, color: Color.PrimaryWhite, width: 200}}>Tạo tài khoản</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
