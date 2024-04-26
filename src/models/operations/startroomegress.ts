/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as errors from "../errors";
import * as z from "zod";

export type StartRoomEgressRequest = {
    id: string;
    roomEgressPayload: components.RoomEgressPayload;
};

export type StartRoomEgressResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace StartRoomEgressRequest$ {
    export type Inbound = {
        id: string;
        "room-egress-payload": components.RoomEgressPayload$.Inbound;
    };

    export const inboundSchema: z.ZodType<StartRoomEgressRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            "room-egress-payload": components.RoomEgressPayload$.inboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                roomEgressPayload: v["room-egress-payload"],
            };
        });

    export type Outbound = {
        id: string;
        "room-egress-payload": components.RoomEgressPayload$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartRoomEgressRequest> = z
        .object({
            id: z.string(),
            roomEgressPayload: components.RoomEgressPayload$.outboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                "room-egress-payload": v.roomEgressPayload,
            };
        });
}

/** @internal */
export namespace StartRoomEgressResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        error?: errors.ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<StartRoomEgressResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StartRoomEgressResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}