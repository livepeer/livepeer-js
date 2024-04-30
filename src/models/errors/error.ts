/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ErrorTData = {
    errors?: Array<string> | undefined;
};

export class ErrorT extends Error {
    errors?: Array<string> | undefined;

    /** The original data that was passed to this error instance. */
    data$: ErrorTData;

    constructor(err: ErrorTData) {
        super("");
        this.data$ = err;

        if (err.errors != null) {
            this.errors = err.errors;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "ErrorT";
    }
}

/** @internal */
export namespace ErrorT$ {
    export type Inbound = {
        errors?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, Inbound> = z
        .object({
            errors: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return new ErrorT({
                ...(v.errors === undefined ? null : { errors: v.errors }),
            });
        });

    export type Outbound = {
        errors?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorT> = z
        .instanceof(ErrorT)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    errors: z.array(z.string()).optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.errors === undefined ? null : { errors: v.errors }),
                    };
                })
        );
}
