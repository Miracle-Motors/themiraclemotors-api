import { States } from "./statesModel";
export class StatesService {
    public async getStates() {
        return await States.find({ relations: ["lgas"] });
    }
}
