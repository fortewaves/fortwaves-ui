import axios from "axios";

export default class Api {
	constructor() {
		this.base_url = "https://fortewaves.herokuapp.com";
	}
	//GET REQUEST
	getUser(token) {
		return axios.get(`${this.base_url}/user/${token}`);
	}
	getWallet(token) {
		return axios.get(`${this.base_url}/wallet/${token}`);
	}

	getProfile(token) {
		return axios.get(`${this.base_url}/user/profile/${token}`);
	}

	getBankDetails(token) {
		return axios.get(`${this.base_url}/bank/${token}`);
	}

	getReferals(token) {
		return axios.get(`${this.base_url}/refer/list/${token}`);
	}

	getroom(roomName) {
		return axios.get(`${this.base_url}/room/${roomName}`);
	}

	//POST REQUEST
	register(email, password, name) {
		return axios.post(`${this.base_url}/signup`, {
			email,
			password,
			name,
		});
	}

	profile(user, phoneNumber, dob, gender, username, address) {
		return axios.post(`${this.base_url}/user/profile`, {
			user,
			phoneNumber,
			dob,
			gender,
			username,
			address,
		});
	}

	createRoom(user, title) {
		return axios.post(`${this.base_url}/room/create`, {
			user,
			title,
		});
	}

	sendMessage(message, from, roomId) {
		return axios.post(`${this.base_url}/room/send`, {
			message,
			from,
			roomId,
		});
	}

	newInvestment(user, sponsor, amount, name, percentage, reference) {
		return axios.post(`${this.base_url}/investment/add`, {
			user,
			sponsor,
			amount,
			name,
			percentage,
			reference,
		});
	}
}
