import { BaseController } from "./../baseController";
import { StatesService } from "./statesService";

export class StatesController extends BaseController {
    private statesService = new StatesService();

    public getStates = async () => {
        const states = await this.statesService.getStates();
        return this.sendResponse({ data: states });
    }
}
