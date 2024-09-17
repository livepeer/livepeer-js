/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";

export type Task = {
  id: string;
};

/**
 * Success
 */
export type RequestUploadData = {
  /**
   * The direct upload endpoint for which supports PUT requests. **It is recommended to use the Tus endpoint for a better upload experience.**
   */
  url: string;
  /**
   * The [Tus-compatible](https://tus.io/) endpoint for resumable uploads. **This is the recommended way to upload assets.** See the [Tus-js](https://github.com/tus/tus-js-client) client for more information.
   */
  tusEndpoint: string;
  asset: components.Asset;
  task: Task;
};

export type RequestUploadResponse = {
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
  data?: RequestUploadData | undefined;
  /**
   * Error
   */
  error?: errors.ErrorT | undefined;
};

/** @internal */
export const Task$inboundSchema: z.ZodType<Task, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
  });

/** @internal */
export type Task$Outbound = {
  id: string;
};

/** @internal */
export const Task$outboundSchema: z.ZodType<Task$Outbound, z.ZodTypeDef, Task> =
  z.object({
    id: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Task$ {
  /** @deprecated use `Task$inboundSchema` instead. */
  export const inboundSchema = Task$inboundSchema;
  /** @deprecated use `Task$outboundSchema` instead. */
  export const outboundSchema = Task$outboundSchema;
  /** @deprecated use `Task$Outbound` instead. */
  export type Outbound = Task$Outbound;
}

/** @internal */
export const RequestUploadData$inboundSchema: z.ZodType<
  RequestUploadData,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  tusEndpoint: z.string(),
  asset: components.Asset$inboundSchema,
  task: z.lazy(() => Task$inboundSchema),
});

/** @internal */
export type RequestUploadData$Outbound = {
  url: string;
  tusEndpoint: string;
  asset: components.Asset$Outbound;
  task: Task$Outbound;
};

/** @internal */
export const RequestUploadData$outboundSchema: z.ZodType<
  RequestUploadData$Outbound,
  z.ZodTypeDef,
  RequestUploadData
> = z.object({
  url: z.string(),
  tusEndpoint: z.string(),
  asset: components.Asset$outboundSchema,
  task: z.lazy(() => Task$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestUploadData$ {
  /** @deprecated use `RequestUploadData$inboundSchema` instead. */
  export const inboundSchema = RequestUploadData$inboundSchema;
  /** @deprecated use `RequestUploadData$outboundSchema` instead. */
  export const outboundSchema = RequestUploadData$outboundSchema;
  /** @deprecated use `RequestUploadData$Outbound` instead. */
  export type Outbound = RequestUploadData$Outbound;
}

/** @internal */
export const RequestUploadResponse$inboundSchema: z.ZodType<
  RequestUploadResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  data: z.lazy(() => RequestUploadData$inboundSchema).optional(),
  error: errors.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type RequestUploadResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  data?: RequestUploadData$Outbound | undefined;
  error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const RequestUploadResponse$outboundSchema: z.ZodType<
  RequestUploadResponse$Outbound,
  z.ZodTypeDef,
  RequestUploadResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  data: z.lazy(() => RequestUploadData$outboundSchema).optional(),
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
export namespace RequestUploadResponse$ {
  /** @deprecated use `RequestUploadResponse$inboundSchema` instead. */
  export const inboundSchema = RequestUploadResponse$inboundSchema;
  /** @deprecated use `RequestUploadResponse$outboundSchema` instead. */
  export const outboundSchema = RequestUploadResponse$outboundSchema;
  /** @deprecated use `RequestUploadResponse$Outbound` instead. */
  export type Outbound = RequestUploadResponse$Outbound;
}
