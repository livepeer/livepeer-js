/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InputCreatorId,
  InputCreatorId$inboundSchema,
  InputCreatorId$Outbound,
  InputCreatorId$outboundSchema,
} from "./inputcreatorid.js";
import {
  TranscodeProfile,
  TranscodeProfile$inboundSchema,
  TranscodeProfile$Outbound,
  TranscodeProfile$outboundSchema,
} from "./transcodeprofile.js";

/**
 * Type of service. This is optional and defaults to `url` if
 *
 * @remarks
 * ŚURL field is provided.
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

export type TranscodePayloadStorage =
  | TranscodePayloadSchemas2
  | TranscodePayloadSchemas1;

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
export const TranscodePayloadType$inboundSchema: z.ZodNativeEnum<
  typeof TranscodePayloadType
> = z.nativeEnum(TranscodePayloadType);

/** @internal */
export const TranscodePayloadType$outboundSchema: z.ZodNativeEnum<
  typeof TranscodePayloadType
> = TranscodePayloadType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayloadType$ {
  /** @deprecated use `TranscodePayloadType$inboundSchema` instead. */
  export const inboundSchema = TranscodePayloadType$inboundSchema;
  /** @deprecated use `TranscodePayloadType$outboundSchema` instead. */
  export const outboundSchema = TranscodePayloadType$outboundSchema;
}

/** @internal */
export const Credentials$inboundSchema: z.ZodType<
  Credentials,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessKeyId: z.string(),
  secretAccessKey: z.string(),
});

/** @internal */
export type Credentials$Outbound = {
  accessKeyId: string;
  secretAccessKey: string;
};

/** @internal */
export const Credentials$outboundSchema: z.ZodType<
  Credentials$Outbound,
  z.ZodTypeDef,
  Credentials
> = z.object({
  accessKeyId: z.string(),
  secretAccessKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Credentials$ {
  /** @deprecated use `Credentials$inboundSchema` instead. */
  export const inboundSchema = Credentials$inboundSchema;
  /** @deprecated use `Credentials$outboundSchema` instead. */
  export const outboundSchema = Credentials$outboundSchema;
  /** @deprecated use `Credentials$Outbound` instead. */
  export type Outbound = Credentials$Outbound;
}

export function credentialsToJSON(credentials: Credentials): string {
  return JSON.stringify(Credentials$outboundSchema.parse(credentials));
}

export function credentialsFromJSON(
  jsonString: string,
): SafeParseResult<Credentials, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Credentials$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Credentials' from JSON`,
  );
}

/** @internal */
export const TranscodePayload2$inboundSchema: z.ZodType<
  TranscodePayload2,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: TranscodePayloadType$inboundSchema,
  endpoint: z.string(),
  bucket: z.string(),
  path: z.string(),
  credentials: z.lazy(() => Credentials$inboundSchema),
});

/** @internal */
export type TranscodePayload2$Outbound = {
  type: string;
  endpoint: string;
  bucket: string;
  path: string;
  credentials: Credentials$Outbound;
};

/** @internal */
export const TranscodePayload2$outboundSchema: z.ZodType<
  TranscodePayload2$Outbound,
  z.ZodTypeDef,
  TranscodePayload2
> = z.object({
  type: TranscodePayloadType$outboundSchema,
  endpoint: z.string(),
  bucket: z.string(),
  path: z.string(),
  credentials: z.lazy(() => Credentials$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayload2$ {
  /** @deprecated use `TranscodePayload2$inboundSchema` instead. */
  export const inboundSchema = TranscodePayload2$inboundSchema;
  /** @deprecated use `TranscodePayload2$outboundSchema` instead. */
  export const outboundSchema = TranscodePayload2$outboundSchema;
  /** @deprecated use `TranscodePayload2$Outbound` instead. */
  export type Outbound = TranscodePayload2$Outbound;
}

export function transcodePayload2ToJSON(
  transcodePayload2: TranscodePayload2,
): string {
  return JSON.stringify(
    TranscodePayload2$outboundSchema.parse(transcodePayload2),
  );
}

export function transcodePayload2FromJSON(
  jsonString: string,
): SafeParseResult<TranscodePayload2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TranscodePayload2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodePayload2' from JSON`,
  );
}

/** @internal */
export const TranscodePayload1$inboundSchema: z.ZodType<
  TranscodePayload1,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
});

