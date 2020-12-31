const RentalModel = require('../schema/rentals_schema');
const RentalItemsModel = require('../schema/rented_items_schema');
const UserModel = require('../schema/user_schema');

class rentDataCalls {

    async addUser(data) {
        delete data['user_id'];
        return await UserModel.create(data);
    }

    async updateUser(data) {
        return await UserModel.findOneAndUpdate({
            _id: data.user_id
        }, {
            name: data.name,
            profile_image: data.profile_image,
            contact: data.contact,
            is_deleted: data.is_deleted
        }, { new: true });
    }

    async addRental(data) {
        delete data['rentalId'];
        return await RentalModel.create(data);
    }

    async updateRental(data) {
        return await RentalModel.findOneAndUpdate({ _id: data.rentalId }, {
            name: data.name,
            images: data.images,
            rent_amount: data.rent_amount,
            manufacturing_date: data.manufacturing_date,
            is_booked: data.is_booked,
            is_deleted: data.is_deleted
        }, {
            new: true
        })
    }

    async getRentalData(rentalId){
        return await RentalModel.findById(rentalId);
    }

    async bookRental(data){
        return await RentalItemsModel.create(data);
    }

}

module.exports = rentDataCalls;