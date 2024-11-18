/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteRoomUserRequest = {
  id: string;
  userId: string;
};

export type DeleteRoomUserResponse = {
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
export const DeleteRoomUserRequest$inboundSchema: z.ZodType<
  DeleteRoomUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  userId: z.string(),
});

/** @internal */
export type DeleteRoomUserRequest$Outbound = {
  id: string;
  userId: string;
};

/** @internal */
export const DeleteRoomUserRequest$outboundSchema: z.ZodType<
  DeleteRoomUserRequest$Outbound,
  z.ZodTypeDef,
  DeleteRoomUserRequest
> = z.object({
  id: z.string(),
  userId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteRoomUserRequest$ {
  /** @deprecated use `DeleteRoomUserRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteRoomUserRequest$inboundSchema;
  /** @deprecated use `DeleteRoomUserRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteRoomUserRequest$outboundSchema;
  /** @deprecated use `DeleteRoomUserRequest$Outbound` instead. */
  export type Outbound = DeleteRoomUserRequest$Outbound;
}

export function deleteRoomUserRequestToJSON(
  deleteRoomUserRequest: DeleteRoomUserRequest,
): string {
  return JSON.stringify(
    DeleteRoomUserRequest$outboundSchema.parse(deleteRoomUserRequest),
  );
}

export function deleteRoomUserRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRoomUserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRoomUserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRoomUserRequest' from JSON`,
  );
}

/** @internal */
export const DeleteRoomUserResponse$inboundSchema: z.ZodType<
  DeleteRoomUserResponse,
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
export type DeleteRoomUserResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const DeleteRoomUserResponse$outboundSchema: z.ZodType<
  DeleteRoomUserResponse$Outbound,
  z.ZodTypeDef,
  DeleteRoomUserResponse
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
export namespace DeleteRoomUserResponse$ {
  /** @deprecated use `DeleteRoomUserResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteRoomUserResponse$inboundSchema;
  /** @deprecated use `DeleteRoomUserResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteRoomUserResponse$outboundSchema;
  /** @deprecated use `DeleteRoomUserResponse$Outbound` instead. */
  export type Outbound = DeleteRoomUserResponse$Outbound;
}

export function deleteRoomUserResponseToJSON(
  deleteRoomUserResponse: DeleteRoomUserResponse,
): string {
  return JSON.stringify(
    DeleteRoomUserResponse$outboundSchema.parse(deleteRoomUserResponse),
  );
}

export function deleteRoomUserResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteRoomUserResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteRoomUserResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteRoomUserResponse' from JSON`,
  );
}
