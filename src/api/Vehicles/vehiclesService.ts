import { HttpStatusCode } from "./../../enums";
import { VehiclesFeatures } from "./../VehiclesFeatures/vehiclesFeaturesModel";
import { VehicleTypes } from "./../VehicleTypes/vehicleTypesModel";
import { RegisterVehicleData } from "./vehiclesInterface";
import { Vehicles } from "./vehiclesModel";
import { AppError } from "../../utils";

export class VehiclesService {
    public registerVehicle = async (vehicleData: RegisterVehicleData) => {
        const vehicleType = await VehicleTypes.findOneOrFail({ id: vehicleData.typeId }).catch(() => {
            throw new AppError("Invalid vehicle type selected");
        });
        const vehiclesFeatures = await VehiclesFeatures.find({ where: vehicleData.features });
        const exVehicle = await Vehicles.findOne({ plateNumber: vehicleData.plateNumber });
        if (exVehicle) {
            throw new AppError(`Vehicle already registered with plate number #${vehicleData.plateNumber}`, null, HttpStatusCode.UNPROCESSABLE_ENTITY);
        }
        const vehicle = Vehicles.create(vehicleData);
        vehicle.type = vehicleType;
        vehicle.features = vehiclesFeatures;
        return await vehicle.save();
    }

    public getVehicles = async () => {
        return await Vehicles.find();
    }

}
