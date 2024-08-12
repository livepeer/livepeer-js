/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { LivepeerCore } from "../core.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
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
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * Update a room user
 *
 * @remarks
 * Update properties for a user.
 *
 * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export async function roomUpdateUser(
    client$: LivepeerCore,
    id: string,
    userId: string,
    roomUserUpdatePayload: components.RoomUserUpdatePayload,
    options?: RequestOptions
): Promise<
    Result<
        operations.UpdateRoomUserResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$: operations.UpdateRoomUserRequest = {
        id: id,
        userId: userId,
        roomUserUpdatePayload: roomUserUpdatePayload,
    };

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.UpdateRoomUserRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = encodeJSON$("body", payload$["room-user-update-payload"], { explode: true });

    const pathParams$ = {
        id: encodeSimple$("id", payload$.id, { explode: false, charEncoding: "percent" }),
        userId: encodeSimple$("userId", payload$.userId, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/room/{id}/user/{userId}")(pathParams$);

    const headers$ = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });

    const apiKey$ = await extractSecurity(client$.options$.apiKey);
    const security$ = apiKey$ == null ? {} : { apiKey: apiKey$ };
    const context = {
        operationID: "updateRoomUser",
        oAuth2Scopes: [],
        securitySource: client$.options$.apiKey,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "PUT",
            path: path$,
            headers: headers$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["4XX", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        ContentType: response.headers.get("content-type") ?? "application/octet-stream",
        StatusCode: response.status,
        RawResponse: response,
        Headers: {},
    };

    const [result$] = await m$.match<
        operations.UpdateRoomUserResponse,
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.nil(204, operations.UpdateRoomUserResponse$inboundSchema),
        m$.fail(["4XX", "5XX"]),
        m$.json("default", operations.UpdateRoomUserResponse$inboundSchema, { key: "error" })
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
