import { ConnectionManager } from "../ConnectionManager";
import { ConnectionRepository } from "../ConnectionRepository";
import { ConnectionFailState } from "./ConnectionFailState";
import { ConnectionUnmonitorState } from "./ConnectionUnmonitorState";

export class ConnectionState implements ConnectionRepository{
  private name = 'Connection State';
  constructor(private manager: ConnectionManager) {}

  async getName(): Promise<string> {
    return this.name;
  }
  async connection(): Promise<void> {
    console.log('Connection already in state connection');
  }
  async restore(): Promise<void> {
    console.log('Cant change state to restore, cause is not in fail state');
  }
  async fail(): Promise<void> {
    this.manager.setState(new ConnectionFailState(this.manager));
  }
  async unmonitor(): Promise<void> {
    this.manager.setState(new ConnectionUnmonitorState(this.manager));
    
  }
}
