/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  HTTPError,
  HTTPError$inboundSchema,
  HTTPError$Outbound,
  HTTPError$outboundSchema,
} from "./httperror.js";
import {
  HTTPValidationError,
  HTTPValidationError$inboundSchema,
  HTTPValidationError$Outbound,
  HTTPValidationError$outboundSchema,
} from "./httpvalidationerror.js";
import {
  StudioApiError,
  StudioApiError$inboundSchema,
  StudioApiError$Outbound,
  StudioApiError$outboundSchema,
} from "./studioapierror.js";

/**
 * Internal Server Error
 */
export type GenAudioToTextGenerateResponse500ResponseBody =
  | HTTPError
  | StudioApiError;

/**
 * Validation Error
 */
export type GenAudioToTextGenerateResponse422ResponseBody =
  | HTTPValidationError
  | StudioApiError;

/**
 * Request Entity Too Large
 */
export type GenAudioToTextGenerateResponseResponseBody =
  | HTTPError
  | StudioApiError;

/**
 * Unauthorized
 */
export type GenAudioToTextGenerateResponseBody = HTTPError | StudioApiError;

/**
 * Bad Request
 */
export type GenAudioToTextResponseBody = HTTPError | StudioApiError;

/** @internal */
export const GenAudioToTextGenerateResponse500ResponseBody$inboundSchema:
  z.ZodType<
    GenAudioToTextGenerateResponse500ResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.union([HTTPError$inboundSchema, StudioApiError$inboundSchema]);

/** @internal */
export type GenAudioToTextGenerateResponse500ResponseBody$Outbound =
  | HTTPError$Outbound
  | StudioApiError$Outbound;

