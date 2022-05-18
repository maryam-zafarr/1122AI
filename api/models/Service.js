const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
    {
        type: {type: String},
        name: {type: String},
        address: { type: String},
        unitImg: { type: String},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Service", ServiceSchema);
