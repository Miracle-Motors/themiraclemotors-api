import { BaseController } from "./../baseController";
import { VehiclesFeaturesService } from "./vehiclesFeaturesService";

export class VehiclesFeaturesController extends BaseController {
    private vehiclesFeaturesService = new VehiclesFeaturesService();

    public createVehicleFeatureAttribute = async ({ attribute }) => {
        const feature = await this.vehiclesFeaturesService.createVehicleFeatureAttribute(attribute);
        return this.sendResponse(feature, `Added "${attribute}" to vehicle features!`);
    }
    public getVehicleFeatures = async () => {
        const features = await this.vehiclesFeaturesService.getVehicleFeatures();
        return this.sendResponse(features);
    }
}
