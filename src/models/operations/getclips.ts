/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type GetClipsRequest = {
  /**
   * ID of the parent stream or playbackId of parent stream
   */
  id: string;
};

export type GetClipsResponse = {
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
  data?: Array<components.Asset> | undefined;
  /**
   * Error
   */
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const GetClipsRequest$inboundSchema: z.ZodType<
  GetClipsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetClipsRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetClipsRequest$outboundSchema: z.ZodType<
  GetClipsRequest$Outbound,
  z.ZodTypeDef,
  GetClipsRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetClipsRequest$ {
  /** @deprecated use `GetClipsRequest$inboundSchema` instead. */
  export const inboundSchema = GetClipsRequest$inboundSchema;
  /** @deprecated use `GetClipsRequest$outboundSchema` instead. */
  export const outboundSchema = GetClipsRequest$outboundSchema;
  /** @deprecated use `GetClipsRequest$Outbound` instead. */
  export type Outbound = GetClipsRequest$Outbound;
}

/** @internal */
export const GetClipsResponse$inboundSchema: z.ZodType<
  GetClipsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  data: z.array(components.Asset$inboundSchema).optional(),
  error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetClipsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  data?: Array<components.Asset$Outbound> | undefined;
  error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetClipsResponse$outboundSchema: z.ZodType<
  GetClipsResponse$Outbound,
  z.ZodTypeDef,
  GetClipsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  data: z.array(components.Asset$outboundSchema).optional(),
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
export namespace GetClipsResponse$ {
  /** @deprecated use `GetClipsResponse$inboundSchema` instead. */
  export const inboundSchema = GetClipsResponse$inboundSchema;
  /** @deprecated use `GetClipsResponse$outboundSchema` instead. */
  export const outboundSchema = GetClipsResponse$outboundSchema;
  /** @deprecated use `GetClipsResponse$Outbound` instead. */
  export type Outbound = GetClipsResponse$Outbound;
}
