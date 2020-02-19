import { BaseController } from "./../baseController";
import { PaymentsService } from "./paymentsService";

export class PaymentsController extends BaseController{
    private paymentsService = new PaymentsService();

}
