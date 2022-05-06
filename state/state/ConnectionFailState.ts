import { ConnectionManager } from "../ConnectionManager";
import { ConnectionRepository } from "../ConnectionRepository";
import { ConnectionState } from "./ConnectionState";
import { ConnectionUnmonitorState } from "./ConnectionUnmonitorState";

export class ConnectionFailState implements ConnectionRepository{
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
  }
  async fail(): Promise<void> {
    console.log('Connection already in fail state');
  }
  async unmonitor(): Promise<void> {
    this.state.setState(new ConnectionUnmonitorState(this.state));
  }
}