import { ConnectionManager } from "./ConnectionManager";

export class ConnectionFactory {
  async build(id: string) {
    const connectionManager = new ConnectionManager();
    const connectionMemory = new Map<string, ConnectionManager>();

    connectionMemory.set(id, connectionManager);

    const state = connectionMemory.get(id);
  }
}