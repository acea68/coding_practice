let input = prompt('What would you like to do?').toLowerCase();
let todos = ['study coding problems', 'practice coding apps'];
while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('********************');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i + 1}: ${todos[i]}`);
    }
    console.log('********************');
  } else if (input === 'new') {
    const newTodo = prompt('Ok, please add new to-do item:').toLowerCase();
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === 'delete') {
    const index = parseInt(prompt('Ok, enter an index to delete:'));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index - 1, 1);
      console.log(`Ok, deleted ${deleted}`)
    } else {
      console.log('Unknown index');
    }
  }
  input = prompt('What would you like to do?').toLowerCase();
}
console.log('Quitting app...')
