/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
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
export namespace NftMetadataTemplate$ {
    export const inboundSchema = z.nativeEnum(NftMetadataTemplate);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace NftMetadata$ {
    export const inboundSchema: z.ZodType<NftMetadata, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NftMetadata> = z.object({});
}

/** @internal */
export namespace Spec$ {
    export const inboundSchema: z.ZodType<Spec, z.ZodTypeDef, unknown> = z
        .object({
            nftMetadataTemplate: NftMetadataTemplate$.inboundSchema.default(
                NftMetadataTemplate.File
            ),
            nftMetadata: z.lazy(() => NftMetadata$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                nftMetadataTemplate: v.nftMetadataTemplate,
                ...(v.nftMetadata === undefined ? null : { nftMetadata: v.nftMetadata }),
            };
        });

    export type Outbound = {
        nftMetadataTemplate: string;
        nftMetadata?: NftMetadata$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Spec> = z
        .object({
            nftMetadataTemplate: NftMetadataTemplate$.outboundSchema.default(
                NftMetadataTemplate.File
            ),
            nftMetadata: z.lazy(() => NftMetadata$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                nftMetadataTemplate: v.nftMetadataTemplate,
                ...(v.nftMetadata === undefined ? null : { nftMetadata: v.nftMetadata }),
            };
        });
}