/** @internal */
export const GenAudioToTextGenerateResponse500ResponseBody$outboundSchema:
  z.ZodType<
    GenAudioToTextGenerateResponse500ResponseBody$Outbound,
    z.ZodTypeDef,
    GenAudioToTextGenerateResponse500ResponseBody
  > = z.union([HTTPError$outboundSchema, StudioApiError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenAudioToTextGenerateResponse500ResponseBody$ {
  /** @deprecated use `GenAudioToTextGenerateResponse500ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GenAudioToTextGenerateResponse500ResponseBody$inboundSchema;
  /** @deprecated use `GenAudioToTextGenerateResponse500ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GenAudioToTextGenerateResponse500ResponseBody$outboundSchema;
  /** @deprecated use `GenAudioToTextGenerateResponse500ResponseBody$Outbound` instead. */
  export type Outbound = GenAudioToTextGenerateResponse500ResponseBody$Outbound;
}

/** @internal */
export const GenAudioToTextGenerateResponse422ResponseBody$inboundSchema:
  z.ZodType<
    GenAudioToTextGenerateResponse422ResponseBody,
    z.ZodTypeDef,
    unknown
  > = z.union([
    HTTPValidationError$inboundSchema,
    StudioApiError$inboundSchema,
  ]);

/** @internal */
export type GenAudioToTextGenerateResponse422ResponseBody$Outbound =
  | HTTPValidationError$Outbound
  | StudioApiError$Outbound;

/** @internal */
export const GenAudioToTextGenerateResponse422ResponseBody$outboundSchema:
  z.ZodType<
    GenAudioToTextGenerateResponse422ResponseBody$Outbound,
    z.ZodTypeDef,
    GenAudioToTextGenerateResponse422ResponseBody
  > = z.union([
    HTTPValidationError$outboundSchema,
    StudioApiError$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenAudioToTextGenerateResponse422ResponseBody$ {
  /** @deprecated use `GenAudioToTextGenerateResponse422ResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GenAudioToTextGenerateResponse422ResponseBody$inboundSchema;
  /** @deprecated use `GenAudioToTextGenerateResponse422ResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GenAudioToTextGenerateResponse422ResponseBody$outboundSchema;
  /** @deprecated use `GenAudioToTextGenerateResponse422ResponseBody$Outbound` instead. */
  export type Outbound = GenAudioToTextGenerateResponse422ResponseBody$Outbound;
}

/** @internal */
export const GenAudioToTextGenerateResponseResponseBody$inboundSchema:
  z.ZodType<GenAudioToTextGenerateResponseResponseBody, z.ZodTypeDef, unknown> =
    z.union([HTTPError$inboundSchema, StudioApiError$inboundSchema]);

/** @internal */
export type GenAudioToTextGenerateResponseResponseBody$Outbound =
  | HTTPError$Outbound
  | StudioApiError$Outbound;

/** @internal */
export const GenAudioToTextGenerateResponseResponseBody$outboundSchema:
  z.ZodType<
    GenAudioToTextGenerateResponseResponseBody$Outbound,
    z.ZodTypeDef,
    GenAudioToTextGenerateResponseResponseBody
  > = z.union([HTTPError$outboundSchema, StudioApiError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenAudioToTextGenerateResponseResponseBody$ {
  /** @deprecated use `GenAudioToTextGenerateResponseResponseBody$inboundSchema` instead. */
  export const inboundSchema =
    GenAudioToTextGenerateResponseResponseBody$inboundSchema;
  /** @deprecated use `GenAudioToTextGenerateResponseResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GenAudioToTextGenerateResponseResponseBody$outboundSchema;
  /** @deprecated use `GenAudioToTextGenerateResponseResponseBody$Outbound` instead. */
  export type Outbound = GenAudioToTextGenerateResponseResponseBody$Outbound;
}

/** @internal */
export const GenAudioToTextGenerateResponseBody$inboundSchema: z.ZodType<
  GenAudioToTextGenerateResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([HTTPError$inboundSchema, StudioApiError$inboundSchema]);

/** @internal */
export type GenAudioToTextGenerateResponseBody$Outbound =
  | HTTPError$Outbound
  | StudioApiError$Outbound;

/** @internal */
export const GenAudioToTextGenerateResponseBody$outboundSchema: z.ZodType<
  GenAudioToTextGenerateResponseBody$Outbound,
  z.ZodTypeDef,
  GenAudioToTextGenerateResponseBody
> = z.union([HTTPError$outboundSchema, StudioApiError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenAudioToTextGenerateResponseBody$ {
  /** @deprecated use `GenAudioToTextGenerateResponseBody$inboundSchema` instead. */
  export const inboundSchema = GenAudioToTextGenerateResponseBody$inboundSchema;
  /** @deprecated use `GenAudioToTextGenerateResponseBody$outboundSchema` instead. */
  export const outboundSchema =
    GenAudioToTextGenerateResponseBody$outboundSchema;
  /** @deprecated use `GenAudioToTextGenerateResponseBody$Outbound` instead. */
  export type Outbound = GenAudioToTextGenerateResponseBody$Outbound;
}

/** @internal */
export const GenAudioToTextResponseBody$inboundSchema: z.ZodType<
  GenAudioToTextResponseBody,
  z.ZodTypeDef,
  unknown
> = z.union([HTTPError$inboundSchema, StudioApiError$inboundSchema]);

/** @internal */
export type GenAudioToTextResponseBody$Outbound =
  | HTTPError$Outbound
  | StudioApiError$Outbound;

/** @internal */
export const GenAudioToTextResponseBody$outboundSchema: z.ZodType<
  GenAudioToTextResponseBody$Outbound,
  z.ZodTypeDef,
  GenAudioToTextResponseBody
> = z.union([HTTPError$outboundSchema, StudioApiError$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenAudioToTextResponseBody$ {
  /** @deprecated use `GenAudioToTextResponseBody$inboundSchema` instead. */
  export const inboundSchema = GenAudioToTextResponseBody$inboundSchema;
  /** @deprecated use `GenAudioToTextResponseBody$outboundSchema` instead. */
  export const outboundSchema = GenAudioToTextResponseBody$outboundSchema;
  /** @deprecated use `GenAudioToTextResponseBody$Outbound` instead. */
  export type Outbound = GenAudioToTextResponseBody$Outbound;
}
