/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum InputCreatorIdType {
    Unverified = "unverified",
}

export type One = {
    type: InputCreatorIdType;
    value: string;
};

export type InputCreatorId = One | string;

/** @internal */
export namespace InputCreatorIdType$ {
    export const inboundSchema = z.nativeEnum(InputCreatorIdType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace One$ {
    export const inboundSchema: z.ZodType<One, z.ZodTypeDef, unknown> = z
        .object({
            type: InputCreatorIdType$.inboundSchema,
            value: z.string(),
        })
        .transform((v) => {
            return {
                type: v.type,
                value: v.value,
            };
        });

    export type Outbound = {
        type: string;
        value: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, One> = z
        .object({
            type: InputCreatorIdType$.outboundSchema,
            value: z.string(),
        })
        .transform((v) => {
            return {
                type: v.type,
                value: v.value,
            };
        });
}

/** @internal */
export namespace InputCreatorId$ {
    export const inboundSchema: z.ZodType<InputCreatorId, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => One$.inboundSchema),
        z.string(),
    ]);

    export type Outbound = One$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InputCreatorId> = z.union([
        z.lazy(() => One$.outboundSchema),
        z.string(),
    ]);
}
