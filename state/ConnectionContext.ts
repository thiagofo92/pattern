import { ConnectionManager } from './ConnectionManager';
import { ConnectionFailState } from './state/ConnectionFailState';

(async () => {
  const connectionManager = new ConnectionManager();

let name = connectionManager.getState();

console.log(name instanceof ConnectionFailState);
})()
