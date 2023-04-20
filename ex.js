import express from "express";
const app = express();
const students =[
    {
        id:1,
        name:"toqa"
    },
    {
        id:2,
        name:"ayman"
    },
    {
        id:3,
        name:"wahed"
    }
]
const studentsFunction = (request , response ) =>{
    let output ="<ul>";
    for(let i =0 ; i<students.length; i++){
        const student  = students[i];
        output+="<li>" +student.name + "<li>";
    }
    output+="</ul>";
    response.send(output);
};
app.get("/students",studentsFunction);

app.listen(5000);