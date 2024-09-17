# NftMetadataTemplate

Name of the NFT metadata template to export. 'player'
will embed the Livepeer Player on the NFT while 'file'
will reference only the immutable MP4 files.


## Example Usage

```typescript
import { NftMetadataTemplate } from "livepeer/models/components";

let value: NftMetadataTemplate = NftMetadataTemplate.File;
```

## Values

| Name     | Value    |
| -------- | -------- |
| `File`   | file     |
| `Player` | player   |