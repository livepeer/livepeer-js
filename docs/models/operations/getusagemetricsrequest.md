# GetUsageMetricsRequest

## Example Usage

```typescript
import { GetUsageMetricsRequest } from "livepeer/models/operations";

let value: GetUsageMetricsRequest = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `from`                                                                                                               | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | Start millis timestamp for the query range (inclusive)<br/>                                                          |
| `to`                                                                                                                 | *number*                                                                                                             | :heavy_minus_sign:                                                                                                   | End millis timestamp for the query range (exclusive)<br/>                                                            |
| `timeStep`                                                                                                           | [operations.GetUsageMetricsQueryParamTimeStep](../../models/operations/getusagemetricsqueryparamtimestep.md)         | :heavy_minus_sign:                                                                                                   | The time step to aggregate viewership metrics by<br/>                                                                |
| `creatorId`                                                                                                          | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The creator ID to filter the query results<br/>                                                                      |
| `breakdownBy`                                                                                                        | [operations.GetUsageMetricsQueryParamBreakdownBy](../../models/operations/getusagemetricsqueryparambreakdownby.md)[] | :heavy_minus_sign:                                                                                                   | The list of fields to break down the query results. Currently the<br/>only supported breakdown is by `creatorId`.<br/> |