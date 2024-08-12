/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";
import * as z from "zod";

export type GetWebhookLogRequest = {
    id: string;
    logId: string;
};

export type GetWebhookLogResponse = {
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
    webhookLog?: components.WebhookLog | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export const GetWebhookLogRequest$inboundSchema: z.ZodType<
    GetWebhookLogRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
    logId: z.string(),
});

/** @internal */
export type GetWebhookLogRequest$Outbound = {
    id: string;
    logId: string;
};

/** @internal */
export const GetWebhookLogRequest$outboundSchema: z.ZodType<
    GetWebhookLogRequest$Outbound,
    z.ZodTypeDef,
    GetWebhookLogRequest
> = z.object({
    id: z.string(),
    logId: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhookLogRequest$ {
    /** @deprecated use `GetWebhookLogRequest$inboundSchema` instead. */
    export const inboundSchema = GetWebhookLogRequest$inboundSchema;
    /** @deprecated use `GetWebhookLogRequest$outboundSchema` instead. */
    export const outboundSchema = GetWebhookLogRequest$outboundSchema;
    /** @deprecated use `GetWebhookLogRequest$Outbound` instead. */
    export type Outbound = GetWebhookLogRequest$Outbound;
}

/** @internal */
export const GetWebhookLogResponse$inboundSchema: z.ZodType<
    GetWebhookLogResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        "webhook-log": components.WebhookLog$inboundSchema.optional(),
        error: errors.ErrorT$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            "webhook-log": "webhookLog",
        });
    });

/** @internal */
export type GetWebhookLogResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "webhook-log"?: components.WebhookLog$Outbound | undefined;
    error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const GetWebhookLogResponse$outboundSchema: z.ZodType<
    GetWebhookLogResponse$Outbound,
    z.ZodTypeDef,
    GetWebhookLogResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        webhookLog: components.WebhookLog$outboundSchema.optional(),
        error: errors.ErrorT$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            webhookLog: "webhook-log",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhookLogResponse$ {
    /** @deprecated use `GetWebhookLogResponse$inboundSchema` instead. */
    export const inboundSchema = GetWebhookLogResponse$inboundSchema;
    /** @deprecated use `GetWebhookLogResponse$outboundSchema` instead. */
    export const outboundSchema = GetWebhookLogResponse$outboundSchema;
    /** @deprecated use `GetWebhookLogResponse$Outbound` instead. */
    export type Outbound = GetWebhookLogResponse$Outbound;
}
