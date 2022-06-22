let input = prompt('What would you like to do?').toLowerCase();
let todos = ['study coding problems', 'practice coding apps'];
while( input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('********************');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i + 1}: ${todos[i]}`);
    }
    // for (let task of todos) {
    //   console.log(task);
    // }
    console.log('********************');
  } else if (input === 'new') {
    input = prompt('Ok, please add new to-do item:').toLowerCase();
    todos.push(input);
    console.log(`${input} added to the list!`);
  }
  input = prompt('What would you like to do?').toLowerCase();
}
console.log('Quitting app...')
