import React from "react";
import {Link} from "react-router-dom";
import Color from "../constants/Colors";
import PathString from "../constants/PathString";

const StartScreenNavBar = ({setSelected}) => {
	return (
		<nav className="navbar navbar-expand navbar-dark">
			<ul className="navbar-nav">
				<li className="nav-item d-none d-sm-inline-block">
					<Link to={PathString.StartScreen} style={{ fontWeight:'bold' ,fontFamily: 'Courier', fontSize: 36, color: Color.PrimaryWhite}} className="nav-link">
						HCI05
					</Link>
				</li>
			</ul>

			<ul className="navbar-nav ml-auto">
				<li className="nav-item" onClick={() => setSelected(0)}>
					<div className="button1" style={{fontWeight:'bold' ,fontSize:'18px' ,fontFamily: 'Courier'}}>Giới thiệu</div>
				</li>
				<li className="nav-item" onClick={() => setSelected(1)}>
					<div className="button1" style={{fontWeight:'bold' ,fontSize:'18px' ,fontFamily: 'Courier'}}>Về chúng tôi</div>
				</li>
				<li className="nav-item" onClick={() => setSelected(2)}>
					<div className="button1" style={{fontWeight:'bold' ,fontSize:'18px' ,fontFamily: 'Courier'}}>Đăng nhập</div>
				</li>
				<li className="nav-item" onClick={() => setSelected(3)}>
					<div className="button2" style={{fontWeight:'bold' ,fontSize:'18px' ,fontFamily: 'Courier'}}>Đăng ký</div>
				</li>
			</ul>
		</nav>
	);
};

export default StartScreenNavBar;
