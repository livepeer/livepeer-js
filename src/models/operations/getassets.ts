/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type GetAssetsResponse = {
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
  data?: Array<components.Asset> | undefined;
  /**
   * Error
   */
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const GetAssetsResponse$inboundSchema: z.ZodType<
  GetAssetsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  data: z.array(components.Asset$inboundSchema).optional(),
  error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetAssetsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  data?: Array<components.Asset$Outbound> | undefined;
  error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetAssetsResponse$outboundSchema: z.ZodType<
  GetAssetsResponse$Outbound,
  z.ZodTypeDef,
  GetAssetsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  data: z.array(components.Asset$outboundSchema).optional(),
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
export namespace GetAssetsResponse$ {
  /** @deprecated use `GetAssetsResponse$inboundSchema` instead. */
  export const inboundSchema = GetAssetsResponse$inboundSchema;
  /** @deprecated use `GetAssetsResponse$outboundSchema` instead. */
  export const outboundSchema = GetAssetsResponse$outboundSchema;
  /** @deprecated use `GetAssetsResponse$Outbound` instead. */
  export type Outbound = GetAssetsResponse$Outbound;
}
