/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Flag indicating if the response should only include recorded
 *
 * @remarks
 * sessions
 */
export type RecordT = boolean | number;

export type GetRecordedSessionsRequest = {
  /**
   * ID of the parent stream
   */
  parentId: string;
  /**
   * Flag indicating if the response should only include recorded
   *
   * @remarks
   * sessions
   */
  record?: boolean | number | undefined;
};

export type GetRecordedSessionsResponse = {
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
  data?: Array<components.Session> | undefined;
  /**
   * Error
   */
  error?: components.ErrorT | undefined;
};

/** @internal */
export const RecordT$inboundSchema: z.ZodType<RecordT, z.ZodTypeDef, unknown> =
  z.union([z.boolean(), z.number().int()]);

/** @internal */
export type RecordT$Outbound = boolean | number;

/** @internal */
export const RecordT$outboundSchema: z.ZodType<
  RecordT$Outbound,
  z.ZodTypeDef,
  RecordT
> = z.union([z.boolean(), z.number().int()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RecordT$ {
  /** @deprecated use `RecordT$inboundSchema` instead. */
  export const inboundSchema = RecordT$inboundSchema;
  /** @deprecated use `RecordT$outboundSchema` instead. */
  export const outboundSchema = RecordT$outboundSchema;
  /** @deprecated use `RecordT$Outbound` instead. */
  export type Outbound = RecordT$Outbound;
}

export function recordTToJSON(recordT: RecordT): string {
  return JSON.stringify(RecordT$outboundSchema.parse(recordT));
}

export function recordTFromJSON(
  jsonString: string,
): SafeParseResult<RecordT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RecordT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RecordT' from JSON`,
  );
}

/** @internal */
export const GetRecordedSessionsRequest$inboundSchema: z.ZodType<
  GetRecordedSessionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  parentId: z.string(),
  record: z.union([z.boolean(), z.number().int()]).optional(),
});

/** @internal */
export type GetRecordedSessionsRequest$Outbound = {
  parentId: string;
  record?: boolean | number | undefined;
};

/** @internal */
export const GetRecordedSessionsRequest$outboundSchema: z.ZodType<
  GetRecordedSessionsRequest$Outbound,
  z.ZodTypeDef,
  GetRecordedSessionsRequest
> = z.object({
  parentId: z.string(),
  record: z.union([z.boolean(), z.number().int()]).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetRecordedSessionsRequest$ {
  /** @deprecated use `GetRecordedSessionsRequest$inboundSchema` instead. */
  export const inboundSchema = GetRecordedSessionsRequest$inboundSchema;
  /** @deprecated use `GetRecordedSessionsRequest$outboundSchema` instead. */
  export const outboundSchema = GetRecordedSessionsRequest$outboundSchema;
  /** @deprecated use `GetRecordedSessionsRequest$Outbound` instead. */
  export type Outbound = GetRecordedSessionsRequest$Outbound;
}

export function getRecordedSessionsRequestToJSON(
  getRecordedSessionsRequest: GetRecordedSessionsRequest,
): string {
  return JSON.stringify(
    GetRecordedSessionsRequest$outboundSchema.parse(getRecordedSessionsRequest),
  );
}

export function getRecordedSessionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetRecordedSessionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRecordedSessionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRecordedSessionsRequest' from JSON`,
  );
}

/** @internal */
export const GetRecordedSessionsResponse$inboundSchema: z.ZodType<
  GetRecordedSessionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  data: z.array(components.Session$inboundSchema).optional(),
  error: components.ErrorT$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type GetRecordedSessionsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  data?: Array<components.Session$Outbound> | undefined;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetRecordedSessionsResponse$outboundSchema: z.ZodType<
  GetRecordedSessionsResponse$Outbound,
  z.ZodTypeDef,
  GetRecordedSessionsResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  data: z.array(components.Session$outboundSchema).optional(),
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
export namespace GetRecordedSessionsResponse$ {
  /** @deprecated use `GetRecordedSessionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetRecordedSessionsResponse$inboundSchema;
  /** @deprecated use `GetRecordedSessionsResponse$outboundSchema` instead. */
  export const outboundSchema = GetRecordedSessionsResponse$outboundSchema;
  /** @deprecated use `GetRecordedSessionsResponse$Outbound` instead. */
  export type Outbound = GetRecordedSessionsResponse$Outbound;
}

export function getRecordedSessionsResponseToJSON(
  getRecordedSessionsResponse: GetRecordedSessionsResponse,
): string {
  return JSON.stringify(
    GetRecordedSessionsResponse$outboundSchema.parse(
      getRecordedSessionsResponse,
    ),
  );
}

export function getRecordedSessionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetRecordedSessionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetRecordedSessionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetRecordedSessionsResponse' from JSON`,
  );
}
