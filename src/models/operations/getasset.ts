/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAssetRequest = {
  /**
   * ID of the asset
   */
  assetId: string;
};

export type GetAssetResponse = {
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
  asset?: components.Asset | undefined;
  /**
   * Error
   */
  error?: components.ErrorT | undefined;
};

/** @internal */
export const GetAssetRequest$inboundSchema: z.ZodType<
  GetAssetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  assetId: z.string(),
});

/** @internal */
export type GetAssetRequest$Outbound = {
  assetId: string;
};

/** @internal */
export const GetAssetRequest$outboundSchema: z.ZodType<
  GetAssetRequest$Outbound,
  z.ZodTypeDef,
  GetAssetRequest
> = z.object({
  assetId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAssetRequest$ {
  /** @deprecated use `GetAssetRequest$inboundSchema` instead. */
  export const inboundSchema = GetAssetRequest$inboundSchema;
  /** @deprecated use `GetAssetRequest$outboundSchema` instead. */
  export const outboundSchema = GetAssetRequest$outboundSchema;
  /** @deprecated use `GetAssetRequest$Outbound` instead. */
  export type Outbound = GetAssetRequest$Outbound;
}

export function getAssetRequestToJSON(
  getAssetRequest: GetAssetRequest,
): string {
  return JSON.stringify(GetAssetRequest$outboundSchema.parse(getAssetRequest));
}

export function getAssetRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAssetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAssetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAssetRequest' from JSON`,
  );
}

/** @internal */
export const GetAssetResponse$inboundSchema: z.ZodType<
  GetAssetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  asset: components.Asset$inboundSchema.optional(),
  error: components.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetAssetResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  asset?: components.Asset$Outbound | undefined;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetAssetResponse$outboundSchema: z.ZodType<
  GetAssetResponse$Outbound,
  z.ZodTypeDef,
  GetAssetResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  asset: components.Asset$outboundSchema.optional(),
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
export namespace GetAssetResponse$ {
  /** @deprecated use `GetAssetResponse$inboundSchema` instead. */
  export const inboundSchema = GetAssetResponse$inboundSchema;
  /** @deprecated use `GetAssetResponse$outboundSchema` instead. */
  export const outboundSchema = GetAssetResponse$outboundSchema;
  /** @deprecated use `GetAssetResponse$Outbound` instead. */
  export type Outbound = GetAssetResponse$Outbound;
}

export function getAssetResponseToJSON(
  getAssetResponse: GetAssetResponse,
): string {
  return JSON.stringify(
    GetAssetResponse$outboundSchema.parse(getAssetResponse),
  );
}

export function getAssetResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAssetResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAssetResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAssetResponse' from JSON`,
  );
}
