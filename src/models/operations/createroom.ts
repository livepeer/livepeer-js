/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as errors from "../errors";
import * as z from "zod";

export type CreateRoomResponse = {
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
     * Success
     */
    createRoomResponse?: components.CreateRoomResponse | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace CreateRoomResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        "create-room-response"?: components.CreateRoomResponse$.Inbound | undefined;
        error?: errors.ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<CreateRoomResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            "create-room-response": components.CreateRoomResponse$.inboundSchema.optional(),
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v["create-room-response"] === undefined
                    ? null
                    : { createRoomResponse: v["create-room-response"] }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        "create-room-response"?: components.CreateRoomResponse$.Outbound | undefined;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateRoomResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            createRoomResponse: components.CreateRoomResponse$.outboundSchema.optional(),
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.createRoomResponse === undefined
                    ? null
                    : { "create-room-response": v.createRoomResponse }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}
