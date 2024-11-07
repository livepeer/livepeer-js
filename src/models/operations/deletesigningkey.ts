/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type DeleteSigningKeyRequest = {
  /**
   * ID of the signing key
   */
  keyId: string;
};

export type DeleteSigningKeyResponse = {
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
export const DeleteSigningKeyRequest$inboundSchema: z.ZodType<
  DeleteSigningKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  keyId: z.string(),
});

/** @internal */
export type DeleteSigningKeyRequest$Outbound = {
  keyId: string;
};

/** @internal */
export const DeleteSigningKeyRequest$outboundSchema: z.ZodType<
  DeleteSigningKeyRequest$Outbound,
  z.ZodTypeDef,
  DeleteSigningKeyRequest
> = z.object({
  keyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteSigningKeyRequest$ {
  /** @deprecated use `DeleteSigningKeyRequest$inboundSchema` instead. */
  export const inboundSchema = DeleteSigningKeyRequest$inboundSchema;
  /** @deprecated use `DeleteSigningKeyRequest$outboundSchema` instead. */
  export const outboundSchema = DeleteSigningKeyRequest$outboundSchema;
  /** @deprecated use `DeleteSigningKeyRequest$Outbound` instead. */
  export type Outbound = DeleteSigningKeyRequest$Outbound;
}

/** @internal */
export const DeleteSigningKeyResponse$inboundSchema: z.ZodType<
  DeleteSigningKeyResponse,
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
export type DeleteSigningKeyResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const DeleteSigningKeyResponse$outboundSchema: z.ZodType<
  DeleteSigningKeyResponse$Outbound,
  z.ZodTypeDef,
  DeleteSigningKeyResponse
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
export namespace DeleteSigningKeyResponse$ {
  /** @deprecated use `DeleteSigningKeyResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteSigningKeyResponse$inboundSchema;
  /** @deprecated use `DeleteSigningKeyResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteSigningKeyResponse$outboundSchema;
  /** @deprecated use `DeleteSigningKeyResponse$Outbound` instead. */
  export type Outbound = DeleteSigningKeyResponse$Outbound;
}
