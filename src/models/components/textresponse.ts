/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Chunk,
  Chunk$inboundSchema,
  Chunk$Outbound,
  Chunk$outboundSchema,
} from "./chunk.js";

/**
 * Response model for text generation.
 */
export type TextResponse = {
  /**
   * The generated text.
   */
  text: string;
  /**
   * The generated text chunks.
   */
  chunks: Array<Chunk>;
};

/** @internal */
export const TextResponse$inboundSchema: z.ZodType<
  TextResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  text: z.string(),
  chunks: z.array(Chunk$inboundSchema),
});

/** @internal */
export type TextResponse$Outbound = {
  text: string;
  chunks: Array<Chunk$Outbound>;
};

/** @internal */
export const TextResponse$outboundSchema: z.ZodType<
  TextResponse$Outbound,
  z.ZodTypeDef,
  TextResponse
> = z.object({
  text: z.string(),
  chunks: z.array(Chunk$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TextResponse$ {
  /** @deprecated use `TextResponse$inboundSchema` instead. */
  export const inboundSchema = TextResponse$inboundSchema;
  /** @deprecated use `TextResponse$outboundSchema` instead. */
  export const outboundSchema = TextResponse$outboundSchema;
  /** @deprecated use `TextResponse$Outbound` instead. */
  export type Outbound = TextResponse$Outbound;
}
