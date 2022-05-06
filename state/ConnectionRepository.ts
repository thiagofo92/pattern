export interface ConnectionRepository {
  getName(): Promise<string>
  connection(): Promise<void>
  restore(): Promise<void>
  fail(): Promise<void>
  unmonitor(): Promise<void>
}