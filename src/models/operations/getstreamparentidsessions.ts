/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as errors from "../../models/errors";
import { z } from "zod";

export type GetStreamParentIdSessionsRequest = {
    /**
     * ID of the parent stream
     */
    parentId: string;
    /**
     * Flag indicating if the response should only include recorded
     *
     * @remarks
     * sessions
     *
     */
    record?: number | undefined;
};

export type GetStreamParentIdSessionsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Success
     */
    sessions?: Array<components.Session> | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace GetStreamParentIdSessionsRequest$ {
    export type Inbound = {
        parentId: string;
        record?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetStreamParentIdSessionsRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                parentId: z.string(),
                record: z.number().int().optional(),
            })
            .transform((v) => {
                return {
                    parentId: v.parentId,
                    ...(v.record === undefined ? null : { record: v.record }),
                };
            });

    export type Outbound = {
        parentId: string;
        record?: number | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetStreamParentIdSessionsRequest
    > = z
        .object({
            parentId: z.string(),
            record: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                parentId: v.parentId,
                ...(v.record === undefined ? null : { record: v.record }),
            };
        });
}

/** @internal */
export namespace GetStreamParentIdSessionsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        sessions?: Array<components.Session$.Inbound> | undefined;
        error?: errors.ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetStreamParentIdSessionsResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            sessions: z.array(components.Session$.inboundSchema).optional(),
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.sessions === undefined ? null : { sessions: v.sessions }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        sessions?: Array<components.Session$.Outbound> | undefined;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetStreamParentIdSessionsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            sessions: z.array(components.Session$.outboundSchema).optional(),
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.sessions === undefined ? null : { sessions: v.sessions }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}
