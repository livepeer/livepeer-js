/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type Participants = {
  /**
   * participant ID
   */
  identity?: string | undefined;
  /**
   * user defined participant name
   */
  name?: string | undefined;
  /**
   * the time the participant joined
   */
  joinedAt?: number | undefined;
  /**
   * the time the participant left
   */
  leftAt?: number | undefined;
};

export type Room = {
  /**
   * room ID
   */
  id: string;
  /**
   * Timestamp (in milliseconds) at which the room was created
   */
  createdAt?: number | undefined;
  /**
   * Timestamp (in milliseconds) at which room was updated
   */
  updatedAt?: number | undefined;
  /**
   * internal ID for egress output
   */
  egressId?: string | undefined;
  participants: { [k: string]: Participants };
};

/** @internal */
export const Participants$inboundSchema: z.ZodType<
  Participants,
  z.ZodTypeDef,
  unknown
> = z.object({
  identity: z.string().optional(),
  name: z.string().optional(),
  joinedAt: z.number().int().optional(),
  leftAt: z.number().int().optional(),
});

/** @internal */
export type Participants$Outbound = {
  identity?: string | undefined;
  name?: string | undefined;
  joinedAt?: number | undefined;
  leftAt?: number | undefined;
};

/** @internal */
export const Participants$outboundSchema: z.ZodType<
  Participants$Outbound,
  z.ZodTypeDef,
  Participants
> = z.object({
  identity: z.string().optional(),
  name: z.string().optional(),
  joinedAt: z.number().int().optional(),
  leftAt: z.number().int().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Participants$ {
  /** @deprecated use `Participants$inboundSchema` instead. */
  export const inboundSchema = Participants$inboundSchema;
  /** @deprecated use `Participants$outboundSchema` instead. */
  export const outboundSchema = Participants$outboundSchema;
  /** @deprecated use `Participants$Outbound` instead. */
  export type Outbound = Participants$Outbound;
}

/** @internal */
export const Room$inboundSchema: z.ZodType<Room, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    egressId: z.string().optional(),
    participants: z.record(z.lazy(() => Participants$inboundSchema)),
  });

/** @internal */
export type Room$Outbound = {
  id: string;
  createdAt?: number | undefined;
  updatedAt?: number | undefined;
  egressId?: string | undefined;
  participants: { [k: string]: Participants$Outbound };
};

/** @internal */
export const Room$outboundSchema: z.ZodType<Room$Outbound, z.ZodTypeDef, Room> =
  z.object({
    id: z.string(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
    egressId: z.string().optional(),
    participants: z.record(z.lazy(() => Participants$outboundSchema)),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Room$ {
  /** @deprecated use `Room$inboundSchema` instead. */
  export const inboundSchema = Room$inboundSchema;
  /** @deprecated use `Room$outboundSchema` instead. */
  export const outboundSchema = Room$outboundSchema;
  /** @deprecated use `Room$Outbound` instead. */
  export type Outbound = Room$Outbound;
}
