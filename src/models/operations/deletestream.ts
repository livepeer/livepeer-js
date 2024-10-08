/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as errors from "../errors/index.js";

export type DeleteStreamRequest = {
  /**
   * ID of the stream
   */
  id: string;
};

export type DeleteStreamResponse = {
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
export const DeleteStreamRequest$inboundSchema: z.ZodType<
  DeleteStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DeleteStreamRequest$Outbound = {
  id: string;
};

/** @internal */
export const DeleteStreamRequest$outboundSchema: z.ZodType<
  DeleteStreamRequest$Outbound,
  z.ZodTypeDef,
  DeleteStreamRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteStreamRequest$ {
  /** @deprecated use `DeleteStreamRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteStreamRequest$inboundSchema;
  /** @deprecated use `DeleteStreamRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteStreamRequest$outboundSchema;
  /** @deprecated use `DeleteStreamRequest$Outbound` instead. */
  export type Outbound = DeleteStreamRequest$Outbound;
}

/** @internal */
export const DeleteStreamResponse$inboundSchema: z.ZodType<
  DeleteStreamResponse,
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
export type DeleteStreamResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const DeleteStreamResponse$outboundSchema: z.ZodType<
  DeleteStreamResponse$Outbound,
  z.ZodTypeDef,
  DeleteStreamResponse
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
export namespace DeleteStreamResponse$ {
  /** @deprecated use `DeleteStreamResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteStreamResponse$inboundSchema;
  /** @deprecated use `DeleteStreamResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteStreamResponse$outboundSchema;
  /** @deprecated use `DeleteStreamResponse$Outbound` instead. */
  export type Outbound = DeleteStreamResponse$Outbound;
}
