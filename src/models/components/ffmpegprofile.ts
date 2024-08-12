/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export enum Profile {
    H264Baseline = "H264Baseline",
    H264Main = "H264Main",
    H264High = "H264High",
    H264ConstrainedHigh = "H264ConstrainedHigh",
}

export enum Encoder {
    H264 = "H.264",
}

/**
 * Transcode profile
 */
export type FfmpegProfile = {
    width: number;
    name: string;
    height: number;
    bitrate: number;
    fps: number;
    fpsDen?: number | undefined;
    /**
     * Restricts the size of the output video using the constant quality feature. Increasing this value will result in a lower quality video. Note that this parameter might not work if the transcoder lacks support for it.
     *
     * @remarks
     *
     */
    quality?: number | undefined;
    gop?: string | undefined;
    profile?: Profile | undefined;
    encoder?: Encoder | undefined;
};

/** @internal */
export const Profile$inboundSchema: z.ZodNativeEnum<typeof Profile> = z.nativeEnum(Profile);

/** @internal */
export const Profile$outboundSchema: z.ZodNativeEnum<typeof Profile> = Profile$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Profile$ {
    /** @deprecated use `Profile$inboundSchema` instead. */
    export const inboundSchema = Profile$inboundSchema;
    /** @deprecated use `Profile$outboundSchema` instead. */
    export const outboundSchema = Profile$outboundSchema;
}

/** @internal */
export const Encoder$inboundSchema: z.ZodNativeEnum<typeof Encoder> = z.nativeEnum(Encoder);

/** @internal */
export const Encoder$outboundSchema: z.ZodNativeEnum<typeof Encoder> = Encoder$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Encoder$ {
    /** @deprecated use `Encoder$inboundSchema` instead. */
    export const inboundSchema = Encoder$inboundSchema;
    /** @deprecated use `Encoder$outboundSchema` instead. */
    export const outboundSchema = Encoder$outboundSchema;
}

/** @internal */
export const FfmpegProfile$inboundSchema: z.ZodType<FfmpegProfile, z.ZodTypeDef, unknown> =
    z.object({
        width: z.number().int(),
        name: z.string(),
        height: z.number().int(),
        bitrate: z.number().int(),
        fps: z.number().int(),
        fpsDen: z.number().int().optional(),
        quality: z.number().int().optional(),
        gop: z.string().optional(),
        profile: Profile$inboundSchema.optional(),
        encoder: Encoder$inboundSchema.optional(),
    });

/** @internal */
export type FfmpegProfile$Outbound = {
    width: number;
    name: string;
    height: number;
    bitrate: number;
    fps: number;
    fpsDen?: number | undefined;
    quality?: number | undefined;
    gop?: string | undefined;
    profile?: string | undefined;
    encoder?: string | undefined;
};

/** @internal */
export const FfmpegProfile$outboundSchema: z.ZodType<
    FfmpegProfile$Outbound,
    z.ZodTypeDef,
    FfmpegProfile
> = z.object({
    width: z.number().int(),
    name: z.string(),
    height: z.number().int(),
    bitrate: z.number().int(),
    fps: z.number().int(),
    fpsDen: z.number().int().optional(),
    quality: z.number().int().optional(),
    gop: z.string().optional(),
    profile: Profile$outboundSchema.optional(),
    encoder: Encoder$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FfmpegProfile$ {
    /** @deprecated use `FfmpegProfile$inboundSchema` instead. */
    export const inboundSchema = FfmpegProfile$inboundSchema;
    /** @deprecated use `FfmpegProfile$outboundSchema` instead. */
    export const outboundSchema = FfmpegProfile$outboundSchema;
    /** @deprecated use `FfmpegProfile$Outbound` instead. */
    export type Outbound = FfmpegProfile$Outbound;
}
