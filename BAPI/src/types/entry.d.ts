import type { ObjectId } from 'mongodb';

// https://github.com/WolfPlugs/GiBBy/blob/main/src/types/entry.d.ts
// https://github.com/WolfPlugs/GiBBy/blob/main/src/types/badge.d.ts

export interface Badge {
    name: string;
    badge: string;
    pending: boolean;
}

export interface Entry {
    _id?: ObjectId;
    userID: string;
    badges: Badge[];
    blocked: boolean; // This may not exist on the un-linted June 2023 database
}

export interface ApiBadge {
    name: string;
    badge: string;
}

export interface ApiEntry {
    userId: string;
    badges: ApiBadge[];
}
