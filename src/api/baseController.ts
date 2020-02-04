import { HttpStatusCode } from "./../enums";
export class BaseController {
    public sendResponse(data, message = "OK", statusCode: HttpStatusCode = HttpStatusCode.OK, status = true) {
        return { data, message, statusCode, status };
    }
}
