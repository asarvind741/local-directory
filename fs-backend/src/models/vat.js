import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Vat = new Schema({
    country: {
        id: Number,
        name: String
    },
    state: [{
        id: Number,
        name: String
    }],
    city: [{
        id: Number,
        name: String
    }],
    rate: Number,
    additionalTaxes: [{
        rate: Number,
        name: String
    }],
    paymentMethod: [{
        name: String,
        id: Number
    }]
}, {
    timestamps: true,
});

export default mongoose.model('Vat', Vat);