/** @internal */
export type TranscodePayload1$Outbound = {
  url: string;
};

/** @internal */
export const TranscodePayload1$outboundSchema: z.ZodType<
  TranscodePayload1$Outbound,
  z.ZodTypeDef,
  TranscodePayload1
> = z.object({
  url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayload1$ {
  /** @deprecated use `TranscodePayload1$inboundSchema` instead. */
  export const inboundSchema = TranscodePayload1$inboundSchema;
  /** @deprecated use `TranscodePayload1$outboundSchema` instead. */
  export const outboundSchema = TranscodePayload1$outboundSchema;
  /** @deprecated use `TranscodePayload1$Outbound` instead. */
  export type Outbound = TranscodePayload1$Outbound;
}

export function transcodePayload1ToJSON(
  transcodePayload1: TranscodePayload1,
): string {
  return JSON.stringify(
    TranscodePayload1$outboundSchema.parse(transcodePayload1),
  );
}

export function transcodePayload1FromJSON(
  jsonString: string,
): SafeParseResult<TranscodePayload1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TranscodePayload1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodePayload1' from JSON`,
  );
}

/** @internal */
export const Input$inboundSchema: z.ZodType<Input, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => TranscodePayload1$inboundSchema),
    z.lazy(() => TranscodePayload2$inboundSchema),
  ]);

/** @internal */
export type Input$Outbound =
  | TranscodePayload1$Outbound
  | TranscodePayload2$Outbound;

/** @internal */
export const Input$outboundSchema: z.ZodType<
  Input$Outbound,
  z.ZodTypeDef,
  Input
> = z.union([
  z.lazy(() => TranscodePayload1$outboundSchema),
  z.lazy(() => TranscodePayload2$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Input$ {
  /** @deprecated use `Input$inboundSchema` instead. */
  export const inboundSchema = Input$inboundSchema;
  /** @deprecated use `Input$outboundSchema` instead. */
  export const outboundSchema = Input$outboundSchema;
  /** @deprecated use `Input$Outbound` instead. */
  export type Outbound = Input$Outbound;
}

export function inputToJSON(input: Input): string {
  return JSON.stringify(Input$outboundSchema.parse(input));
}

export function inputFromJSON(
  jsonString: string,
): SafeParseResult<Input, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Input$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Input' from JSON`,
  );
}

/** @internal */
export const TranscodePayloadSchemasStorageType$inboundSchema: z.ZodNativeEnum<
  typeof TranscodePayloadSchemasStorageType
> = z.nativeEnum(TranscodePayloadSchemasStorageType);

/** @internal */
export const TranscodePayloadSchemasStorageType$outboundSchema: z.ZodNativeEnum<
  typeof TranscodePayloadSchemasStorageType
> = TranscodePayloadSchemasStorageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayloadSchemasStorageType$ {
  /** @deprecated use `TranscodePayloadSchemasStorageType$inboundSchema` instead. */
  export const inboundSchema = TranscodePayloadSchemasStorageType$inboundSchema;
  /** @deprecated use `TranscodePayloadSchemasStorageType$outboundSchema` instead. */
  export const outboundSchema =
    TranscodePayloadSchemasStorageType$outboundSchema;
}

/** @internal */
export const TranscodePayloadSchemasCredentials$inboundSchema: z.ZodType<
  TranscodePayloadSchemasCredentials,
  z.ZodTypeDef,
  unknown
> = z.object({
  proof: z.string(),
});

/** @internal */
export type TranscodePayloadSchemasCredentials$Outbound = {
  proof: string;
};

/** @internal */
export const TranscodePayloadSchemasCredentials$outboundSchema: z.ZodType<
  TranscodePayloadSchemasCredentials$Outbound,
  z.ZodTypeDef,
  TranscodePayloadSchemasCredentials
> = z.object({
  proof: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayloadSchemasCredentials$ {
  /** @deprecated use `TranscodePayloadSchemasCredentials$inboundSchema` instead. */
  export const inboundSchema = TranscodePayloadSchemasCredentials$inboundSchema;
  /** @deprecated use `TranscodePayloadSchemasCredentials$outboundSchema` instead. */
  export const outboundSchema =
    TranscodePayloadSchemasCredentials$outboundSchema;
  /** @deprecated use `TranscodePayloadSchemasCredentials$Outbound` instead. */
  export type Outbound = TranscodePayloadSchemasCredentials$Outbound;
}

export function transcodePayloadSchemasCredentialsToJSON(
  transcodePayloadSchemasCredentials: TranscodePayloadSchemasCredentials,
): string {
  return JSON.stringify(
    TranscodePayloadSchemasCredentials$outboundSchema.parse(
      transcodePayloadSchemasCredentials,
    ),
  );
}

export function transcodePayloadSchemasCredentialsFromJSON(
  jsonString: string,
): SafeParseResult<TranscodePayloadSchemasCredentials, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      TranscodePayloadSchemasCredentials$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodePayloadSchemasCredentials' from JSON`,
  );
}

/** @internal */
export const TranscodePayloadSchemas2$inboundSchema: z.ZodType<
  TranscodePayloadSchemas2,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: TranscodePayloadSchemasStorageType$inboundSchema,
  credentials: z.lazy(() => TranscodePayloadSchemasCredentials$inboundSchema),
});

