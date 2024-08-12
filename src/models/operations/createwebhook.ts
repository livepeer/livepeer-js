/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";
import * as z from "zod";

export type CreateWebhookResponse = {
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
export const CreateWebhookResponse$inboundSchema: z.ZodType<
    CreateWebhookResponse,
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
export type CreateWebhookResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    webhook?: components.Webhook$Outbound | undefined;
    error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const CreateWebhookResponse$outboundSchema: z.ZodType<
    CreateWebhookResponse$Outbound,
    z.ZodTypeDef,
    CreateWebhookResponse
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
export namespace CreateWebhookResponse$ {
    /** @deprecated use `CreateWebhookResponse$inboundSchema` instead. */
    export const inboundSchema = CreateWebhookResponse$inboundSchema;
    /** @deprecated use `CreateWebhookResponse$outboundSchema` instead. */
    export const outboundSchema = CreateWebhookResponse$outboundSchema;
    /** @deprecated use `CreateWebhookResponse$Outbound` instead. */
    export type Outbound = CreateWebhookResponse$Outbound;
}
