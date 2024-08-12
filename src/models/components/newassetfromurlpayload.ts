/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    Encryption,
    Encryption$inboundSchema,
    Encryption$Outbound,
    Encryption$outboundSchema,
} from "./encryption.js";
import {
    InputCreatorId,
    InputCreatorId$inboundSchema,
    InputCreatorId$Outbound,
    InputCreatorId$outboundSchema,
} from "./inputcreatorid.js";
import {
    PlaybackPolicy,
    PlaybackPolicy$inboundSchema,
    PlaybackPolicy$Outbound,
    PlaybackPolicy$outboundSchema,
} from "./playbackpolicy.js";
import {
    Storage,
    Storage$inboundSchema,
    Storage$Outbound,
    Storage$outboundSchema,
} from "./storage.js";
import {
    TranscodeProfile,
    TranscodeProfile$inboundSchema,
    TranscodeProfile$Outbound,
    TranscodeProfile$outboundSchema,
} from "./transcodeprofile.js";
import * as z from "zod";

export type NewAssetFromUrlPayload = {
    /**
     * The name of the asset. This is not necessarily the filename - it can be a custom name or title.
     *
     * @remarks
     *
     */
    name: string;
    /**
     * Whether to generate MP4s for the asset.
     */
    staticMp4?: boolean | undefined;
    /**
     * Whether the playback policy for an asset or stream is public or signed
     */
    playbackPolicy?: PlaybackPolicy | null | undefined;
    creatorId?: InputCreatorId | undefined;
    storage?: Storage | undefined;
    /**
     * URL where the asset contents can be retrieved, e.g. `https://s3.amazonaws.com/my-bucket/path/filename.mp4`.
     *
     * @remarks
     * For an IPFS source, this should be similar to: `ipfs://{CID}`. For an Arweave
     * source: `ar://{CID}`.
     *
     */
    url: string;
    encryption?: Encryption | undefined;
    /**
     * Decides if the output video should include C2PA signature
     */
    c2pa?: boolean | undefined;
    profiles?: Array<TranscodeProfile> | null | undefined;
    /**
     * How many seconds the duration of each output segment should be
     */
    targetSegmentSizeSecs?: number | undefined;
};

/** @internal */
export const NewAssetFromUrlPayload$inboundSchema: z.ZodType<
    NewAssetFromUrlPayload,
    z.ZodTypeDef,
    unknown
> = z.object({
    name: z.string(),
    staticMp4: z.boolean().optional(),
    playbackPolicy: z.nullable(PlaybackPolicy$inboundSchema).optional(),
    creatorId: InputCreatorId$inboundSchema.optional(),
    storage: Storage$inboundSchema.optional(),
    url: z.string(),
    encryption: Encryption$inboundSchema.optional(),
    c2pa: z.boolean().optional(),
    profiles: z.nullable(z.array(TranscodeProfile$inboundSchema)).optional(),
    targetSegmentSizeSecs: z.number().optional(),
});

/** @internal */
export type NewAssetFromUrlPayload$Outbound = {
    name: string;
    staticMp4?: boolean | undefined;
    playbackPolicy?: PlaybackPolicy$Outbound | null | undefined;
    creatorId?: InputCreatorId$Outbound | undefined;
    storage?: Storage$Outbound | undefined;
    url: string;
    encryption?: Encryption$Outbound | undefined;
    c2pa?: boolean | undefined;
    profiles?: Array<TranscodeProfile$Outbound> | null | undefined;
    targetSegmentSizeSecs?: number | undefined;
};

/** @internal */
export const NewAssetFromUrlPayload$outboundSchema: z.ZodType<
    NewAssetFromUrlPayload$Outbound,
    z.ZodTypeDef,
    NewAssetFromUrlPayload
> = z.object({
    name: z.string(),
    staticMp4: z.boolean().optional(),
    playbackPolicy: z.nullable(PlaybackPolicy$outboundSchema).optional(),
    creatorId: InputCreatorId$outboundSchema.optional(),
    storage: Storage$outboundSchema.optional(),
    url: z.string(),
    encryption: Encryption$outboundSchema.optional(),
    c2pa: z.boolean().optional(),
    profiles: z.nullable(z.array(TranscodeProfile$outboundSchema)).optional(),
    targetSegmentSizeSecs: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NewAssetFromUrlPayload$ {
    /** @deprecated use `NewAssetFromUrlPayload$inboundSchema` instead. */
    export const inboundSchema = NewAssetFromUrlPayload$inboundSchema;
    /** @deprecated use `NewAssetFromUrlPayload$outboundSchema` instead. */
    export const outboundSchema = NewAssetFromUrlPayload$outboundSchema;
    /** @deprecated use `NewAssetFromUrlPayload$Outbound` instead. */
    export type Outbound = NewAssetFromUrlPayload$Outbound;
}