/** @internal */
export type TranscodePayloadSchemas2$Outbound = {
  type: string;
  credentials: TranscodePayloadSchemasCredentials$Outbound;
};

/** @internal */
export const TranscodePayloadSchemas2$outboundSchema: z.ZodType<
  TranscodePayloadSchemas2$Outbound,
  z.ZodTypeDef,
  TranscodePayloadSchemas2
> = z.object({
  type: TranscodePayloadSchemasStorageType$outboundSchema,
  credentials: z.lazy(() => TranscodePayloadSchemasCredentials$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayloadSchemas2$ {
  /** @deprecated use `TranscodePayloadSchemas2$inboundSchema` instead. */
  export const inboundSchema = TranscodePayloadSchemas2$inboundSchema;
  /** @deprecated use `TranscodePayloadSchemas2$outboundSchema` instead. */
  export const outboundSchema = TranscodePayloadSchemas2$outboundSchema;
  /** @deprecated use `TranscodePayloadSchemas2$Outbound` instead. */
  export type Outbound = TranscodePayloadSchemas2$Outbound;
}

export function transcodePayloadSchemas2ToJSON(
  transcodePayloadSchemas2: TranscodePayloadSchemas2,
): string {
  return JSON.stringify(
    TranscodePayloadSchemas2$outboundSchema.parse(transcodePayloadSchemas2),
  );
}

export function transcodePayloadSchemas2FromJSON(
  jsonString: string,
): SafeParseResult<TranscodePayloadSchemas2, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TranscodePayloadSchemas2$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodePayloadSchemas2' from JSON`,
  );
}

/** @internal */
export const TranscodePayloadSchemasType$inboundSchema: z.ZodNativeEnum<
  typeof TranscodePayloadSchemasType
> = z.nativeEnum(TranscodePayloadSchemasType);

/** @internal */
export const TranscodePayloadSchemasType$outboundSchema: z.ZodNativeEnum<
  typeof TranscodePayloadSchemasType
> = TranscodePayloadSchemasType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayloadSchemasType$ {
  /** @deprecated use `TranscodePayloadSchemasType$inboundSchema` instead. */
  export const inboundSchema = TranscodePayloadSchemasType$inboundSchema;
  /** @deprecated use `TranscodePayloadSchemasType$outboundSchema` instead. */
  export const outboundSchema = TranscodePayloadSchemasType$outboundSchema;
}

/** @internal */
export const TranscodePayloadCredentials$inboundSchema: z.ZodType<
  TranscodePayloadCredentials,
  z.ZodTypeDef,
  unknown
> = z.object({
  accessKeyId: z.string(),
  secretAccessKey: z.string(),
});

/** @internal */
export type TranscodePayloadCredentials$Outbound = {
  accessKeyId: string;
  secretAccessKey: string;
};

/** @internal */
export const TranscodePayloadCredentials$outboundSchema: z.ZodType<
  TranscodePayloadCredentials$Outbound,
  z.ZodTypeDef,
  TranscodePayloadCredentials
> = z.object({
  accessKeyId: z.string(),
  secretAccessKey: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayloadCredentials$ {
  /** @deprecated use `TranscodePayloadCredentials$inboundSchema` instead. */
  export const inboundSchema = TranscodePayloadCredentials$inboundSchema;
  /** @deprecated use `TranscodePayloadCredentials$outboundSchema` instead. */
  export const outboundSchema = TranscodePayloadCredentials$outboundSchema;
  /** @deprecated use `TranscodePayloadCredentials$Outbound` instead. */
  export type Outbound = TranscodePayloadCredentials$Outbound;
}

export function transcodePayloadCredentialsToJSON(
  transcodePayloadCredentials: TranscodePayloadCredentials,
): string {
  return JSON.stringify(
    TranscodePayloadCredentials$outboundSchema.parse(
      transcodePayloadCredentials,
    ),
  );
}

export function transcodePayloadCredentialsFromJSON(
  jsonString: string,
): SafeParseResult<TranscodePayloadCredentials, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TranscodePayloadCredentials$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodePayloadCredentials' from JSON`,
  );
}

/** @internal */
export const TranscodePayloadSchemas1$inboundSchema: z.ZodType<
  TranscodePayloadSchemas1,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: TranscodePayloadSchemasType$inboundSchema,
  endpoint: z.string(),
  bucket: z.string(),
  credentials: z.lazy(() => TranscodePayloadCredentials$inboundSchema),
});

