import { BaseController } from "./../baseController";
import { TerminalsService } from "./terminalsService";

export class TerminalsController extends BaseController{
    private terminalsService = new TerminalsService();

}
