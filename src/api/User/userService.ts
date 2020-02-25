import { AppError } from "./../../utils";
import { Users } from "./userModel";
import { Profile } from "../Profile";
export class UserService {
    // public getUserByPhoneNumber = async (phoneNumber: string) => {
    //     return Users.findOne({ where: { phoneNumber } });
    // }

    public getAllUsers = async () => {
        return await Users.findAndCount({ current: 1, take: 7 });
    }

    public updateUserInfo = async (userId: string, updatedData: Users) => {
        let user = await Users.findOneOrFail(userId).catch((err) => {
            throw new AppError("User profile not found");
        });

        if (updatedData.profile) {
            let profile = await Profile.findOne(user.profile.id);
            profile = Profile.create({ ...profile, ...updatedData.profile });
            user.profile = await profile.save();
            delete (updatedData.profile);
        }
        user = Users.create({ ...user, ...updatedData });
        return await Users.save(user);

    }

}
