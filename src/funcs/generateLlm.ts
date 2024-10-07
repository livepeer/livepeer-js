/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LivepeerCore } from "../core.js";
import { encodeBodyForm as encodeBodyForm$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * LLM
 *
 * @remarks
 * Generate text using a language model.
 */
export async function generateLlm(
  client$: LivepeerCore,
  request: components.BodyGenLLM,
  options?: RequestOptions,
): Promise<
  Result<
    operations.GenLLMResponse,
    | errors.GenLLMResponseBody
    | errors.GenLLMGenerateResponseBody
    | errors.GenLLMGenerateResponseResponseBody
    | errors.GenLLMGenerateResponse500ResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => components.BodyGenLLM$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;

  const body$ = Object.entries(payload$ || {}).map(([k, v]) => {
    return encodeBodyForm$(k, v, { charEncoding: "percent" });
  }).join("&");

  const path$ = pathToFunc("/api/generate/llm")();

  const headers$ = new Headers({
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  });

  const apiKey$ = await extractSecurity(client$.options$.apiKey);
  const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
  const context = {
    operationID: "genLLM",
    oAuth2Scopes: [],
    securitySource: client$.options$.apiKey,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "POST",
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
    errorCodes: ["400", "401", "422", "4XX", "500", "5XX"],
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
    operations.GenLLMResponse,
    | errors.GenLLMResponseBody
    | errors.GenLLMGenerateResponseBody
    | errors.GenLLMGenerateResponseResponseBody
    | errors.GenLLMGenerateResponse500ResponseBody
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GenLLMResponse$inboundSchema, {
      key: "LLMResponse",
    }),
    m$.jsonErr(400, errors.GenLLMResponseBody$inboundSchema),
    m$.jsonErr(401, errors.GenLLMGenerateResponseBody$inboundSchema),
    m$.jsonErr(422, errors.GenLLMGenerateResponseResponseBody$inboundSchema),
    m$.jsonErr(500, errors.GenLLMGenerateResponse500ResponseBody$inboundSchema),
    m$.fail(["4XX", "5XX"]),
    m$.json("default", operations.GenLLMResponse$inboundSchema, {
      key: "studio-api-error",
    }),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
