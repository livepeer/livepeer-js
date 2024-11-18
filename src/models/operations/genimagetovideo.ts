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

export type GenImageToVideoResponse = {
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
  videoResponse?: components.VideoResponse | undefined;
  /**
   * Error
   */
  studioApiError?: errors.StudioApiError | undefined;
};

/** @internal */
export const GenImageToVideoResponse$inboundSchema: z.ZodType<
  GenImageToVideoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  VideoResponse: components.VideoResponse$inboundSchema.optional(),
  "studio-api-error": errors.StudioApiError$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "VideoResponse": "videoResponse",
    "studio-api-error": "studioApiError",
  });
});

/** @internal */
export type GenImageToVideoResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  VideoResponse?: components.VideoResponse$Outbound | undefined;
  "studio-api-error"?: errors.StudioApiError$Outbound | undefined;
};

/** @internal */
export const GenImageToVideoResponse$outboundSchema: z.ZodType<
  GenImageToVideoResponse$Outbound,
  z.ZodTypeDef,
  GenImageToVideoResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  videoResponse: components.VideoResponse$outboundSchema.optional(),
  studioApiError: errors.StudioApiError$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    videoResponse: "VideoResponse",
    studioApiError: "studio-api-error",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenImageToVideoResponse$ {
  /** @deprecated use `GenImageToVideoResponse$inboundSchema` instead. */
  export const inboundSchema = GenImageToVideoResponse$inboundSchema;
  /** @deprecated use `GenImageToVideoResponse$outboundSchema` instead. */
  export const outboundSchema = GenImageToVideoResponse$outboundSchema;
  /** @deprecated use `GenImageToVideoResponse$Outbound` instead. */
  export type Outbound = GenImageToVideoResponse$Outbound;
}

export function genImageToVideoResponseToJSON(
  genImageToVideoResponse: GenImageToVideoResponse,
): string {
  return JSON.stringify(
    GenImageToVideoResponse$outboundSchema.parse(genImageToVideoResponse),
  );
}

export function genImageToVideoResponseFromJSON(
  jsonString: string,
): SafeParseResult<GenImageToVideoResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GenImageToVideoResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GenImageToVideoResponse' from JSON`,
  );
}