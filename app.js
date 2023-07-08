// const saySalam = (name)=>{
//     console.log(`salam kak ${name}`)
// }

// saySalam("Barbarosa")

// const data = require("./06-alternative-flavor")
// require("./07-mind-grenade")

const _ = require('lodash');

const item = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(item)
console.log(newItems)