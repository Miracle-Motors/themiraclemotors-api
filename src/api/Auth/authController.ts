import { SignupData } from "./authInterface";
import { AuthService } from "./authService";
import { BaseController } from "../baseController";

export class AuthController extends BaseController {
  private authService = new AuthService();

  public login = async (body: { phoneNumber: string; password: string; }) => {
    const data = await this.authService.loginUser(body);
    return this.sendResponse(data, "Logged In");
  }

  public signup = async (user: SignupData) => {
    const data = await this.authService.registerUser(user);
    return this.sendResponse(data, "User registration successful");
  }

  public refreshTokens = async (refreshToken) => {
    const tokens = await this.authService.refreshTokens(refreshToken);
    return this.sendResponse(tokens);
  }

}
