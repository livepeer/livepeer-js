/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as errors from "../errors";
import * as z from "zod";

export type TranscodeVideoResponse = {
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
    task?: components.Task | undefined;
    /**
     * Error
     */
    error?: errors.ErrorT | undefined;
};

/** @internal */
export namespace TranscodeVideoResponse$ {
    export const inboundSchema: z.ZodType<TranscodeVideoResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            task: components.Task$.inboundSchema.optional(),
            error: errors.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.task === undefined ? null : { task: v.task }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        task?: components.Task$.Outbound | undefined;
        error?: errors.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TranscodeVideoResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            task: components.Task$.outboundSchema.optional(),
            error: errors.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.task === undefined ? null : { task: v.task }),
                ...(v.error === undefined ? null : { error: v.error }),
            };
        });
}
