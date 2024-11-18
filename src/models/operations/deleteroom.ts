/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteRoomRequest = {
  id: string;
};

export type DeleteRoomResponse = {
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
export const DeleteRoomRequest$inboundSchema: z.ZodType<
  DeleteRoomRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteRoomRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteRoomRequest$outboundSchema: z.ZodType<
  DeleteRoomRequest$Outbound,
  z.ZodTypeDef,
  DeleteRoomRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRoomRequest$ {
  /** @deprecated use `DeleteRoomRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteRoomRequest$inboundSchema;
  /** @deprecated use `DeleteRoomRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteRoomRequest$outboundSchema;
  /** @deprecated use `DeleteRoomRequest$Outbound` instead. */
  export type Outbound = DeleteRoomRequest$Outbound;
}

export function deleteRoomRequestToJSON(
  deleteRoomRequest: DeleteRoomRequest,
): string {
  return JSON.stringify(
    DeleteRoomRequest$outboundSchema.parse(deleteRoomRequest),
  );
}

export function deleteRoomRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRoomRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRoomRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRoomRequest' from JSON`,
  );
}

/** @internal */
export const DeleteRoomResponse$inboundSchema: z.ZodType<
  DeleteRoomResponse,
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
export type DeleteRoomResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const DeleteRoomResponse$outboundSchema: z.ZodType<
  DeleteRoomResponse$Outbound,
  z.ZodTypeDef,
  DeleteRoomResponse
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
export namespace DeleteRoomResponse$ {
  /** @deprecated use `DeleteRoomResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteRoomResponse$inboundSchema;
  /** @deprecated use `DeleteRoomResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteRoomResponse$outboundSchema;
  /** @deprecated use `DeleteRoomResponse$Outbound` instead. */
  export type Outbound = DeleteRoomResponse$Outbound;
}

export function deleteRoomResponseToJSON(
  deleteRoomResponse: DeleteRoomResponse,
): string {
  return JSON.stringify(
    DeleteRoomResponse$outboundSchema.parse(deleteRoomResponse),
  );
}

export function deleteRoomResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRoomResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRoomResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRoomResponse' from JSON`,
  );
}
