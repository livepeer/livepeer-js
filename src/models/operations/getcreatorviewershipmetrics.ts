/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as errors from "../errors";
import * as z from "zod";

/**
 * Start timestamp for the query range (inclusive)
 */
export type QueryParamFrom = Date | number;

/**
 * End timestamp for the query range (exclusive)
 */
export type QueryParamTo = Date | number;

/**
 * The time step to aggregate viewership metrics by
 */
export enum QueryParamTimeStep {
    Hour = "hour",
    Day = "day",
    Week = "week",
    Month = "month",
    Year = "year",
}

export enum QueryParamBreakdownBy {
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
    ViewerId = "viewerId",
}

export type GetCreatorViewershipMetricsRequest = {
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
    timeStep?: QueryParamTimeStep | undefined;
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
    breakdownBy?: Array<QueryParamBreakdownBy> | undefined;
};

export type GetCreatorViewershipMetricsResponse = {
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
export namespace QueryParamFrom$ {
    export const inboundSchema: z.ZodType<QueryParamFrom, z.ZodTypeDef, unknown> = z.union([
        z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        z.number().int(),
    ]);

    export type Outbound = string | number;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueryParamFrom> = z.union([
        z.date().transform((v) => v.toISOString()),
        z.number().int(),
    ]);
}

/** @internal */
export namespace QueryParamTo$ {
    export const inboundSchema: z.ZodType<QueryParamTo, z.ZodTypeDef, unknown> = z.union([
        z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        z.number().int(),
    ]);

    export type Outbound = string | number;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueryParamTo> = z.union([
        z.date().transform((v) => v.toISOString()),
        z.number().int(),
    ]);
}

/** @internal */
export namespace QueryParamTimeStep$ {
    export const inboundSchema = z.nativeEnum(QueryParamTimeStep);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace QueryParamBreakdownBy$ {
    export const inboundSchema = z.nativeEnum(QueryParamBreakdownBy);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace GetCreatorViewershipMetricsRequest$ {
    export const inboundSchema: z.ZodType<
        GetCreatorViewershipMetricsRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
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
            timeStep: QueryParamTimeStep$.inboundSchema.optional(),
            assetId: z.string().optional(),
            streamId: z.string().optional(),
            creatorId: z.string().optional(),
            "breakdownBy[]": z.array(QueryParamBreakdownBy$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
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
        from?: string | number | undefined;
        to?: string | number | undefined;
        timeStep?: string | undefined;
        assetId?: string | undefined;
        streamId?: string | undefined;
        creatorId?: string | undefined;
        "breakdownBy[]"?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCreatorViewershipMetricsRequest
    > = z
        .object({
            from: z
                .union([z.date().transform((v) => v.toISOString()), z.number().int()])
                .optional(),
            to: z.union([z.date().transform((v) => v.toISOString()), z.number().int()]).optional(),
            timeStep: QueryParamTimeStep$.outboundSchema.optional(),
            assetId: z.string().optional(),
            streamId: z.string().optional(),
            creatorId: z.string().optional(),
            breakdownBy: z.array(QueryParamBreakdownBy$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
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
export namespace GetCreatorViewershipMetricsResponse$ {
    export const inboundSchema: z.ZodType<
        GetCreatorViewershipMetricsResponse,
        z.ZodTypeDef,
        unknown
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCreatorViewershipMetricsResponse
    > = z
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
