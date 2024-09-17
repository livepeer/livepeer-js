/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * An individual metric about realtime viewership of a stream/asset.
 *
 * @remarks
 */
export type RealtimeViewershipMetric = {
  /**
   * The playback ID associated with the metric.
   */
  playbackId?: string | undefined;
  /**
   * The device used by the viewer.
   */
  device?: string | undefined;
  /**
   * The browser used by the viewer.
   */
  browser?: string | undefined;
  /**
   * The country where the viewer is located.
   */
  country?: string | undefined;
  /**
   * The number of views for the stream/asset.
   */
  viewCount: number;
  /**
   * The error rate for the stream/asset.
   */
  errorRate: number;
};

/** @internal */
export const RealtimeViewershipMetric$inboundSchema: z.ZodType<
  RealtimeViewershipMetric,
  z.ZodTypeDef,
  unknown
> = z.object({
  playbackId: z.string().optional(),
  device: z.string().optional(),
  browser: z.string().optional(),
  country: z.string().optional(),
  viewCount: z.number().int(),
  errorRate: z.number(),
});

/** @internal */
export type RealtimeViewershipMetric$Outbound = {
  playbackId?: string | undefined;
  device?: string | undefined;
  browser?: string | undefined;
  country?: string | undefined;
  viewCount: number;
  errorRate: number;
};

/** @internal */
export const RealtimeViewershipMetric$outboundSchema: z.ZodType<
  RealtimeViewershipMetric$Outbound,
  z.ZodTypeDef,
  RealtimeViewershipMetric
> = z.object({
  playbackId: z.string().optional(),
  device: z.string().optional(),
  browser: z.string().optional(),
  country: z.string().optional(),
  viewCount: z.number().int(),
  errorRate: z.number(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RealtimeViewershipMetric$ {
  /** @deprecated use `RealtimeViewershipMetric$inboundSchema` instead. */
  export const inboundSchema = RealtimeViewershipMetric$inboundSchema;
  /** @deprecated use `RealtimeViewershipMetric$outboundSchema` instead. */
  export const outboundSchema = RealtimeViewershipMetric$outboundSchema;
  /** @deprecated use `RealtimeViewershipMetric$Outbound` instead. */
  export type Outbound = RealtimeViewershipMetric$Outbound;
}
