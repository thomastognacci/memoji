import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class SignInSnackbars extends React.PureComponent {
	state = {
		open: false,
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	componentDidUpdate(prevProps) {
		if (prevProps.isSignedIn !== this.props.isSignedIn) {
			this.setState({ open: true });
		}
	}
	render() {
		const { open } = this.state;
		const { isSignedIn } = this.props;
		return (
			<Snackbar
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				open={open}
				autoHideDuration={5000}
				onClose={this.handleClose}
				ContentProps={{
					"aria-describedby": "message-id",
				}}
				message={
					<span id="message-id">
						{isSignedIn ? "You are signed-in. Your best score will automatically be uploaded." : "You are signed-out."}
					</span>
				}
				action={[
					<IconButton key="close" aria-label="Close" color="inherit" className="" onClick={this.handleClose}>
						<CloseIcon />
					</IconButton>,
				]}
			/>
		);
	}
}

SignInSnackbars.propTypes = {
	isSignedIn: PropTypes.bool.isRequired,
};

export default SignInSnackbars;
