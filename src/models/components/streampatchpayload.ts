/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  FfmpegProfile,
  FfmpegProfile$inboundSchema,
  FfmpegProfile$Outbound,
  FfmpegProfile$outboundSchema,
} from "./ffmpegprofile.js";
import {
  InputCreatorId,
  InputCreatorId$inboundSchema,
  InputCreatorId$Outbound,
  InputCreatorId$outboundSchema,
} from "./inputcreatorid.js";
import {
  Multistream,
  Multistream$inboundSchema,
  Multistream$Outbound,
  Multistream$outboundSchema,
} from "./multistream.js";
import {
  PlaybackPolicy,
  PlaybackPolicy$inboundSchema,
  PlaybackPolicy$Outbound,
  PlaybackPolicy$outboundSchema,
} from "./playbackpolicy.js";
import {
  RecordingSpec,
  RecordingSpec$inboundSchema,
  RecordingSpec$Outbound,
  RecordingSpec$outboundSchema,
} from "./recordingspec.js";
import {
  UserTags,
  UserTags$inboundSchema,
  UserTags$Outbound,
  UserTags$outboundSchema,
} from "./usertags.js";

export type StreamPatchPayload = {
  creatorId?: InputCreatorId | undefined;
  /**
   * Should this stream be recorded? Uses default settings. For more
   *
   * @remarks
   * customization, create and configure an object store.
   */
  record?: boolean | undefined;
  /**
   * If currently suspended
   */
  suspended?: boolean | undefined;
  multistream?: Multistream | undefined;
  /**
   * Whether the playback policy for an asset or stream is public or signed
   */
  playbackPolicy?: PlaybackPolicy | null | undefined;
  profiles?: Array<FfmpegProfile> | null | undefined;
  recordingSpec?: RecordingSpec | undefined;
  /**
   * User input tags associated with the stream
   */
  userTags?: { [k: string]: UserTags } | undefined;
  name?: string | undefined;
};

/** @internal */
export const StreamPatchPayload$inboundSchema: z.ZodType<
  StreamPatchPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  creatorId: InputCreatorId$inboundSchema.optional(),
  record: z.boolean().optional(),
  suspended: z.boolean().optional(),
  multistream: Multistream$inboundSchema.optional(),
  playbackPolicy: z.nullable(PlaybackPolicy$inboundSchema).optional(),
  profiles: z.nullable(z.array(FfmpegProfile$inboundSchema)).optional(),
  recordingSpec: RecordingSpec$inboundSchema.optional(),
  userTags: z.record(UserTags$inboundSchema).optional(),
  name: z.string().optional(),
});

/** @internal */
export type StreamPatchPayload$Outbound = {
  creatorId?: InputCreatorId$Outbound | undefined;
  record?: boolean | undefined;
  suspended?: boolean | undefined;
  multistream?: Multistream$Outbound | undefined;
  playbackPolicy?: PlaybackPolicy$Outbound | null | undefined;
  profiles?: Array<FfmpegProfile$Outbound> | null | undefined;
  recordingSpec?: RecordingSpec$Outbound | undefined;
  userTags?: { [k: string]: UserTags$Outbound } | undefined;
  name?: string | undefined;
};

/** @internal */
export const StreamPatchPayload$outboundSchema: z.ZodType<
  StreamPatchPayload$Outbound,
  z.ZodTypeDef,
  StreamPatchPayload
> = z.object({
  creatorId: InputCreatorId$outboundSchema.optional(),
  record: z.boolean().optional(),
  suspended: z.boolean().optional(),
  multistream: Multistream$outboundSchema.optional(),
  playbackPolicy: z.nullable(PlaybackPolicy$outboundSchema).optional(),
  profiles: z.nullable(z.array(FfmpegProfile$outboundSchema)).optional(),
  recordingSpec: RecordingSpec$outboundSchema.optional(),
  userTags: z.record(UserTags$outboundSchema).optional(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StreamPatchPayload$ {
  /** @deprecated use `StreamPatchPayload$inboundSchema` instead. */
  export const inboundSchema = StreamPatchPayload$inboundSchema;
  /** @deprecated use `StreamPatchPayload$outboundSchema` instead. */
  export const outboundSchema = StreamPatchPayload$outboundSchema;
  /** @deprecated use `StreamPatchPayload$Outbound` instead. */
  export type Outbound = StreamPatchPayload$Outbound;
}
