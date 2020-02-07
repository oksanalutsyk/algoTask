export default class Task {
  constructor(description, func) {
    this.description = description;
    this.func = func;
  }

  run() {
    let params = prompt(this.description);
    this.func(params);
  }
}

export const tasks = new Map();
