/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class Storage extends SpeakeasyBase {
    /**
     * Set to true to make default export to IPFS. To customize the
     *
     * @remarks
     * pinned files, specify an object with a spec field. False or null
     * means to unpin from IPFS, but it's unsupported right now.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ipfs" })
    ipfs?: any;
}
