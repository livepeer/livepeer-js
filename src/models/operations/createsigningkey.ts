/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateSigningKeyResponse = {
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
  error?: components.ErrorT | undefined;
};

/** @internal */
export const CreateSigningKeyResponse$inboundSchema: z.ZodType<
  CreateSigningKeyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "signing-key": components.SigningKey$inboundSchema.optional(),
  error: components.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "signing-key": "signingKey",
  });
});

/** @internal */
export type CreateSigningKeyResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  "signing-key"?: components.SigningKey$Outbound | undefined;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const CreateSigningKeyResponse$outboundSchema: z.ZodType<
  CreateSigningKeyResponse$Outbound,
  z.ZodTypeDef,
  CreateSigningKeyResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  signingKey: components.SigningKey$outboundSchema.optional(),
  error: components.ErrorT$outboundSchema.optional(),
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
export namespace CreateSigningKeyResponse$ {
  /** @deprecated use `CreateSigningKeyResponse$inboundSchema` instead. */
  export const inboundSchema = CreateSigningKeyResponse$inboundSchema;
  /** @deprecated use `CreateSigningKeyResponse$outboundSchema` instead. */
  export const outboundSchema = CreateSigningKeyResponse$outboundSchema;
  /** @deprecated use `CreateSigningKeyResponse$Outbound` instead. */
  export type Outbound = CreateSigningKeyResponse$Outbound;
}

export function createSigningKeyResponseToJSON(
  createSigningKeyResponse: CreateSigningKeyResponse,
): string {
  return JSON.stringify(
    CreateSigningKeyResponse$outboundSchema.parse(createSigningKeyResponse),
  );
}

export function createSigningKeyResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateSigningKeyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSigningKeyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSigningKeyResponse' from JSON`,
  );
}
