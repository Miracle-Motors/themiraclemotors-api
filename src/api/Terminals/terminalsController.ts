import { AddTerminal } from "./terminalInterface";
import { BaseController } from "./../baseController";
import { TerminalsService } from "./terminalsService";
import { HttpStatusCode } from "../../enums";

export class TerminalsController extends BaseController {
    private terminalsService = new TerminalsService();

    public getTerminals = async () => {
        const terminals = await this.terminalsService.getTerminals();
        return this.sendResponse(terminals);
    }

    public addTerminal = async (terminalData: AddTerminal) => {
        const terminal = await this.terminalsService.addTerminal(terminalData);
        return this.sendResponse(terminal, `${terminal.name} Terminal added!`, HttpStatusCode.CREATED);
    }
}
