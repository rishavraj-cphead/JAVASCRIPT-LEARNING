# JavaScript Code Execution and Call Stack

## 1. How JavaScript executes code

JavaScript runs in a single-threaded environment, which means it processes one task at a time.

### Execution Contexts
A JavaScript program uses execution contexts to keep track of what is currently running.

- **Global execution context**
  - Created when the script first starts.
  - Contains global variables and functions.
  - Its `this` value is usually the global object (`window` in browsers, `global` in Node.js).

- **Function execution context**
  - Created each time a function is called.
  - Contains local variables, parameters, and the value of `this` for that function.


### Phases of execution
1. **Creation phase**
   - The JavaScript engine scans the code.
   - Variables are hoisted and initialized to `undefined`.
   - Function declarations are hoisted as complete functions.

2. **Execution phase**
   - The engine runs statements line by line.
   - Variable values are assigned.
   - Functions are called and return values.

## 2. The Call Stack

The call stack is the structure JavaScript uses to manage execution contexts.

- It follows Last-In, First-Out (LIFO).
- Each time a function is called, a new frame is pushed onto the stack.
- When a function returns, its frame is popped from the stack.

### Example
```javascript
function first() {
  console.log('first');
  second();
}

function second() {
  console.log('second');
  third();
}

function third() {
  console.log('third');
}

first();
```

### Call stack while running

1. `global` context is pushed.
2. `first()` is called -> `first` frame pushed.
3. `second()` is called inside `first` -> `second` frame pushed.
4. `third()` is called inside `second` -> `third` frame pushed.
5. `third` returns -> `third` frame popped.
6. `second` returns -> `second` frame popped.
7. `first` returns -> `first` frame popped.
8. Only `global` context remains.

## 3. Example with variables

```javascript
const name = 'Alice';

function sayHello() {
  const greeting = 'Hello';
  console.log(`${greeting}, ${name}`);
}

sayHello();
```

- Global context has `name`.
- Calling `sayHello()` creates a new context with `greeting`.
- The function can read `name` from the outer scope.

## 4. Important concepts

- **Hoisting**
  - Declarations move to the top of their scope during the creation phase.
  - Variables declared with `var` are initialized as `undefined`.
  - `let` and `const` are hoisted too, but remain uninitialized until their declaration line (temporal dead zone).

- **Execution order**
  - JavaScript executes in the order the calls happen.
  - A new function call pauses the current one until the new one returns.

- **Single-threaded**
  - One call stack means one thing runs at a time.
  - Asynchronous code (promises, events, timers) uses the event loop and task queue, but still eventually runs in the single call stack.

## 5. Why the call stack matters

- Helps JavaScript know which function is currently running.
- Explains how recursion works.
- Shows why deep recursion can cause a "call stack exceeded" error.
- Helps debug errors by reading stack traces.

## 6. Quick summary

- JavaScript creates a global execution context first.
- Each function call makes a new execution context.
- The call stack stores execution contexts in order.
- Functions return in reverse order of calls.
- Asynchronous callbacks are managed separately but still execute through the call stack.
