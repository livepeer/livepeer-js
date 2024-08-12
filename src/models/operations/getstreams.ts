/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";
import * as z from "zod";

export type GetStreamsRequest = {
    streamsonly?: string | undefined;
};

export type GetStreamsResponse = {
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
    data?: Array<components.Stream> | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export const GetStreamsRequest$inboundSchema: z.ZodType<GetStreamsRequest, z.ZodTypeDef, unknown> =
    z.object({
        streamsonly: z.string().optional(),
    });

/** @internal */
export type GetStreamsRequest$Outbound = {
    streamsonly?: string | undefined;
};

/** @internal */
export const GetStreamsRequest$outboundSchema: z.ZodType<
    GetStreamsRequest$Outbound,
    z.ZodTypeDef,
    GetStreamsRequest
> = z.object({
    streamsonly: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStreamsRequest$ {
    /** @deprecated use `GetStreamsRequest$inboundSchema` instead. */
    export const inboundSchema = GetStreamsRequest$inboundSchema;
    /** @deprecated use `GetStreamsRequest$outboundSchema` instead. */
    export const outboundSchema = GetStreamsRequest$outboundSchema;
    /** @deprecated use `GetStreamsRequest$Outbound` instead. */
    export type Outbound = GetStreamsRequest$Outbound;
}

/** @internal */
export const GetStreamsResponse$inboundSchema: z.ZodType<
    GetStreamsResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        data: z.array(components.Stream$inboundSchema).optional(),
        error: errors.ErrorT$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
        });
    });

/** @internal */
export type GetStreamsResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    data?: Array<components.Stream$Outbound> | undefined;
    error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetStreamsResponse$outboundSchema: z.ZodType<
    GetStreamsResponse$Outbound,
    z.ZodTypeDef,
    GetStreamsResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        data: z.array(components.Stream$outboundSchema).optional(),
        error: errors.ErrorT$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetStreamsResponse$ {
    /** @deprecated use `GetStreamsResponse$inboundSchema` instead. */
    export const inboundSchema = GetStreamsResponse$inboundSchema;
    /** @deprecated use `GetStreamsResponse$outboundSchema` instead. */
    export const outboundSchema = GetStreamsResponse$outboundSchema;
    /** @deprecated use `GetStreamsResponse$Outbound` instead. */
    export type Outbound = GetStreamsResponse$Outbound;
}
