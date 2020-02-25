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

    public getAllUsers = async () => {
        const users = await this.userService.getAllUsers();
        return this.sendResponse({ data: users });
    }

    public updateUserInfo = async (userId: string, data: Users) => {
        const users = await this.userService.updateUserInfo(userId, data);
        return this.sendResponse({ data: users, message: "Your profile has been updated successfully!" });
    }
}
