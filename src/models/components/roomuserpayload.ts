/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RoomUserPayload = {
    /**
     * Display name
     */
    name: string;
    /**
     * Whether a user is allowed to publish audio/video tracks
     */
    canPublish?: boolean | undefined;
    /**
     * Whether a user is allowed to publish data messages to the room
     */
    canPublishData?: boolean | undefined;
    /**
     * User defined payload to store for the participant
     */
    metadata?: string | undefined;
};

/** @internal */
export namespace RoomUserPayload$ {
    export const inboundSchema: z.ZodType<RoomUserPayload, z.ZodTypeDef, unknown> = z.object({
        name: z.string(),
        canPublish: z.boolean().optional(),
        canPublishData: z.boolean().optional(),
        metadata: z.string().optional(),
    });

    export type Outbound = {
        name: string;
        canPublish?: boolean | undefined;
        canPublishData?: boolean | undefined;
        metadata?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RoomUserPayload> = z.object({
        name: z.string(),
        canPublish: z.boolean().optional(),
        canPublishData: z.boolean().optional(),
        metadata: z.string().optional(),
    });
}
