function reverse(str) {
    var split_str = str.split('')
    // console.log(split_str)
    
    let reversed_list = split_str.reverse()
    // console.log(reversed_list)

    var joined_str = reversed_list.join('')
    // console.log(joined_str)

    return joined_str
}

module.exports = reverse;

var input = "hello"
console.log(input)
var ans = reverse(input)
console.log(ans)
