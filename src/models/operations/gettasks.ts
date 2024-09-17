/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type GetTasksResponse = {
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
  data?: Array<components.Task> | undefined;
  /**
   * Error
   */
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const GetTasksResponse$inboundSchema: z.ZodType<
  GetTasksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  data: z.array(components.Task$inboundSchema).optional(),
  error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetTasksResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  data?: Array<components.Task$Outbound> | undefined;
  error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetTasksResponse$outboundSchema: z.ZodType<
  GetTasksResponse$Outbound,
  z.ZodTypeDef,
  GetTasksResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  data: z.array(components.Task$outboundSchema).optional(),
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
export namespace GetTasksResponse$ {
  /** @deprecated use `GetTasksResponse$inboundSchema` instead. */
  export const inboundSchema = GetTasksResponse$inboundSchema;
  /** @deprecated use `GetTasksResponse$outboundSchema` instead. */
  export const outboundSchema = GetTasksResponse$outboundSchema;
  /** @deprecated use `GetTasksResponse$Outbound` instead. */
  export type Outbound = GetTasksResponse$Outbound;
}
