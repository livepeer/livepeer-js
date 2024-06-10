/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Request = {
    /**
     * URL used for the request
     */
    url?: string | undefined;
    /**
     * HTTP request method
     */
    method?: string | undefined;
    /**
     * HTTP request headers
     */
    headers?: { [k: string]: string } | undefined;
    /**
     * request body
     */
    body?: string | undefined;
};

export type Response = {
    /**
     * response body
     */
    body?: string | undefined;
    /**
     * HTTP status code
     */
    status?: number | undefined;
    /**
     * response status text
     */
    statusText?: string | undefined;
};

export type WebhookLog = {
    id: string;
    /**
     * ID of the webhook this request was made for
     */
    webhookId: string;
    /**
     * The event type that triggered the webhook request
     */
    event?: string | undefined;
    /**
     * Timestamp (in milliseconds) at which webhook request object was
     *
     * @remarks
     * created
     *
     */
    createdAt?: number | undefined;
    /**
     * The time taken (in seconds) to make the webhook request
     */
    duration?: number | undefined;
    /**
     * Whether the webhook request was successful
     */
    success?: boolean | undefined;
    request?: Request | undefined;
    response?: Response | undefined;
};

/** @internal */
export namespace Request$ {
    export const inboundSchema: z.ZodType<Request, z.ZodTypeDef, unknown> = z.object({
        url: z.string().optional(),
        method: z.string().optional(),
        headers: z.record(z.string()).optional(),
        body: z.string().optional(),
    });

    export type Outbound = {
        url?: string | undefined;
        method?: string | undefined;
        headers?: { [k: string]: string } | undefined;
        body?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Request> = z.object({
        url: z.string().optional(),
        method: z.string().optional(),
        headers: z.record(z.string()).optional(),
        body: z.string().optional(),
    });
}

/** @internal */
export namespace Response$ {
    export const inboundSchema: z.ZodType<Response, z.ZodTypeDef, unknown> = z.object({
        body: z.string().optional(),
        status: z.number().optional(),
        statusText: z.string().optional(),
    });

    export type Outbound = {
        body?: string | undefined;
        status?: number | undefined;
        statusText?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Response> = z.object({
        body: z.string().optional(),
        status: z.number().optional(),
        statusText: z.string().optional(),
    });
}

/** @internal */
export namespace WebhookLog$ {
    export const inboundSchema: z.ZodType<WebhookLog, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        webhookId: z.string(),
        event: z.string().optional(),
        createdAt: z.number().optional(),
        duration: z.number().optional(),
        success: z.boolean().optional(),
        request: z.lazy(() => Request$.inboundSchema).optional(),
        response: z.lazy(() => Response$.inboundSchema).optional(),
    });

    export type Outbound = {
        id: string;
        webhookId: string;
        event?: string | undefined;
        createdAt?: number | undefined;
        duration?: number | undefined;
        success?: boolean | undefined;
        request?: Request$.Outbound | undefined;
        response?: Response$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WebhookLog> = z.object({
        id: z.string(),
        webhookId: z.string(),
        event: z.string().optional(),
        createdAt: z.number().optional(),
        duration: z.number().optional(),
        success: z.boolean().optional(),
        request: z.lazy(() => Request$.outboundSchema).optional(),
        response: z.lazy(() => Response$.outboundSchema).optional(),
    });
}
