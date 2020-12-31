
/**
 * Contains functions to perform order Validations
 * @type {class}
 */
class Validator {

    constructor(logger){
        this.logger = logger;
    }

    //Validator for checking request for add income

    validateAddService(body)
    {
        const logger = this.logger;
        let response = false;
        let param = ["serviceName"];

        for(let index of param)
        {
            if(body[index] == undefined || body[index] == null)
            {
                response = false;
                break;
            }
            else
            {
                response= true;
            }
        }
        return response;
    }


    validateUpdateService(body){
        const logger = this.logger;
        let response = false;
        let param = ["serviceName","serviceId"];

  
        for(let index of param)
        {
            if(body[index] == undefined || body[index] == null)
            {
                response = false;
                break;
            }
            else
            {
                response= true;
            }
        }
        return response;
    }
    validateDeleteService(body){
        const logger = this.logger;
        let response = false;
        let param = ["serviceId"];

  
        for(let index of param)
        {
            if(body[index] == undefined || body[index] == null)
            {
                response = false;
                break;
            }
            else
            {
                response= true;
            }
        }
        return response;

    }
    
    validateGetAllServices(body)

    {
        const logger = this.logger;
        let response = false;

        if(body.society_id == undefined || body.society_id == null)
           response = false;
        else
           response = true;

        return response;
    }

}
module.exports = Validator;
