import { SettingsData } from "./settingsInterface";
import { BaseController } from "../baseController";
import { SettingsService } from "./settingsService";

export class SettingsController extends BaseController {
    private SettingsService = new SettingsService();

    public updateSettings = async (id: string, updatedData: SettingsData) => {
        const settings = await this.SettingsService.updateSettings(id, updatedData);
        return this.sendResponse({ data: settings, message: "Successfully updated app settings!" });
    }

    public getSettings = async () => {
        const settings = await this.SettingsService.getSettings();
        return this.sendResponse({ data: settings });
    }
}
