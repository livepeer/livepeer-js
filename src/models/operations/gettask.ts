/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetTaskRequest = {
    /**
     * ID of the task
     */
    taskId: string;
};

export type GetTaskResponse = {
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
};

/** @internal */
export namespace GetTaskRequest$ {
    export const inboundSchema: z.ZodType<GetTaskRequest, z.ZodTypeDef, unknown> = z.object({
        taskId: z.string(),
    });

    export type Outbound = {
        taskId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTaskRequest> = z.object({
        taskId: z.string(),
    });
}

/** @internal */
export namespace GetTaskResponse$ {
    export const inboundSchema: z.ZodType<GetTaskResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            task: components.Task$.inboundSchema.optional(),
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
        task?: components.Task$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTaskResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            task: components.Task$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                contentType: "ContentType",
                statusCode: "StatusCode",
                rawResponse: "RawResponse",
            });
        });
}