/** @internal */
export type TranscodePayloadSchemas1$Outbound = {
  type: string;
  endpoint: string;
  bucket: string;
  credentials: TranscodePayloadCredentials$Outbound;
};

/** @internal */
export const TranscodePayloadSchemas1$outboundSchema: z.ZodType<
  TranscodePayloadSchemas1$Outbound,
  z.ZodTypeDef,
  TranscodePayloadSchemas1
> = z.object({
  type: TranscodePayloadSchemasType$outboundSchema,
  endpoint: z.string(),
  bucket: z.string(),
  credentials: z.lazy(() => TranscodePayloadCredentials$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayloadSchemas1$ {
  /** @deprecated use `TranscodePayloadSchemas1$inboundSchema` instead. */
  export const inboundSchema = TranscodePayloadSchemas1$inboundSchema;
  /** @deprecated use `TranscodePayloadSchemas1$outboundSchema` instead. */
  export const outboundSchema = TranscodePayloadSchemas1$outboundSchema;
  /** @deprecated use `TranscodePayloadSchemas1$Outbound` instead. */
  export type Outbound = TranscodePayloadSchemas1$Outbound;
}

export function transcodePayloadSchemas1ToJSON(
  transcodePayloadSchemas1: TranscodePayloadSchemas1,
): string {
  return JSON.stringify(
    TranscodePayloadSchemas1$outboundSchema.parse(transcodePayloadSchemas1),
  );
}

export function transcodePayloadSchemas1FromJSON(
  jsonString: string,
): SafeParseResult<TranscodePayloadSchemas1, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TranscodePayloadSchemas1$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodePayloadSchemas1' from JSON`,
  );
}

/** @internal */
export const TranscodePayloadStorage$inboundSchema: z.ZodType<
  TranscodePayloadStorage,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.lazy(() => TranscodePayloadSchemas2$inboundSchema),
  z.lazy(() => TranscodePayloadSchemas1$inboundSchema),
]);

/** @internal */
export type TranscodePayloadStorage$Outbound =
  | TranscodePayloadSchemas2$Outbound
  | TranscodePayloadSchemas1$Outbound;

/** @internal */
export const TranscodePayloadStorage$outboundSchema: z.ZodType<
  TranscodePayloadStorage$Outbound,
  z.ZodTypeDef,
  TranscodePayloadStorage
