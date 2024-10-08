/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sessionGet } from "../funcs/sessionGet.js";
import { sessionGetAll } from "../funcs/sessionGetAll.js";
import { sessionGetClips } from "../funcs/sessionGetClips.js";
import { sessionGetRecorded } from "../funcs/sessionGetRecorded.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Session extends ClientSDK {
  /**
   * Retrieve clips of a session
   */
  async getClips(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.GetSessionClipsResponse> {
    return unwrapAsync(sessionGetClips(
      this,
      id,
      options,
    ));
  }

  /**
   * Retrieve sessions
   */
  async getAll(
    options?: RequestOptions,
  ): Promise<operations.GetSessionsResponse> {
    return unwrapAsync(sessionGetAll(
      this,
      options,
    ));
  }

  /**
   * Retrieve a session
   */
  async get(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.GetSessionResponse> {
    return unwrapAsync(sessionGet(
      this,
      id,
      options,
    ));
  }

  /**
   * Retrieve Recorded Sessions
   */
  async getRecorded(
    parentId: string,
    record?: operations.RecordT | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetRecordedSessionsResponse> {
    return unwrapAsync(sessionGetRecorded(
      this,
      parentId,
      record,
      options,
    ));
  }
}
