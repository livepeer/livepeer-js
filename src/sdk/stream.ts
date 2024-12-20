/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { streamAddMultistreamTarget } from "../funcs/streamAddMultistreamTarget.js";
import { streamCreate } from "../funcs/streamCreate.js";
import { streamCreateClip } from "../funcs/streamCreateClip.js";
import { streamDelete } from "../funcs/streamDelete.js";
import { streamGet } from "../funcs/streamGet.js";
import { streamGetAll } from "../funcs/streamGetAll.js";
import { streamGetClips } from "../funcs/streamGetClips.js";
import { streamRemoveMultistreamTarget } from "../funcs/streamRemoveMultistreamTarget.js";
import { streamStartPull } from "../funcs/streamStartPull.js";
import { streamTerminate } from "../funcs/streamTerminate.js";
import { streamUpdate } from "../funcs/streamUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Stream extends ClientSDK {
  /**
   * Create a stream
   *
   * @remarks
   * The only parameter you are required to set is the name of your stream,
   * but we also highly recommend that you define transcoding profiles
   * parameter that suits your specific broadcasting configuration.
   * \
   * \
   * If you do not define transcoding rendition profiles when creating the
   * stream, a default set of profiles will be used. These profiles include
   * 240p,  360p, 480p and 720p.
   * \
   * \
   * The playback policy is set to public by default for new streams. It can
   * also be added upon the creation of a new stream by adding
   * `"playbackPolicy": {"type": "jwt"}`
   */
  async create(
    request: components.NewStreamPayload,
    options?: RequestOptions,
  ): Promise<operations.CreateStreamResponse> {
    return unwrapAsync(streamCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve streams
   */
  async getAll(
    streamsonly?: string | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetStreamsResponse> {
    return unwrapAsync(streamGetAll(
      this,
      streamsonly,
      options,
    ));
  }

  /**
   * Retrieve a stream
   */
  async get(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.GetStreamResponse> {
    return unwrapAsync(streamGet(
      this,
      id,
      options,
    ));
  }

  /**
   * Update a stream
   */
  async update(
    streamPatchPayload: components.StreamPatchPayload,
    id: string,
    options?: RequestOptions,
  ): Promise<operations.UpdateStreamResponse> {
    return unwrapAsync(streamUpdate(
      this,
      streamPatchPayload,
      id,
      options,
    ));
  }

  /**
   * Delete a stream
   *
   * @remarks
   * This will also suspend any active stream sessions, so make sure to wait
   * until the stream has finished. To explicitly interrupt an active
   * session, consider instead updating the suspended field in the stream
   * using the PATCH stream API.
   */
  async delete(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.DeleteStreamResponse> {
    return unwrapAsync(streamDelete(
      this,
      id,
      options,
    ));
  }

  /**
   * Terminates a live stream
   *
   * @remarks
   * `DELETE /stream/{id}/terminate` can be used to terminate an ongoing
   * session on a live stream. Unlike suspending the stream, it allows the
   * streamer to restart streaming even immediately, but it will force
   * terminate the current session and stop the recording.
   * \
   * \
   * A 204 No Content status response indicates the stream was successfully
   * terminated.
   */
  async terminate(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.TerminateStreamResponse> {
    return unwrapAsync(streamTerminate(
      this,
      id,
      options,
    ));
  }

  /**
   * Start ingest for a pull stream
   *
   * @remarks
   * `POST /stream/{id}/start-pull` can be used to start ingest for a stream
   * configured with a pull source. If the stream has recording configured,
   * it will also start recording.
   * \
   * \
   * A 204 No Content status response indicates the stream was successfully
   * started.
   */
  async startPull(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.StartPullStreamResponse> {
    return unwrapAsync(streamStartPull(
      this,
      id,
      options,
    ));
  }

  /**
   * Create a clip
   */
  async createClip(
    request: components.ClipPayload,
    options?: RequestOptions,
  ): Promise<operations.CreateClipResponse> {
    return unwrapAsync(streamCreateClip(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve clips of a livestream
   */
  async getClips(
    id: string,
    options?: RequestOptions,
  ): Promise<operations.GetClipsResponse> {
    return unwrapAsync(streamGetClips(
      this,
      id,
      options,
    ));
  }

  /**
   * Add a multistream target
   */
  async addMultistreamTarget(
    targetAddPayload: components.TargetAddPayload,
    id: string,
    options?: RequestOptions,
  ): Promise<operations.AddMultistreamTargetResponse> {
    return unwrapAsync(streamAddMultistreamTarget(
      this,
      targetAddPayload,
      id,
      options,
    ));
  }

  /**
   * Remove a multistream target
   */
  async removeMultistreamTarget(
    id: string,
    targetId: string,
    options?: RequestOptions,
  ): Promise<operations.RemoveMultistreamTargetResponse> {
    return unwrapAsync(streamRemoveMultistreamTarget(
      this,
      id,
      targetId,
      options,
    ));
  }
}
