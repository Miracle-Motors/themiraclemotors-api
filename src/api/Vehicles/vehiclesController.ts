import { RegisterVehicleData } from "./vehiclesInterface";
import { VehiclesService } from "./vehiclesService";
import { BaseController } from "../baseController";
import { HttpStatusCode } from "../../enums";

export class VehiclesController extends BaseController {
    private vehiclesService = new VehiclesService();

    public registerVehicle = async (vehicleData: RegisterVehicleData) => {
        const vehicle = await this.vehiclesService.registerVehicle(vehicleData);
        return this.sendResponse({
            data: vehicle,
            message: `Vehicle "${vehicleData.plateNumber}" successfully registered!`,
            statusCode: HttpStatusCode.CREATED,
        });
    }

    public getVehicles = async () => {
        const vehicle = await this.vehiclesService.getVehicles();
        return this.sendResponse({ data: vehicle });
    }
}
