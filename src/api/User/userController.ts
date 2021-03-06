import { Users } from "./userModel";
import { UserService } from "./userService";
import { BaseController } from "../baseController";

/**
 * User controller
 *
 * @export
 * @class UserController
 */
export class UserController extends BaseController {
    private userService = new UserService();

    public getAllUsers = async ({ limit, page }) => {
        const res = await this.userService.getAllUsers(page, limit);
        return this.sendResponse({ data: res[0], total: res[1] });
    }

    public updateUserInfo = async (userId: string, data: Users) => {
        const users = await this.userService.updateUserInfo(userId, data);
        return this.sendResponse({ data: users, message: "User profile has been successfully updated!" });
    }
}
