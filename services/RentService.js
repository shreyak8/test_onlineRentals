const DataCalls = require('../dataLogicLayer/rentDataCalls');
const Mongoose = require('mongoose');

let dataCalls = new DataCalls();
class RentService {

    constructor(logger) {
        this.logger = logger;
    }

    /**
     * This function will handle all user related functionalities 
     * like add, update and delete
     */
    async addUpdateUser(body) {
        let user;
        try {
            user = body.user_id == "" ? await dataCalls.addUser(body) : await dataCalls.updateUser(body)
            return this.returnSuccess({ user: user });
        } catch (error) {
            this.returnError(errorCode.errorFunction('DB_WRITE_ERROR'), 'Something went wrong');
        }
    }

    async addUpdateRental(body){
        let rental;

        try {
            let rentalData = await dataCalls.getRentalData(body.rentalId);

            if (rentalData.is_booked) {
                this.returnError(errorCode.errorFunction('DB_WRITE_ERROR'), 'Can not update rental as it is already booked!');
            }  else{
                rental = body.rentalId == "" ? await dataCalls.addRental(body) : await dataCalls.updateRental(body);
            }


        } catch (error) {
            this.returnError(errorCode.errorFunction('DB_WRITE_ERROR'), 'Something went wrong');
        }
    }

    async bookRental(body){
        let rental;

        try {
            rental = await dataCalls.getRentalData(body.rentalId)

            if (rental.is_booked) {
                this.returnError(errorCode.errorFunction('DB_WRITE_ERROR'), 'Can not book as this item is already booked, please select some other day!');
            } else {

                // Calculate total amount by calculating day difference and multply it by amount per day
                // update the rental flag to true
                // add one entry for the tental item 



                // let data = {
                //     item_id: { type: String },
                //     customer_name: [{ type: String }],
                //     customer_contact: { type: String },
                //     rented_from: { type: Date },
                //     rented_to: { type: Date },
                //     charges_applicable: { type: Number },
                //     amount_paid: { type: Number },
                //     remaining_amount: { type: Number },
                
                // }
            }


        } catch (error) {
            this.returnError(errorCode.errorFunction('DB_WRITE_ERROR'), 'Something went wrong');
        }

    }



    //SUCCESS
    // @ts-ignore
    returnSuccess(data, msg) {
        let response = this.defaultResponse();
        response.body = JSON.stringify({
            success: true,
            message: msg,
            data: data,
        });
        return response;
    }

    //ERROR
    returnError(error, msg) {
        let response = this.defaultResponse();
        response.body = JSON.stringify({
            success: false,
            message: msg,
            errorFor: error
        });
        return response;
    }

    defaultResponse() {
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*" // Required for CORS support to work
            }
        };
    }


}

module.exports = RentService;
