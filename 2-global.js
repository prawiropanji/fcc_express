console.log(__dirname);

setTimeout(() => {
  console.log("hello timeout");
}, 2000);

setInterval(() => {
  console.log("hello interval");
}, 1000);
