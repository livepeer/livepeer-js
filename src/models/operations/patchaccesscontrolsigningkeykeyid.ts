/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as errors from "../../models/errors";
import { z } from "zod";

export type PatchAccessControlSigningKeyKeyIdRequestBody = {
    disabled?: boolean | undefined;
    name?: string | undefined;
};

export type PatchAccessControlSigningKeyKeyIdRequest = {
    /**
     * ID of the signing key
     */
    keyId: string;
    requestBody: PatchAccessControlSigningKeyKeyIdRequestBody;
};

export type PatchAccessControlSigningKeyKeyIdResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace PatchAccessControlSigningKeyKeyIdRequestBody$ {
    export type Inbound = {
        disabled?: boolean | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        PatchAccessControlSigningKeyKeyIdRequestBody,
        z.ZodTypeDef,
        Inbound
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PatchAccessControlSigningKeyKeyIdRequestBody
    > = z
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
export namespace PatchAccessControlSigningKeyKeyIdRequest$ {
    export type Inbound = {
        keyId: string;
        RequestBody: PatchAccessControlSigningKeyKeyIdRequestBody$.Inbound;
    };

    export const inboundSchema: z.ZodType<
        PatchAccessControlSigningKeyKeyIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            keyId: z.string(),
            RequestBody: z.lazy(() => PatchAccessControlSigningKeyKeyIdRequestBody$.inboundSchema),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
                requestBody: v.RequestBody,
            };
        });

    export type Outbound = {
        keyId: string;
        RequestBody: PatchAccessControlSigningKeyKeyIdRequestBody$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PatchAccessControlSigningKeyKeyIdRequest
    > = z
        .object({
            keyId: z.string(),
            requestBody: z.lazy(() => PatchAccessControlSigningKeyKeyIdRequestBody$.outboundSchema),
        })
        .transform((v) => {
            return {
                keyId: v.keyId,
                RequestBody: v.requestBody,
            };
        });
}

/** @internal */
export namespace PatchAccessControlSigningKeyKeyIdResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        error?: errors.ErrorT$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        PatchAccessControlSigningKeyKeyIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PatchAccessControlSigningKeyKeyIdResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}
