/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LivepeerCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
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
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Upload an asset
 *
 * @remarks
 * To upload an asset, your first need to request for a direct upload URL
 * and only then actually upload the contents of the asset.
 * \
 * \
 * Once you created a upload link, you have 2 options, resumable or direct
 * upload. For a more reliable experience, you should use resumable uploads
 * which will work better for users with unreliable or slow network
 * connections. If you want a simpler implementation though, you should
 * just use a direct upload.
 *
 * ## Direct Upload
 * For a direct upload, make a PUT request to the URL received in the url
 * field of the response above, with the raw video file as the request
 * body. response above:
 *
 * ## Resumable Upload
 * Livepeer supports resumable uploads via Tus. This section provides a
 * simple example of how to use tus-js-client to upload a video file.
 * \
 * \
 * From the previous section, we generated a URL to upload a video file to
 * Livepeer on POST /api/asset/request-upload. You should use the
 * tusEndpoint field of the response to upload the video file and track the
 * progress:
 *
 * ```
 * # This assumes there is an `input` element of `type="file"` with id
 * `fileInput` in the HTML
 *
 * const input = document.getElementById('fileInput');
 *
 * const file = input.files[0];
 *
 * const upload = new tus.Upload(file, {
 *   endpoint: tusEndpoint, // URL from `tusEndpoint` field in the
 * `/request-upload` response
 *   metadata: {
 *     filename,
 *     filetype: 'video/mp4',
 *   },
 *   uploadSize: file.size,
 *   onError(err) {
 *     console.error('Error uploading file:', err);
 *   },
 *   onProgress(bytesUploaded, bytesTotal) {
 *     const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
 *     console.log('Uploaded ' + percentage + '%');
 *   },
 *   onSuccess() {
 *     console.log('Upload finished:', upload.url);
 *   },
 * });
 *
 * const previousUploads = await upload.findPreviousUploads();
 *
 * if (previousUploads.length > 0) {
 *   upload.resumeFromPreviousUpload(previousUploads[0]);
 * }
 *
 * upload.start();
 *
 * ```
 *
 * > Note: If you are using tus from node.js, you need to add a custom URL
 * storage to enable resuming from previous uploads. On the browser, this
 * is enabled by default using local storage. In node.js, add urlStorage:
 * new tus.FileUrlStorage("path/to/tmp/file"), to the UploadFile object
 * definition above.
 */
export async function assetCreate(
  client: LivepeerCore,
  request: components.NewAssetPayload,
  options?: RequestOptions,
): Promise<
  Result<
    operations.RequestUploadResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => components.NewAssetPayload$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/asset/request-upload")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "requestUpload",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    ContentType: response.headers.get("content-type")
      ?? "application/octet-stream",
    StatusCode: response.status,
    RawResponse: response,
    Headers: {},
  };

  const [result] = await M.match<
    operations.RequestUploadResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.RequestUploadResponse$inboundSchema, {
      key: "data",
    }),
    M.fail(["4XX", "5XX"]),
    M.json("default", operations.RequestUploadResponse$inboundSchema, {
      key: "error",
    }),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}
