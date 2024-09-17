/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type GetStreamRequest = {
  /**
   * ID of the stream
   */
  id: string;
};

export type GetStreamResponse = {
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
  stream?: components.Stream | undefined;
  /**
   * Error
   */
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const GetStreamRequest$inboundSchema: z.ZodType<
  GetStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetStreamRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetStreamRequest$outboundSchema: z.ZodType<
  GetStreamRequest$Outbound,
  z.ZodTypeDef,
  GetStreamRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStreamRequest$ {
  /** @deprecated use `GetStreamRequest$inboundSchema` instead. */
  export const inboundSchema = GetStreamRequest$inboundSchema;
  /** @deprecated use `GetStreamRequest$outboundSchema` instead. */
  export const outboundSchema = GetStreamRequest$outboundSchema;
  /** @deprecated use `GetStreamRequest$Outbound` instead. */
  export type Outbound = GetStreamRequest$Outbound;
}

/** @internal */
export const GetStreamResponse$inboundSchema: z.ZodType<
  GetStreamResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  stream: components.Stream$inboundSchema.optional(),
  error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetStreamResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  stream?: components.Stream$Outbound | undefined;
  error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetStreamResponse$outboundSchema: z.ZodType<
  GetStreamResponse$Outbound,
  z.ZodTypeDef,
  GetStreamResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  stream: components.Stream$outboundSchema.optional(),
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
export namespace GetStreamResponse$ {
  /** @deprecated use `GetStreamResponse$inboundSchema` instead. */
  export const inboundSchema = GetStreamResponse$inboundSchema;
  /** @deprecated use `GetStreamResponse$outboundSchema` instead. */
  export const outboundSchema = GetStreamResponse$outboundSchema;
  /** @deprecated use `GetStreamResponse$Outbound` instead. */
  export type Outbound = GetStreamResponse$Outbound;
}
