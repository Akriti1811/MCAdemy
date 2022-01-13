import { MongoClient} from 'mongodb';

async function Connection(){

  
    const uri = "mongodb+srv://MCAdemy:MCAdemy@cluster0.ixzs8.mongodb.net/demo?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    return client;
    

}

export default Connection;