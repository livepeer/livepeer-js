/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IpfsExportParams2 = {
  /**
   * Will be added to the pinata_api_key header.
   */
  apiKey: string;
};

export type IpfsExportParams1 = {};

/**
 * Custom credentials for the Piñata service. Must have either
 *
 * @remarks
 * a JWT or an API key and an API secret.
 */
export type Pinata = IpfsExportParams1 | IpfsExportParams2;

export type IpfsExportParams = {
  dollarRef?: any | undefined;
  /**
   * Custom credentials for the Piñata service. Must have either
   *
   * @remarks
   * a JWT or an API key and an API secret.
   */
  pinata?: IpfsExportParams1 | IpfsExportParams2 | undefined;
};

/** @internal */
export const IpfsExportParams2$inboundSchema: z.ZodType<
  IpfsExportParams2,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiKey: z.string(),
});

/** @internal */
export type IpfsExportParams2$Outbound = {
  apiKey: string;
};

/** @internal */
export const IpfsExportParams2$outboundSchema: z.ZodType<
  IpfsExportParams2$Outbound,
  z.ZodTypeDef,
  IpfsExportParams2
> = z.object({
  apiKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IpfsExportParams2$ {
  /** @deprecated use `IpfsExportParams2$inboundSchema` instead. */
  export const inboundSchema = IpfsExportParams2$inboundSchema;
  /** @deprecated use `IpfsExportParams2$outboundSchema` instead. */
  export const outboundSchema = IpfsExportParams2$outboundSchema;
  /** @deprecated use `IpfsExportParams2$Outbound` instead. */
  export type Outbound = IpfsExportParams2$Outbound;
}

export function ipfsExportParams2ToJSON(
  ipfsExportParams2: IpfsExportParams2,
): string {
  return JSON.stringify(
    IpfsExportParams2$outboundSchema.parse(ipfsExportParams2),
  );
}

export function ipfsExportParams2FromJSON(
  jsonString: string,
): SafeParseResult<IpfsExportParams2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IpfsExportParams2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IpfsExportParams2' from JSON`,
  );
}

/** @internal */
export const IpfsExportParams1$inboundSchema: z.ZodType<
  IpfsExportParams1,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type IpfsExportParams1$Outbound = {};

/** @internal */
export const IpfsExportParams1$outboundSchema: z.ZodType<
  IpfsExportParams1$Outbound,
  z.ZodTypeDef,
  IpfsExportParams1
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IpfsExportParams1$ {
  /** @deprecated use `IpfsExportParams1$inboundSchema` instead. */
  export const inboundSchema = IpfsExportParams1$inboundSchema;
  /** @deprecated use `IpfsExportParams1$outboundSchema` instead. */
  export const outboundSchema = IpfsExportParams1$outboundSchema;
  /** @deprecated use `IpfsExportParams1$Outbound` instead. */
  export type Outbound = IpfsExportParams1$Outbound;
}

export function ipfsExportParams1ToJSON(
  ipfsExportParams1: IpfsExportParams1,
): string {
  return JSON.stringify(
    IpfsExportParams1$outboundSchema.parse(ipfsExportParams1),
  );
}

export function ipfsExportParams1FromJSON(
  jsonString: string,
): SafeParseResult<IpfsExportParams1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IpfsExportParams1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IpfsExportParams1' from JSON`,
  );
}

/** @internal */
export const Pinata$inboundSchema: z.ZodType<Pinata, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => IpfsExportParams1$inboundSchema),
    z.lazy(() => IpfsExportParams2$inboundSchema),
  ]);

/** @internal */
export type Pinata$Outbound =
  | IpfsExportParams1$Outbound
  | IpfsExportParams2$Outbound;

/** @internal */
export const Pinata$outboundSchema: z.ZodType<
  Pinata$Outbound,
  z.ZodTypeDef,
  Pinata
> = z.union([
  z.lazy(() => IpfsExportParams1$outboundSchema),
  z.lazy(() => IpfsExportParams2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Pinata$ {
  /** @deprecated use `Pinata$inboundSchema` instead. */
  export const inboundSchema = Pinata$inboundSchema;
  /** @deprecated use `Pinata$outboundSchema` instead. */
  export const outboundSchema = Pinata$outboundSchema;
  /** @deprecated use `Pinata$Outbound` instead. */
  export type Outbound = Pinata$Outbound;
}

export function pinataToJSON(pinata: Pinata): string {
  return JSON.stringify(Pinata$outboundSchema.parse(pinata));
}

export function pinataFromJSON(
  jsonString: string,
): SafeParseResult<Pinata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Pinata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Pinata' from JSON`,
  );
}

/** @internal */
export const IpfsExportParams$inboundSchema: z.ZodType<
  IpfsExportParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  $ref: z.any().optional(),
  pinata: z.union([
    z.lazy(() => IpfsExportParams1$inboundSchema),
    z.lazy(() => IpfsExportParams2$inboundSchema),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "$ref": "dollarRef",
  });
});

/** @internal */
export type IpfsExportParams$Outbound = {
  $ref?: any | undefined;
  pinata?: IpfsExportParams1$Outbound | IpfsExportParams2$Outbound | undefined;
};

/** @internal */
export const IpfsExportParams$outboundSchema: z.ZodType<
  IpfsExportParams$Outbound,
  z.ZodTypeDef,
  IpfsExportParams
> = z.object({
  dollarRef: z.any().optional(),
  pinata: z.union([
    z.lazy(() => IpfsExportParams1$outboundSchema),
    z.lazy(() => IpfsExportParams2$outboundSchema),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    dollarRef: "$ref",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IpfsExportParams$ {
  /** @deprecated use `IpfsExportParams$inboundSchema` instead. */
  export const inboundSchema = IpfsExportParams$inboundSchema;
  /** @deprecated use `IpfsExportParams$outboundSchema` instead. */
  export const outboundSchema = IpfsExportParams$outboundSchema;
  /** @deprecated use `IpfsExportParams$Outbound` instead. */
  export type Outbound = IpfsExportParams$Outbound;
}

export function ipfsExportParamsToJSON(
  ipfsExportParams: IpfsExportParams,
): string {
  return JSON.stringify(
    IpfsExportParams$outboundSchema.parse(ipfsExportParams),
  );
}

export function ipfsExportParamsFromJSON(
  jsonString: string,
): SafeParseResult<IpfsExportParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IpfsExportParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IpfsExportParams' from JSON`,
  );
}
