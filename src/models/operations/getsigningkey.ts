/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type GetSigningKeyRequest = {
  /**
   * ID of the signing key
   */
  keyId: string;
};

export type GetSigningKeyResponse = {
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
  signingKey?: components.SigningKey | undefined;
  /**
   * Error
   */
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const GetSigningKeyRequest$inboundSchema: z.ZodType<
  GetSigningKeyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  keyId: z.string(),
});

/** @internal */
export type GetSigningKeyRequest$Outbound = {
  keyId: string;
};

/** @internal */
export const GetSigningKeyRequest$outboundSchema: z.ZodType<
  GetSigningKeyRequest$Outbound,
  z.ZodTypeDef,
  GetSigningKeyRequest
> = z.object({
  keyId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSigningKeyRequest$ {
  /** @deprecated use `GetSigningKeyRequest$inboundSchema` instead. */
  export const inboundSchema = GetSigningKeyRequest$inboundSchema;
  /** @deprecated use `GetSigningKeyRequest$outboundSchema` instead. */
  export const outboundSchema = GetSigningKeyRequest$outboundSchema;
  /** @deprecated use `GetSigningKeyRequest$Outbound` instead. */
  export type Outbound = GetSigningKeyRequest$Outbound;
}

/** @internal */
export const GetSigningKeyResponse$inboundSchema: z.ZodType<
  GetSigningKeyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "signing-key": components.SigningKey$inboundSchema.optional(),
  error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "signing-key": "signingKey",
  });
});

/** @internal */
export type GetSigningKeyResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "signing-key"?: components.SigningKey$Outbound | undefined;
  error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetSigningKeyResponse$outboundSchema: z.ZodType<
  GetSigningKeyResponse$Outbound,
  z.ZodTypeDef,
  GetSigningKeyResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  signingKey: components.SigningKey$outboundSchema.optional(),
  error: errors.ErrorT$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    signingKey: "signing-key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSigningKeyResponse$ {
  /** @deprecated use `GetSigningKeyResponse$inboundSchema` instead. */
  export const inboundSchema = GetSigningKeyResponse$inboundSchema;
  /** @deprecated use `GetSigningKeyResponse$outboundSchema` instead. */
  export const outboundSchema = GetSigningKeyResponse$outboundSchema;
  /** @deprecated use `GetSigningKeyResponse$Outbound` instead. */
  export type Outbound = GetSigningKeyResponse$Outbound;
}
