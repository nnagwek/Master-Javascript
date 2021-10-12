const strings = [ 'a', 'b', 'c', 'd'];

console.log(strings[2]);  // O/P  c

//push
strings.push('e');  // O(1)

console.log(strings); // O/P  [ 'a', 'b', 'c', 'd', 'e' ]  O(1)

//pop
console.log(strings.pop()); // O/P e  O(1)
console.log(strings.pop()); // O/P d  O(1)

console.log(strings); // O/P  [ 'a', 'b', 'c' ]  O(1)

//unshift
strings.unshift('x');
console.log(strings);// O/P  [ 'x', 'a', 'b', 'c' ]  O(n)

//splice
strings.splice(2,1)
console.log(strings); // O/P [ 'x', 'a', 'c' ]  O(n)
