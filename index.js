const express= require("express")

const stud =new express()
stud.use(express.json())

const hgArray=[{id:1233,name:"Anu",course:"CS"},
    {id:1234,name:"Vinu",course:"CS"},
    {id:1235,name:"Delsha",course:"CS"},
    {id:1236,name:"Devika",course:"CS"},
    {id:1237,name:"Anusha",course:"CS"}
]

stud.get('/view',(req,res)=>{
    res.send(hgArray)
})
stud.put("/add",(req,res)=>
    {
        hgArray.splice(2,1,req.body)
        res.send("Updated successfully!!")
    })
stud.listen(8083,()=>{
    console.log("port is running...")
})