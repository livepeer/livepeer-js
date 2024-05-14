/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { InputCreatorId, InputCreatorId$ } from "./inputcreatorid";
import { TranscodeProfile, TranscodeProfile$ } from "./transcodeprofile";
import * as z from "zod";

/**
 * Type of service. This is optional and defaults to `url` if
 *
 * @remarks
 * ŚURL field is provided.
 *
 */
export enum TranscodePayloadType {
    S3 = "s3",
}

/**
 * Credentials for the private input video storage
 */
export type Credentials = {
    /**
     * Access Key ID
     */
    accessKeyId: string;
    /**
     * Secret Access Key
     */
    secretAccessKey: string;
};

/**
 * S3-like storage input video
 */
export type TranscodePayload2 = {
    /**
     * Type of service. This is optional and defaults to `url` if
     *
     * @remarks
     * ŚURL field is provided.
     *
     */
    type: TranscodePayloadType;
    /**
     * Service endpoint URL (AWS S3 endpoint list: https://docs.aws.amazon.com/general/latest/gr/s3.html, GCP S3 endpoint: https://storage.googleapis.com, Storj: https://gateway.storjshare.io)
     */
    endpoint: string;
    /**
     * Bucket with input file
     */
    bucket: string;
    /**
     * Path to the input file inside the bucket
     */
    path: string;
    /**
     * Credentials for the private input video storage
     */
    credentials: Credentials;
};

/**
 * URL input video
 */
export type TranscodePayload1 = {
    /**
     * URL of the video to transcode
     */
    url: string;
};

export type Input = TranscodePayload1 | TranscodePayload2;

/**
 * Type of service used for output files
 */
export enum TranscodePayloadSchemasStorageType {
    Web3Storage = "web3.storage",
}

/**
 * Delegation proof for Livepeer to be able to upload to
 *
 * @remarks
 * web3.storage
 *
 */
export type TranscodePayloadSchemasCredentials = {
    /**
     * Base64 encoded UCAN delegation proof
     */
    proof: string;
};

/**
 * Storage for the output files
 */
export type TranscodePayloadSchemas2 = {
    /**
     * Type of service used for output files
     */
    type: TranscodePayloadSchemasStorageType;
    /**
     * Delegation proof for Livepeer to be able to upload to
     *
     * @remarks
     * web3.storage
     *
     */
    credentials: TranscodePayloadSchemasCredentials;
};

/**
 * Type of service used for output files
 */
export enum TranscodePayloadSchemasType {
    S3 = "s3",
}

/**
 * Credentials for the output video storage
 */
export type TranscodePayloadCredentials = {
    /**
     * Access Key ID
     */
    accessKeyId: string;
    /**
     * Secret Access Key
     */
    secretAccessKey: string;
};

/**
 * Storage for the output files
 */
export type TranscodePayloadSchemas1 = {
    /**
     * Type of service used for output files
     */
    type: TranscodePayloadSchemasType;
    /**
     * Service endpoint URL (AWS S3 endpoint list: https://docs.aws.amazon.com/general/latest/gr/s3.html, GCP S3 endpoint: https://storage.googleapis.com, Storj: https://gateway.storjshare.io)
     */
    endpoint: string;
    /**
     * Bucket with output files
     */
    bucket: string;
    /**
     * Credentials for the output video storage
     */
    credentials: TranscodePayloadCredentials;
};

export type TranscodePayloadStorage = TranscodePayloadSchemas2 | TranscodePayloadSchemas1;

/**
 * HLS output format
 */
export type Hls = {
    /**
     * Path for the HLS output
     */
    path: string;
};

/**
 * MP4 output format
 */
export type Mp4 = {
    /**
     * Path for the MP4 output
     */
    path: string;
};

/**
 * FMP4 output format
 */
export type Fmp4 = {
    /**
     * Path for the FMP4 output
     */
    path: string;
};

/**
 * Output formats
 */
export type Outputs = {
    /**
     * HLS output format
     */
    hls?: Hls | undefined;
    /**
     * MP4 output format
     */
    mp4?: Mp4 | undefined;
    /**
     * FMP4 output format
     */
    fmp4?: Fmp4 | undefined;
};

