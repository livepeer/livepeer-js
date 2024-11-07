/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetWebhookLogsRequest = {
  id: string;
};

export type GetWebhookLogsResponse = {
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
  data?: Array<components.WebhookLog> | undefined;
  /**
   * Error
   */
  error?: components.ErrorT | undefined;
};

/** @internal */
export const GetWebhookLogsRequest$inboundSchema: z.ZodType<
  GetWebhookLogsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type GetWebhookLogsRequest$Outbound = {
  id: string;
};

/** @internal */
export const GetWebhookLogsRequest$outboundSchema: z.ZodType<
  GetWebhookLogsRequest$Outbound,
  z.ZodTypeDef,
  GetWebhookLogsRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhookLogsRequest$ {
  /** @deprecated use `GetWebhookLogsRequest$inboundSchema` instead. */
  export const inboundSchema = GetWebhookLogsRequest$inboundSchema;
  /** @deprecated use `GetWebhookLogsRequest$outboundSchema` instead. */
  export const outboundSchema = GetWebhookLogsRequest$outboundSchema;
  /** @deprecated use `GetWebhookLogsRequest$Outbound` instead. */
  export type Outbound = GetWebhookLogsRequest$Outbound;
}

/** @internal */
export const GetWebhookLogsResponse$inboundSchema: z.ZodType<
  GetWebhookLogsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  data: z.array(components.WebhookLog$inboundSchema).optional(),
  error: components.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetWebhookLogsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  data?: Array<components.WebhookLog$Outbound> | undefined;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetWebhookLogsResponse$outboundSchema: z.ZodType<
  GetWebhookLogsResponse$Outbound,
  z.ZodTypeDef,
  GetWebhookLogsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  data: z.array(components.WebhookLog$outboundSchema).optional(),
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
export namespace GetWebhookLogsResponse$ {
  /** @deprecated use `GetWebhookLogsResponse$inboundSchema` instead. */
  export const inboundSchema = GetWebhookLogsResponse$inboundSchema;
  /** @deprecated use `GetWebhookLogsResponse$outboundSchema` instead. */
  export const outboundSchema = GetWebhookLogsResponse$outboundSchema;
  /** @deprecated use `GetWebhookLogsResponse$Outbound` instead. */
  export type Outbound = GetWebhookLogsResponse$Outbound;
}
