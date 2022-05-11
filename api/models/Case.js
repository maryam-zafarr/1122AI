const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema(
    {
        phoneNumber: {type: String},
        transcript: {type: String},
        typeOfEmergency: { type: String},
        description: { type: String},
        priority: {type: String},
        livesAtRisk: {type: String},
        status: {type: String, default:'Ongoing'}
    },
    { timestamps: true }
);

module.exports = mongoose.model("Case", CaseSchema);