/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as errors from "../../models/errors";
import { z } from "zod";

export type PatchStreamIdRequest = {
    /**
     * ID of the stream
     */
    id: string;
    streamPatchPayload: components.StreamPatchPayload;
};

export type PatchStreamIdResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace PatchStreamIdRequest$ {
    export type Inbound = {
        id: string;
        "stream-patch-payload": components.StreamPatchPayload$.Inbound;
    };

    export const inboundSchema: z.ZodType<PatchStreamIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
            "stream-patch-payload": components.StreamPatchPayload$.inboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                streamPatchPayload: v["stream-patch-payload"],
            };
        });

    export type Outbound = {
        id: string;
        "stream-patch-payload": components.StreamPatchPayload$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchStreamIdRequest> = z
        .object({
            id: z.string(),
            streamPatchPayload: components.StreamPatchPayload$.outboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                "stream-patch-payload": v.streamPatchPayload,
            };
        });
}

/** @internal */
export namespace PatchStreamIdResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        error?: errors.ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PatchStreamIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchStreamIdResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}
