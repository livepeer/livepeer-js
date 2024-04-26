/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Participants = {
    /**
     * participant ID
     */
    identity?: string | undefined;
    /**
     * user defined participant name
     */
    name?: string | undefined;
    /**
     * the time the participant joined
     */
    joinedAt?: number | undefined;
    /**
     * the time the participant left
     */
    leftAt?: number | undefined;
};

export type Room = {
    /**
     * room ID
     */
    id: string;
    /**
     * Timestamp (in milliseconds) at which the room was created
     */
    createdAt?: number | undefined;
    /**
     * Timestamp (in milliseconds) at which room was updated
     */
    updatedAt?: number | undefined;
    /**
     * internal ID for egress output
     */
    egressId?: string | undefined;
    participants: Record<string, Participants>;
};

/** @internal */
export namespace Participants$ {
    export type Inbound = {
        identity?: string | undefined;
        name?: string | undefined;
        joinedAt?: number | undefined;
        leftAt?: number | undefined;
    };

    export const inboundSchema: z.ZodType<Participants, z.ZodTypeDef, Inbound> = z
        .object({
            identity: z.string().optional(),
            name: z.string().optional(),
            joinedAt: z.number().int().optional(),
            leftAt: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.identity === undefined ? null : { identity: v.identity }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.joinedAt === undefined ? null : { joinedAt: v.joinedAt }),
                ...(v.leftAt === undefined ? null : { leftAt: v.leftAt }),
            };
        });

    export type Outbound = {
        identity?: string | undefined;
        name?: string | undefined;
        joinedAt?: number | undefined;
        leftAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Participants> = z
        .object({
            identity: z.string().optional(),
            name: z.string().optional(),
            joinedAt: z.number().int().optional(),
            leftAt: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.identity === undefined ? null : { identity: v.identity }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.joinedAt === undefined ? null : { joinedAt: v.joinedAt }),
                ...(v.leftAt === undefined ? null : { leftAt: v.leftAt }),
            };
        });
}

/** @internal */
export namespace Room$ {
    export type Inbound = {
        id: string;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        egressId?: string | undefined;
        participants: Record<string, Participants$.Inbound>;
    };

    export const inboundSchema: z.ZodType<Room, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            createdAt: z.number().optional(),
            updatedAt: z.number().optional(),
            egressId: z.string().optional(),
            participants: z.record(z.lazy(() => Participants$.inboundSchema)),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.egressId === undefined ? null : { egressId: v.egressId }),
                participants: v.participants,
            };
        });

    export type Outbound = {
        id: string;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        egressId?: string | undefined;
        participants: Record<string, Participants$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Room> = z
        .object({
            id: z.string(),
            createdAt: z.number().optional(),
            updatedAt: z.number().optional(),
            egressId: z.string().optional(),
            participants: z.record(z.lazy(() => Participants$.outboundSchema)),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.updatedAt === undefined ? null : { updatedAt: v.updatedAt }),
                ...(v.egressId === undefined ? null : { egressId: v.egressId }),
                participants: v.participants,
            };
        });
}