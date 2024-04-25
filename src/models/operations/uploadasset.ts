/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as errors from "../errors";
import * as z from "zod";

export type UploadAssetTask = {
    id?: string | undefined;
};

/**
 * Success
 */
export type UploadAssetData = {
    asset: components.Asset;
    task: UploadAssetTask;
};

export type UploadAssetResponse = {
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
    data?: UploadAssetData | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace UploadAssetTask$ {
    export type Inbound = {
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UploadAssetTask, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadAssetTask> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace UploadAssetData$ {
    export type Inbound = {
        asset: components.Asset$.Inbound;
        task: UploadAssetTask$.Inbound;
    };

    export const inboundSchema: z.ZodType<UploadAssetData, z.ZodTypeDef, Inbound> = z
        .object({
            asset: components.Asset$.inboundSchema,
            task: z.lazy(() => UploadAssetTask$.inboundSchema),
        })
        .transform((v) => {
            return {
                asset: v.asset,
                task: v.task,
            };
        });

    export type Outbound = {
        asset: components.Asset$.Outbound;
        task: UploadAssetTask$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadAssetData> = z
        .object({
            asset: components.Asset$.outboundSchema,
            task: z.lazy(() => UploadAssetTask$.outboundSchema),
        })
        .transform((v) => {
            return {
                asset: v.asset,
                task: v.task,
            };
        });
}

/** @internal */
export namespace UploadAssetResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        data?: UploadAssetData$.Inbound | undefined;
        error?: errors.ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UploadAssetResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            data: z.lazy(() => UploadAssetData$.inboundSchema).optional(),
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        data?: UploadAssetData$.Outbound | undefined;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadAssetResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            data: z.lazy(() => UploadAssetData$.outboundSchema).optional(),
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.data === undefined ? null : { data: v.data }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}
