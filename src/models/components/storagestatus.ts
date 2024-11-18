/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Phase of the asset storage
 */
export enum Phase {
  Waiting = "waiting",
  Processing = "processing",
  Ready = "ready",
  Failed = "failed",
  Reverted = "reverted",
}

export type Tasks = {
  /**
   * ID of any currently running task that is exporting this
   *
   * @remarks
   * asset to IPFS.
   */
  pending?: string | undefined;
  /**
   * ID of the last task to run successfully, that created
   *
   * @remarks
   * the currently saved data.
   */
  last?: string | undefined;
  /**
   * ID of the last task to fail execution.
   */
  failed?: string | undefined;
};

export type StorageStatus = {
  /**
   * Phase of the asset storage
   */
  phase: Phase;
  /**
   * Current progress of the task updating the storage.
   */
  progress?: number | undefined;
  /**
   * Error message if the last storage changed failed.
   */
  errorMessage?: string | undefined;
  tasks: Tasks;
};

/** @internal */
export const Phase$inboundSchema: z.ZodNativeEnum<typeof Phase> = z.nativeEnum(
  Phase,
);

/** @internal */
export const Phase$outboundSchema: z.ZodNativeEnum<typeof Phase> =
  Phase$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Phase$ {
  /** @deprecated use `Phase$inboundSchema` instead. */
  export const inboundSchema = Phase$inboundSchema;
  /** @deprecated use `Phase$outboundSchema` instead. */
  export const outboundSchema = Phase$outboundSchema;
}

/** @internal */
export const Tasks$inboundSchema: z.ZodType<Tasks, z.ZodTypeDef, unknown> = z
  .object({
    pending: z.string().optional(),
    last: z.string().optional(),
    failed: z.string().optional(),
  });

/** @internal */
export type Tasks$Outbound = {
  pending?: string | undefined;
  last?: string | undefined;
  failed?: string | undefined;
};

/** @internal */
export const Tasks$outboundSchema: z.ZodType<
  Tasks$Outbound,
  z.ZodTypeDef,
  Tasks
> = z.object({
  pending: z.string().optional(),
  last: z.string().optional(),
  failed: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Tasks$ {
  /** @deprecated use `Tasks$inboundSchema` instead. */
  export const inboundSchema = Tasks$inboundSchema;
  /** @deprecated use `Tasks$outboundSchema` instead. */
  export const outboundSchema = Tasks$outboundSchema;
  /** @deprecated use `Tasks$Outbound` instead. */
  export type Outbound = Tasks$Outbound;
}

export function tasksToJSON(tasks: Tasks): string {
  return JSON.stringify(Tasks$outboundSchema.parse(tasks));
}

export function tasksFromJSON(
  jsonString: string,
): SafeParseResult<Tasks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Tasks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Tasks' from JSON`,
  );
}

/** @internal */
export const StorageStatus$inboundSchema: z.ZodType<
  StorageStatus,
  z.ZodTypeDef,
  unknown
> = z.object({
  phase: Phase$inboundSchema,
  progress: z.number().optional(),
  errorMessage: z.string().optional(),
  tasks: z.lazy(() => Tasks$inboundSchema),
});

/** @internal */
export type StorageStatus$Outbound = {
  phase: string;
  progress?: number | undefined;
  errorMessage?: string | undefined;
  tasks: Tasks$Outbound;
};

/** @internal */
export const StorageStatus$outboundSchema: z.ZodType<
  StorageStatus$Outbound,
  z.ZodTypeDef,
  StorageStatus
> = z.object({
  phase: Phase$outboundSchema,
  progress: z.number().optional(),
  errorMessage: z.string().optional(),
  tasks: z.lazy(() => Tasks$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StorageStatus$ {
  /** @deprecated use `StorageStatus$inboundSchema` instead. */
  export const inboundSchema = StorageStatus$inboundSchema;
  /** @deprecated use `StorageStatus$outboundSchema` instead. */
  export const outboundSchema = StorageStatus$outboundSchema;
  /** @deprecated use `StorageStatus$Outbound` instead. */
  export type Outbound = StorageStatus$Outbound;
}

export function storageStatusToJSON(storageStatus: StorageStatus): string {
  return JSON.stringify(StorageStatus$outboundSchema.parse(storageStatus));
}

export function storageStatusFromJSON(
  jsonString: string,
): SafeParseResult<StorageStatus, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StorageStatus$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StorageStatus' from JSON`,
  );
}
