/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetSessionRequest = {
  /**
   * ID of the session
   */
  id: string;
};

export type GetSessionResponse = {
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
  session?: components.Session | undefined;
  /**
   * Error
   */
  error?: components.ErrorT | undefined;
};

/** @internal */
export const GetSessionRequest$inboundSchema: z.ZodType<
  GetSessionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetSessionRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetSessionRequest$outboundSchema: z.ZodType<
  GetSessionRequest$Outbound,
  z.ZodTypeDef,
  GetSessionRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSessionRequest$ {
  /** @deprecated use `GetSessionRequest$inboundSchema` instead. */
  export const inboundSchema = GetSessionRequest$inboundSchema;
  /** @deprecated use `GetSessionRequest$outboundSchema` instead. */
  export const outboundSchema = GetSessionRequest$outboundSchema;
  /** @deprecated use `GetSessionRequest$Outbound` instead. */
  export type Outbound = GetSessionRequest$Outbound;
}

/** @internal */
export const GetSessionResponse$inboundSchema: z.ZodType<
  GetSessionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  session: components.Session$inboundSchema.optional(),
  error: components.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetSessionResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  session?: components.Session$Outbound | undefined;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetSessionResponse$outboundSchema: z.ZodType<
  GetSessionResponse$Outbound,
  z.ZodTypeDef,
  GetSessionResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  session: components.Session$outboundSchema.optional(),
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
export namespace GetSessionResponse$ {
  /** @deprecated use `GetSessionResponse$inboundSchema` instead. */
  export const inboundSchema = GetSessionResponse$inboundSchema;
  /** @deprecated use `GetSessionResponse$outboundSchema` instead. */
  export const outboundSchema = GetSessionResponse$outboundSchema;
  /** @deprecated use `GetSessionResponse$Outbound` instead. */
  export type Outbound = GetSessionResponse$Outbound;
}
