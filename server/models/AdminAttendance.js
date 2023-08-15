const { Schema, model } = require("mongoose");

const AdminAttendanceSchema = new Schema({
	timeLimit: Number,
	status: String,
	createdAt: Date,
});

const AdminAttendace = model("AdminAttendace", AdminAttendanceSchema);

module.exports = AdminAttendace;