export type TranscodePayload = {
    input: TranscodePayload1 | TranscodePayload2;
    storage: TranscodePayloadSchemas2 | TranscodePayloadSchemas1;
    /**
     * Output formats
     */
    outputs: Outputs;
    profiles?: Array<TranscodeProfile> | undefined;
    /**
     * How many seconds the duration of each output segment should be
     */
    targetSegmentSizeSecs?: number | undefined;
    creatorId?: InputCreatorId | undefined;
    /**
     * Decides if the output video should include C2PA signature
     */
    c2pa?: boolean | undefined;
};

/** @internal */
export const TranscodePayloadType$: z.ZodNativeEnum<typeof TranscodePayloadType> =
    z.nativeEnum(TranscodePayloadType);

/** @internal */
export namespace Credentials$ {
    export const inboundSchema: z.ZodType<Credentials, z.ZodTypeDef, unknown> = z
        .object({
            accessKeyId: z.string(),
            secretAccessKey: z.string(),
        })
        .transform((v) => {
            return {
                accessKeyId: v.accessKeyId,
                secretAccessKey: v.secretAccessKey,
            };
        });

    export type Outbound = {
        accessKeyId: string;
        secretAccessKey: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Credentials> = z
        .object({
            accessKeyId: z.string(),
            secretAccessKey: z.string(),
        })
        .transform((v) => {
            return {
                accessKeyId: v.accessKeyId,
                secretAccessKey: v.secretAccessKey,
            };
        });
}

/** @internal */
export namespace TranscodePayload2$ {
    export const inboundSchema: z.ZodType<TranscodePayload2, z.ZodTypeDef, unknown> = z
        .object({
            type: TranscodePayloadType$,
            endpoint: z.string(),
            bucket: z.string(),
            path: z.string(),
            credentials: z.lazy(() => Credentials$.inboundSchema),
        })
        .transform((v) => {
            return {
                type: v.type,
                endpoint: v.endpoint,
                bucket: v.bucket,
                path: v.path,
                credentials: v.credentials,
            };
        });

    export type Outbound = {
        type: TranscodePayloadType;
        endpoint: string;
        bucket: string;
        path: string;
        credentials: Credentials$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TranscodePayload2> = z
        .object({
            type: TranscodePayloadType$,
            endpoint: z.string(),
            bucket: z.string(),
            path: z.string(),
            credentials: z.lazy(() => Credentials$.outboundSchema),
        })
        .transform((v) => {
            return {
                type: v.type,
                endpoint: v.endpoint,
                bucket: v.bucket,
                path: v.path,
                credentials: v.credentials,
            };
        });
}

/** @internal */
export namespace TranscodePayload1$ {
    export const inboundSchema: z.ZodType<TranscodePayload1, z.ZodTypeDef, unknown> = z
        .object({
            url: z.string(),
        })
        .transform((v) => {
            return {
                url: v.url,
            };
        });

    export type Outbound = {
        url: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TranscodePayload1> = z
        .object({
            url: z.string(),
        })
        .transform((v) => {
            return {
                url: v.url,
            };
        });
}

/** @internal */
export namespace Input$ {
    export const inboundSchema: z.ZodType<Input, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => TranscodePayload1$.inboundSchema),
        z.lazy(() => TranscodePayload2$.inboundSchema),
    ]);

    export type Outbound = TranscodePayload1$.Outbound | TranscodePayload2$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Input> = z.union([
        z.lazy(() => TranscodePayload1$.outboundSchema),
        z.lazy(() => TranscodePayload2$.outboundSchema),
    ]);
}

/** @internal */
export const TranscodePayloadSchemasStorageType$: z.ZodNativeEnum<
    typeof TranscodePayloadSchemasStorageType
> = z.nativeEnum(TranscodePayloadSchemasStorageType);

/** @internal */
export namespace TranscodePayloadSchemasCredentials$ {
    export const inboundSchema: z.ZodType<
        TranscodePayloadSchemasCredentials,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            proof: z.string(),
        })
        .transform((v) => {
            return {
                proof: v.proof,
            };
        });

    export type Outbound = {
        proof: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        TranscodePayloadSchemasCredentials
    > = z
        .object({
            proof: z.string(),
        })
        .transform((v) => {
            return {
                proof: v.proof,
            };
        });
}

/** @internal */
export namespace TranscodePayloadSchemas2$ {
    export const inboundSchema: z.ZodType<TranscodePayloadSchemas2, z.ZodTypeDef, unknown> = z
        .object({
            type: TranscodePayloadSchemasStorageType$,
            credentials: z.lazy(() => TranscodePayloadSchemasCredentials$.inboundSchema),
        })
        .transform((v) => {
            return {
                type: v.type,
                credentials: v.credentials,
            };
        });

