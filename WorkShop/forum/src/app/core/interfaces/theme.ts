import { IBase } from "./base";
import { IUser } from "./user";

export interface ITheme<T = string> extends IBase {
    themeName: string;
    userId: IUser;
    subscribers: string[];
    posts: T[];
}