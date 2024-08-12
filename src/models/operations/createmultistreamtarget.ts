/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";
import * as z from "zod";

export type CreateMultistreamTargetResponse = {
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
    multistreamTarget?: components.MultistreamTarget | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export const CreateMultistreamTargetResponse$inboundSchema: z.ZodType<
    CreateMultistreamTargetResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        "multistream-target": components.MultistreamTarget$inboundSchema.optional(),
        error: errors.ErrorT$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            ContentType: "contentType",
            StatusCode: "statusCode",
            RawResponse: "rawResponse",
            "multistream-target": "multistreamTarget",
        });
    });

/** @internal */
export type CreateMultistreamTargetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    "multistream-target"?: components.MultistreamTarget$Outbound | undefined;
    error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const CreateMultistreamTargetResponse$outboundSchema: z.ZodType<
    CreateMultistreamTargetResponse$Outbound,
    z.ZodTypeDef,
    CreateMultistreamTargetResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        multistreamTarget: components.MultistreamTarget$outboundSchema.optional(),
        error: errors.ErrorT$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            contentType: "ContentType",
            statusCode: "StatusCode",
            rawResponse: "RawResponse",
            multistreamTarget: "multistream-target",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateMultistreamTargetResponse$ {
    /** @deprecated use `CreateMultistreamTargetResponse$inboundSchema` instead. */
    export const inboundSchema = CreateMultistreamTargetResponse$inboundSchema;
    /** @deprecated use `CreateMultistreamTargetResponse$outboundSchema` instead. */
    export const outboundSchema = CreateMultistreamTargetResponse$outboundSchema;
    /** @deprecated use `CreateMultistreamTargetResponse$Outbound` instead. */
    export type Outbound = CreateMultistreamTargetResponse$Outbound;
}
