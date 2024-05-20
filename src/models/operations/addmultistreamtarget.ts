/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as errors from "../errors";
import * as z from "zod";

export type AddMultistreamTargetRequest = {
    /**
     * ID of the parent stream
     */
    id: string;
    targetAddPayload: components.TargetAddPayload;
};

export type AddMultistreamTargetResponse = {
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
export namespace AddMultistreamTargetRequest$ {
    export const inboundSchema: z.ZodType<AddMultistreamTargetRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            "target-add-payload": components.TargetAddPayload$.inboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                targetAddPayload: v["target-add-payload"],
            };
        });

    export type Outbound = {
        id: string;
        "target-add-payload": components.TargetAddPayload$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddMultistreamTargetRequest> = z
        .object({
            id: z.string(),
            targetAddPayload: components.TargetAddPayload$.outboundSchema,
        })
        .transform((v) => {
            return {
                id: v.id,
                "target-add-payload": v.targetAddPayload,
            };
        });
}

/** @internal */
export namespace AddMultistreamTargetResponse$ {
    export const inboundSchema: z.ZodType<AddMultistreamTargetResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddMultistreamTargetResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}