    export type Outbound = {
        type: TranscodePayloadSchemasStorageType;
        credentials: TranscodePayloadSchemasCredentials$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TranscodePayloadSchemas2> = z
        .object({
            type: TranscodePayloadSchemasStorageType$,
            credentials: z.lazy(() => TranscodePayloadSchemasCredentials$.outboundSchema),
        })
        .transform((v) => {
            return {
                type: v.type,
                credentials: v.credentials,
            };
        });
}

/** @internal */
export const TranscodePayloadSchemasType$: z.ZodNativeEnum<typeof TranscodePayloadSchemasType> =
    z.nativeEnum(TranscodePayloadSchemasType);

/** @internal */
export namespace TranscodePayloadCredentials$ {
    export const inboundSchema: z.ZodType<TranscodePayloadCredentials, z.ZodTypeDef, unknown> = z
        .object({
            accessKeyId: z.string(),
            secretAccessKey: z.string(),
        })
        .transform((v) => {
            return {
                accessKeyId: v.accessKeyId,
                secretAccessKey: v.secretAccessKey,
            };
        });

    export type Outbound = {
        accessKeyId: string;
        secretAccessKey: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TranscodePayloadCredentials> = z
        .object({
            accessKeyId: z.string(),
            secretAccessKey: z.string(),
        })
        .transform((v) => {
            return {
                accessKeyId: v.accessKeyId,
                secretAccessKey: v.secretAccessKey,
            };
        });
}

/** @internal */
export namespace TranscodePayloadSchemas1$ {
    export const inboundSchema: z.ZodType<TranscodePayloadSchemas1, z.ZodTypeDef, unknown> = z
        .object({
            type: TranscodePayloadSchemasType$,
            endpoint: z.string(),
            bucket: z.string(),
            credentials: z.lazy(() => TranscodePayloadCredentials$.inboundSchema),
        })
        .transform((v) => {
            return {
                type: v.type,
                endpoint: v.endpoint,
                bucket: v.bucket,
                credentials: v.credentials,
            };
        });

    export type Outbound = {
        type: TranscodePayloadSchemasType;
        endpoint: string;
        bucket: string;
        credentials: TranscodePayloadCredentials$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TranscodePayloadSchemas1> = z
        .object({
            type: TranscodePayloadSchemasType$,
            endpoint: z.string(),
            bucket: z.string(),
            credentials: z.lazy(() => TranscodePayloadCredentials$.outboundSchema),
        })
        .transform((v) => {
            return {
                type: v.type,
                endpoint: v.endpoint,
                bucket: v.bucket,
                credentials: v.credentials,
            };
        });
}

/** @internal */
export namespace TranscodePayloadStorage$ {
    export const inboundSchema: z.ZodType<TranscodePayloadStorage, z.ZodTypeDef, unknown> = z.union(
        [
            z.lazy(() => TranscodePayloadSchemas2$.inboundSchema),
            z.lazy(() => TranscodePayloadSchemas1$.inboundSchema),
        ]
    );

    export type Outbound = TranscodePayloadSchemas2$.Outbound | TranscodePayloadSchemas1$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TranscodePayloadStorage> =
        z.union([
            z.lazy(() => TranscodePayloadSchemas2$.outboundSchema),
            z.lazy(() => TranscodePayloadSchemas1$.outboundSchema),
        ]);
}

/** @internal */
export namespace Hls$ {
    export const inboundSchema: z.ZodType<Hls, z.ZodTypeDef, unknown> = z
        .object({
            path: z.string(),
        })
        .transform((v) => {
            return {
                path: v.path,
            };
        });

    export type Outbound = {
        path: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Hls> = z
        .object({
            path: z.string(),
        })
        .transform((v) => {
            return {
                path: v.path,
            };
        });
}

/** @internal */
export namespace Mp4$ {
    export const inboundSchema: z.ZodType<Mp4, z.ZodTypeDef, unknown> = z
        .object({
            path: z.string(),
        })
        .transform((v) => {
            return {
                path: v.path,
            };
        });

    export type Outbound = {
        path: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Mp4> = z
        .object({
            path: z.string(),
        })
        .transform((v) => {
            return {
                path: v.path,
            };
        });
}

/** @internal */
export namespace Fmp4$ {
    export const inboundSchema: z.ZodType<Fmp4, z.ZodTypeDef, unknown> = z
        .object({
            path: z.string(),
        })
        .transform((v) => {
            return {
                path: v.path,
            };
        });

