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

export type GenUpscaleResponse = {
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
  imageResponse?: components.ImageResponse | undefined;
  /**
   * Error
   */
  studioApiError?: errors.StudioApiError | undefined;
};

/** @internal */
export const GenUpscaleResponse$inboundSchema: z.ZodType<
  GenUpscaleResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  ImageResponse: components.ImageResponse$inboundSchema.optional(),
  "studio-api-error": errors.StudioApiError$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "ImageResponse": "imageResponse",
    "studio-api-error": "studioApiError",
  });
});

/** @internal */
export type GenUpscaleResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  ImageResponse?: components.ImageResponse$Outbound | undefined;
  "studio-api-error"?: errors.StudioApiError$Outbound | undefined;
};

/** @internal */
export const GenUpscaleResponse$outboundSchema: z.ZodType<
  GenUpscaleResponse$Outbound,
  z.ZodTypeDef,
  GenUpscaleResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  imageResponse: components.ImageResponse$outboundSchema.optional(),
  studioApiError: errors.StudioApiError$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    imageResponse: "ImageResponse",
    studioApiError: "studio-api-error",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenUpscaleResponse$ {
  /** @deprecated use `GenUpscaleResponse$inboundSchema` instead. */
  export const inboundSchema = GenUpscaleResponse$inboundSchema;
  /** @deprecated use `GenUpscaleResponse$outboundSchema` instead. */
  export const outboundSchema = GenUpscaleResponse$outboundSchema;
  /** @deprecated use `GenUpscaleResponse$Outbound` instead. */
  export type Outbound = GenUpscaleResponse$Outbound;
}

export function genUpscaleResponseToJSON(
  genUpscaleResponse: GenUpscaleResponse,
): string {
  return JSON.stringify(
    GenUpscaleResponse$outboundSchema.parse(genUpscaleResponse),
  );
}

export function genUpscaleResponseFromJSON(
  jsonString: string,
): SafeParseResult<GenUpscaleResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GenUpscaleResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GenUpscaleResponse' from JSON`,
  );
}
