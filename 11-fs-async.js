const {readFile,writeFile}= require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return;
  }
  const first = result;
  readFile('./content/secon.txt','utf8',(err,result)=>{
    if(err){
      console.log(err)
      return;
    }
    const second = result;
    writeFile('./content/result-async.txt', `
    her's is the result : ${first}, ${second}
    `,{flag:'a'} )
  })
 console.log(result)
})