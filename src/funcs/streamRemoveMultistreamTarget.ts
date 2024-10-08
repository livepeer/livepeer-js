/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LivepeerCore } from "../core.js";
import { encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Remove a multistream target
 */
export async function streamRemoveMultistreamTarget(
  client$: LivepeerCore,
  id: string,
  targetId: string,
  options?: RequestOptions,
): Promise<
  Result<
    operations.RemoveMultistreamTargetResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$: operations.RemoveMultistreamTargetRequest = {
    id: id,
    targetId: targetId,
  };

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.RemoveMultistreamTargetRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    id: encodeSimple$("id", payload$.id, {
      explode: false,
      charEncoding: "percent",
    }),
    targetId: encodeSimple$("targetId", payload$.targetId, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/stream/{id}/multistream/{targetId}")(pathParams$);

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const apiKey$ = await extractSecurity(client$.options$.apiKey);
  const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
  const context = {
    operationID: "removeMultistreamTarget",
    oAuth2Scopes: [],
    securitySource: client$.options$.apiKey,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "DELETE",
    path: path$,
    headers: headers$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields$ = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result$] = await m$.match<
    operations.RemoveMultistreamTargetResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.nil(204, operations.RemoveMultistreamTargetResponse$inboundSchema),
    m$.fail(["4XX", "5XX"]),
    m$.json(
      "default",
      operations.RemoveMultistreamTargetResponse$inboundSchema,
      { key: "error" },
    ),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
