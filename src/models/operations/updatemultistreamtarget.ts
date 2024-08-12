/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";
import * as z from "zod";

export type UpdateMultistreamTargetRequest = {
    /**
     * ID of the multistream target
     */
    id: string;
    multistreamTargetPatchPayload: components.MultistreamTargetPatchPayload;
};

export type UpdateMultistreamTargetResponse = {
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
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export const UpdateMultistreamTargetRequest$inboundSchema: z.ZodType<
    UpdateMultistreamTargetRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        "multistream-target-patch-payload": components.MultistreamTargetPatchPayload$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "multistream-target-patch-payload": "multistreamTargetPatchPayload",
        });
    });

/** @internal */
export type UpdateMultistreamTargetRequest$Outbound = {
    id: string;
    "multistream-target-patch-payload": components.MultistreamTargetPatchPayload$Outbound;
};

/** @internal */
export const UpdateMultistreamTargetRequest$outboundSchema: z.ZodType<
    UpdateMultistreamTargetRequest$Outbound,
    z.ZodTypeDef,
    UpdateMultistreamTargetRequest
> = z
    .object({
        id: z.string(),
        multistreamTargetPatchPayload: components.MultistreamTargetPatchPayload$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            multistreamTargetPatchPayload: "multistream-target-patch-payload",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateMultistreamTargetRequest$ {
    /** @deprecated use `UpdateMultistreamTargetRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateMultistreamTargetRequest$inboundSchema;
    /** @deprecated use `UpdateMultistreamTargetRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateMultistreamTargetRequest$outboundSchema;
    /** @deprecated use `UpdateMultistreamTargetRequest$Outbound` instead. */
    export type Outbound = UpdateMultistreamTargetRequest$Outbound;
}

/** @internal */
export const UpdateMultistreamTargetResponse$inboundSchema: z.ZodType<
    UpdateMultistreamTargetResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
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
export type UpdateMultistreamTargetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const UpdateMultistreamTargetResponse$outboundSchema: z.ZodType<
    UpdateMultistreamTargetResponse$Outbound,
    z.ZodTypeDef,
    UpdateMultistreamTargetResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
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
export namespace UpdateMultistreamTargetResponse$ {
    /** @deprecated use `UpdateMultistreamTargetResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateMultistreamTargetResponse$inboundSchema;
    /** @deprecated use `UpdateMultistreamTargetResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateMultistreamTargetResponse$outboundSchema;
    /** @deprecated use `UpdateMultistreamTargetResponse$Outbound` instead. */
    export type Outbound = UpdateMultistreamTargetResponse$Outbound;
}
