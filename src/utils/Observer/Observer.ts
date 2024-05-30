type Func<T> = (data: T) => void;

class Observable<T> {
  observers: Func<T>[];
  constructor() {
    this.observers = [];
  }

  subscribe(func: Func<T>) {
    this.observers.push(func);
  }

  unsubscribe(func: Func<T>) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: T) {
    this.observers.forEach((observer) => observer(data));
  }
}

export const errorObserver = new Observable<string>();
