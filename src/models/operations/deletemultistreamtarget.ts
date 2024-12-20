/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DeleteMultistreamTargetRequest = {
  /**
   * ID of the multistream target
   */
  id: string;
};

export type DeleteMultistreamTargetResponse = {
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
export const DeleteMultistreamTargetRequest$inboundSchema: z.ZodType<
  DeleteMultistreamTargetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteMultistreamTargetRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteMultistreamTargetRequest$outboundSchema: z.ZodType<
  DeleteMultistreamTargetRequest$Outbound,
  z.ZodTypeDef,
  DeleteMultistreamTargetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteMultistreamTargetRequest$ {
  /** @deprecated use `DeleteMultistreamTargetRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteMultistreamTargetRequest$inboundSchema;
  /** @deprecated use `DeleteMultistreamTargetRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteMultistreamTargetRequest$outboundSchema;
  /** @deprecated use `DeleteMultistreamTargetRequest$Outbound` instead. */
  export type Outbound = DeleteMultistreamTargetRequest$Outbound;
}

export function deleteMultistreamTargetRequestToJSON(
  deleteMultistreamTargetRequest: DeleteMultistreamTargetRequest,
): string {
  return JSON.stringify(
    DeleteMultistreamTargetRequest$outboundSchema.parse(
      deleteMultistreamTargetRequest,
    ),
  );
}

export function deleteMultistreamTargetRequestFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMultistreamTargetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMultistreamTargetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMultistreamTargetRequest' from JSON`,
  );
}

/** @internal */
export const DeleteMultistreamTargetResponse$inboundSchema: z.ZodType<
  DeleteMultistreamTargetResponse,
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
export type DeleteMultistreamTargetResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const DeleteMultistreamTargetResponse$outboundSchema: z.ZodType<
  DeleteMultistreamTargetResponse$Outbound,
  z.ZodTypeDef,
  DeleteMultistreamTargetResponse
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
export namespace DeleteMultistreamTargetResponse$ {
  /** @deprecated use `DeleteMultistreamTargetResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteMultistreamTargetResponse$inboundSchema;
  /** @deprecated use `DeleteMultistreamTargetResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteMultistreamTargetResponse$outboundSchema;
  /** @deprecated use `DeleteMultistreamTargetResponse$Outbound` instead. */
  export type Outbound = DeleteMultistreamTargetResponse$Outbound;
}

export function deleteMultistreamTargetResponseToJSON(
  deleteMultistreamTargetResponse: DeleteMultistreamTargetResponse,
): string {
  return JSON.stringify(
    DeleteMultistreamTargetResponse$outboundSchema.parse(
      deleteMultistreamTargetResponse,
    ),
  );
}

export function deleteMultistreamTargetResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteMultistreamTargetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteMultistreamTargetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteMultistreamTargetResponse' from JSON`,
  );
}
