import settings from '../../config/config.json' assert { type: 'json' };
import credentials from '../../config/credentials.json' assert { type: 'json' };
import { MongoClient, type Collection } from 'mongodb';
import { Entry } from '../types/entry.js';

const client = new MongoClient(credentials.MongoDatabase);

async function connect(): Promise<Collection> {
    await client.connect();
    const collection: Collection = client
        .db(settings.DatabaseName)
        .collection(settings.CollectionName);
    return collection;
}

const mongo = await connect();

export async function getEntry(userId: string): Promise<Entry | null> {
    return (await mongo.findOne({ userId })) as Entry | null;
}
