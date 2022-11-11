const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://localhost:27017/pictoresa2";

MongoClient.connect(url, (error, database) => {
    if(error) throw error
//     console.log("connected to the database")
//     database.close()

//To create a collection
    const dbo = database.db("pictoresa2")
        // dbo.createCollection("products", (error, result) => {
        // if(error) throw error
        // console.log("Products Collection Created")
        // database.close()

//Insert one document
    // dbo.collection("products").insertOne(
    //     {product_id: "1", product_name: "Pictoresa's Padayon Medisina T-Shirt", product_category: "Clothing", size: "Small", color: "Maroon", price: 489},
    //     (error, result) => {
    //         if(error) throw error
    //         console.log("Inserted a Document")
    //         database.close()
    //     })
    // })        

//Insert many documents
dbo.collection("products").insertMany(
    [{product_id: "2", product_name: "Chasing the Sun by Inksteady", product_category: "Books", size: "null", color: "null", price: 499},
    {product_id: "3", product_name: "The Rain in España by 4reuminct", product_category: "Books", size: "null", color: "null", price: 799},
    {product_id: "4", product_name: "Satin Silk Scrunchies-Lastic", product_category: "Others", size: "null", color: "Random", price: 489}],
    (error, result) => {
        if(error) throw error
        console.log("Inserted the Documents")
        database.close()
    })
})    

//Read
    //   dbo.collection("products").findOne({product_id: "3"},
    //   (error, result) => {
    //     if(error) throw error
    //     console.log(result)
    //     database.close()
    //   })

    //   dbo.collection("products").find({})
    //   .toArray((error, result) => {
    //     if(error) throw error
    //     console.log(result)
    //   })

    //  dbo.collection("products").find({product_category: "Books"})
    // .toArray((error, result) => {
    // if(error) throw error
    // console.log(result)
    // })

//Update
//     dbo.collection("products").updateOne(
//         {product_id: "1"}, {$set:{product_name: "Pictoresa's Ginintuang Tanawin Signed T-Shirt", size: "Medium", color: "Green", price: 165}},
//         (error, result) => {
//             if(error) throw error
//             console.log("Updated a document")
//             database.close()
//         })
// })

//Delete
//     dbo.collection("products").deleteOne(
//         {product_id: "4"}, 
//         (error,result)=>{
//         if(error) throw error
//         console.log("Deleted a document")
//         database.close();
//     })
// })
