/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

/**
 * An individual metric about usage of a user.
 *
 * @remarks
 *
 */
export type UsageMetric = {
    /**
     * The user ID associated with the metric
     */
    userID?: string | undefined;
    /**
     * The creator ID associated with the metric
     */
    creatorID?: string | undefined;
    /**
     * Total minutes of delivery usage.
     */
    deliveryUsageMins?: number | undefined;
    /**
     * Total transcoded minutes.
     */
    totalUsageMins?: number | undefined;
    /**
     * Total minutes of storage usage.
     */
    storageUsageMins?: number | undefined;
};

/** @internal */
export namespace UsageMetric$ {
    export const inboundSchema: z.ZodType<UsageMetric, z.ZodTypeDef, unknown> = z
        .object({
            UserID: z.string().optional(),
            CreatorID: z.string().optional(),
            DeliveryUsageMins: z.number().optional(),
            TotalUsageMins: z.number().optional(),
            StorageUsageMins: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                UserID: "userID",
                CreatorID: "creatorID",
                DeliveryUsageMins: "deliveryUsageMins",
                TotalUsageMins: "totalUsageMins",
                StorageUsageMins: "storageUsageMins",
            });
        });

    export type Outbound = {
        UserID?: string | undefined;
        CreatorID?: string | undefined;
        DeliveryUsageMins?: number | undefined;
        TotalUsageMins?: number | undefined;
        StorageUsageMins?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UsageMetric> = z
        .object({
            userID: z.string().optional(),
            creatorID: z.string().optional(),
            deliveryUsageMins: z.number().optional(),
            totalUsageMins: z.number().optional(),
            storageUsageMins: z.number().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                userID: "UserID",
                creatorID: "CreatorID",
                deliveryUsageMins: "DeliveryUsageMins",
                totalUsageMins: "TotalUsageMins",
                storageUsageMins: "StorageUsageMins",
            });
        });
}
