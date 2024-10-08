/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type GenTextToImageResponse = {
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
export const GenTextToImageResponse$inboundSchema: z.ZodType<
  GenTextToImageResponse,
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
export type GenTextToImageResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  ImageResponse?: components.ImageResponse$Outbound | undefined;
  "studio-api-error"?: errors.StudioApiError$Outbound | undefined;
};

/** @internal */
export const GenTextToImageResponse$outboundSchema: z.ZodType<
  GenTextToImageResponse$Outbound,
  z.ZodTypeDef,
  GenTextToImageResponse
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
export namespace GenTextToImageResponse$ {
  /** @deprecated use `GenTextToImageResponse$inboundSchema` instead. */
  export const inboundSchema = GenTextToImageResponse$inboundSchema;
  /** @deprecated use `GenTextToImageResponse$outboundSchema` instead. */
  export const outboundSchema = GenTextToImageResponse$outboundSchema;
  /** @deprecated use `GenTextToImageResponse$Outbound` instead. */
  export type Outbound = GenTextToImageResponse$Outbound;
}
