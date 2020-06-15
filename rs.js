if(!rs.status().ok){

  rs.initiate(
    {
        _id: "testRS",
        version: 1,
        members: [
          { _id: 0, host : "mongo-1:27017", priority: 1, hidden: false }
        ]
    }
  )
}
else{
  print("Replicaset already initialized")
}

sleep(4000)

rs.add( { _id: 1, host: "mongo-2:27017", priority: 1, hidden: false } )
rs.add( { _id: 2, host: "mongo-3:27017", priority: 1, hidden: false } )