/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  IpfsExportParams,
  IpfsExportParams$inboundSchema,
  IpfsExportParams$Outbound,
  IpfsExportParams$outboundSchema,
} from "./ipfsexportparams.js";

export type ExportTaskParams2 = {
  ipfs: IpfsExportParams;
};

/**
 * custom URL parameters for the export task
 */
export type Custom = {
  /**
   * URL where to export the asset
   */
  url: string;
  /**
   * Method to use on the export request
   */
  method?: string | undefined;
  /**
   * Headers to add to the export request
   */
  headers?: { [k: string]: string } | undefined;
};

export type ExportTaskParams1 = {
  /**
   * custom URL parameters for the export task
   */
  custom: Custom;
};

/**
 * Parameters for the export task
 */
export type ExportTaskParams = ExportTaskParams1 | ExportTaskParams2;

/** @internal */
export const ExportTaskParams2$inboundSchema: z.ZodType<
  ExportTaskParams2,
  z.ZodTypeDef,
  unknown
> = z.object({
  ipfs: IpfsExportParams$inboundSchema,
});

/** @internal */
export type ExportTaskParams2$Outbound = {
  ipfs: IpfsExportParams$Outbound;
};

/** @internal */
export const ExportTaskParams2$outboundSchema: z.ZodType<
  ExportTaskParams2$Outbound,
  z.ZodTypeDef,
  ExportTaskParams2
> = z.object({
  ipfs: IpfsExportParams$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExportTaskParams2$ {
  /** @deprecated use `ExportTaskParams2$inboundSchema` instead. */
  export const inboundSchema = ExportTaskParams2$inboundSchema;
  /** @deprecated use `ExportTaskParams2$outboundSchema` instead. */
  export const outboundSchema = ExportTaskParams2$outboundSchema;
  /** @deprecated use `ExportTaskParams2$Outbound` instead. */
  export type Outbound = ExportTaskParams2$Outbound;
}

export function exportTaskParams2ToJSON(
  exportTaskParams2: ExportTaskParams2,
): string {
  return JSON.stringify(
    ExportTaskParams2$outboundSchema.parse(exportTaskParams2),
  );
}

export function exportTaskParams2FromJSON(
  jsonString: string,
): SafeParseResult<ExportTaskParams2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ExportTaskParams2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ExportTaskParams2' from JSON`,
  );
}

/** @internal */
export const Custom$inboundSchema: z.ZodType<Custom, z.ZodTypeDef, unknown> = z
  .object({
    url: z.string(),
    method: z.string().default("PUT"),
    headers: z.record(z.string()).optional(),
  });

/** @internal */
export type Custom$Outbound = {
  url: string;
  method: string;
  headers?: { [k: string]: string } | undefined;
};

/** @internal */
export const Custom$outboundSchema: z.ZodType<
  Custom$Outbound,
  z.ZodTypeDef,
  Custom
> = z.object({
  url: z.string(),
  method: z.string().default("PUT"),
  headers: z.record(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Custom$ {
  /** @deprecated use `Custom$inboundSchema` instead. */
  export const inboundSchema = Custom$inboundSchema;
  /** @deprecated use `Custom$outboundSchema` instead. */
  export const outboundSchema = Custom$outboundSchema;
  /** @deprecated use `Custom$Outbound` instead. */
  export type Outbound = Custom$Outbound;
}

export function customToJSON(custom: Custom): string {
  return JSON.stringify(Custom$outboundSchema.parse(custom));
}

export function customFromJSON(
  jsonString: string,
): SafeParseResult<Custom, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Custom$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Custom' from JSON`,
  );
}

/** @internal */
export const ExportTaskParams1$inboundSchema: z.ZodType<
  ExportTaskParams1,
  z.ZodTypeDef,
  unknown
> = z.object({
  custom: z.lazy(() => Custom$inboundSchema),
});

/** @internal */
export type ExportTaskParams1$Outbound = {
  custom: Custom$Outbound;
};

/** @internal */
export const ExportTaskParams1$outboundSchema: z.ZodType<
  ExportTaskParams1$Outbound,
  z.ZodTypeDef,
  ExportTaskParams1
> = z.object({
  custom: z.lazy(() => Custom$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExportTaskParams1$ {
  /** @deprecated use `ExportTaskParams1$inboundSchema` instead. */
  export const inboundSchema = ExportTaskParams1$inboundSchema;
  /** @deprecated use `ExportTaskParams1$outboundSchema` instead. */
  export const outboundSchema = ExportTaskParams1$outboundSchema;
  /** @deprecated use `ExportTaskParams1$Outbound` instead. */
  export type Outbound = ExportTaskParams1$Outbound;
}

export function exportTaskParams1ToJSON(
  exportTaskParams1: ExportTaskParams1,
): string {
  return JSON.stringify(
    ExportTaskParams1$outboundSchema.parse(exportTaskParams1),
  );
}

export function exportTaskParams1FromJSON(
  jsonString: string,
): SafeParseResult<ExportTaskParams1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ExportTaskParams1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ExportTaskParams1' from JSON`,
  );
}

/** @internal */
export const ExportTaskParams$inboundSchema: z.ZodType<
  ExportTaskParams,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => ExportTaskParams1$inboundSchema),
  z.lazy(() => ExportTaskParams2$inboundSchema),
]);

/** @internal */
export type ExportTaskParams$Outbound =
  | ExportTaskParams1$Outbound
  | ExportTaskParams2$Outbound;

/** @internal */
export const ExportTaskParams$outboundSchema: z.ZodType<
  ExportTaskParams$Outbound,
  z.ZodTypeDef,
  ExportTaskParams
> = z.union([
  z.lazy(() => ExportTaskParams1$outboundSchema),
  z.lazy(() => ExportTaskParams2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExportTaskParams$ {
  /** @deprecated use `ExportTaskParams$inboundSchema` instead. */
  export const inboundSchema = ExportTaskParams$inboundSchema;
  /** @deprecated use `ExportTaskParams$outboundSchema` instead. */
  export const outboundSchema = ExportTaskParams$outboundSchema;
  /** @deprecated use `ExportTaskParams$Outbound` instead. */
  export type Outbound = ExportTaskParams$Outbound;
}

export function exportTaskParamsToJSON(
  exportTaskParams: ExportTaskParams,
): string {
  return JSON.stringify(
    ExportTaskParams$outboundSchema.parse(exportTaskParams),
  );
}

export function exportTaskParamsFromJSON(
  jsonString: string,
): SafeParseResult<ExportTaskParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ExportTaskParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ExportTaskParams' from JSON`,
  );
}
