import { Roles } from "./roleModel";
import { AppError } from "../../utils";

export class RoleService {
    public getAllRoles = async () => {
        return await Roles.find();
    }

    public createRole = async (role: Roles) => {
        const exRole = await Roles.findOne({ role: role.role });
        if (exRole) {
            throw new AppError(`Role "${role.role}" already exist!`);
        }

        return await Roles.create(role).save();
    }

}
