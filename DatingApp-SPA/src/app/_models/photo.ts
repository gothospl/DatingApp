import { User } from "./user";

export interface Photo {
    id: number;
    url: string;
    description: string;
    dateAdded: Date;
    isMain: boolean;
    user: User;
    userId: number;
}
