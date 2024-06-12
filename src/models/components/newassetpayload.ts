/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { InputCreatorId, InputCreatorId$ } from "./inputcreatorid";
import { PlaybackPolicy, PlaybackPolicy$ } from "./playbackpolicy";
import { Spec, Spec$ } from "./spec";
import { TranscodeProfile, TranscodeProfile$ } from "./transcodeprofile";
import * as z from "zod";

export type NewAssetPayload1 = {
    spec?: Spec | null | undefined;
};

/**
 * Set to true to make default export to IPFS. To customize the
 *
 * @remarks
 * pinned files, specify an object with a spec field. False or null
 * means to unpin from IPFS, but it's unsupported right now.
 *
 */
export type NewAssetPayloadIpfs = NewAssetPayload1 | boolean;

export type NewAssetPayloadStorage = {
    /**
     * Set to true to make default export to IPFS. To customize the
     *
     * @remarks
     * pinned files, specify an object with a spec field. False or null
     * means to unpin from IPFS, but it's unsupported right now.
     *
     */
    ipfs?: NewAssetPayload1 | boolean | null | undefined;
};

export type NewAssetPayloadEncryption = {
    /**
     * Encryption key used to encrypt the asset. Only writable in the upload asset endpoints and cannot be retrieved back.
     */
    encryptedKey: string;
};

export type NewAssetPayload = {
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
    storage?: NewAssetPayloadStorage | undefined;
    encryption?: NewAssetPayloadEncryption | undefined;
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
export namespace NewAssetPayload1$ {
    export const inboundSchema: z.ZodType<NewAssetPayload1, z.ZodTypeDef, unknown> = z.object({
        spec: z.nullable(Spec$.inboundSchema).optional(),
    });

    export type Outbound = {
        spec?: Spec$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NewAssetPayload1> = z.object({
        spec: z.nullable(Spec$.outboundSchema).optional(),
    });
}

/** @internal */
export namespace NewAssetPayloadIpfs$ {
    export const inboundSchema: z.ZodType<NewAssetPayloadIpfs, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => NewAssetPayload1$.inboundSchema),
        z.boolean(),
    ]);

    export type Outbound = NewAssetPayload1$.Outbound | boolean;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NewAssetPayloadIpfs> = z.union([
        z.lazy(() => NewAssetPayload1$.outboundSchema),
        z.boolean(),
    ]);
}

/** @internal */
export namespace NewAssetPayloadStorage$ {
    export const inboundSchema: z.ZodType<NewAssetPayloadStorage, z.ZodTypeDef, unknown> = z.object(
        {
            ipfs: z
                .nullable(z.union([z.lazy(() => NewAssetPayload1$.inboundSchema), z.boolean()]))
                .optional(),
        }
    );

    export type Outbound = {
        ipfs?: NewAssetPayload1$.Outbound | boolean | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NewAssetPayloadStorage> =
        z.object({
            ipfs: z
                .nullable(z.union([z.lazy(() => NewAssetPayload1$.outboundSchema), z.boolean()]))
                .optional(),
        });
}

/** @internal */
export namespace NewAssetPayloadEncryption$ {
    export const inboundSchema: z.ZodType<NewAssetPayloadEncryption, z.ZodTypeDef, unknown> =
        z.object({
            encryptedKey: z.string(),
        });

    export type Outbound = {
        encryptedKey: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NewAssetPayloadEncryption> =
        z.object({
            encryptedKey: z.string(),
        });
}

/** @internal */
export namespace NewAssetPayload$ {
    export const inboundSchema: z.ZodType<NewAssetPayload, z.ZodTypeDef, unknown> = z.object({
        name: z.string(),
        staticMp4: z.boolean().optional(),
        playbackPolicy: z.nullable(PlaybackPolicy$.inboundSchema).optional(),
        creatorId: InputCreatorId$.inboundSchema.optional(),
        storage: z.lazy(() => NewAssetPayloadStorage$.inboundSchema).optional(),
        encryption: z.lazy(() => NewAssetPayloadEncryption$.inboundSchema).optional(),
        c2pa: z.boolean().optional(),
        profiles: z.nullable(z.array(TranscodeProfile$.inboundSchema)).optional(),
        targetSegmentSizeSecs: z.number().optional(),
    });

    export type Outbound = {
        name: string;
        staticMp4?: boolean | undefined;
        playbackPolicy?: PlaybackPolicy$.Outbound | null | undefined;
        creatorId?: InputCreatorId$.Outbound | undefined;
        storage?: NewAssetPayloadStorage$.Outbound | undefined;
        encryption?: NewAssetPayloadEncryption$.Outbound | undefined;
        c2pa?: boolean | undefined;
        profiles?: Array<TranscodeProfile$.Outbound> | null | undefined;
        targetSegmentSizeSecs?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NewAssetPayload> = z.object({
        name: z.string(),
        staticMp4: z.boolean().optional(),
        playbackPolicy: z.nullable(PlaybackPolicy$.outboundSchema).optional(),
        creatorId: InputCreatorId$.outboundSchema.optional(),
        storage: z.lazy(() => NewAssetPayloadStorage$.outboundSchema).optional(),
        encryption: z.lazy(() => NewAssetPayloadEncryption$.outboundSchema).optional(),
        c2pa: z.boolean().optional(),
        profiles: z.nullable(z.array(TranscodeProfile$.outboundSchema)).optional(),
        targetSegmentSizeSecs: z.number().optional(),
    });
}
