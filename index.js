const addon = require('./build/Release/hello');

console.log(addon.hello());

// var Document = require("./Document")

// const data = [
//     "new home sales top forecasts",
//     "home sales rise in july",
//     "increase in home sales in july",
//     "july new home sales rise"
// ]

// const docArray = []

// data.forEach((doc,index) => {
//     docArray.push(new Document(doc))
//     console.log(docArray[index].docId,docArray[index].tokenStemTextArray)
// })



// class posting {
//     constructor(stem){
//         this.stem = stem // root stem word
//         this.postingsList = [] // 
//     }
// }