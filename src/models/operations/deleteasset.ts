/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as errors from "../errors/index.js";

export type DeleteAssetRequest = {
  /**
   * ID of the asset
   */
  assetId: string;
};

export type DeleteAssetResponse = {
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
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const DeleteAssetRequest$inboundSchema: z.ZodType<
  DeleteAssetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  assetId: z.string(),
});

/** @internal */
export type DeleteAssetRequest$Outbound = {
  assetId: string;
};

/** @internal */
export const DeleteAssetRequest$outboundSchema: z.ZodType<
  DeleteAssetRequest$Outbound,
  z.ZodTypeDef,
  DeleteAssetRequest
> = z.object({
  assetId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteAssetRequest$ {
  /** @deprecated use `DeleteAssetRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteAssetRequest$inboundSchema;
  /** @deprecated use `DeleteAssetRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteAssetRequest$outboundSchema;
  /** @deprecated use `DeleteAssetRequest$Outbound` instead. */
  export type Outbound = DeleteAssetRequest$Outbound;
}

/** @internal */
export const DeleteAssetResponse$inboundSchema: z.ZodType<
  DeleteAssetResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DeleteAssetResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const DeleteAssetResponse$outboundSchema: z.ZodType<
  DeleteAssetResponse$Outbound,
  z.ZodTypeDef,
  DeleteAssetResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  error: errors.ErrorT$outboundSchema.optional(),
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
export namespace DeleteAssetResponse$ {
  /** @deprecated use `DeleteAssetResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteAssetResponse$inboundSchema;
  /** @deprecated use `DeleteAssetResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteAssetResponse$outboundSchema;
  /** @deprecated use `DeleteAssetResponse$Outbound` instead. */
  export type Outbound = DeleteAssetResponse$Outbound;
}
