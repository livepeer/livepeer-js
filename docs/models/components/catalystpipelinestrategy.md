# CatalystPipelineStrategy

Force to use a specific strategy in the Catalyst pipeline. If not specified, the default strategy that Catalyst is configured for will be used. This field only available for admin users, and is only used for E2E testing.


## Values

| Name                 | Value                |
| -------------------- | -------------------- |
| `Catalyst`           | catalyst             |
| `CatalystFfmpeg`     | catalyst_ffmpeg      |
| `BackgroundExternal` | background_external  |
| `BackgroundMist`     | background_mist      |
| `FallbackExternal`   | fallback_external    |
| `External`           | external             |