/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IpfsFileInfo = {
  /**
   * CID of the file on IPFS
   */
  cid: string;
  /**
   * URL with IPFS scheme for the file
   */
  url?: string | undefined;
  /**
   * URL to access file via HTTP through an IPFS gateway
   */
  gatewayUrl?: string | undefined;
};

/** @internal */
export const IpfsFileInfo$inboundSchema: z.ZodType<
  IpfsFileInfo,
  z.ZodTypeDef,
  unknown
> = z.object({
  cid: z.string(),
  url: z.string().optional(),
  gatewayUrl: z.string().optional(),
});

/** @internal */
export type IpfsFileInfo$Outbound = {
  cid: string;
  url?: string | undefined;
  gatewayUrl?: string | undefined;
};

/** @internal */
export const IpfsFileInfo$outboundSchema: z.ZodType<
  IpfsFileInfo$Outbound,
  z.ZodTypeDef,
  IpfsFileInfo
> = z.object({
  cid: z.string(),
  url: z.string().optional(),
  gatewayUrl: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IpfsFileInfo$ {
  /** @deprecated use `IpfsFileInfo$inboundSchema` instead. */
  export const inboundSchema = IpfsFileInfo$inboundSchema;
  /** @deprecated use `IpfsFileInfo$outboundSchema` instead. */
  export const outboundSchema = IpfsFileInfo$outboundSchema;
  /** @deprecated use `IpfsFileInfo$Outbound` instead. */
  export type Outbound = IpfsFileInfo$Outbound;
}

export function ipfsFileInfoToJSON(ipfsFileInfo: IpfsFileInfo): string {
  return JSON.stringify(IpfsFileInfo$outboundSchema.parse(ipfsFileInfo));
}

export function ipfsFileInfoFromJSON(
  jsonString: string,
): SafeParseResult<IpfsFileInfo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IpfsFileInfo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IpfsFileInfo' from JSON`,
  );
}
