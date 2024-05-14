/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as errors from "../errors";
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
export namespace UpdateAssetRequest$ {
    export const inboundSchema: z.ZodType<UpdateAssetRequest, z.ZodTypeDef, unknown> = z
        .object({
            assetId: z.string(),
            "asset-patch-payload": components.AssetPatchPayload$.inboundSchema,
        })
        .transform((v) => {
            return {
                assetId: v.assetId,
                assetPatchPayload: v["asset-patch-payload"],
            };
        });

    export type Outbound = {
        assetId: string;
        "asset-patch-payload": components.AssetPatchPayload$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateAssetRequest> = z
        .object({
            assetId: z.string(),
            assetPatchPayload: components.AssetPatchPayload$.outboundSchema,
        })
        .transform((v) => {
            return {
                assetId: v.assetId,
                "asset-patch-payload": v.assetPatchPayload,
            };
        });
}

/** @internal */
export namespace UpdateAssetResponse$ {
    export const inboundSchema: z.ZodType<UpdateAssetResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            asset: components.Asset$.inboundSchema.optional(),
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.asset === undefined ? null : { asset: v.asset }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        asset?: components.Asset$.Outbound | undefined;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateAssetResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            asset: components.Asset$.outboundSchema.optional(),
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.asset === undefined ? null : { asset: v.asset }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}
