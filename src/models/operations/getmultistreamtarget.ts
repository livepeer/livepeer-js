/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetMultistreamTargetRequest = {
  /**
   * ID of the multistream target
   */
  id: string;
};

export type GetMultistreamTargetResponse = {
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
   * Success
   */
  multistreamTarget?: components.MultistreamTarget | undefined;
  /**
   * Error
   */
  error?: components.ErrorT | undefined;
};

/** @internal */
export const GetMultistreamTargetRequest$inboundSchema: z.ZodType<
  GetMultistreamTargetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetMultistreamTargetRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetMultistreamTargetRequest$outboundSchema: z.ZodType<
  GetMultistreamTargetRequest$Outbound,
  z.ZodTypeDef,
  GetMultistreamTargetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMultistreamTargetRequest$ {
  /** @deprecated use `GetMultistreamTargetRequest$inboundSchema` instead. */
  export const inboundSchema = GetMultistreamTargetRequest$inboundSchema;
  /** @deprecated use `GetMultistreamTargetRequest$outboundSchema` instead. */
  export const outboundSchema = GetMultistreamTargetRequest$outboundSchema;
  /** @deprecated use `GetMultistreamTargetRequest$Outbound` instead. */
  export type Outbound = GetMultistreamTargetRequest$Outbound;
}

export function getMultistreamTargetRequestToJSON(
  getMultistreamTargetRequest: GetMultistreamTargetRequest,
): string {
  return JSON.stringify(
    GetMultistreamTargetRequest$outboundSchema.parse(
      getMultistreamTargetRequest,
    ),
  );
}

export function getMultistreamTargetRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetMultistreamTargetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMultistreamTargetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMultistreamTargetRequest' from JSON`,
  );
}

/** @internal */
export const GetMultistreamTargetResponse$inboundSchema: z.ZodType<
  GetMultistreamTargetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "multistream-target": components.MultistreamTarget$inboundSchema.optional(),
  error: components.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "multistream-target": "multistreamTarget",
  });
});

/** @internal */
export type GetMultistreamTargetResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "multistream-target"?: components.MultistreamTarget$Outbound | undefined;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetMultistreamTargetResponse$outboundSchema: z.ZodType<
  GetMultistreamTargetResponse$Outbound,
  z.ZodTypeDef,
  GetMultistreamTargetResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  multistreamTarget: components.MultistreamTarget$outboundSchema.optional(),
  error: components.ErrorT$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    multistreamTarget: "multistream-target",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMultistreamTargetResponse$ {
  /** @deprecated use `GetMultistreamTargetResponse$inboundSchema` instead. */
  export const inboundSchema = GetMultistreamTargetResponse$inboundSchema;
  /** @deprecated use `GetMultistreamTargetResponse$outboundSchema` instead. */
  export const outboundSchema = GetMultistreamTargetResponse$outboundSchema;
  /** @deprecated use `GetMultistreamTargetResponse$Outbound` instead. */
  export type Outbound = GetMultistreamTargetResponse$Outbound;
}

export function getMultistreamTargetResponseToJSON(
  getMultistreamTargetResponse: GetMultistreamTargetResponse,
): string {
  return JSON.stringify(
    GetMultistreamTargetResponse$outboundSchema.parse(
      getMultistreamTargetResponse,
    ),
  );
}

export function getMultistreamTargetResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetMultistreamTargetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetMultistreamTargetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetMultistreamTargetResponse' from JSON`,
  );
}
