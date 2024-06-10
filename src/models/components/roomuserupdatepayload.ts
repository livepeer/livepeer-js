/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RoomUserUpdatePayload = {
    /**
     * Whether a user is allowed to publish audio/video tracks (i.e. their microphone and webcam)
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
export namespace RoomUserUpdatePayload$ {
    export const inboundSchema: z.ZodType<RoomUserUpdatePayload, z.ZodTypeDef, unknown> = z.object({
        canPublish: z.boolean().default(true),
        canPublishData: z.boolean().default(true),
        metadata: z.string().optional(),
    });

    export type Outbound = {
        canPublish: boolean;
        canPublishData: boolean;
        metadata?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RoomUserUpdatePayload> =
        z.object({
            canPublish: z.boolean().default(true),
            canPublishData: z.boolean().default(true),
            metadata: z.string().optional(),
        });
}
