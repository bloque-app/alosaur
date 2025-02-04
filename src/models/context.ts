import { ImmediatelyResponse } from "./response.ts";

/**
 * Main request/response object of
 */
export class Context<T = any> {
  public state?: T;
  public readonly response: ImmediatelyResponse = new ImmediatelyResponse();
}
