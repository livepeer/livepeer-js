/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as errors from "../errors";
import * as z from "zod";

export type UpdateSigningKeyRequestBody = {
    disabled?: boolean | undefined;
    name?: string | undefined;
};

export type UpdateSigningKeyRequest = {
    /**
     * ID of the signing key
     */
    keyId: string;
    requestBody: UpdateSigningKeyRequestBody;
};

export type UpdateSigningKeyResponse = {
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
export namespace UpdateSigningKeyRequestBody$ {
    export const inboundSchema: z.ZodType<UpdateSigningKeyRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            disabled: z.boolean().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.disabled === undefined ? null : { disabled: v.disabled }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        disabled?: boolean | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSigningKeyRequestBody> = z
        .object({
            disabled: z.boolean().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.disabled === undefined ? null : { disabled: v.disabled }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}

/** @internal */
export namespace UpdateSigningKeyRequest$ {
    export const inboundSchema: z.ZodType<UpdateSigningKeyRequest, z.ZodTypeDef, unknown> = z
        .object({
            keyId: z.string(),
            RequestBody: z.lazy(() => UpdateSigningKeyRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
                requestBody: v.RequestBody,
            };
        });

    export type Outbound = {
        keyId: string;
        RequestBody: UpdateSigningKeyRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSigningKeyRequest> = z
        .object({
            keyId: z.string(),
            requestBody: z.lazy(() => UpdateSigningKeyRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
                RequestBody: v.requestBody,
            };
        });
}

/** @internal */
export namespace UpdateSigningKeyResponse$ {
    export const inboundSchema: z.ZodType<UpdateSigningKeyResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSigningKeyResponse> = z
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
