/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RoomUserResponse = {
    /**
     * The ID of the user
     */
    id?: string | undefined;
    /**
     * Joining URL - use this for Livepeer's default meeting app (see the multiparticipant streaming guide for more info).
     */
    joinUrl?: string | undefined;
    /**
     * Joining JWT - this can be used if you have a custom meeting app (see the multiparticipant streaming guide for more info).
     */
    token?: string | undefined;
};

/** @internal */
export namespace RoomUserResponse$ {
    export type Inbound = {
        id?: string | undefined;
        joinUrl?: string | undefined;
        token?: string | undefined;
    };

    export const inboundSchema: z.ZodType<RoomUserResponse, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            joinUrl: z.string().optional(),
            token: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.joinUrl === undefined ? null : { joinUrl: v.joinUrl }),
                ...(v.token === undefined ? null : { token: v.token }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        joinUrl?: string | undefined;
        token?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RoomUserResponse> = z
        .object({
            id: z.string().optional(),
            joinUrl: z.string().optional(),
            token: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.joinUrl === undefined ? null : { joinUrl: v.joinUrl }),
                ...(v.token === undefined ? null : { token: v.token }),
            };
        });
}
