/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import PathString from "../constants/PathString";

const MainSlideBarContainer = () => {
	const location = useLocation();
	return (
		<aside className="main-sidebar sidebar-dark-primary elevation-4">
			<Link to={PathString.Home} className="brand-link">
				<img
					src="https://image.flaticon.com/icons/png/512/1791/1791400.png"
					alt="Tockyvnlogo"
					className="brand-image img-circle elevation-3"
					style={{ opacity: 0.8 }}
				/>
				<span style={{ fontFamily: 'sans-serif' }} className="brand-text font-weight-light">Tốc ký</span>
			</Link>

			<div className="sidebar">
				<div className="user-panel mt-3 pb-3 mb-3 d-flex">
					<div className="image">
						<img
							src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/148203412_1877504562396997_7948356194534226096_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3CgqXHrFfqoAX_jr31o&_nc_ht=scontent.fhan2-2.fna&oh=b7fdc0c38be728793324a101a3a3b90c&oe=60E376DB"
							alt="UserImage"
							className="img-circle elevation-2"
						/>
					</div>
					<div className="info">
						<a href="#" className="d-block">
							Group 3
						</a>
					</div>
				</div>
				<div className="user-panel pb-3">
					<nav className="mt-2">
						<ul
							className="nav nav-pills nav-sidebar flex-column"
							role="menu"
							data-accordion="false"
						>
							<li className="nav-item">
								<Link to={PathString.TienBo} className={'nav-link'}>
									<i class="nav-icon far fa-chart-bar"></i>
									<p>Tiến bộ của tôi</p>
								</Link>
							</li>
						</ul>
						{/* <Link to={PathString.TienBo} className={'nav-link'}>
							<i class="nav-icon far fa-chart-bar"></i>
							<p>Tiến bộ của tôi</p>
						</Link> */}
					</nav>
				</div>

				<nav className="mt-2">
					<ul
						className="nav nav-pills nav-sidebar flex-column"
						data-widget="treeview"
						role="menu"
						data-accordion="false"
					>
						<li className="nav-item">
							<Link to={PathString.Home} className={`nav-link ${location.pathname === PathString.Home ? 'active' : ''}`}>
								<i className="nav-icon fas fa-home"></i>
								<p>Trang chủ</p>
							</Link>
						</li>
						<li className="nav-item">
							<Link to={PathString.Rules} className={`nav-link ${location.pathname === PathString.Rules ? 'active' : ''}`}>
								<i className="nav-icon fas fa-exclamation-circle"></i>
								<p>Quy tắc gõ tốc ký</p>
							</Link>
						</li>
						<li className={`nav-item ${location.pathname.startsWith(PathString.HocGo) ? 'menu-is-opening menu-open' : ''}`}>
							<a href="#" className="nav-link">
								<i className="nav-icon far fa-plus-square"></i>
								<p>
									Học gõ tốc ký
									<i className="fas fa-angle-left right"></i>
								</p>
							</a>
							<ul className="nav nav-treeview">
								<li className={`nav-item ${location.pathname.startsWith(PathString.HocGoAm) ? 'menu-is-opening menu-open' : ''}`}>
									<a href="#" className="nav-link">
										<i style={{ marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p>
											Học gõ âm
											<i className="fas fa-angle-left right"></i>
										</p>
									</a>
									<ul className="nav nav-treeview">
										<li className="nav-item">
											<Link to={PathString.HocGoAmDau} className={`nav-link ${location.pathname === PathString.HocGoAmDau ? 'active' : ''}`}>
												<i style={{ marginLeft: 30 }} className="fab fa-leanpub nav-icon"></i>
												<p>Âm đầu</p>
											</Link>
										</li>
										<li className="nav-item">
											<Link to={PathString.HocGoAmChinh} className={`nav-link ${location.pathname === PathString.HocGoAmChinh ? 'active' : ''}`}>
												<i style={{ marginLeft: 30 }} className="fab fa-leanpub nav-icon"></i>
												<p>Âm chính</p>
											</Link>
										</li>
										<li className="nav-item">
											<Link
												to={PathString.HocGoAmCuoi}
												className={`nav-link ${location.pathname === PathString.HocGoAmCuoi ? 'active' : ''}`}
											>
												<i style={{ marginLeft: 30 }} className="fab fa-leanpub nav-icon"></i>
												<p>Âm cuối</p>
											</Link>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<Link to={PathString.HocGoSo} className={`nav-link ${location.pathname === PathString.HocGoSo ? 'active' : ''}`}>
										<i style={{ marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p>Học gõ số</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										style={{ display: 'flex' }}
										to={PathString.HocGoKyHieuDacBiet}
										className={`nav-link ${location.pathname === PathString.HocGoKyHieuDacBiet ? 'active' : ''}`}
									>
										<i style={{ marginTop: 5, marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p style={{ flex: 1 }}>Học gõ các ký hiệu đặc biệt</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to={PathString.HocQuyTacXoa} className={`nav-link ${location.pathname === PathString.HocQuyTacXoa ? 'active' : ''}`}>
										<i style={{ marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p>Học quy tắc xóa</p>
									</Link>
								</li>
							</ul>
						</li>
						<li className={`nav-item ${location.pathname.startsWith(PathString.LuyenGo) ? 'menu-is-opening menu-open' : ''}`}>
							<a href="#" className="nav-link">
								<i className="nav-icon far fa-plus-square"></i>
								<p>
									Luyện gõ tốc ký
									<i className="fas fa-angle-left right"></i>
								</p>
							</a>
							<ul className="nav nav-treeview">
								<li className={`nav-item ${location.pathname.startsWith(PathString.LuyenGoAm) ? 'menu-is-opening menu-open' : ''}`}>
									<a href="#" className="nav-link">
										<i style={{ marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p>
											Luyện tập gõ âm
											<i className="fas fa-angle-left right"></i>
										</p>
									</a>
									<ul className="nav nav-treeview">
										<li className="nav-item">
											<Link to={PathString.LuyenGoAmDau} className={`nav-link ${location.pathname === PathString.LuyenGoAmDau ? 'active' : ''}`}>
												<i style={{ marginLeft: 30 }} className="fab fa-leanpub nav-icon"></i>
												<p>Âm đầu</p>
											</Link>
										</li>
										<li className="nav-item">
											<Link to={PathString.LuyenGoAmChinh} className={`nav-link ${location.pathname === PathString.LuyenGoAmChinh ? 'active' : ''}`}>
												<i style={{ marginLeft: 30 }} className="fab fa-leanpub nav-icon"></i>
												<p>Âm chính</p>
											</Link>
										</li>
										<li className="nav-item">
											<Link
												to={PathString.LuyenGoAmCuoi}
												className={`nav-link ${location.pathname === PathString.LuyenGoAmCuoi ? 'active' : ''}`}
											>
												<i style={{ marginLeft: 30 }} className="fab fa-leanpub nav-icon"></i>
												<p>Âm cuối</p>
											</Link>
										</li>
									</ul>
								</li>
								<li className="nav-item">
									<Link to={PathString.LuyenGoSo} className={`nav-link ${location.pathname === PathString.LuyenGoSo ? 'active' : ''}`}>
										<i style={{ marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p>Luyện tập gõ số</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link
										style={{ display: 'flex' }}
										to={PathString.LuyenGoKyHieuDacBiet}
										className={`nav-link ${location.pathname === PathString.LuyenGoKyHieuDacBiet ? 'active' : ''}`}
									>
										<i style={{ marginTop: 5, marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p style={{ flex: 1 }}>Luyện tập gõ các ký hiệu đặc biệt</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to={PathString.LuyenQuyTacXoa} className={`nav-link ${location.pathname === PathString.LuyenQuyTacXoa ? 'active' : ''}`}>
										<i style={{ marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p>Luyện tập quy tắc xóa</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link to={PathString.LuyenGoCau} className={`nav-link ${location.pathname === PathString.LuyenGoCau ? 'active' : ''}`}>
										<i style={{ marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p>Luyện tập gõ câu</p>
									</Link>
								</li>
								<li className="nav-item">
									<Link style={{ display: 'flex' }} to={PathString.LuyenGoVanBan} className={`nav-link ${location.pathname === PathString.LuyenGoVanBan ? 'active' : ''}`}>
										<i style={{ marginTop: 5, marginLeft: 15 }} className="fab fa-leanpub nav-icon"></i>
										<p style={{ flex: 1 }}>Luyện tập gõ đoạn văn bản</p>
									</Link>
								</li>
							</ul>
						</li>
						<li className={`nav-item ${location.pathname.startsWith(PathString.Games) ? 'menu-is-opening menu-open' : ''}`}>
							<a href="#" className="nav-link">
								<i className="nav-icon fas fa-gamepad"></i>
								<p>Trò chơi<i className="fas fa-angle-left right"></i></p>
							</a>
							<ul className="nav nav-treeview">
								<li className="nav-item">
									<Link to={PathString.GameTimBucTranhBiAn} className={`nav-link ${location.pathname === PathString.GameTimBucTranhBiAn ? 'active' : ''}`}>
										<i style={{ marginLeft: 15 }} className="fas fa-gamepad nav-icon"></i>
										<p>Tìm bức tranh bị ẩn</p>
									</Link>
								</li>

								<li className="nav-item">
									<Link to={PathString.GameHangMan} className={`nav-link ${location.pathname === PathString.GameHangMan ? 'active' : ''}`}>
										<i style={{ marginLeft: 15 }} className="fas fa-gamepad nav-icon"></i>
										<p>HangMan</p>
									</Link>
								</li>
							</ul>
						</li>
						{/* <li className="nav-item">
							<a href="#" className="nav-link">
								<i className="nav-icon fas fa-exclamation-circle"></i>
								<p>Kiểm tra khả năng gõ tốc ký</p>
							</a>
						</li> */}
						<li className="nav-item">
							<Link to={PathString.SoanThaoVanBan} className={`nav-link ${location.pathname === PathString.SoanThaoVanBan ? 'active' : ''}`}>
								<i className="nav-icon fas fa-pencil-alt"></i>
								<p>Soạn thảo văn bản</p>
							</Link>
						</li>
					</ul>

				</nav>
			</div>
		</aside>
	);
};

export default MainSlideBarContainer;
