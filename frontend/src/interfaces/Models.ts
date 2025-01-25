export interface IUser {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface IPost {
    id: string;
    title: string;
    content: string;
    category: TCategory;
    attachments: IAttachment[];
    visibility: TVisibility;
    customVisibility: ICustomVisibility | null;
    tags: string[];
    createdAt: Date;
    likes: IUser[];
    comments: IComment[];
    user: IUser;
}

export type TVisibility = 'Intern' // nur für Mitglieder der eigenen Feuerwehr sichbar 
| 'Friends' // WENN FF Acc.: nur für Mitglieder der eigenen oder befreundeten Feuerwehren sichtbar, WENN nicht FF Acc.: nur für Freunde sichtbar
| 'FireDepartment' // nur für Mitglieder einer Feuerwehr sichtbar
| 'Public' // für alle sichtbar (auch sichtbar für Menschen ohne Account)
| 'Custom';

export interface ICustomVisibility {
    id: string;
    name: string;
    users: IUser[];
}

export type TCategory =
    | "News" // Neuigkeiten
    | "Incidences" // Einsätze
    | "Practice" // Übungen
    | "Workshops" // Schulungen
    | "JuniorFirefighters" // Feuerwehrjugend
    | "Events" // Veranstaltungen
    | "PublicInformation" // Bürgerinformationen

export interface IAttachment {
    url: string;
    altText: string;
}

export interface IComment {
    id: string;
    content: string;
    createdAt: Date;
    likes: IUser[];
    user: IUser;
}