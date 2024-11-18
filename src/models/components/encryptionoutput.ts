/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EncryptionOutput = {};

/** @internal */
export const EncryptionOutput$inboundSchema: z.ZodType<
  EncryptionOutput,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type EncryptionOutput$Outbound = {};

/** @internal */
export const EncryptionOutput$outboundSchema: z.ZodType<
  EncryptionOutput$Outbound,
  z.ZodTypeDef,
  EncryptionOutput
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EncryptionOutput$ {
  /** @deprecated use `EncryptionOutput$inboundSchema` instead. */
  export const inboundSchema = EncryptionOutput$inboundSchema;
  /** @deprecated use `EncryptionOutput$outboundSchema` instead. */
  export const outboundSchema = EncryptionOutput$outboundSchema;
  /** @deprecated use `EncryptionOutput$Outbound` instead. */
  export type Outbound = EncryptionOutput$Outbound;
}

export function encryptionOutputToJSON(
  encryptionOutput: EncryptionOutput,
): string {
  return JSON.stringify(
    EncryptionOutput$outboundSchema.parse(encryptionOutput),
  );
}

export function encryptionOutputFromJSON(
  jsonString: string,
): SafeParseResult<EncryptionOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EncryptionOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EncryptionOutput' from JSON`,
  );
}
