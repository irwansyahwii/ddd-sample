import "reflect-metadata";

import Hapi, { ResponseToolkit } from "hapi";
import { RegisterUserAndVehicleDTO } from "../lib/factories/RegisterUserAndVehicleDTO";
import { CompositionRoot } from "../lib/application-services/CompositionRoot";
import { IRegisterUserAndVehicleService} from "../lib/application-services";
import { container } from "tsyringe";
import { DependencyConstants } from "../lib/application-services/DependencyConstants";

// Create a server with a host and port
const server= new Hapi.Server({
    host:'localhost',
    port:8000
});

// Add the route
server.route({
    method:'POST',
    path:'/register',
    handler: async (request: any, h:any) =>{

        console.log("payload:", request.payload);

        let service:IRegisterUserAndVehicleService = container.resolve<IRegisterUserAndVehicleService>(DependencyConstants.REGISTER_USER_AND_VEHICLE_SERVICE);

        try {
            await service.Run(request.payload);
            return h.response({success:true})
        } catch (error) {
            console.log("error:", error);
            return h.response({success:false, error: error + ""});
        }
         
    }
});

// Start the server
const start =  async function() {

    try {
        CompositionRoot.ComposeApplication();

        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();