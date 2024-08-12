/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as errors from "../errors/index.js";
import * as z from "zod";

export type CreateClipTask = {
    id?: string | undefined;
};

/**
 * Success
 */
export type CreateClipData = {
    asset: components.Asset;
    task: CreateClipTask;
};

export type CreateClipResponse = {
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
    data?: CreateClipData | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export const CreateClipTask$inboundSchema: z.ZodType<CreateClipTask, z.ZodTypeDef, unknown> =
    z.object({
        id: z.string().optional(),
    });

/** @internal */
export type CreateClipTask$Outbound = {
    id?: string | undefined;
};

/** @internal */
export const CreateClipTask$outboundSchema: z.ZodType<
    CreateClipTask$Outbound,
    z.ZodTypeDef,
    CreateClipTask
> = z.object({
    id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateClipTask$ {
    /** @deprecated use `CreateClipTask$inboundSchema` instead. */
    export const inboundSchema = CreateClipTask$inboundSchema;
    /** @deprecated use `CreateClipTask$outboundSchema` instead. */
    export const outboundSchema = CreateClipTask$outboundSchema;
    /** @deprecated use `CreateClipTask$Outbound` instead. */
    export type Outbound = CreateClipTask$Outbound;
}

/** @internal */
export const CreateClipData$inboundSchema: z.ZodType<CreateClipData, z.ZodTypeDef, unknown> =
    z.object({
        asset: components.Asset$inboundSchema,
        task: z.lazy(() => CreateClipTask$inboundSchema),
    });

/** @internal */
export type CreateClipData$Outbound = {
    asset: components.Asset$Outbound;
    task: CreateClipTask$Outbound;
};

/** @internal */
export const CreateClipData$outboundSchema: z.ZodType<
    CreateClipData$Outbound,
    z.ZodTypeDef,
    CreateClipData
> = z.object({
    asset: components.Asset$outboundSchema,
    task: z.lazy(() => CreateClipTask$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateClipData$ {
    /** @deprecated use `CreateClipData$inboundSchema` instead. */
    export const inboundSchema = CreateClipData$inboundSchema;
    /** @deprecated use `CreateClipData$outboundSchema` instead. */
    export const outboundSchema = CreateClipData$outboundSchema;
    /** @deprecated use `CreateClipData$Outbound` instead. */
    export type Outbound = CreateClipData$Outbound;
}

/** @internal */
export const CreateClipResponse$inboundSchema: z.ZodType<
    CreateClipResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        ContentType: z.string(),
        StatusCode: z.number().int(),
        RawResponse: z.instanceof(Response),
        data: z.lazy(() => CreateClipData$inboundSchema).optional(),
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
export type CreateClipResponse$Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    data?: CreateClipData$Outbound | undefined;
    error?: errors.ErrorT$Outbound | undefined;
};

/** @internal */
export const CreateClipResponse$outboundSchema: z.ZodType<
    CreateClipResponse$Outbound,
    z.ZodTypeDef,
    CreateClipResponse
> = z
    .object({
        contentType: z.string(),
        statusCode: z.number().int(),
        rawResponse: z.instanceof(Response).transform(() => {
            throw new Error("Response cannot be serialized");
        }),
        data: z.lazy(() => CreateClipData$outboundSchema).optional(),
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
export namespace CreateClipResponse$ {
    /** @deprecated use `CreateClipResponse$inboundSchema` instead. */
    export const inboundSchema = CreateClipResponse$inboundSchema;
    /** @deprecated use `CreateClipResponse$outboundSchema` instead. */
    export const outboundSchema = CreateClipResponse$outboundSchema;
    /** @deprecated use `CreateClipResponse$Outbound` instead. */
    export type Outbound = CreateClipResponse$Outbound;
}
