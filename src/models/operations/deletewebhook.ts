/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";
import * as z from "zod";

export type DeleteWebhookRequest = {
    id: string;
};

export type DeleteWebhookResponse = {
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
    webhook?: components.Webhook | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export const DeleteWebhookRequest$inboundSchema: z.ZodType<
    DeleteWebhookRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type DeleteWebhookRequest$Outbound = {
    id: string;
};

/** @internal */
export const DeleteWebhookRequest$outboundSchema: z.ZodType<
    DeleteWebhookRequest$Outbound,
    z.ZodTypeDef,
    DeleteWebhookRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteWebhookRequest$ {
    /** @deprecated use `DeleteWebhookRequest$inboundSchema` instead. */
    export const inboundSchema = DeleteWebhookRequest$inboundSchema;
    /** @deprecated use `DeleteWebhookRequest$outboundSchema` instead. */
    export const outboundSchema = DeleteWebhookRequest$outboundSchema;
    /** @deprecated use `DeleteWebhookRequest$Outbound` instead. */
    export type Outbound = DeleteWebhookRequest$Outbound;
}

/** @internal */
export const DeleteWebhookResponse$inboundSchema: z.ZodType<
    DeleteWebhookResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        webhook: components.Webhook$inboundSchema.optional(),
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
export type DeleteWebhookResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    webhook?: components.Webhook$Outbound | undefined;
    error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const DeleteWebhookResponse$outboundSchema: z.ZodType<
    DeleteWebhookResponse$Outbound,
    z.ZodTypeDef,
    DeleteWebhookResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        webhook: components.Webhook$outboundSchema.optional(),
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
export namespace DeleteWebhookResponse$ {
    /** @deprecated use `DeleteWebhookResponse$inboundSchema` instead. */
    export const inboundSchema = DeleteWebhookResponse$inboundSchema;
    /** @deprecated use `DeleteWebhookResponse$outboundSchema` instead. */
    export const outboundSchema = DeleteWebhookResponse$outboundSchema;
    /** @deprecated use `DeleteWebhookResponse$Outbound` instead. */
    export type Outbound = DeleteWebhookResponse$Outbound;
}
