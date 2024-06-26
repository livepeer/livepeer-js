/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import { encodeJSON as encodeJSON$ } from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as operations from "../models/operations";

export class Transcode extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Transcode a video
     *
     * @remarks
     * `POST /transcode` transcodes a video file and uploads the results to the
     * specified storage service.
     * \
     * \
     * Transcoding is asynchronous so you will need to check the status of the
     * task in order to determine when transcoding is complete. The `id` field
     * in the response is the unique ID for the transcoding `Task`. The task
     * status can be queried using the [GET tasks
     * endpoint](https://docs.livepeer.org/reference/api/get-tasks):
     * \
     * \
     * When `status.phase` is `completed`,  transcoding will be complete and
     * the results will be stored in the storage service and the specified
     * output location.
     * \
     * \
     * The results will be available under `params.outputs.hls.path` and
     * `params.outputs.mp4.path` in the specified storage service.
     * ## Input
     * \
     * This endpoint currently supports the following inputs:
     * - HTTP
     * - S3 API Compatible Service
     * \
     * \
     * **HTTP**
     * \
     * A public HTTP URL can be used to read a video file.
     * ```json
     * {
     *     "url": "https://www.example.com/video.mp4"
     * }
     * ```
     * | Name | Type   | Description                          |
     * | ---- | ------ | ------------------------------------ |
     * | url  | string | A public HTTP URL for the video file. |
     *
     * Note: For IPFS HTTP gateway URLs, the API currently only supports “path
     * style” URLs and does not support “subdomain style” URLs. The API will
     * support both styles of URLs in a future update.
     * \
     * \
     * **S3 API Compatible Service**
     * \
     * \
     * S3 credentials can be used to authenticate with a S3 API compatible
     * service to read a video file.
     *
     * ```json
     * {
     *     "type": "s3",
     *     "endpoint": "https://gateway.storjshare.io",
     *     "credentials": {
     *         "accessKeyId": "$ACCESS_KEY_ID",
     *         "secretAccessKey": "$SECRET_ACCESS_KEY"
     *     },
     *     "bucket": "inbucket",
     *     "path": "/video/source.mp4"
     * }
     * ```
     *
     *
     * ## Storage
     * \
     * This endpoint currently supports the following storage services:
     * - S3 API Compatible Service
     * - Web3 Storage
     * \
     * \
     * **S3 API Compatible Service**
     * ```json
     * {
     *   "type": "s3",
     *     "endpoint": "https://gateway.storjshare.io",
     *     "credentials": {
     *         "accessKeyId": "$ACCESS_KEY_ID",
     *         "secretAccessKey": "$SECRET_ACCESS_KEY"
     *     },
     *     "bucket": "mybucket"
     * }
     * ```
     *
     * **Web3 Storage**
     *
     * ```json
     * {
     *   "type": "web3.storage",
     *     "credentials": {
     *         "proof": "$UCAN_DELEGATION_PROOF",
     *     }
     * }
     * ```
     *
     *
     *
     * ## Outputs
     * \
     * This endpoint currently supports the following output types:
     * - HLS
     * - MP4
     *
     * **HLS**
     *
     * ```json
     * {
     *   "hls": {
     *         "path": "/samplevideo/hls"
     *     }
     * }
     * ```
     *
     *
     * **MP4**
     *
     * ```json
     * {
     *   "mp4": {
     *         "path": "/samplevideo/mp4"
     *     }
     * }
     * ```
     *
     */
    async create(
        request: components.TranscodePayload,
        options?: RequestOptions
    ): Promise<operations.TranscodeVideoResponse> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => components.TranscodePayload$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/transcode")();

        const query$ = "";

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "transcodeVideo",
            oAuth2Scopes: [],
            securitySource: this.options$.apiKey,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
            Headers: {},
        };

        const [result$] = await this.matcher<operations.TranscodeVideoResponse>()
            .json(200, operations.TranscodeVideoResponse$, { key: "task" })
            .fail(["4XX", "5XX"])
            .json("default", operations.TranscodeVideoResponse$, { key: "error" })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
