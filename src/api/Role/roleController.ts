import { Roles } from "./roleModel";
import { RoleService } from "./roleService";
import { BaseController } from "../baseController";

/**
 * User controller
 *
 * @export
 * @class UserController
 */
export class RoleController extends BaseController {
    private roleService = new RoleService();

    public getAllRoles = async () => {
        const roles = await this.roleService.getAllRoles();
        return this.sendResponse({ data: roles });
    }

    public createRole = async (role: Roles) => {
        const newRole = await this.roleService.createRole(role);
        return this.sendResponse({ data: newRole, message: `${role.role} role added!` });
    }
}
