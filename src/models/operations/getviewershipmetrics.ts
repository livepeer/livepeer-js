/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as errors from "../errors";
import * as z from "zod";

/**
 * Start timestamp for the query range (inclusive)
 */
export type From = Date | number;

/**
 * End timestamp for the query range (exclusive)
 */
export type To = Date | number;

/**
 * The time step to aggregate viewership metrics by
 */
export enum TimeStep {
    Hour = "hour",
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
}

export enum BreakdownBy {
    PlaybackId = "playbackId",
    DeviceType = "deviceType",
    Device = "device",
    Cpu = "cpu",
    Os = "os",
    Browser = "browser",
    BrowserEngine = "browserEngine",
    Continent = "continent",
    Country = "country",
    Subdivision = "subdivision",
    Timezone = "timezone",
    Geohash = "geohash",
    ViewerId = "viewerId",
    CreatorId = "creatorId",
}

export type GetViewershipMetricsRequest = {
    /**
     * The playback ID to filter the query results. This can be a canonical
     *
     * @remarks
     * playback ID from Livepeer assets or streams, or dStorage identifiers
     * for assets
     *
     */
    playbackId?: string | undefined;
    /**
     * Start timestamp for the query range (inclusive)
     */
    from?: Date | number | undefined;
    /**
     * End timestamp for the query range (exclusive)
     */
    to?: Date | number | undefined;
    /**
     * The time step to aggregate viewership metrics by
     */
    timeStep?: TimeStep | undefined;
    /**
     * The asset ID to filter metrics for
     */
    assetId?: string | undefined;
    /**
     * The stream ID to filter metrics for
     */
    streamId?: string | undefined;
    /**
     * The creator ID to filter the query results
     */
    creatorId?: string | undefined;
    /**
     * The list of fields to break down the query results. Specify this
     *
     * @remarks
     * query-string multiple times to break down by multiple fields.
     *
     */
    breakdownBy?: Array<BreakdownBy> | undefined;
};

export type GetViewershipMetricsResponse = {
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
     * A list of Metric objects
     */
    data?: Array<components.ViewershipMetric> | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace From$ {
    export type Inbound = string | number;

    export type Outbound = string | number;
    export const inboundSchema: z.ZodType<From, z.ZodTypeDef, Inbound> = z.union([
        z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        z.number().int(),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, From> = z.union([
        z.date().transform((v) => v.toISOString()),
        z.number().int(),
    ]);
}

/** @internal */
export namespace To$ {
    export type Inbound = string | number;

    export type Outbound = string | number;
    export const inboundSchema: z.ZodType<To, z.ZodTypeDef, Inbound> = z.union([
        z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        z.number().int(),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, To> = z.union([
        z.date().transform((v) => v.toISOString()),
        z.number().int(),
    ]);
}

/** @internal */
export const TimeStep$: z.ZodNativeEnum<typeof TimeStep> = z.nativeEnum(TimeStep);

/** @internal */
export const BreakdownBy$: z.ZodNativeEnum<typeof BreakdownBy> = z.nativeEnum(BreakdownBy);

/** @internal */
export namespace GetViewershipMetricsRequest$ {
    export type Inbound = {
        playbackId?: string | undefined;
        from?: string | number | undefined;
        to?: string | number | undefined;
        timeStep?: TimeStep | undefined;
        assetId?: string | undefined;
        streamId?: string | undefined;
        creatorId?: string | undefined;
        "breakdownBy[]"?: Array<BreakdownBy> | undefined;
    };

    export const inboundSchema: z.ZodType<GetViewershipMetricsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            playbackId: z.string().optional(),
            from: z
                .union([
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v)),
                    z.number().int(),
                ])
                .optional(),
            to: z
                .union([
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v)),
                    z.number().int(),
                ])
                .optional(),
            timeStep: TimeStep$.optional(),
            assetId: z.string().optional(),
            streamId: z.string().optional(),
            creatorId: z.string().optional(),
            "breakdownBy[]": z.array(BreakdownBy$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.playbackId === undefined ? null : { playbackId: v.playbackId }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.to === undefined ? null : { to: v.to }),
                ...(v.timeStep === undefined ? null : { timeStep: v.timeStep }),
                ...(v.assetId === undefined ? null : { assetId: v.assetId }),
                ...(v.streamId === undefined ? null : { streamId: v.streamId }),
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v["breakdownBy[]"] === undefined ? null : { breakdownBy: v["breakdownBy[]"] }),
            };
        });

    export type Outbound = {
        playbackId?: string | undefined;
        from?: string | number | undefined;
        to?: string | number | undefined;
        timeStep?: TimeStep | undefined;
        assetId?: string | undefined;
        streamId?: string | undefined;
        creatorId?: string | undefined;
        "breakdownBy[]"?: Array<BreakdownBy> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetViewershipMetricsRequest> = z
        .object({
            playbackId: z.string().optional(),
            from: z
                .union([z.date().transform((v) => v.toISOString()), z.number().int()])
                .optional(),
            to: z.union([z.date().transform((v) => v.toISOString()), z.number().int()]).optional(),
            timeStep: TimeStep$.optional(),
            assetId: z.string().optional(),
            streamId: z.string().optional(),
            creatorId: z.string().optional(),
            breakdownBy: z.array(BreakdownBy$).optional(),
        })
        .transform((v) => {
            return {
                ...(v.playbackId === undefined ? null : { playbackId: v.playbackId }),
                ...(v.from === undefined ? null : { from: v.from }),
                ...(v.to === undefined ? null : { to: v.to }),
                ...(v.timeStep === undefined ? null : { timeStep: v.timeStep }),
                ...(v.assetId === undefined ? null : { assetId: v.assetId }),
                ...(v.streamId === undefined ? null : { streamId: v.streamId }),
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v.breakdownBy === undefined ? null : { "breakdownBy[]": v.breakdownBy }),
            };
        });
}

/** @internal */
export namespace GetViewershipMetricsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        data?: Array<components.ViewershipMetric$.Inbound> | undefined;
        error?: errors.ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetViewershipMetricsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            data: z.array(components.ViewershipMetric$.inboundSchema).optional(),
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
        data?: Array<components.ViewershipMetric$.Outbound> | undefined;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetViewershipMetricsResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            data: z.array(components.ViewershipMetric$.outboundSchema).optional(),
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
