/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetSessionsResponse = {
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
export const GetSessionsResponse$inboundSchema: z.ZodType<
  GetSessionsResponse,
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
export type GetSessionsResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  data?: Array<components.Session$Outbound> | undefined;
  error?: components.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetSessionsResponse$outboundSchema: z.ZodType<
  GetSessionsResponse$Outbound,
  z.ZodTypeDef,
  GetSessionsResponse
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
export namespace GetSessionsResponse$ {
  /** @deprecated use `GetSessionsResponse$inboundSchema` instead. */
  export const inboundSchema = GetSessionsResponse$inboundSchema;
  /** @deprecated use `GetSessionsResponse$outboundSchema` instead. */
  export const outboundSchema = GetSessionsResponse$outboundSchema;
  /** @deprecated use `GetSessionsResponse$Outbound` instead. */
  export type Outbound = GetSessionsResponse$Outbound;
}

export function getSessionsResponseToJSON(
  getSessionsResponse: GetSessionsResponse,
): string {
  return JSON.stringify(
    GetSessionsResponse$outboundSchema.parse(getSessionsResponse),
  );
}

export function getSessionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetSessionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSessionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSessionsResponse' from JSON`,
  );
}
