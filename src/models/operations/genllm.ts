/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GenLLMResponse = {
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
   * Successful Response
   */
  llmResponse?: components.LLMResponse | undefined;
  /**
   * Error
   */
  studioApiError?: errors.StudioApiError | undefined;
};

/** @internal */
export const GenLLMResponse$inboundSchema: z.ZodType<
  GenLLMResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  LLMResponse: components.LLMResponse$inboundSchema.optional(),
  "studio-api-error": errors.StudioApiError$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "LLMResponse": "llmResponse",
    "studio-api-error": "studioApiError",
  });
});

/** @internal */
export type GenLLMResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  LLMResponse?: components.LLMResponse$Outbound | undefined;
  "studio-api-error"?: errors.StudioApiError$Outbound | undefined;
};

/** @internal */
export const GenLLMResponse$outboundSchema: z.ZodType<
  GenLLMResponse$Outbound,
  z.ZodTypeDef,
  GenLLMResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  llmResponse: components.LLMResponse$outboundSchema.optional(),
  studioApiError: errors.StudioApiError$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    llmResponse: "LLMResponse",
    studioApiError: "studio-api-error",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenLLMResponse$ {
  /** @deprecated use `GenLLMResponse$inboundSchema` instead. */
  export const inboundSchema = GenLLMResponse$inboundSchema;
  /** @deprecated use `GenLLMResponse$outboundSchema` instead. */
  export const outboundSchema = GenLLMResponse$outboundSchema;
  /** @deprecated use `GenLLMResponse$Outbound` instead. */
  export type Outbound = GenLLMResponse$Outbound;
}

export function genLLMResponseToJSON(genLLMResponse: GenLLMResponse): string {
  return JSON.stringify(GenLLMResponse$outboundSchema.parse(genLLMResponse));
}

export function genLLMResponseFromJSON(
  jsonString: string,
): SafeParseResult<GenLLMResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GenLLMResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GenLLMResponse' from JSON`,
  );
}
