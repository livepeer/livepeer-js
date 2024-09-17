# Attestation

## Example Usage

```typescript
import { Attestation, Name, Phase, PrimaryType, SignatureType, Version } from "livepeer/models/components";

let value: Attestation = {
  id: "5b9e63bb-6fd0-4bea-aff2-cc5d4eb9cad0",
  primaryType: PrimaryType.VideoAttestation,
  domain: {
    name: Name.VerifiableVideo,
    version: Version.One,
  },
  message: {
    video: "5b9e63bb-6fd0-4bea-aff2-cc5d4eb9cad0",
    attestations: [
      {
        role: "creator",
        address: "1311768467294899700",
      },
    ],
    signer: "1311768467294899700",
    timestamp: 1587667174725,
  },
  signature: "1311768467294899700",
  createdAt: 1587667174725,
  signatureType: SignatureType.Eip712,
  storage: {
    ipfs: {
      updatedAt: 1587667174725,
    },
    status: {
      phase: Phase.Ready,
      progress: 0.5,
      errorMessage: "Failed to update storage",
      tasks: {
        pending: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
        last: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
        failed: "09F8B46C-61A0-4254-9875-F71F4C605BC7",
      },
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | 5b9e63bb-6fd0-4bea-aff2-cc5d4eb9cad0                                           |
| `primaryType`                                                                  | [components.PrimaryType](../../models/components/primarytype.md)               | :heavy_check_mark:                                                             | Video Metadata EIP-712 primaryType                                             | VideoAttestation                                                               |
| `domain`                                                                       | [components.Domain](../../models/components/domain.md)                         | :heavy_check_mark:                                                             | Video Metadata EIP-712 domain                                                  |                                                                                |
| `message`                                                                      | [components.Message](../../models/components/message.md)                       | :heavy_check_mark:                                                             | Video Metadata EIP-712 message content                                         |                                                                                |
| `signature`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | Video Metadata EIP-712 message signature                                       | 1311768467294899700                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | Timestamp (in milliseconds) at which the object was created                    | 1587667174725                                                                  |
| `signatureType`                                                                | [components.SignatureType](../../models/components/signaturetype.md)           | :heavy_minus_sign:                                                             | N/A                                                                            | eip712                                                                         |
| `storage`                                                                      | [components.AttestationStorage](../../models/components/attestationstorage.md) | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |