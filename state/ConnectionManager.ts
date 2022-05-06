import { ConnectionRepository } from "./ConnectionRepository";
import { ConnectionState } from "./state/ConnectionState";

export class ConnectionManager {
  private state: ConnectionRepository = new ConnectionState(this);

  setState(state: ConnectionRepository) {
    this.state = state;
  }

  getState(): ConnectionRepository {
    return this.state;
  }

  async getStateName(): Promise<string> {
    return await this.state.getName();
  }

  async connection(): Promise<void> {
    await this.state.connection();
  }

  async restore(): Promise<void> {
    await this.state.restore();
  }

  async fail(): Promise<void> {
    await this.state.fail();
  }

  async unmonitor(): Promise<void> {
    await this.state.unmonitor();
  }
}