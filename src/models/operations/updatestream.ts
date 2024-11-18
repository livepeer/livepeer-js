/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateStreamRequest = {
  /**
   * ID of the stream
   */
  id: string;
  streamPatchPayload: components.StreamPatchPayload;
};

export type UpdateStreamResponse = {
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
export const UpdateStreamRequest$inboundSchema: z.ZodType<
  UpdateStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  "stream-patch-payload": components.StreamPatchPayload$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "stream-patch-payload": "streamPatchPayload",
  });
});

/** @internal */
export type UpdateStreamRequest$Outbound = {
  id: string;
  "stream-patch-payload": components.StreamPatchPayload$Outbound;
};

/** @internal */
export const UpdateStreamRequest$outboundSchema: z.ZodType<
  UpdateStreamRequest$Outbound,
  z.ZodTypeDef,
  UpdateStreamRequest
> = z.object({
  id: z.string(),
  streamPatchPayload: components.StreamPatchPayload$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    streamPatchPayload: "stream-patch-payload",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateStreamRequest$ {
  /** @deprecated use `UpdateStreamRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateStreamRequest$inboundSchema;
  /** @deprecated use `UpdateStreamRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateStreamRequest$outboundSchema;
  /** @deprecated use `UpdateStreamRequest$Outbound` instead. */
  export type Outbound = UpdateStreamRequest$Outbound;
}

export function updateStreamRequestToJSON(
  updateStreamRequest: UpdateStreamRequest,
): string {
  return JSON.stringify(
    UpdateStreamRequest$outboundSchema.parse(updateStreamRequest),
  );
}

export function updateStreamRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateStreamRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateStreamRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateStreamRequest' from JSON`,
  );
}

/** @internal */
export const UpdateStreamResponse$inboundSchema: z.ZodType<
  UpdateStreamResponse,
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
export type UpdateStreamResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const UpdateStreamResponse$outboundSchema: z.ZodType<
  UpdateStreamResponse$Outbound,
  z.ZodTypeDef,
  UpdateStreamResponse
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
export namespace UpdateStreamResponse$ {
  /** @deprecated use `UpdateStreamResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateStreamResponse$inboundSchema;
  /** @deprecated use `UpdateStreamResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateStreamResponse$outboundSchema;
  /** @deprecated use `UpdateStreamResponse$Outbound` instead. */
  export type Outbound = UpdateStreamResponse$Outbound;
}

export function updateStreamResponseToJSON(
  updateStreamResponse: UpdateStreamResponse,
): string {
  return JSON.stringify(
    UpdateStreamResponse$outboundSchema.parse(updateStreamResponse),
  );
}

export function updateStreamResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateStreamResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateStreamResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateStreamResponse' from JSON`,
  );
}
