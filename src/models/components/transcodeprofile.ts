/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export enum TranscodeProfileProfile {
  H264Baseline = "H264Baseline",
  H264Main = "H264Main",
  H264High = "H264High",
  H264ConstrainedHigh = "H264ConstrainedHigh",
}

export enum TranscodeProfileEncoder {
  H264 = "H.264",
  Hevc = "HEVC",
  Vp8 = "VP8",
  Vp9 = "VP9",
}

/**
 * Transcode API profile
 */
export type TranscodeProfile = {
  width?: number | undefined;
  name?: string | undefined;
  height?: number | undefined;
  bitrate: number;
  /**
   * Restricts the size of the output video using the constant quality feature. Increasing this value will result in a lower quality video. Note that this parameter might not work if the transcoder lacks support for it.
   *
   * @remarks
   */
  quality?: number | undefined;
  fps?: number | undefined;
  fpsDen?: number | undefined;
  gop?: string | undefined;
  profile?: TranscodeProfileProfile | undefined;
  encoder?: TranscodeProfileEncoder | undefined;
};

/** @internal */
export const TranscodeProfileProfile$inboundSchema: z.ZodNativeEnum<
  typeof TranscodeProfileProfile
> = z.nativeEnum(TranscodeProfileProfile);

/** @internal */
export const TranscodeProfileProfile$outboundSchema: z.ZodNativeEnum<
  typeof TranscodeProfileProfile
> = TranscodeProfileProfile$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodeProfileProfile$ {
  /** @deprecated use `TranscodeProfileProfile$inboundSchema` instead. */
  export const inboundSchema = TranscodeProfileProfile$inboundSchema;
  /** @deprecated use `TranscodeProfileProfile$outboundSchema` instead. */
  export const outboundSchema = TranscodeProfileProfile$outboundSchema;
}

/** @internal */
export const TranscodeProfileEncoder$inboundSchema: z.ZodNativeEnum<
  typeof TranscodeProfileEncoder
> = z.nativeEnum(TranscodeProfileEncoder);

/** @internal */
export const TranscodeProfileEncoder$outboundSchema: z.ZodNativeEnum<
  typeof TranscodeProfileEncoder
> = TranscodeProfileEncoder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodeProfileEncoder$ {
  /** @deprecated use `TranscodeProfileEncoder$inboundSchema` instead. */
  export const inboundSchema = TranscodeProfileEncoder$inboundSchema;
  /** @deprecated use `TranscodeProfileEncoder$outboundSchema` instead. */
  export const outboundSchema = TranscodeProfileEncoder$outboundSchema;
}

/** @internal */
export const TranscodeProfile$inboundSchema: z.ZodType<
  TranscodeProfile,
  z.ZodTypeDef,
  unknown
> = z.object({
  width: z.number().int().optional(),
  name: z.string().optional(),
  height: z.number().int().optional(),
  bitrate: z.number().int(),
  quality: z.number().int().optional(),
  fps: z.number().int().optional(),
  fpsDen: z.number().int().optional(),
  gop: z.string().optional(),
  profile: TranscodeProfileProfile$inboundSchema.optional(),
  encoder: TranscodeProfileEncoder$inboundSchema.optional(),
});

/** @internal */
export type TranscodeProfile$Outbound = {
  width?: number | undefined;
  name?: string | undefined;
  height?: number | undefined;
  bitrate: number;
  quality?: number | undefined;
  fps?: number | undefined;
  fpsDen?: number | undefined;
  gop?: string | undefined;
  profile?: string | undefined;
  encoder?: string | undefined;
};

/** @internal */
export const TranscodeProfile$outboundSchema: z.ZodType<
  TranscodeProfile$Outbound,
  z.ZodTypeDef,
  TranscodeProfile
> = z.object({
  width: z.number().int().optional(),
  name: z.string().optional(),
  height: z.number().int().optional(),
  bitrate: z.number().int(),
  quality: z.number().int().optional(),
  fps: z.number().int().optional(),
  fpsDen: z.number().int().optional(),
  gop: z.string().optional(),
  profile: TranscodeProfileProfile$outboundSchema.optional(),
  encoder: TranscodeProfileEncoder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodeProfile$ {
  /** @deprecated use `TranscodeProfile$inboundSchema` instead. */
  export const inboundSchema = TranscodeProfile$inboundSchema;
  /** @deprecated use `TranscodeProfile$outboundSchema` instead. */
  export const outboundSchema = TranscodeProfile$outboundSchema;
  /** @deprecated use `TranscodeProfile$Outbound` instead. */
  export type Outbound = TranscodeProfile$Outbound;
}

export function transcodeProfileToJSON(
  transcodeProfile: TranscodeProfile,
): string {
  return JSON.stringify(
    TranscodeProfile$outboundSchema.parse(transcodeProfile),
  );
}

export function transcodeProfileFromJSON(
  jsonString: string,
): SafeParseResult<TranscodeProfile, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TranscodeProfile$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodeProfile' from JSON`,
  );
}
