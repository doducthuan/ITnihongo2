/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import MainSlideBarContainer from "../components/MainSlideBarContainer";
import NavBar from "../components/NavBar";

const Contact = () => {
	return (
		<div>
			<NavBar />
			<MainSlideBarContainer />
			<div className="content-wrapper">
				<div className="container-fluid">
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1>About us</h1>
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-2"></div>
						<div className="col-lg-4">
							<div className="card card-primary card-outline">
								<div className="card-body box-profile">
									<div className="text-center">
										<img
											style={{width: 100, height: 100}}
											className="profile-user-img img-fluid img-circle"
											src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/148203412_1877504562396997_7948356194534226096_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=b0Syg3lo66kAX9TdjIh&_nc_ht=scontent.fhan2-2.fna&oh=e132b5787c0ffa76b012bd0c0dd928e3&oe=60BBE9DB"
											alt="UserprofilePicture"
										/>
									</div>
									<h3 className="profile-username text-center" style={{fontFamily: 'sans-serif'}}>
										Phạm Hữu An
									</h3>
									<ul className="list-group list-group-unbordered mb-3">
										<li className="list-group-item">
											<b>Nhóm</b><a className="float-right">HCI_05</a>
										</li>
										<li className="list-group-item">
											<b>Email</b> <a className="float-right">abc@example.com</a>
										</li>
										<li className="list-group-item">
											<b>Số điện thoại</b> <a className="float-right">0987654321</a>
										</li>
									</ul>
									<a href="https://www.facebook.com/some.lonely.stars" rel="noreferrer" target="_blank" className="btn btn-primary btn-block">
										<b>Facebook</b>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card card-primary card-outline">
								<div className="card-body box-profile">
									<div className="text-center">
										<img
											style={{width: 100, height: 100}}
											className="profile-user-img img-fluid img-circle"
											src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/118121774_708146633390107_639918957851404698_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=SRgvR7Vk8_EAX_UAwCm&_nc_ht=scontent.fhan2-2.fna&oh=840d16895d811c0e7e89fceee0039af2&oe=60BE83BC"
											alt="UserprofilePicture"
										/>
									</div>
									<h3 className="profile-username text-center" style={{fontFamily: 'sans-serif'}}>
										Hoàng Minh Nguyệt
									</h3>
									<ul className="list-group list-group-unbordered mb-3">
										<li className="list-group-item">
											<b>Nhóm</b> <a className="float-right">HCI_05</a>
										</li>
										<li className="list-group-item">
											<b>Email</b> <a className="float-right">abc@example.com</a>
										</li>
										<li className="list-group-item">
											<b>Số điện thoại</b> <a className="float-right">0987654321</a>
										</li>
									</ul>
									<a href="https://www.facebook.com/NguyetHMMM" rel="noreferrer" target="_blank" className="btn btn-primary btn-block">
										<b>Facebook</b>
									</a>
								</div>						
							</div>
						</div>
						<div className="col-lg-2"></div>
						<div className="col-lg-2"></div>
						<div className="col-lg-4">
							<div className="card card-primary card-outline">
								<div className="card-body box-profile">
									<div className="text-center">
										<img
											style={{width: 100, height: 100}}
											className="profile-user-img img-fluid img-circle"
											src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/108105675_3743989575617134_1472989710467511334_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=81DkQUaw1VUAX9GMt2L&_nc_ht=scontent.fhan2-3.fna&oh=a5b4f6b74ab26a50f04638d43b8393a5&oe=60988A68"
											alt="UserprofilePicture"
										/>
									</div>
									<h3 className="profile-username text-center" style={{fontFamily: 'sans-serif'}}>
										Nguyễn Đức Nam
									</h3>
									<ul className="list-group list-group-unbordered mb-3">
										<li className="list-group-item">
											<b>Nhóm</b><a className="float-right">HCI_05</a>
										</li>
										<li className="list-group-item">
											<b>Email</b> <a className="float-right">abc@example.com</a>
										</li>
										<li className="list-group-item">
											<b>Số điện thoại</b> <a className="float-right">0987654321</a>
										</li>
									</ul>
									<a href="https://www.facebook.com/nam.nguyenn99" rel="noreferrer" target="_blank" className="btn btn-primary btn-block">
										<b>Facebook</b>
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="card card-primary card-outline">
								<div className="card-body box-profile">
									<div className="text-center">
										<img
											style={{width: 100, height: 100}}
											className="profile-user-img img-fluid img-circle"
											src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"
											alt="UserprofilePicture"
										/>
									</div>
									<h3 className="profile-username text-center" style={{fontFamily: 'sans-serif'}}>
										Đỗ Đức Thuận
									</h3>
									<ul className="list-group list-group-unbordered mb-3">
										<li className="list-group-item">
											<b>Nhóm</b> <a className="float-right">HCI_05</a>
										</li>
										<li className="list-group-item">
											<b>Email</b> <a className="float-right">abc@example.com</a>
										</li>
										<li className="list-group-item">
											<b>Số điện thoại</b> <a className="float-right">0987654321</a>
										</li>
									</ul>
									<a href="https://www.facebook.com/mater.ji.10" rel="noreferrer" target="_blank" className="btn btn-primary btn-block">
										<b>Facebook</b>
									</a>
								</div>						
							</div>
						</div>
						<div className="col-lg-2"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
