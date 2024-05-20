/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RoomEgressPayload = {
    /**
     * The ID of the Livepeer Stream to stream to
     */
    streamId: string;
};

/** @internal */
export namespace RoomEgressPayload$ {
    export const inboundSchema: z.ZodType<RoomEgressPayload, z.ZodTypeDef, unknown> = z
        .object({
            streamId: z.string(),
        })
        .transform((v) => {
            return {
                streamId: v.streamId,
            };
        });

    export type Outbound = {
        streamId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RoomEgressPayload> = z
        .object({
            streamId: z.string(),
        })
        .transform((v) => {
            return {
                streamId: v.streamId,
            };
        });
}
