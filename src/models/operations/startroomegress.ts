/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type StartRoomEgressRequest = {
  id: string;
  roomEgressPayload: components.RoomEgressPayload;
};

export type StartRoomEgressResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * Error
   */
  error?: components.ErrorT | undefined;
};

/** @internal */
export const StartRoomEgressRequest$inboundSchema: z.ZodType<
  StartRoomEgressRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  "room-egress-payload": components.RoomEgressPayload$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "room-egress-payload": "roomEgressPayload",
  });
});

/** @internal */
export type StartRoomEgressRequest$Outbound = {
  id: string;
  "room-egress-payload": components.RoomEgressPayload$Outbound;
};

/** @internal */
export const StartRoomEgressRequest$outboundSchema: z.ZodType<
  StartRoomEgressRequest$Outbound,
  z.ZodTypeDef,
  StartRoomEgressRequest
> = z.object({
  id: z.string(),
  roomEgressPayload: components.RoomEgressPayload$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    roomEgressPayload: "room-egress-payload",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartRoomEgressRequest$ {
  /** @deprecated use `StartRoomEgressRequest$inboundSchema` instead. */
  export const inboundSchema = StartRoomEgressRequest$inboundSchema;
  /** @deprecated use `StartRoomEgressRequest$outboundSchema` instead. */
  export const outboundSchema = StartRoomEgressRequest$outboundSchema;
  /** @deprecated use `StartRoomEgressRequest$Outbound` instead. */
  export type Outbound = StartRoomEgressRequest$Outbound;
}

export function startRoomEgressRequestToJSON(
  startRoomEgressRequest: StartRoomEgressRequest,
): string {
  return JSON.stringify(
    StartRoomEgressRequest$outboundSchema.parse(startRoomEgressRequest),
  );
}

export function startRoomEgressRequestFromJSON(
  jsonString: string,
): SafeParseResult<StartRoomEgressRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StartRoomEgressRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StartRoomEgressRequest' from JSON`,
  );
}

/** @internal */
export const StartRoomEgressResponse$inboundSchema: z.ZodType<
  StartRoomEgressResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  error: components.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type StartRoomEgressResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const StartRoomEgressResponse$outboundSchema: z.ZodType<
  StartRoomEgressResponse$Outbound,
  z.ZodTypeDef,
  StartRoomEgressResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  error: components.ErrorT$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StartRoomEgressResponse$ {
  /** @deprecated use `StartRoomEgressResponse$inboundSchema` instead. */
  export const inboundSchema = StartRoomEgressResponse$inboundSchema;
  /** @deprecated use `StartRoomEgressResponse$outboundSchema` instead. */
  export const outboundSchema = StartRoomEgressResponse$outboundSchema;
  /** @deprecated use `StartRoomEgressResponse$Outbound` instead. */
  export type Outbound = StartRoomEgressResponse$Outbound;
}

export function startRoomEgressResponseToJSON(
  startRoomEgressResponse: StartRoomEgressResponse,
): string {
  return JSON.stringify(
    StartRoomEgressResponse$outboundSchema.parse(startRoomEgressResponse),
  );
}

export function startRoomEgressResponseFromJSON(
  jsonString: string,
): SafeParseResult<StartRoomEgressResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StartRoomEgressResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StartRoomEgressResponse' from JSON`,
  );
}
