import { Settings } from "./settingsModel";
import { SettingsData } from "./settingsInterface";

export class SettingsService {
    public async getSettings() {
        const settings = await Settings.find({ take: 1 });
        return settings[0];
    }

    public async updateSettings(id: string, data: SettingsData) {
        await Settings.update({ id }, { ...data });
        return await Settings.findOne(id);
    }
}
