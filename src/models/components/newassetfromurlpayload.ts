/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Encryption, Encryption$ } from "./encryption";
import { InputCreatorId, InputCreatorId$ } from "./inputcreatorid";
import { PlaybackPolicy, PlaybackPolicy$ } from "./playbackpolicy";
import { Storage, Storage$ } from "./storage";
import { TranscodeProfile, TranscodeProfile$ } from "./transcodeprofile";
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
     * Whether the playback policy for a asset or stream is public or signed
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
    profiles?: Array<TranscodeProfile> | undefined;
    /**
     * How many seconds the duration of each output segment should be
     */
    targetSegmentSizeSecs?: number | undefined;
};

/** @internal */
export namespace NewAssetFromUrlPayload$ {
    export const inboundSchema: z.ZodType<NewAssetFromUrlPayload, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            staticMp4: z.boolean().optional(),
            playbackPolicy: z.nullable(PlaybackPolicy$.inboundSchema).optional(),
            creatorId: InputCreatorId$.inboundSchema.optional(),
            storage: Storage$.inboundSchema.optional(),
            url: z.string(),
            encryption: Encryption$.inboundSchema.optional(),
            c2pa: z.boolean().optional(),
            profiles: z.array(TranscodeProfile$.inboundSchema).optional(),
            targetSegmentSizeSecs: z.number().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.staticMp4 === undefined ? null : { staticMp4: v.staticMp4 }),
                ...(v.playbackPolicy === undefined ? null : { playbackPolicy: v.playbackPolicy }),
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v.storage === undefined ? null : { storage: v.storage }),
                url: v.url,
                ...(v.encryption === undefined ? null : { encryption: v.encryption }),
                ...(v.c2pa === undefined ? null : { c2pa: v.c2pa }),
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
                ...(v.targetSegmentSizeSecs === undefined
                    ? null
                    : { targetSegmentSizeSecs: v.targetSegmentSizeSecs }),
            };
        });

    export type Outbound = {
        name: string;
        staticMp4?: boolean | undefined;
        playbackPolicy?: PlaybackPolicy$.Outbound | null | undefined;
        creatorId?: InputCreatorId$.Outbound | undefined;
        storage?: Storage$.Outbound | undefined;
        url: string;
        encryption?: Encryption$.Outbound | undefined;
        c2pa?: boolean | undefined;
        profiles?: Array<TranscodeProfile$.Outbound> | undefined;
        targetSegmentSizeSecs?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NewAssetFromUrlPayload> = z
        .object({
            name: z.string(),
            staticMp4: z.boolean().optional(),
            playbackPolicy: z.nullable(PlaybackPolicy$.outboundSchema).optional(),
            creatorId: InputCreatorId$.outboundSchema.optional(),
            storage: Storage$.outboundSchema.optional(),
            url: z.string(),
            encryption: Encryption$.outboundSchema.optional(),
            c2pa: z.boolean().optional(),
            profiles: z.array(TranscodeProfile$.outboundSchema).optional(),
            targetSegmentSizeSecs: z.number().optional(),
        })
        .transform((v) => {
            return {
                name: v.name,
                ...(v.staticMp4 === undefined ? null : { staticMp4: v.staticMp4 }),
                ...(v.playbackPolicy === undefined ? null : { playbackPolicy: v.playbackPolicy }),
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v.storage === undefined ? null : { storage: v.storage }),
                url: v.url,
                ...(v.encryption === undefined ? null : { encryption: v.encryption }),
                ...(v.c2pa === undefined ? null : { c2pa: v.c2pa }),
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
                ...(v.targetSegmentSizeSecs === undefined
                    ? null
                    : { targetSegmentSizeSecs: v.targetSegmentSizeSecs }),
            };
        });
}
