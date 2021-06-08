import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import PathString from '../constants/PathString';
import Contact from '../pages/Contact';
import HocGoAmChinh from '../pages/HocGoAmChinh';
import HocGoAmCuoi from '../pages/HocGoAmCuoi';
import HocGoAmDau from '../pages/HocGoAmDau';
import HocGoKyHieuDacBiet from '../pages/HocGoKyHieuDacBiet';
import HocGoSo from '../pages/HocGoSo';
import HocQuyTacXoa from '../pages/HocQuyTacXoa';
import Home from '../pages/Home';
import LuyenGoAmChinh from '../pages/LuyenGoAmChinh';
import LuyenGoAmCuoi from '../pages/LuyenGoAmCuoi';
import LuyenGoAmDau from '../pages/LuyenGoAmDau';
import LuyenGoCau from '../pages/LuyenGoCau';
import LuyenGoDoanVanBan from '../pages/LuyenGoDoanVanBan';
import LuyenGoKyHieuDacBiet from '../pages/LuyenGoKyHieuDacBiet';
import LuyenGoSo from '../pages/LuyenGoSo';
import LuyenQuyTacXoa from '../pages/LuyenQuyTacXoa';
import Rules from '../pages/Rules';
import StartScreen from '../pages/StartScreen';
import TimBucTranhBiAn from '../pages/TimBucTranhBiAn';
import HangManScreen from '../pages/HangManScreen';
import SoanThaoVanBan from '../pages/SoanThaoVanBan';
import TienBo from '../pages/TienBo';

const MainRoute = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={PathString.StartScreen}>
					<StartScreen />
				</Route>
				<Route exact path={PathString.Home}>
					<Home />
				</Route>
				<Route exact path={PathString.Contact}>
					<Contact />
				</Route>
				<Route exact path={PathString.Rules}>
					<Rules />
				</Route>
				<Route exact path={PathString.HocGoAmDau}>
					<HocGoAmDau />
				</Route>
				<Route exact path={PathString.HocGoAmChinh}>
					<HocGoAmChinh />
				</Route>
				<Route exact path={PathString.HocGoAmCuoi}>
					<HocGoAmCuoi />
				</Route>
				<Route exact path={PathString.HocGoSo}>
					<HocGoSo />
				</Route>
				<Route exact path={PathString.HocGoKyHieuDacBiet}>
					<HocGoKyHieuDacBiet />
				</Route>
				<Route exact path={PathString.HocQuyTacXoa}>
					<HocQuyTacXoa />
				</Route>
				<Route exact path={PathString.LuyenGoAmDau}>
					<LuyenGoAmDau />
				</Route>
				<Route exact path={PathString.LuyenGoAmChinh}>
					<LuyenGoAmChinh />
				</Route>
				<Route exact path={PathString.LuyenGoAmCuoi}>
					<LuyenGoAmCuoi />
				</Route>
				<Route exact path={PathString.LuyenGoSo}>
					<LuyenGoSo />
				</Route>
				<Route exact path={PathString.LuyenGoKyHieuDacBiet}>
					<LuyenGoKyHieuDacBiet />
				</Route>
				<Route exact path={PathString.LuyenQuyTacXoa}>
					<LuyenQuyTacXoa />
				</Route>
				<Route exact path={PathString.LuyenGoCau}>
					<LuyenGoCau />
				</Route>
				<Route exact path={PathString.LuyenGoVanBan}>
					<LuyenGoDoanVanBan />
				</Route>
				<Route exact path={PathString.GameTimBucTranhBiAn}>
					<TimBucTranhBiAn />
				</Route>
				<Route exact path={PathString.GameHangMan}>
					<HangManScreen />
				</Route>
				<Route exact path={PathString.SoanThaoVanBan}>
					<SoanThaoVanBan />
				</Route>
				<Route exact path={PathString.TienBo}>
					<TienBo />
				</Route>
				<Route path='*'>
					<Redirect to={PathString.Home} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default MainRoute;
