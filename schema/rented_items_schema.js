var mongoose = require('mongoose');
/* posts schema*/
var rentedItemsSchema = mongoose.Schema({
    item_id: { type: String },
    customer_name: [{ type: String }],
    customer_contact: { type: String },
    rented_from: { type: Date },
    rented_to: { type: Date },
    charges_applicable: { type: Number },
    amount_paid: { type: Number },
    remaining_amount: { type: Number },
}, { collection: 'rentedItems' });

function getRentedItemsSchemaModel() {
    if (mongoose.models && mongoose.models.rentedItemsSchema) {
        return mongoose.models.rentedItemsSchema;
    } else {
        return mongoose.model('rentedItemsSchema', rentedItemsSchema);
    }
}
module.exports = getRentedItemsSchemaModel();
