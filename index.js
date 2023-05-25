import app from "./app.js"
import {connect} from "./database/db.js"

 

 
 app.get("/",(req,res)=>res.send("holaa"))
 
 


async function  main(){
  await connect()
  app.listen(9000)
  console.log("server is  running on port",9000)
}

main()