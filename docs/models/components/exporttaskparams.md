# ExportTaskParams

Parameters for the export task


## Supported Types

### `components.ExportTaskParams1`

```typescript
const value: components.ExportTaskParams1 = {
  custom: {
    url:
      "https://s3.amazonaws.com/my-bucket/path/filename.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=LLMMB",
    method: "POST",
  },
};
```

### `components.ExportTaskParams2`

```typescript
const value: components.ExportTaskParams2 = {
  ipfs: {
    pinata: {
      apiKey: "1234567890",
    },
  },
};
```

