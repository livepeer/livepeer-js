/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Name of the NFT metadata template to export. 'player'
 *
 * @remarks
 * will embed the Livepeer Player on the NFT while 'file'
 * will reference only the immutable MP4 files.
 *
 */
export enum NftMetadataTemplate {
    File = "file",
    Player = "player",
}

/**
 * Additional data to add to the NFT metadata exported to
 *
 * @remarks
 * IPFS. Will be deep merged with the default metadata
 * exported.
 *
 */
export type NftMetadata = {};

export type Spec = {
    /**
     * Name of the NFT metadata template to export. 'player'
     *
     * @remarks
     * will embed the Livepeer Player on the NFT while 'file'
     * will reference only the immutable MP4 files.
     *
     */
    nftMetadataTemplate?: NftMetadataTemplate | undefined;
    /**
     * Additional data to add to the NFT metadata exported to
     *
     * @remarks
     * IPFS. Will be deep merged with the default metadata
     * exported.
     *
     */
    nftMetadata?: NftMetadata | undefined;
};

/** @internal */
export const NftMetadataTemplate$inboundSchema: z.ZodNativeEnum<typeof NftMetadataTemplate> =
    z.nativeEnum(NftMetadataTemplate);

/** @internal */
export const NftMetadataTemplate$outboundSchema: z.ZodNativeEnum<typeof NftMetadataTemplate> =
    NftMetadataTemplate$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NftMetadataTemplate$ {
    /** @deprecated use `NftMetadataTemplate$inboundSchema` instead. */
    export const inboundSchema = NftMetadataTemplate$inboundSchema;
    /** @deprecated use `NftMetadataTemplate$outboundSchema` instead. */
    export const outboundSchema = NftMetadataTemplate$outboundSchema;
}

/** @internal */
export const NftMetadata$inboundSchema: z.ZodType<NftMetadata, z.ZodTypeDef, unknown> = z.object(
    {}
);

/** @internal */
export type NftMetadata$Outbound = {};

/** @internal */
export const NftMetadata$outboundSchema: z.ZodType<
    NftMetadata$Outbound,
    z.ZodTypeDef,
    NftMetadata
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NftMetadata$ {
    /** @deprecated use `NftMetadata$inboundSchema` instead. */
    export const inboundSchema = NftMetadata$inboundSchema;
    /** @deprecated use `NftMetadata$outboundSchema` instead. */
    export const outboundSchema = NftMetadata$outboundSchema;
    /** @deprecated use `NftMetadata$Outbound` instead. */
    export type Outbound = NftMetadata$Outbound;
}

/** @internal */
export const Spec$inboundSchema: z.ZodType<Spec, z.ZodTypeDef, unknown> = z.object({
    nftMetadataTemplate: NftMetadataTemplate$inboundSchema.default(NftMetadataTemplate.File),
    nftMetadata: z.lazy(() => NftMetadata$inboundSchema).optional(),
});

/** @internal */
export type Spec$Outbound = {
    nftMetadataTemplate: string;
    nftMetadata?: NftMetadata$Outbound | undefined;
};

/** @internal */
export const Spec$outboundSchema: z.ZodType<Spec$Outbound, z.ZodTypeDef, Spec> = z.object({
    nftMetadataTemplate: NftMetadataTemplate$outboundSchema.default(NftMetadataTemplate.File),
    nftMetadata: z.lazy(() => NftMetadata$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Spec$ {
    /** @deprecated use `Spec$inboundSchema` instead. */
    export const inboundSchema = Spec$inboundSchema;
    /** @deprecated use `Spec$outboundSchema` instead. */
    export const outboundSchema = Spec$outboundSchema;
    /** @deprecated use `Spec$Outbound` instead. */
    export type Outbound = Spec$Outbound;
}
