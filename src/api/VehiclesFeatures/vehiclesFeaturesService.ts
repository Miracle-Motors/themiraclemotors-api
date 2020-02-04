import { VehiclesFeatures } from "./vehiclesFeaturesModel";
import { AppError } from "../../utils";

export class VehiclesFeaturesService {
    public createVehicleFeatureAttribute = async (attribute: string) => {
        const exAttribute = await VehiclesFeatures.findOne({ attribute });
        if (exAttribute) {
            throw new AppError(`Attribute "${attribute}" already exists!`);
        }

        return await VehiclesFeatures.create({ attribute }).save();
    }

    public getVehicleFeatures = async () => {
        return await VehiclesFeatures.find();
    }
}
