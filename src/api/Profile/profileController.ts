import { Profile } from "./profileModel";
import { Users } from "./../User/userModel";
import { BaseController } from "./../baseController";
import { ProfileService } from "./profileService";

export class ProfileController extends BaseController {
    private profileService = new ProfileService();

    public updateUserProfile = async (user: Users, data: Profile) => {
        const profile = await this.profileService.updateUserProfile(user, data);
        return this.sendResponse(profile);
    }
}
