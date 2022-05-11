const { DoubleArrow } = require("@material-ui/icons");
const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema(
    {
        city: { type: String},
        area: { type: String},
        phase: {type: String},
        street: {type: String},
        houseOrApartmentNo: {type: String},
        longitude: {type: Double, required: true},
        latitude: {type: Double, required: true},
    },
    { timestamps: true }
);

module.exports = mongoose.model("Location", LocationSchema);