import { getEntry } from '../lib/mongo.js';
import { ApiEntry, Badge, Entry } from '../types/entry.js';

export async function probeGlobalBadges(uid: string): Promise<ApiEntry> {
    const entry: Entry | null = await getEntry(uid);
    const returnEntry: ApiEntry = {
        userId: uid,
        badges: [],
    };
    if (entry === null) {
    } else {
        entry.badges.forEach((badge: Badge) => {
            if (badge.pending) {
                return;
            } else {
                returnEntry.badges.push({
                    name: badge.name,
                    badge: badge.badge,
                });
            }
        });
    }
    return returnEntry;
}

console.log(await probeGlobalBadges('516750892372852754'));
