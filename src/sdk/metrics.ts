/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsGetCreatorViewership } from "../funcs/metricsGetCreatorViewership.js";
import { metricsGetPublicViewership } from "../funcs/metricsGetPublicViewership.js";
import { metricsGetRealtimeViewership } from "../funcs/metricsGetRealtimeViewership.js";
import { metricsGetUsage } from "../funcs/metricsGetUsage.js";
import { metricsGetViewership } from "../funcs/metricsGetViewership.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Metrics extends ClientSDK {
  /**
   * Query realtime viewership
   *
   * @remarks
   * Requires a private (non-CORS) API key to be used.
   */
  async getRealtimeViewership(
    playbackId?: string | undefined,
    creatorId?: string | undefined,
    breakdownBy?: Array<operations.BreakdownBy> | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetRealtimeViewershipNowResponse> {
    return unwrapAsync(metricsGetRealtimeViewership(
      this,
      playbackId,
      creatorId,
      breakdownBy,
      options,
    ));
  }

  /**
   * Query viewership metrics
   *
   * @remarks
   * Requires a private (non-CORS) API key to be used.
   */
  async getViewership(
    request: operations.GetViewershipMetricsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetViewershipMetricsResponse> {
    return unwrapAsync(metricsGetViewership(
      this,
      request,
      options,
    ));
  }

  /**
   * Query creator viewership metrics
   *
   * @remarks
   * Requires a proof of ownership to be sent in the request, which for now is just the assetId or streamId parameters (1 of those must be in the query-string).
   */
  async getCreatorViewership(
    request: operations.GetCreatorViewershipMetricsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetCreatorViewershipMetricsResponse> {
    return unwrapAsync(metricsGetCreatorViewership(
      this,
      request,
      options,
    ));
  }

  /**
   * Query public total views metrics
   *
   * @remarks
   * Allows querying for the public metrics for viewership about a video.
   * This can be called from the frontend with a CORS key, or even
   * unauthenticated.
   */
  async getPublicViewership(
    playbackId: string,
    options?: RequestOptions,
  ): Promise<operations.GetPublicViewershipMetricsResponse> {
    return unwrapAsync(metricsGetPublicViewership(
      this,
      playbackId,
      options,
    ));
  }

  /**
   * Query usage metrics
   */
  async getUsage(
    request: operations.GetUsageMetricsRequest,
    options?: RequestOptions,
  ): Promise<operations.GetUsageMetricsResponse> {
    return unwrapAsync(metricsGetUsage(
      this,
      request,
      options,
    ));
  }
}
