/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Inline multistream target object. Will automatically
 *
 * @remarks
 * create the target resource to be used by the created
 * stream.
 *
 */
export type TargetAddPayloadSpec = {
    name?: string | undefined;
    /**
     * Livepeer-compatible multistream target URL (RTMP(S) or SRT)
     */
    url: string;
};

export type TargetAddPayload = {
    /**
     * Name of transcoding profile that should be sent. Use
     *
     * @remarks
     * "source" for pushing source stream data
     *
     */
    profile: string;
    /**
     * If true, the stream audio will be muted and only silent
     *
     * @remarks
     * video will be pushed to the target.
     *
     */
    videoOnly?: boolean | undefined;
    /**
     * ID of multistream target object where to push this stream
     */
    id?: string | undefined;
    /**
     * Inline multistream target object. Will automatically
     *
     * @remarks
     * create the target resource to be used by the created
     * stream.
     *
     */
    spec?: TargetAddPayloadSpec | undefined;
};

/** @internal */
export namespace TargetAddPayloadSpec$ {
    export type Inbound = {
        name?: string | undefined;
        url: string;
    };

    export const inboundSchema: z.ZodType<TargetAddPayloadSpec, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            url: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                url: v.url,
            };
        });

    export type Outbound = {
        name?: string | undefined;
        url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TargetAddPayloadSpec> = z
        .object({
            name: z.string().optional(),
            url: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                url: v.url,
            };
        });
}

/** @internal */
export namespace TargetAddPayload$ {
    export type Inbound = {
        profile: string;
        videoOnly?: boolean | undefined;
        id?: string | undefined;
        spec?: TargetAddPayloadSpec$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<TargetAddPayload, z.ZodTypeDef, Inbound> = z
        .object({
            profile: z.string(),
            videoOnly: z.boolean().default(false),
            id: z.string().optional(),
            spec: z.lazy(() => TargetAddPayloadSpec$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                profile: v.profile,
                videoOnly: v.videoOnly,
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.spec === undefined ? null : { spec: v.spec }),
            };
        });

    export type Outbound = {
        profile: string;
        videoOnly: boolean;
        id?: string | undefined;
        spec?: TargetAddPayloadSpec$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TargetAddPayload> = z
        .object({
            profile: z.string(),
            videoOnly: z.boolean().default(false),
            id: z.string().optional(),
            spec: z.lazy(() => TargetAddPayloadSpec$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                profile: v.profile,
                videoOnly: v.videoOnly,
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.spec === undefined ? null : { spec: v.spec }),
            };
        });
}
