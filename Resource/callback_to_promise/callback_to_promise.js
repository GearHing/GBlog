const fs = require("fs");

// 回调函数的方式
fs.readFile('./zhaoolee.txt', (err, data)=>{
  if (err) {
    console.log(err);
  }else{
    let result = data.toString("utf8");
    
    console.log("回调函数的方式读到的数据类型为==>>", result);
    console.log("回调函数的方式读到的内容为==>>", result);
  }
})



// Promise的方式
async function myReadFile (){
  let result = await new Promise((resolve, reject)=>{
    fs.readFile('./zhaoolee.txt', (err, data)=>{
      resolve(data.toString("utf8"))
    })
  })

  console.log("Promise的方式读到的数据类型为::", typeof(result));
  console.log("Promise的方式读到的内容为", result);
}

myReadFile();