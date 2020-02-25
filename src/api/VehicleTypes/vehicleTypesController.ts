import { VehicleTypesService } from "./vehicleTypesService";
import { AddVehicleTypeData } from "./vehicleTypesInterface";
import { BaseController } from "../baseController";

export class VehicleTypesController extends BaseController {
    private vehicleTypesService = new VehicleTypesService();

    public addVehicleType = async (model: AddVehicleTypeData) => {
        const vehicle = await this.vehicleTypesService.addVehicleType(model);
        return this.sendResponse({ data: vehicle, message: `Vehicle Model "${model.model}" successfully registered!` });
    }
}
