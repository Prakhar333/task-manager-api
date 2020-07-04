//CRUD create,read,update and delete

const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient;
const ObjectID=mongodb.ObjectID;

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{ useNewUrlParser:true}, (error, client)=>
{
    if(error)
    return console.log('Error occured,Unable to connect!')

    const db=client.db(databaseName)

    // db.collection('users').deleteOne({
    //     age:21
    // }).then((result)=>
    // {
    //     console.log(result)
    // }).catch((error)=>
    // {
    //     console.log(error)
    // })

    const deletePromise=db.collection('task-collection').deleteMany(
        {
            description:'Workout'
        })

        deletePromise.then((result)=>
        {
            console.log(result)
        }).catch((error)=>
        {
            console.log(error)
        })
})