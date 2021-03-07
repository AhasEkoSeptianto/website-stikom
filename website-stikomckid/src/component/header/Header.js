import React, { Fragment, useState } from "react";

// icons material-ui
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import EmailIcon from "@material-ui/icons/Email";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardIcon from "@material-ui/icons/Dashboard";

// material ui
import { Container, Icon, Typography, Grid } from "@material-ui/core";

// mycss
import styles from "./Header.module.css";

// link
import { Link, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	is_auth = () => {
		let storage = localStorage.getItem("username");
		if (storage) {
			this.props.login(localStorage.getItem("username"));
		}
	};

	showAuth = () => {
		if (this.props.username === "annonymous") {
			return (
				<Link className={styles.container_login} to="/login">
					<p className={styles.p_login}>Login</p>
					<AccountCircleIcon />
				</Link>
			);
		} else if (this.props.username === "admin") {
			return (
				<Fragment>
					<Link className={styles.container_login} to="/dashboard">
						<p className={styles.p_login}>Dashboard</p>
						<DashboardIcon />
					</Link>
					<div
						className={styles.container_logout}
						onClick={this.props.logout}
					>
						<p className={styles.p_login}>Logout</p>
						<AccountCircleIcon />
					</div>
				</Fragment>
			);
		}
	};

	componentDidMount() {
		this.is_auth();
	}

	render() {
		return (
			<Fragment>
				<div className={styles.header}>
					<Container>
						<Grid container spacing={1}>
							<Grid
								container
								item
								xs={6}
								className={styles.headerListLeft}
							>
								<div className={styles.phoneCenter}>
									<AddIcCallIcon
										className={styles.imgCallPhone}
										style={{ fontSize: 15 }}
									/>
									<p className={styles.textIcon}>
										+62 235 6789
									</p>
								</div>
								<div className={styles.emailCenter}>
									<EmailIcon
										className={styles.imgheaderEmail}
										style={{ fontSize: 15 }}
									/>
									<p className={styles.textIcon}>
										stikomckid@gmail.ac.id
									</p>
								</div>
							</Grid>
							<Grid
								container
								item
								xs={6}
								className={styles.headerListRight}
							>
								{this.showAuth()}
							</Grid>
						</Grid>
					</Container>
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		username: state.username,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (user) => {
			dispatch({ type: "login", user: user });
		},
		logout: () => {
			dispatch({ type: "logout", user: "annonymous" });
			localStorage.removeItem("username");
			localStorage.removeItem("auth-token");

			window.location.reload();
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
