//first node code
console.log('hello from node')

const username = 'Emmanuel'
const currentTime = new Date()
const hours = currentTime.getHours()

let greeting
if (hours < 12) {
  greeting = 'good morning'
} else if (hours < 18) {
  greeting = 'good afternoon'
} else {
  greeting = 'good evening'
}

console.log(`${greeting}, ${username}! welcome to nodejs`)