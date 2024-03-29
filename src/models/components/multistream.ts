/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Target } from "./target";
import { Expose, Type } from "class-transformer";

export class Multistream extends SpeakeasyBase {
    /**
     * References to targets where this stream will be simultaneously
     *
     * @remarks
     * streamed to
     *
     */
    @SpeakeasyMetadata({ elemType: Target })
    @Expose({ name: "targets" })
    @Type(() => Target)
    targets?: Target[];
}
