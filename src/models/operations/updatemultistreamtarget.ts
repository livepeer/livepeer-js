/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as errors from "../errors";
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
export namespace UpdateMultistreamTargetRequest$ {
    export const inboundSchema: z.ZodType<UpdateMultistreamTargetRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            "multistream-target-patch-payload":
                components.MultistreamTargetPatchPayload$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "multistream-target-patch-payload": "multistreamTargetPatchPayload",
            });
        });

    export type Outbound = {
        id: string;
        "multistream-target-patch-payload": components.MultistreamTargetPatchPayload$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateMultistreamTargetRequest> =
        z
            .object({
                id: z.string(),
                multistreamTargetPatchPayload:
                    components.MultistreamTargetPatchPayload$.outboundSchema,
            })
            .transform((v) => {
                return remap$(v, {
                    multistreamTargetPatchPayload: "multistream-target-patch-payload",
                });
            });
}

/** @internal */
export namespace UpdateMultistreamTargetResponse$ {
    export const inboundSchema: z.ZodType<UpdateMultistreamTargetResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
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
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateMultistreamTargetResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
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
