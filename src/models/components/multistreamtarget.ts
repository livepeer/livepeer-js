/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type MultistreamTarget = {
    id?: string | undefined;
    name?: string | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    userId?: string | undefined;
    /**
     * If true then this multistream target will not be used for pushing
     *
     * @remarks
     * even if it is configured in a stream object.
     *
     */
    disabled?: boolean | undefined;
    /**
     * Timestamp (in milliseconds) at which multistream target object was
     *
     * @remarks
     * created
     *
     */
    createdAt?: number | undefined;
};

/** @internal */
export namespace MultistreamTarget$ {
    export const inboundSchema: z.ZodType<MultistreamTarget, z.ZodTypeDef, unknown> = z.object({
        id: z.string().optional(),
        name: z.string().optional(),
        userId: z.string().optional(),
        disabled: z.boolean().optional(),
        createdAt: z.number().optional(),
    });

    export type Outbound = {
        id?: string | undefined;
        name?: string | undefined;
        userId?: string | undefined;
        disabled?: boolean | undefined;
        createdAt?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MultistreamTarget> = z.object({
        id: z.string().optional(),
        name: z.string().optional(),
        userId: z.string().optional(),
        disabled: z.boolean().optional(),
        createdAt: z.number().optional(),
    });
}
