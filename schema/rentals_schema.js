var mongoose = require('mongoose');
/* posts schema*/
var rentalSchema = mongoose.Schema({
    name: { type: String },
    images: [{ type: String }],
    owner_id: { type: String },
    rent_amount: { type: Number },
    manufacturing_date: { type: Date },
    is_booked: { type: Boolean },
    is_deleted: { type: Boolean }
}, { collection: 'rental' });

function getRentalSchemaModel() {
    if (mongoose.models && mongoose.models.rentalSchema) {
        return mongoose.models.rentalSchema;
    } else {
        return mongoose.model('rentalSchema', rentalSchema);
    }
}
module.exports = getRentalSchemaModel();
