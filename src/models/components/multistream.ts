/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Target, Target$ } from "./target";
import * as z from "zod";

export type Multistream = {
    /**
     * References to targets where this stream will be simultaneously
     *
     * @remarks
     * streamed to
     *
     */
    targets?: Array<Target> | undefined;
};

/** @internal */
export namespace Multistream$ {
    export const inboundSchema: z.ZodType<Multistream, z.ZodTypeDef, unknown> = z.object({
        targets: z.array(Target$.inboundSchema).optional(),
    });

    export type Outbound = {
        targets?: Array<Target$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Multistream> = z.object({
        targets: z.array(Target$.outboundSchema).optional(),
    });
}
