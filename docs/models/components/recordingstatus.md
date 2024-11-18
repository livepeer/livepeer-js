# RecordingStatus

The status of the recording process of this stream session.

## Example Usage

```typescript
import { RecordingStatus } from "livepeer/models/components";

let value: RecordingStatus = RecordingStatus.Waiting;
```

## Values

| Name      | Value     |
| --------- | --------- |
| `Waiting` | waiting   |
| `Ready`   | ready     |
| `Failed`  | failed    |
| `Deleted` | deleted   |
| `None`    | none      |