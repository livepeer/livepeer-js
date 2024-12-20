/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RoomUserPayload = {
  /**
   * Display name
   */
  name: string;
  /**
   * Whether a user is allowed to publish audio/video tracks
   */
  canPublish?: boolean | undefined;
  /**
   * Whether a user is allowed to publish data messages to the room
   */
  canPublishData?: boolean | undefined;
  /**
   * User defined payload to store for the participant
   */
  metadata?: string | undefined;
};

/** @internal */
export const RoomUserPayload$inboundSchema: z.ZodType<
  RoomUserPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  canPublish: z.boolean().optional(),
  canPublishData: z.boolean().optional(),
  metadata: z.string().optional(),
});

/** @internal */
export type RoomUserPayload$Outbound = {
  name: string;
  canPublish?: boolean | undefined;
  canPublishData?: boolean | undefined;
  metadata?: string | undefined;
};

/** @internal */
export const RoomUserPayload$outboundSchema: z.ZodType<
  RoomUserPayload$Outbound,
  z.ZodTypeDef,
  RoomUserPayload
> = z.object({
  name: z.string(),
  canPublish: z.boolean().optional(),
  canPublishData: z.boolean().optional(),
  metadata: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RoomUserPayload$ {
  /** @deprecated use `RoomUserPayload$inboundSchema` instead. */
  export const inboundSchema = RoomUserPayload$inboundSchema;
  /** @deprecated use `RoomUserPayload$outboundSchema` instead. */
  export const outboundSchema = RoomUserPayload$outboundSchema;
  /** @deprecated use `RoomUserPayload$Outbound` instead. */
  export type Outbound = RoomUserPayload$Outbound;
}

export function roomUserPayloadToJSON(
  roomUserPayload: RoomUserPayload,
): string {
  return JSON.stringify(RoomUserPayload$outboundSchema.parse(roomUserPayload));
}

export function roomUserPayloadFromJSON(
  jsonString: string,
): SafeParseResult<RoomUserPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RoomUserPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RoomUserPayload' from JSON`,
  );
}
