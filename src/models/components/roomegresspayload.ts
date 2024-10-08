/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type RoomEgressPayload = {
  /**
   * The ID of the Livepeer Stream to stream to
   */
  streamId: string;
};

/** @internal */
export const RoomEgressPayload$inboundSchema: z.ZodType<
  RoomEgressPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  streamId: z.string(),
});

/** @internal */
export type RoomEgressPayload$Outbound = {
  streamId: string;
};

/** @internal */
export const RoomEgressPayload$outboundSchema: z.ZodType<
  RoomEgressPayload$Outbound,
  z.ZodTypeDef,
  RoomEgressPayload
> = z.object({
  streamId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RoomEgressPayload$ {
  /** @deprecated use `RoomEgressPayload$inboundSchema` instead. */
  export const inboundSchema = RoomEgressPayload$inboundSchema;
  /** @deprecated use `RoomEgressPayload$outboundSchema` instead. */
  export const outboundSchema = RoomEgressPayload$outboundSchema;
  /** @deprecated use `RoomEgressPayload$Outbound` instead. */
  export type Outbound = RoomEgressPayload$Outbound;
}
