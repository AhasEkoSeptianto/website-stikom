import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// components
import Nav from "./component/navbar/navbar.js";

// router
import Home from "./view/pages/Home.js";
import Visi_misi_perguruan_tinggi from "./view/pages/visi_misi_perguruan_tinggi.js";
import Tujuan_perguruan_tinggi from "./view/pages/tujuan_perguruan_tinggi.js";
import Kalender_akademik from "./view/pages/kalender_akademik.js";
import Visi_misi_TI from "./view/pages/visi_misi_TI.js";
import Tujuan_prodi_TI from "./view/pages/tujuan_prodi_TI.js";
import Daftar_matakuliah_TI from "./view/pages/daftar_matakuliah_TI.js";
import Visi_misi_SI from "./view/pages/visi_misi_SI.js";
import Tujuan_prodi_SI from "./view/pages/tujuan_prodi_SI.js";
import Daftar_matakuliah_SI from "./view/pages/daftar_matakuliah_SI.js";
import Dashboard from "./view/admin/dashboard/dashboard";

// login page
import Login from "./view/auth/login.js";

// react-router-dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// redux
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
	username: "annonymous",
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "login": {
			return {
				...state,
				username: action.user,
			};
		}
		case "logout": {
			return {
				...state,
				username: "",
			};
		}
	}
	return state;
};

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Nav />
			<Switch>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/daftar-matakuliah-SI">
					<Daftar_matakuliah_SI />
				</Route>
				<Route path="/tujuan-prodi-SI">
					<Tujuan_prodi_SI />
				</Route>
				<Route path="/visi-misi-SI">
					<Visi_misi_SI />
				</Route>
				<Route path="/tujuan-perguruan-tinggi">
					<Tujuan_perguruan_tinggi />
				</Route>
				<Route path="/visi-misi-perguruan-tinggi">
					<Visi_misi_perguruan_tinggi />
				</Route>
				<Route path="/kalender-akademik">
					<Kalender_akademik />
				</Route>
				<Route path="/visi-misi-TI">
					<Visi_misi_TI />
				</Route>
				<Route path="/tujuan-prodi-TI">
					<Tujuan_prodi_TI />
				</Route>
				<Route path="/daftar-matakuliah-TI">
					<Daftar_matakuliah_TI />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById("root")
);