    export type Outbound = {
        path: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Fmp4> = z
        .object({
            path: z.string(),
        })
        .transform((v) => {
            return {
                path: v.path,
            };
        });
}

/** @internal */
export namespace Outputs$ {
    export const inboundSchema: z.ZodType<Outputs, z.ZodTypeDef, unknown> = z
        .object({
            hls: z.lazy(() => Hls$.inboundSchema).optional(),
            mp4: z.lazy(() => Mp4$.inboundSchema).optional(),
            fmp4: z.lazy(() => Fmp4$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.hls === undefined ? null : { hls: v.hls }),
                ...(v.mp4 === undefined ? null : { mp4: v.mp4 }),
                ...(v.fmp4 === undefined ? null : { fmp4: v.fmp4 }),
            };
        });

    export type Outbound = {
        hls?: Hls$.Outbound | undefined;
        mp4?: Mp4$.Outbound | undefined;
        fmp4?: Fmp4$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Outputs> = z
        .object({
            hls: z.lazy(() => Hls$.outboundSchema).optional(),
            mp4: z.lazy(() => Mp4$.outboundSchema).optional(),
            fmp4: z.lazy(() => Fmp4$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.hls === undefined ? null : { hls: v.hls }),
                ...(v.mp4 === undefined ? null : { mp4: v.mp4 }),
                ...(v.fmp4 === undefined ? null : { fmp4: v.fmp4 }),
            };
        });
}

/** @internal */
export namespace TranscodePayload$ {
    export const inboundSchema: z.ZodType<TranscodePayload, z.ZodTypeDef, unknown> = z
        .object({
            input: z.union([
                z.lazy(() => TranscodePayload1$.inboundSchema),
                z.lazy(() => TranscodePayload2$.inboundSchema),
            ]),
            storage: z.union([
                z.lazy(() => TranscodePayloadSchemas2$.inboundSchema),
                z.lazy(() => TranscodePayloadSchemas1$.inboundSchema),
            ]),
            outputs: z.lazy(() => Outputs$.inboundSchema),
            profiles: z.array(TranscodeProfile$.inboundSchema).optional(),
            targetSegmentSizeSecs: z.number().optional(),
            creatorId: InputCreatorId$.inboundSchema.optional(),
            c2pa: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                input: v.input,
                storage: v.storage,
                outputs: v.outputs,
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
                ...(v.targetSegmentSizeSecs === undefined
                    ? null
                    : { targetSegmentSizeSecs: v.targetSegmentSizeSecs }),
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v.c2pa === undefined ? null : { c2pa: v.c2pa }),
            };
        });

    export type Outbound = {
        input: TranscodePayload1$.Outbound | TranscodePayload2$.Outbound;
        storage: TranscodePayloadSchemas2$.Outbound | TranscodePayloadSchemas1$.Outbound;
        outputs: Outputs$.Outbound;
        profiles?: Array<TranscodeProfile$.Outbound> | undefined;
        targetSegmentSizeSecs?: number | undefined;
        creatorId?: InputCreatorId$.Outbound | undefined;
        c2pa?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TranscodePayload> = z
        .object({
            input: z.union([
                z.lazy(() => TranscodePayload1$.outboundSchema),
                z.lazy(() => TranscodePayload2$.outboundSchema),
            ]),
            storage: z.union([
                z.lazy(() => TranscodePayloadSchemas2$.outboundSchema),
                z.lazy(() => TranscodePayloadSchemas1$.outboundSchema),
            ]),
            outputs: z.lazy(() => Outputs$.outboundSchema),
            profiles: z.array(TranscodeProfile$.outboundSchema).optional(),
            targetSegmentSizeSecs: z.number().optional(),
            creatorId: InputCreatorId$.outboundSchema.optional(),
            c2pa: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                input: v.input,
                storage: v.storage,
                outputs: v.outputs,
                ...(v.profiles === undefined ? null : { profiles: v.profiles }),
                ...(v.targetSegmentSizeSecs === undefined
                    ? null
                    : { targetSegmentSizeSecs: v.targetSegmentSizeSecs }),
                ...(v.creatorId === undefined ? null : { creatorId: v.creatorId }),
                ...(v.c2pa === undefined ? null : { c2pa: v.c2pa }),
            };
        });
}
