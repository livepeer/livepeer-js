/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetRoomUserResponse = {
    /**
     * The ID of the user
     */
    id?: string | undefined;
    /**
     * Timestamp (in milliseconds) at which the user joined
     */
    joinedAt?: number | undefined;
    /**
     * The display name of the user
     */
    name?: string | undefined;
    /**
     * Whether a user is allowed to publish audio/video tracks
     */
    isPublisher?: boolean | undefined;
    /**
     * User defined payload to store for the participant
     */
    metadata?: string | undefined;
};

/** @internal */
export namespace GetRoomUserResponse$ {
    export type Inbound = {
        id?: string | undefined;
        joinedAt?: number | undefined;
        name?: string | undefined;
        isPublisher?: boolean | undefined;
        metadata?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetRoomUserResponse, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
            joinedAt: z.number().int().optional(),
            name: z.string().optional(),
            isPublisher: z.boolean().default(true),
            metadata: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.joinedAt === undefined ? null : { joinedAt: v.joinedAt }),
                ...(v.name === undefined ? null : { name: v.name }),
                isPublisher: v.isPublisher,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
        joinedAt?: number | undefined;
        name?: string | undefined;
        isPublisher: boolean;
        metadata?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRoomUserResponse> = z
        .object({
            id: z.string().optional(),
            joinedAt: z.number().int().optional(),
            name: z.string().optional(),
            isPublisher: z.boolean().default(true),
            metadata: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.joinedAt === undefined ? null : { joinedAt: v.joinedAt }),
                ...(v.name === undefined ? null : { name: v.name }),
                isPublisher: v.isPublisher,
                ...(v.metadata === undefined ? null : { metadata: v.metadata }),
            };
        });
}
