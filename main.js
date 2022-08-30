//function takes a string of words and returns the length of the shortest word.
function findShort(s){
    let newS = s.toString().split(' ')
    let smallest = newS[0]
    for (let i = 0; i < newS.length; i++) {
      if (newS[i].length < smallest.length) {
        smallest = newS[i]
      }
    }
    return smallest.length
    
    }

console.log(findShort('hey you pikachu wanna be my friend?')) // => returns 2
console.log(findShort('i want falafel')) // => returns 1
console.log(findShort('whenever the slug scurries, pavement carves away')) // => returns 3