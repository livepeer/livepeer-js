/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Attestation, Attestation$ } from "./attestation";
import { PlaybackPolicy, PlaybackPolicy$ } from "./playbackpolicy";
import * as z from "zod";

export enum PlaybackInfoType {
    Live = "live",
    Vod = "vod",
    Recording = "recording",
}

export enum Live {
    Zero = 0,
    One = 1,
}

/**
 * Human Readable Name
 */
export enum Hrn {
    HlsTs = "HLS (TS)",
    Mp4 = "MP4",
    WebRTCH264 = "WebRTC (H264)",
    FlvH264 = "FLV (H264)",
    ThumbnailJPEG = "Thumbnail (JPEG)",
    Thumbnails = "Thumbnails",
}

export enum PlaybackInfoSchemasType {
    Html5ApplicationVndAppleMpegurl = "html5/application/vnd.apple.mpegurl",
    Html5VideoMp4 = "html5/video/mp4",
    Html5VideoH264 = "html5/video/h264",
    VideoXFlv = "video/x-flv",
    ImageJpeg = "image/jpeg",
    TextVtt = "text/vtt",
}

export type PlaybackInfoSource = {
    /**
     * Human Readable Name
     */
    hrn: Hrn;
    type: PlaybackInfoSchemasType;
    url: string;
    size?: number | undefined;
    width?: number | undefined;
    height?: number | undefined;
    bitrate?: number | undefined;
};

export enum PlaybackInfoHrn {
    HlsTs = "HLS (TS)",
}

export enum PlaybackInfoSchemasMetaType {
    Html5ApplicationVndAppleMpegurl = "html5/application/vnd.apple.mpegurl",
}

export type DvrPlayback = {
    hrn?: PlaybackInfoHrn | undefined;
    type?: PlaybackInfoSchemasMetaType | undefined;
    url?: string | undefined;
    error?: string | undefined;
};

export type Meta = {
    live?: Live | undefined;
    /**
     * Whether the playback policy for a asset or stream is public or signed
     */
    playbackPolicy?: PlaybackPolicy | null | undefined;
    source: Array<PlaybackInfoSource>;
    dvrPlayback?: Array<DvrPlayback> | undefined;
    attestation?: Attestation | undefined;
};

export type PlaybackInfo = {
    type: PlaybackInfoType;
    meta: Meta;
};

/** @internal */
export const PlaybackInfoType$: z.ZodNativeEnum<typeof PlaybackInfoType> =
    z.nativeEnum(PlaybackInfoType);

/** @internal */
export const Live$: z.ZodNativeEnum<typeof Live> = z.nativeEnum(Live);

/** @internal */
export const Hrn$: z.ZodNativeEnum<typeof Hrn> = z.nativeEnum(Hrn);

/** @internal */
export const PlaybackInfoSchemasType$: z.ZodNativeEnum<typeof PlaybackInfoSchemasType> =
    z.nativeEnum(PlaybackInfoSchemasType);

/** @internal */
export namespace PlaybackInfoSource$ {
    export const inboundSchema: z.ZodType<PlaybackInfoSource, z.ZodTypeDef, unknown> = z
        .object({
            hrn: Hrn$,
            type: PlaybackInfoSchemasType$,
            url: z.string(),
            size: z.number().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
            bitrate: z.number().optional(),
        })
        .transform((v) => {
            return {
                hrn: v.hrn,
                type: v.type,
                url: v.url,
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.bitrate === undefined ? null : { bitrate: v.bitrate }),
            };
        });

    export type Outbound = {
        hrn: Hrn;
        type: PlaybackInfoSchemasType;
        url: string;
        size?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        bitrate?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PlaybackInfoSource> = z
        .object({
            hrn: Hrn$,
            type: PlaybackInfoSchemasType$,
            url: z.string(),
            size: z.number().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
            bitrate: z.number().optional(),
        })
        .transform((v) => {
            return {
                hrn: v.hrn,
                type: v.type,
                url: v.url,
                ...(v.size === undefined ? null : { size: v.size }),
                ...(v.width === undefined ? null : { width: v.width }),
                ...(v.height === undefined ? null : { height: v.height }),
                ...(v.bitrate === undefined ? null : { bitrate: v.bitrate }),
            };
        });
}

