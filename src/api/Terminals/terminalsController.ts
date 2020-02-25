import { AddTerminal } from "./terminalInterface";
import { BaseController } from "./../baseController";
import { TerminalsService } from "./terminalsService";
import { HttpStatusCode } from "../../enums";

export class TerminalsController extends BaseController {
    private terminalsService = new TerminalsService();

    public getTerminals = async ({ page, limit }) => {
        const terminalsRes = await this.terminalsService.getTerminals({ page, limit });
        return this.sendResponse({ data: terminalsRes[0], total: terminalsRes[1] });
    }

    public addTerminal = async (terminalData: AddTerminal) => {
        const terminal = await this.terminalsService.addTerminal(terminalData);
        return this.sendResponse({ data: terminal, message: `${terminal.name} Terminal added!`, statusCode: HttpStatusCode.CREATED });
    }
}
