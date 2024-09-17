/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type GetTaskRequest = {
  /**
   * ID of the task
   */
  taskId: string;
};

export type GetTaskResponse = {
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
};

/** @internal */
export const GetTaskRequest$inboundSchema: z.ZodType<
  GetTaskRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  taskId: z.string(),
});

/** @internal */
export type GetTaskRequest$Outbound = {
  taskId: string;
};

/** @internal */
export const GetTaskRequest$outboundSchema: z.ZodType<
  GetTaskRequest$Outbound,
  z.ZodTypeDef,
  GetTaskRequest
> = z.object({
  taskId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTaskRequest$ {
  /** @deprecated use `GetTaskRequest$inboundSchema` instead. */
  export const inboundSchema = GetTaskRequest$inboundSchema;
  /** @deprecated use `GetTaskRequest$outboundSchema` instead. */
  export const outboundSchema = GetTaskRequest$outboundSchema;
  /** @deprecated use `GetTaskRequest$Outbound` instead. */
  export type Outbound = GetTaskRequest$Outbound;
}

/** @internal */
export const GetTaskResponse$inboundSchema: z.ZodType<
  GetTaskResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  task: components.Task$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetTaskResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  task?: components.Task$Outbound | undefined;
};

/** @internal */
export const GetTaskResponse$outboundSchema: z.ZodType<
  GetTaskResponse$Outbound,
  z.ZodTypeDef,
  GetTaskResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  task: components.Task$outboundSchema.optional(),
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
export namespace GetTaskResponse$ {
  /** @deprecated use `GetTaskResponse$inboundSchema` instead. */
  export const inboundSchema = GetTaskResponse$inboundSchema;
  /** @deprecated use `GetTaskResponse$outboundSchema` instead. */
  export const outboundSchema = GetTaskResponse$outboundSchema;
  /** @deprecated use `GetTaskResponse$Outbound` instead. */
  export type Outbound = GetTaskResponse$Outbound;
}
