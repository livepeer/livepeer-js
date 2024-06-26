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
export type TargetSpec = {
    name?: string | undefined;
    /**
     * Livepeer-compatible multistream target URL (RTMP(S) or SRT)
     */
    url: string;
};

export type Target = {
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
    spec?: TargetSpec | undefined;
};

/** @internal */
export namespace TargetSpec$ {
    export const inboundSchema: z.ZodType<TargetSpec, z.ZodTypeDef, unknown> = z.object({
        name: z.string().optional(),
        url: z.string(),
    });

    export type Outbound = {
        name?: string | undefined;
        url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TargetSpec> = z.object({
        name: z.string().optional(),
        url: z.string(),
    });
}

/** @internal */
export namespace Target$ {
    export const inboundSchema: z.ZodType<Target, z.ZodTypeDef, unknown> = z.object({
        profile: z.string(),
        videoOnly: z.boolean().default(false),
        id: z.string().optional(),
        spec: z.lazy(() => TargetSpec$.inboundSchema).optional(),
    });

    export type Outbound = {
        profile: string;
        videoOnly: boolean;
        id?: string | undefined;
        spec?: TargetSpec$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Target> = z.object({
        profile: z.string(),
        videoOnly: z.boolean().default(false),
        id: z.string().optional(),
        spec: z.lazy(() => TargetSpec$.outboundSchema).optional(),
    });
}
