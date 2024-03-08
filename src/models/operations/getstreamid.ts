/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as errors from "../../models/errors";
import { z } from "zod";

export type GetStreamIdRequest = {
    /**
     * ID of the stream
     */
    id: string;
};

export type GetStreamIdResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    stream?: components.Stream | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace GetStreamIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<GetStreamIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetStreamIdRequest> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetStreamIdResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        stream?: components.Stream$.Inbound | undefined;
        error?: errors.ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetStreamIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            stream: components.Stream$.inboundSchema.optional(),
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.stream === undefined ? null : { stream: v.stream }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        stream?: components.Stream$.Outbound | undefined;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetStreamIdResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            stream: components.Stream$.outboundSchema.optional(),
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.stream === undefined ? null : { stream: v.stream }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}
