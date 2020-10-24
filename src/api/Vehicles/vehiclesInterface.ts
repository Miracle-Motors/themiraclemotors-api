export interface RegisterVehicleData {
    plateNumber: string;
    typeId: string;
    description?: string;
    features: Array<{ id: string }>;
}
