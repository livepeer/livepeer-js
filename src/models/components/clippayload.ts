/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ClipPayload = {
    /**
     * The playback ID of the stream or stream recording to clip. Asset playback IDs are not supported yet.
     */
    playbackId: string;
    /**
     * The start timestamp of the clip in Unix milliseconds. _See the ClipTrigger in the UI Kit for an example of how this is calculated (for HLS, it uses `Program Date-Time` tags, and for WebRTC, it uses the latency from server to client at stream startup)._
     */
    startTime: number;
    /**
     * The end timestamp of the clip in Unix milliseconds. _See the ClipTrigger in the UI Kit for an example of how this is calculated (for HLS, it uses `Program Date-Time` tags, and for WebRTC, it uses the latency from server to client at stream startup)._
     */
    endTime?: number | undefined;
    /**
     * The optional friendly name of the clip to create.
     */
    name?: string | undefined;
    /**
     * The optional session ID of the stream to clip. This can be used to clip _recordings_ - if it is not specified, it will clip the ongoing livestream.
     */
    sessionId?: string | undefined;
};

/** @internal */
export namespace ClipPayload$ {
    export const inboundSchema: z.ZodType<ClipPayload, z.ZodTypeDef, unknown> = z.object({
        playbackId: z.string(),
        startTime: z.number(),
        endTime: z.number().optional(),
        name: z.string().optional(),
        sessionId: z.string().optional(),
    });

    export type Outbound = {
        playbackId: string;
        startTime: number;
        endTime?: number | undefined;
        name?: string | undefined;
        sessionId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClipPayload> = z.object({
        playbackId: z.string(),
        startTime: z.number(),
        endTime: z.number().optional(),
        name: z.string().optional(),
        sessionId: z.string().optional(),
    });
}
