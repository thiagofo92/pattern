import { ConnectionManager } from "../ConnectionManager";
import { ConnectionRepository } from "../ConnectionRepository";
import { ConnectionState } from "./ConnectionState";

export class ConnectionUnmonitorState implements ConnectionRepository{
  private name = 'Connection Fail';
  constructor(private state: ConnectionManager) {}

  async getName(): Promise<string> {
    return this.name;
  }
  async connection(): Promise<void> {
    console.log('State already in state connection');
  }
  async restore(): Promise<void> {
    this.state.setState(new ConnectionState(this.state));
    console.log('Connection change to restore state');
  }
  async fail(): Promise<void> {
    console.log('Connection already in fail state');
  }
  async unmonitor(): Promise<void> {
    console.log('Connection is no more monitoring');
  }
}