var mongoose = require('mongoose');
/* posts schema*/
var userSchema = mongoose.Schema({
    name: { type: String },
    profile_image: { type: String },
    contact: { type: Number },
    is_deleted: { type: String }
}, { collection: 'user' });

function getUserSchemaModel() {
    if (mongoose.models && mongoose.models.userSchema) {
        return mongoose.models.userSchema;
    } else {
        return mongoose.model('userSchema', userSchema);
    }
}
module.exports = getUserSchemaModel();
