import { tasks } from './map.js'

function start () {
    let number = prompt('Enter task number:');
    let task = tasks.get(number);

    if (task) {
      task.run();
    } else {
      alert('Task not found');
      start();
    }
}

start()