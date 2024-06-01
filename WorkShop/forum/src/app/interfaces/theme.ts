import { IBase } from "./base";
import { IUser } from "./user";

export interface ITheme extends IBase {
    themeName: string;
    userId: IUser;
    subscribers: string[];
    posts: string[];
}