/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";
import * as z from "zod";

export type UpdateAssetRequest = {
    /**
     * ID of the asset
     */
    assetId: string;
    assetPatchPayload: components.AssetPatchPayload;
};

export type UpdateAssetResponse = {
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
    asset?: components.Asset | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export const UpdateAssetRequest$inboundSchema: z.ZodType<
    UpdateAssetRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        assetId: z.string(),
        "asset-patch-payload": components.AssetPatchPayload$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            "asset-patch-payload": "assetPatchPayload",
        });
    });

/** @internal */
export type UpdateAssetRequest$Outbound = {
    assetId: string;
    "asset-patch-payload": components.AssetPatchPayload$Outbound;
};

/** @internal */
export const UpdateAssetRequest$outboundSchema: z.ZodType<
    UpdateAssetRequest$Outbound,
    z.ZodTypeDef,
    UpdateAssetRequest
> = z
    .object({
        assetId: z.string(),
        assetPatchPayload: components.AssetPatchPayload$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            assetPatchPayload: "asset-patch-payload",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateAssetRequest$ {
    /** @deprecated use `UpdateAssetRequest$inboundSchema` instead. */
    export const inboundSchema = UpdateAssetRequest$inboundSchema;
    /** @deprecated use `UpdateAssetRequest$outboundSchema` instead. */
    export const outboundSchema = UpdateAssetRequest$outboundSchema;
    /** @deprecated use `UpdateAssetRequest$Outbound` instead. */
    export type Outbound = UpdateAssetRequest$Outbound;
}

/** @internal */
export const UpdateAssetResponse$inboundSchema: z.ZodType<
    UpdateAssetResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        asset: components.Asset$inboundSchema.optional(),
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
export type UpdateAssetResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    asset?: components.Asset$Outbound | undefined;
    error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const UpdateAssetResponse$outboundSchema: z.ZodType<
    UpdateAssetResponse$Outbound,
    z.ZodTypeDef,
    UpdateAssetResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        asset: components.Asset$outboundSchema.optional(),
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
export namespace UpdateAssetResponse$ {
    /** @deprecated use `UpdateAssetResponse$inboundSchema` instead. */
    export const inboundSchema = UpdateAssetResponse$inboundSchema;
    /** @deprecated use `UpdateAssetResponse$outboundSchema` instead. */
    export const outboundSchema = UpdateAssetResponse$outboundSchema;
    /** @deprecated use `UpdateAssetResponse$Outbound` instead. */
    export type Outbound = UpdateAssetResponse$Outbound;
}
