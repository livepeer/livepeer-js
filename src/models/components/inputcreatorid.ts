/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum InputCreatorIdType {
    Unverified = "unverified",
}

export type InputCreatorId1 = {
    type: InputCreatorIdType;
    value: string;
};

export type InputCreatorId = InputCreatorId1 | string;

/** @internal */
export namespace InputCreatorIdType$ {
    export const inboundSchema = z.nativeEnum(InputCreatorIdType);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace InputCreatorId1$ {
    export const inboundSchema: z.ZodType<InputCreatorId1, z.ZodTypeDef, unknown> = z.object({
        type: InputCreatorIdType$.inboundSchema,
        value: z.string(),
    });

    export type Outbound = {
        type: string;
        value: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InputCreatorId1> = z.object({
        type: InputCreatorIdType$.outboundSchema,
        value: z.string(),
    });
}

/** @internal */
export namespace InputCreatorId$ {
    export const inboundSchema: z.ZodType<InputCreatorId, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => InputCreatorId1$.inboundSchema),
        z.string(),
    ]);

    export type Outbound = InputCreatorId1$.Outbound | string;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, InputCreatorId> = z.union([
        z.lazy(() => InputCreatorId1$.outboundSchema),
        z.string(),
    ]);
}
