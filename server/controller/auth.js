const { registerService, loginService } = require("../service/auth");

const registerController = async (req, res, next) => {
	/**
	 * Request Input Sources:
	 * req Body
	 * req Param
	 * req Query
	 * req Header
	 * req Cookies
	 */

	// const name = req.body.name;
	// const email = req.body.email;
	// const password = req.body.password;

	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		return res.status(400).json({ message: "Invalid Data" });
	}

	try {
		const user = await registerService({ name, email, password });
		return res
			.status(201)
			.json({ message: "User created successfully", user });
	} catch (e) {
		next(e);
	}
};

const loginController = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const token = await loginService({ email, password });
		return res.status(200).json({ message: "Login Successful", token });
	} catch (e) {
		next(e);
	}
};

module.exports = {
	registerController,
	loginController,
};
