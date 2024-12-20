/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type TranscodeVideoResponse = {
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
  task?: components.Task | undefined;
  /**
   * Error
   */
  error?: components.ErrorT | undefined;
};

/** @internal */
export const TranscodeVideoResponse$inboundSchema: z.ZodType<
  TranscodeVideoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  task: components.Task$inboundSchema.optional(),
  error: components.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type TranscodeVideoResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  task?: components.Task$Outbound | undefined;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const TranscodeVideoResponse$outboundSchema: z.ZodType<
  TranscodeVideoResponse$Outbound,
  z.ZodTypeDef,
  TranscodeVideoResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  task: components.Task$outboundSchema.optional(),
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
export namespace TranscodeVideoResponse$ {
  /** @deprecated use `TranscodeVideoResponse$inboundSchema` instead. */
  export const inboundSchema = TranscodeVideoResponse$inboundSchema;
  /** @deprecated use `TranscodeVideoResponse$outboundSchema` instead. */
  export const outboundSchema = TranscodeVideoResponse$outboundSchema;
  /** @deprecated use `TranscodeVideoResponse$Outbound` instead. */
  export type Outbound = TranscodeVideoResponse$Outbound;
}

export function transcodeVideoResponseToJSON(
  transcodeVideoResponse: TranscodeVideoResponse,
): string {
  return JSON.stringify(
    TranscodeVideoResponse$outboundSchema.parse(transcodeVideoResponse),
  );
}

export function transcodeVideoResponseFromJSON(
  jsonString: string,
): SafeParseResult<TranscodeVideoResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TranscodeVideoResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodeVideoResponse' from JSON`,
  );
}
