/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { FfmpegProfile, FfmpegProfile$ } from "./ffmpegprofile";
import { InputCreatorId, InputCreatorId$ } from "./inputcreatorid";
import { Multistream, Multistream$ } from "./multistream";
import { PlaybackPolicy, PlaybackPolicy$ } from "./playbackpolicy";
import { UserTags, UserTags$ } from "./usertags";
import * as z from "zod";

export type StreamPatchPayload = {
    creatorId?: InputCreatorId | undefined;
    /**
     * Should this stream be recorded? Uses default settings. For more
     *
     * @remarks
     * customization, create and configure an object store.
     *
     */
    record?: boolean | undefined;
    /**
     * If currently suspended
     */
    suspended?: boolean | undefined;
    multistream?: Multistream | undefined;
    /**
     * Whether the playback policy for a asset or stream is public or signed
     */
    playbackPolicy?: PlaybackPolicy | null | undefined;
    profiles?: Array<FfmpegProfile> | null | undefined;
    /**
     * User input tags associated with the stream
     */
    userTags?: { [k: string]: UserTags } | undefined;
};

/** @internal */
export namespace StreamPatchPayload$ {
    export const inboundSchema: z.ZodType<StreamPatchPayload, z.ZodTypeDef, unknown> = z
        .object({
            creatorId: InputCreatorId$.inboundSchema.optional(),
            record: z.boolean().optional(),
            suspended: z.boolean().optional(),
            multistream: Multistream$.inboundSchema.optional(),
            playbackPolicy: z.nullable(PlaybackPolicy$.inboundSchema).optional(),
            profiles: z.nullable(z.array(FfmpegProfile$.inboundSchema)).optional(),
            userTags: z.record(UserTags$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v.record === undefined ? null : { record: v.record }),
                ...(v.suspended === undefined ? null : { suspended: v.suspended }),
                ...(v.multistream === undefined ? null : { multistream: v.multistream }),
                ...(v.playbackPolicy === undefined ? null : { playbackPolicy: v.playbackPolicy }),
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
                ...(v.userTags === undefined ? null : { userTags: v.userTags }),
            };
        });

    export type Outbound = {
        creatorId?: InputCreatorId$.Outbound | undefined;
        record?: boolean | undefined;
        suspended?: boolean | undefined;
        multistream?: Multistream$.Outbound | undefined;
        playbackPolicy?: PlaybackPolicy$.Outbound | null | undefined;
        profiles?: Array<FfmpegProfile$.Outbound> | null | undefined;
        userTags?: { [k: string]: UserTags$.Outbound } | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StreamPatchPayload> = z
        .object({
            creatorId: InputCreatorId$.outboundSchema.optional(),
            record: z.boolean().optional(),
            suspended: z.boolean().optional(),
            multistream: Multistream$.outboundSchema.optional(),
            playbackPolicy: z.nullable(PlaybackPolicy$.outboundSchema).optional(),
            profiles: z.nullable(z.array(FfmpegProfile$.outboundSchema)).optional(),
            userTags: z.record(UserTags$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v.record === undefined ? null : { record: v.record }),
                ...(v.suspended === undefined ? null : { suspended: v.suspended }),
                ...(v.multistream === undefined ? null : { multistream: v.multistream }),
                ...(v.playbackPolicy === undefined ? null : { playbackPolicy: v.playbackPolicy }),
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
                ...(v.userTags === undefined ? null : { userTags: v.userTags }),
            };
        });
}
