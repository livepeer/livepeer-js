/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type StudioApiErrorData = {
  errors?: Array<string> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;
};

export class StudioApiError extends Error {
  errors?: Array<string> | undefined;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse?: Response | undefined;

  /** The original data that was passed to this error instance. */
  data$: StudioApiErrorData;

  constructor(err: StudioApiErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.errors != null) this.errors = err.errors;
    if (err.rawResponse != null) this.rawResponse = err.rawResponse;

    this.name = "StudioApiError";
  }
}

/** @internal */
export const StudioApiError$inboundSchema: z.ZodType<
  StudioApiError,
  z.ZodTypeDef,
  unknown
> = z.object({
  errors: z.array(z.string()).optional(),
  RawResponse: z.instanceof(Response).optional(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "RawResponse": "rawResponse",
    });

    return new StudioApiError(remapped);
  });

/** @internal */
export type StudioApiError$Outbound = {
  errors?: Array<string> | undefined;
  RawResponse?: never | undefined;
};

/** @internal */
export const StudioApiError$outboundSchema: z.ZodType<
  StudioApiError$Outbound,
  z.ZodTypeDef,
  StudioApiError
> = z.instanceof(StudioApiError)
  .transform(v => v.data$)
  .pipe(
    z.object({
      errors: z.array(z.string()).optional(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }).optional(),
    }).transform((v) => {
      return remap$(v, {
        rawResponse: "RawResponse",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StudioApiError$ {
  /** @deprecated use `StudioApiError$inboundSchema` instead. */
  export const inboundSchema = StudioApiError$inboundSchema;
  /** @deprecated use `StudioApiError$outboundSchema` instead. */
  export const outboundSchema = StudioApiError$outboundSchema;
  /** @deprecated use `StudioApiError$Outbound` instead. */
  export type Outbound = StudioApiError$Outbound;
}
