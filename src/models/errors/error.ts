/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
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
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;

    this.name = "ErrorT";
  }
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    errors: z.array(z.string()).optional(),
  })
  .transform((v) => {
    return new ErrorT(v);
  });

/** @internal */
export type ErrorT$Outbound = {
  errors?: Array<string> | undefined;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.instanceof(ErrorT)
  .transform(v => v.data$)
  .pipe(z.object({
    errors: z.array(z.string()).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}
