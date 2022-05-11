const mongoose = require("mongoose");

const CallerDetailsSchema = new mongoose.Schema(
    {
        callerName: {type: String, required: true},
        gender: {type: String, required: true},
        callingOnBehalf: { type: Boolean, default: true},
        age: { type: Number},
        bloodGroup: {type: String},
        medicalConditions: {type: String},
        other: {type: String}
    },
    { timestamps: true }
);

module.exports = mongoose.model("CallerDetails", CaseSchema);