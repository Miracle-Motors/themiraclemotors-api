import { Profile } from "./profileModel";
import { Users } from "./../User/userModel";

export class ProfileService {
    public updateUserProfile = async (user: Users, data: Profile) => {
        let profile = await Profile.findOne({
            where: [{
                user,
            }],
        });
        profile = Profile.create({ ...profile, ...data });
        user.profile = profile;
        await profile.save();
        return await user.save();
    }
}
