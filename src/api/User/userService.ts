import { Users } from "./userModel";

export class UserService {
    // public getUserByPhoneNumber = async (phoneNumber: string) => {
    //     return Users.findOne({ where: { phoneNumber } });
    // }

    public getAllUsers = async () => {
        return await Users.find();
    }

}
