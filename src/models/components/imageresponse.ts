/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Media,
  Media$inboundSchema,
  Media$Outbound,
  Media$outboundSchema,
} from "./media.js";

/**
 * Response model for image generation.
 */
export type ImageResponse = {
  /**
   * The generated images.
   */
  images: Array<Media>;
};

/** @internal */
export const ImageResponse$inboundSchema: z.ZodType<
  ImageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  images: z.array(Media$inboundSchema),
});

/** @internal */
export type ImageResponse$Outbound = {
  images: Array<Media$Outbound>;
};

/** @internal */
export const ImageResponse$outboundSchema: z.ZodType<
  ImageResponse$Outbound,
  z.ZodTypeDef,
  ImageResponse
> = z.object({
  images: z.array(Media$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ImageResponse$ {
  /** @deprecated use `ImageResponse$inboundSchema` instead. */
  export const inboundSchema = ImageResponse$inboundSchema;
  /** @deprecated use `ImageResponse$outboundSchema` instead. */
  export const outboundSchema = ImageResponse$outboundSchema;
  /** @deprecated use `ImageResponse$Outbound` instead. */
  export type Outbound = ImageResponse$Outbound;
}