/** @internal */
export const PlaybackInfoHrn$: z.ZodNativeEnum<typeof PlaybackInfoHrn> =
    z.nativeEnum(PlaybackInfoHrn);

/** @internal */
export const PlaybackInfoSchemasMetaType$: z.ZodNativeEnum<typeof PlaybackInfoSchemasMetaType> =
    z.nativeEnum(PlaybackInfoSchemasMetaType);

/** @internal */
export namespace DvrPlayback$ {
    export const inboundSchema: z.ZodType<DvrPlayback, z.ZodTypeDef, unknown> = z
        .object({
            hrn: PlaybackInfoHrn$.optional(),
            type: PlaybackInfoSchemasMetaType$.optional(),
            url: z.string().optional(),
            error: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.hrn === undefined ? null : { hrn: v.hrn }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        hrn?: PlaybackInfoHrn | undefined;
        type?: PlaybackInfoSchemasMetaType | undefined;
        url?: string | undefined;
        error?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DvrPlayback> = z
        .object({
            hrn: PlaybackInfoHrn$.optional(),
            type: PlaybackInfoSchemasMetaType$.optional(),
            url: z.string().optional(),
            error: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.hrn === undefined ? null : { hrn: v.hrn }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.url === undefined ? null : { url: v.url }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}

/** @internal */
export namespace Meta$ {
    export const inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown> = z
        .object({
            live: Live$.optional(),
            playbackPolicy: z.nullable(PlaybackPolicy$.inboundSchema).optional(),
            source: z.array(z.lazy(() => PlaybackInfoSource$.inboundSchema)),
            dvrPlayback: z.array(z.lazy(() => DvrPlayback$.inboundSchema)).optional(),
            attestation: Attestation$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.live === undefined ? null : { live: v.live }),
                ...(v.playbackPolicy === undefined ? null : { playbackPolicy: v.playbackPolicy }),
                source: v.source,
                ...(v.dvrPlayback === undefined ? null : { dvrPlayback: v.dvrPlayback }),
                ...(v.attestation === undefined ? null : { attestation: v.attestation }),
            };
        });

    export type Outbound = {
        live?: Live | undefined;
        playbackPolicy?: PlaybackPolicy$.Outbound | null | undefined;
        source: Array<PlaybackInfoSource$.Outbound>;
        dvrPlayback?: Array<DvrPlayback$.Outbound> | undefined;
        attestation?: Attestation$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Meta> = z
        .object({
            live: Live$.optional(),
            playbackPolicy: z.nullable(PlaybackPolicy$.outboundSchema).optional(),
            source: z.array(z.lazy(() => PlaybackInfoSource$.outboundSchema)),
            dvrPlayback: z.array(z.lazy(() => DvrPlayback$.outboundSchema)).optional(),
            attestation: Attestation$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.live === undefined ? null : { live: v.live }),
                ...(v.playbackPolicy === undefined ? null : { playbackPolicy: v.playbackPolicy }),
                source: v.source,
                ...(v.dvrPlayback === undefined ? null : { dvrPlayback: v.dvrPlayback }),
                ...(v.attestation === undefined ? null : { attestation: v.attestation }),
            };
        });
}

/** @internal */
export namespace PlaybackInfo$ {
    export const inboundSchema: z.ZodType<PlaybackInfo, z.ZodTypeDef, unknown> = z
        .object({
            type: PlaybackInfoType$,
            meta: z.lazy(() => Meta$.inboundSchema),
        })
        .transform((v) => {
            return {
                type: v.type,
                meta: v.meta,
            };
        });

    export type Outbound = {
        type: PlaybackInfoType;
        meta: Meta$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PlaybackInfo> = z
        .object({
            type: PlaybackInfoType$,
            meta: z.lazy(() => Meta$.outboundSchema),
        })
        .transform((v) => {
            return {
                type: v.type,
                meta: v.meta,
            };
        });
}
