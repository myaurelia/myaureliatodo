import { ToDo } from "todo";

export class App {
  heading: string;
  todos: ToDo[];
  todoDescription: string;
  constructor() {
    this.heading = 'a to do list';
    this.todos = [];
    this.todoDescription = '';
  }

  addTodo() {
    if (this.todoDescription) {
      const todo = {
        description: this.todoDescription,
        done: false
      };
      this.todos.push(todo);
      this.todoDescription = '';
    }
  }

  removeTodo(todo: ToDo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
