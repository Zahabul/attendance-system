const { Schema, model } = require("mongoose");
const AdminAttendace = require("./AdminAttendance");

const StudentAttendanceSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	adminAttendance: {
		type: Schema.Types.ObjectId,
		ref: "AdminAttendace",
	},
	createdAt: Date,
});

const StudentAttendace = model("StudentAttendace", StudentAttendanceSchema);

module.exports = StudentAttendace;
