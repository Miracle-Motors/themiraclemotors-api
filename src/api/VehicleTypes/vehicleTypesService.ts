import { AddVehicleTypeData } from "./vehicleTypesInterface";
import { VehicleTypes } from "./vehicleTypesModel";

export class VehicleTypesService {
    public addVehicleType = async (modelData: AddVehicleTypeData) => {
        return await VehicleTypes.create(modelData).save();
    }

}
