const mongoose = require('mongoose');

//shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DFW'
    },
    arrival: {
        type: Date,
        required: true
    }
}, {});


const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            const yearFromDate = new Date();
            yearFromDate.setFullYear(yearFromDate.getFullYear() + 1);
            return yearFromDate;
        }
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);