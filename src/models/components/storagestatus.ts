/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

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
     *
     */
    pending?: string | undefined;
    /**
     * ID of the last task to run successfully, that created
     *
     * @remarks
     * the currently saved data.
     *
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
export const Phase$: z.ZodNativeEnum<typeof Phase> = z.nativeEnum(Phase);

/** @internal */
export namespace Tasks$ {
    export type Inbound = {
        pending?: string | undefined;
        last?: string | undefined;
        failed?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Tasks, z.ZodTypeDef, Inbound> = z
        .object({
            pending: z.string().optional(),
            last: z.string().optional(),
            failed: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.pending === undefined ? null : { pending: v.pending }),
                ...(v.last === undefined ? null : { last: v.last }),
                ...(v.failed === undefined ? null : { failed: v.failed }),
            };
        });

    export type Outbound = {
        pending?: string | undefined;
        last?: string | undefined;
        failed?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Tasks> = z
        .object({
            pending: z.string().optional(),
            last: z.string().optional(),
            failed: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.pending === undefined ? null : { pending: v.pending }),
                ...(v.last === undefined ? null : { last: v.last }),
                ...(v.failed === undefined ? null : { failed: v.failed }),
            };
        });
}

/** @internal */
export namespace StorageStatus$ {
    export type Inbound = {
        phase: Phase;
        progress?: number | undefined;
        errorMessage?: string | undefined;
        tasks: Tasks$.Inbound;
    };

    export const inboundSchema: z.ZodType<StorageStatus, z.ZodTypeDef, Inbound> = z
        .object({
            phase: Phase$,
            progress: z.number().optional(),
            errorMessage: z.string().optional(),
            tasks: z.lazy(() => Tasks$.inboundSchema),
        })
        .transform((v) => {
            return {
                phase: v.phase,
                ...(v.progress === undefined ? null : { progress: v.progress }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                tasks: v.tasks,
            };
        });

    export type Outbound = {
        phase: Phase;
        progress?: number | undefined;
        errorMessage?: string | undefined;
        tasks: Tasks$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, StorageStatus> = z
        .object({
            phase: Phase$,
            progress: z.number().optional(),
            errorMessage: z.string().optional(),
            tasks: z.lazy(() => Tasks$.outboundSchema),
        })
        .transform((v) => {
            return {
                phase: v.phase,
                ...(v.progress === undefined ? null : { progress: v.progress }),
                ...(v.errorMessage === undefined ? null : { errorMessage: v.errorMessage }),
                tasks: v.tasks,
            };
        });
}
