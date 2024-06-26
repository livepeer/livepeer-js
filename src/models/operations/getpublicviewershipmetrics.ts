/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as errors from "../errors";
import * as z from "zod";

export type GetPublicViewershipMetricsRequest = {
    /**
     * The playback ID to filter the query results. This can be a canonical
     *
     * @remarks
     * playback ID from Livepeer assets or streams, or dStorage identifiers
     * for assets
     *
     */
    playbackId: string;
};

/**
 * A simplified metric object about aggregate viewership of an
 *
 * @remarks
 * asset. Either playbackId or dStorageUrl will be set.
 *
 */
export type GetPublicViewershipMetricsData = {
    /**
     * The playback ID associated with the metric.
     */
    playbackId?: string | undefined;
    /**
     * The URL of the distributed storage used for the asset
     */
    dStorageUrl?: string | undefined;
    /**
     * The number of views for the asset.
     */
    viewCount?: number | undefined;
    /**
     * The total playtime in minutes for the asset.
     */
    playtimeMins?: number | undefined;
};

export type GetPublicViewershipMetricsResponse = {
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
     * A single Metric object with the viewCount and playtimeMins metrics.
     */
    data?: GetPublicViewershipMetricsData | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace GetPublicViewershipMetricsRequest$ {
    export const inboundSchema: z.ZodType<
        GetPublicViewershipMetricsRequest,
        z.ZodTypeDef,
        unknown
    > = z.object({
        playbackId: z.string(),
    });

    export type Outbound = {
        playbackId: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetPublicViewershipMetricsRequest
    > = z.object({
        playbackId: z.string(),
    });
}

/** @internal */
export namespace GetPublicViewershipMetricsData$ {
    export const inboundSchema: z.ZodType<GetPublicViewershipMetricsData, z.ZodTypeDef, unknown> =
        z.object({
            playbackId: z.string().optional(),
            dStorageUrl: z.string().optional(),
            viewCount: z.number().int().optional(),
            playtimeMins: z.number().optional(),
        });

    export type Outbound = {
        playbackId?: string | undefined;
        dStorageUrl?: string | undefined;
        viewCount?: number | undefined;
        playtimeMins?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPublicViewershipMetricsData> =
        z.object({
            playbackId: z.string().optional(),
            dStorageUrl: z.string().optional(),
            viewCount: z.number().int().optional(),
            playtimeMins: z.number().optional(),
        });
}

/** @internal */
export namespace GetPublicViewershipMetricsResponse$ {
    export const inboundSchema: z.ZodType<
        GetPublicViewershipMetricsResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            data: z.lazy(() => GetPublicViewershipMetricsData$.inboundSchema).optional(),
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                ContentType: "contentType",
                StatusCode: "statusCode",
                RawResponse: "rawResponse",
            });
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        data?: GetPublicViewershipMetricsData$.Outbound | undefined;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetPublicViewershipMetricsResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            data: z.lazy(() => GetPublicViewershipMetricsData$.outboundSchema).optional(),
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