> = z.union([
  z.lazy(() => TranscodePayloadSchemas2$outboundSchema),
  z.lazy(() => TranscodePayloadSchemas1$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayloadStorage$ {
  /** @deprecated use `TranscodePayloadStorage$inboundSchema` instead. */
  export const inboundSchema = TranscodePayloadStorage$inboundSchema;
  /** @deprecated use `TranscodePayloadStorage$outboundSchema` instead. */
  export const outboundSchema = TranscodePayloadStorage$outboundSchema;
  /** @deprecated use `TranscodePayloadStorage$Outbound` instead. */
  export type Outbound = TranscodePayloadStorage$Outbound;
}

export function transcodePayloadStorageToJSON(
  transcodePayloadStorage: TranscodePayloadStorage,
): string {
  return JSON.stringify(
    TranscodePayloadStorage$outboundSchema.parse(transcodePayloadStorage),
  );
}

export function transcodePayloadStorageFromJSON(
  jsonString: string,
): SafeParseResult<TranscodePayloadStorage, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TranscodePayloadStorage$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodePayloadStorage' from JSON`,
  );
}

/** @internal */
export const Hls$inboundSchema: z.ZodType<Hls, z.ZodTypeDef, unknown> = z
  .object({
    path: z.string(),
  });

/** @internal */
export type Hls$Outbound = {
  path: string;
};

/** @internal */
export const Hls$outboundSchema: z.ZodType<Hls$Outbound, z.ZodTypeDef, Hls> = z
  .object({
    path: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Hls$ {
  /** @deprecated use `Hls$inboundSchema` instead. */
  export const inboundSchema = Hls$inboundSchema;
  /** @deprecated use `Hls$outboundSchema` instead. */
  export const outboundSchema = Hls$outboundSchema;
  /** @deprecated use `Hls$Outbound` instead. */
  export type Outbound = Hls$Outbound;
}

export function hlsToJSON(hls: Hls): string {
  return JSON.stringify(Hls$outboundSchema.parse(hls));
}

export function hlsFromJSON(
  jsonString: string,
): SafeParseResult<Hls, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Hls$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Hls' from JSON`,
  );
}

/** @internal */
export const Mp4$inboundSchema: z.ZodType<Mp4, z.ZodTypeDef, unknown> = z
  .object({
    path: z.string(),
  });

/** @internal */
export type Mp4$Outbound = {
  path: string;
};

/** @internal */
export const Mp4$outboundSchema: z.ZodType<Mp4$Outbound, z.ZodTypeDef, Mp4> = z
  .object({
    path: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Mp4$ {
  /** @deprecated use `Mp4$inboundSchema` instead. */
  export const inboundSchema = Mp4$inboundSchema;
  /** @deprecated use `Mp4$outboundSchema` instead. */
  export const outboundSchema = Mp4$outboundSchema;
  /** @deprecated use `Mp4$Outbound` instead. */
  export type Outbound = Mp4$Outbound;
}

export function mp4ToJSON(mp4: Mp4): string {
  return JSON.stringify(Mp4$outboundSchema.parse(mp4));
}

export function mp4FromJSON(
  jsonString: string,
): SafeParseResult<Mp4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Mp4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Mp4' from JSON`,
  );
}

/** @internal */
export const Fmp4$inboundSchema: z.ZodType<Fmp4, z.ZodTypeDef, unknown> = z
  .object({
    path: z.string(),
  });

/** @internal */
export type Fmp4$Outbound = {
  path: string;
};

/** @internal */
export const Fmp4$outboundSchema: z.ZodType<Fmp4$Outbound, z.ZodTypeDef, Fmp4> =
  z.object({
    path: z.string(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Fmp4$ {
  /** @deprecated use `Fmp4$inboundSchema` instead. */
  export const inboundSchema = Fmp4$inboundSchema;
  /** @deprecated use `Fmp4$outboundSchema` instead. */
  export const outboundSchema = Fmp4$outboundSchema;
  /** @deprecated use `Fmp4$Outbound` instead. */
  export type Outbound = Fmp4$Outbound;
}

export function fmp4ToJSON(fmp4: Fmp4): string {
  return JSON.stringify(Fmp4$outboundSchema.parse(fmp4));
}

export function fmp4FromJSON(
  jsonString: string,
): SafeParseResult<Fmp4, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Fmp4$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Fmp4' from JSON`,
  );
}

/** @internal */
export const Outputs$inboundSchema: z.ZodType<Outputs, z.ZodTypeDef, unknown> =
  z.object({
    hls: z.lazy(() => Hls$inboundSchema).optional(),
    mp4: z.lazy(() => Mp4$inboundSchema).optional(),
    fmp4: z.lazy(() => Fmp4$inboundSchema).optional(),
  });

/** @internal */
export type Outputs$Outbound = {
  hls?: Hls$Outbound | undefined;
  mp4?: Mp4$Outbound | undefined;
  fmp4?: Fmp4$Outbound | undefined;
};

/** @internal */
export const Outputs$outboundSchema: z.ZodType<
  Outputs$Outbound,
  z.ZodTypeDef,
  Outputs
> = z.object({
  hls: z.lazy(() => Hls$outboundSchema).optional(),
  mp4: z.lazy(() => Mp4$outboundSchema).optional(),
  fmp4: z.lazy(() => Fmp4$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Outputs$ {
  /** @deprecated use `Outputs$inboundSchema` instead. */
  export const inboundSchema = Outputs$inboundSchema;
  /** @deprecated use `Outputs$outboundSchema` instead. */
  export const outboundSchema = Outputs$outboundSchema;
  /** @deprecated use `Outputs$Outbound` instead. */
  export type Outbound = Outputs$Outbound;
}

export function outputsToJSON(outputs: Outputs): string {
  return JSON.stringify(Outputs$outboundSchema.parse(outputs));
}

export function outputsFromJSON(
  jsonString: string,
): SafeParseResult<Outputs, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Outputs$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Outputs' from JSON`,
  );
}

/** @internal */
export const TranscodePayload$inboundSchema: z.ZodType<
  TranscodePayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  input: z.union([
    z.lazy(() => TranscodePayload1$inboundSchema),
    z.lazy(() => TranscodePayload2$inboundSchema),
  ]),
  storage: z.union([
    z.lazy(() => TranscodePayloadSchemas2$inboundSchema),
    z.lazy(() => TranscodePayloadSchemas1$inboundSchema),
  ]),
  outputs: z.lazy(() => Outputs$inboundSchema),
  profiles: z.array(TranscodeProfile$inboundSchema).optional(),
  targetSegmentSizeSecs: z.number().optional(),
  creatorId: InputCreatorId$inboundSchema.optional(),
  c2pa: z.boolean().optional(),
});

/** @internal */
export type TranscodePayload$Outbound = {
  input: TranscodePayload1$Outbound | TranscodePayload2$Outbound;
  storage:
    | TranscodePayloadSchemas2$Outbound
    | TranscodePayloadSchemas1$Outbound;
  outputs: Outputs$Outbound;
  profiles?: Array<TranscodeProfile$Outbound> | undefined;
  targetSegmentSizeSecs?: number | undefined;
  creatorId?: InputCreatorId$Outbound | undefined;
  c2pa?: boolean | undefined;
};

/** @internal */
export const TranscodePayload$outboundSchema: z.ZodType<
  TranscodePayload$Outbound,
  z.ZodTypeDef,
  TranscodePayload
> = z.object({
  input: z.union([
    z.lazy(() => TranscodePayload1$outboundSchema),
    z.lazy(() => TranscodePayload2$outboundSchema),
  ]),
  storage: z.union([
    z.lazy(() => TranscodePayloadSchemas2$outboundSchema),
    z.lazy(() => TranscodePayloadSchemas1$outboundSchema),
  ]),
  outputs: z.lazy(() => Outputs$outboundSchema),
  profiles: z.array(TranscodeProfile$outboundSchema).optional(),
  targetSegmentSizeSecs: z.number().optional(),
  creatorId: InputCreatorId$outboundSchema.optional(),
  c2pa: z.boolean().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TranscodePayload$ {
  /** @deprecated use `TranscodePayload$inboundSchema` instead. */
  export const inboundSchema = TranscodePayload$inboundSchema;
  /** @deprecated use `TranscodePayload$outboundSchema` instead. */
  export const outboundSchema = TranscodePayload$outboundSchema;
  /** @deprecated use `TranscodePayload$Outbound` instead. */
  export type Outbound = TranscodePayload$Outbound;
}

export function transcodePayloadToJSON(
  transcodePayload: TranscodePayload,
): string {
  return JSON.stringify(
    TranscodePayload$outboundSchema.parse(transcodePayload),
  );
}

export function transcodePayloadFromJSON(
  jsonString: string,
): SafeParseResult<TranscodePayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TranscodePayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TranscodePayload' from JSON`,
  );
}
