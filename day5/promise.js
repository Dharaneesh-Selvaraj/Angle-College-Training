const mypromise = new Promise((res,rej)=>{
    res("Hello") 
  })
  
  mypromise
  .then((a)=>{
      console.log(a);
  })
  .catch((err)=>{
      console.log(err);
  })