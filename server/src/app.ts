import { Collection,MongoClient, Db } from 'mongodb';

async function main() {
    const uri = 'mongodb://localhost:27017'; // MongoDB connection URI
    const client = new MongoClient(uri);
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');
        const database = client.db('oneForAll');
        const collection = database.collection('User');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        // Close the connection
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

main();
