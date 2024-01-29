/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";
import { Asset } from "./asset";
import { Metrics } from "./metrics";
import { MultistreamTarget } from "./multistreamtarget";
import { Playback } from "./playback";
import { Session } from "./session";
import { SigningKey } from "./signingkey";
import { Stream } from "./stream";
import { Task } from "./task";
import { Transcode } from "./transcode";
import { Webhook } from "./webhook";
import axios from "axios";
import {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://livepeer.studio/api"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  apiKey?: string;

  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;

  /**
   * Allows overriding the default server used by the SDK
   */
  serverIdx?: number;

  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
  defaultClient: AxiosInstance;
  security?: components.Security | (() => Promise<components.Security>);
  serverURL: string;
  serverDefaults: any;
  language = "typescript";
  openapiDocVersion = "1.0.0";
  sdkVersion = "3.0.2";
  genVersion = "2.188.3";
  userAgent = "speakeasy-sdk/typescript 2 2.188.3 1.0.0 livepeer";
  retryConfig?: utils.RetryConfig;
  public constructor(init?: Partial<SDKConfiguration>) {
    Object.assign(this, init);
  }
}

/**
 * Livepeer API Reference: Welcome to the Livepeer API reference docs. Here you will find all the
 *
 * @remarks
 * endpoints exposed on the standard Livepeer API, learn how to use them and
 * what they return.
 *
 */
export class Livepeer {
  public stream: Stream;
  public multistreamTarget: MultistreamTarget;
  public webhook: Webhook;
  public asset: Asset;
  public session: Session;
  public metrics: Metrics;
  public signingKey: SigningKey;
  public task: Task;
  public transcode: Transcode;
  public playback: Playback;

  private sdkConfiguration: SDKConfiguration;

  constructor(props?: SDKProps) {
    let serverURL = props?.serverURL;
    const serverIdx = props?.serverIdx ?? 0;

    if (!serverURL) {
      serverURL = ServerList[serverIdx];
    }

    const defaultClient = props?.defaultClient ?? axios.create();
    this.sdkConfiguration = new SDKConfiguration({
      defaultClient: defaultClient,
      security: new components.Security({ apiKey: props?.apiKey }),

      serverURL: serverURL,
      retryConfig: props?.retryConfig,
    });

    this.stream = new Stream(this.sdkConfiguration);
    this.multistreamTarget = new MultistreamTarget(this.sdkConfiguration);
    this.webhook = new Webhook(this.sdkConfiguration);
    this.asset = new Asset(this.sdkConfiguration);
    this.session = new Session(this.sdkConfiguration);
    this.metrics = new Metrics(this.sdkConfiguration);
    this.signingKey = new SigningKey(this.sdkConfiguration);
    this.task = new Task(this.sdkConfiguration);
    this.transcode = new Transcode(this.sdkConfiguration);
    this.playback = new Playback(this.sdkConfiguration);
  }

  /**
   * Retrieves signing keys
   */
  async getAll(
    config?: AxiosRequestConfig
  ): Promise<operations.GetSigningKeysResponse> {
    const baseURL: string = utils.templateUrl(
      this.sdkConfiguration.serverURL,
      this.sdkConfiguration.serverDefaults
    );
    const operationUrl: string =
      baseURL.replace(/\/$/, "") + "/access-control/signing-key";
    const client: AxiosInstance = this.sdkConfiguration.defaultClient;
    let globalSecurity = this.sdkConfiguration.security;
    if (typeof globalSecurity === "function") {
      globalSecurity = await globalSecurity();
    }
    if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
      globalSecurity = new components.Security(globalSecurity);
    }
    const properties = utils.parseSecurityProperties(globalSecurity);
    const headers: RawAxiosRequestHeaders = {
      ...config?.headers,
      ...properties.headers,
    };
    headers["Accept"] = "application/json";

    headers["user-agent"] = this.sdkConfiguration.userAgent;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: operationUrl,
      method: "get",
      headers: headers,
      responseType: "arraybuffer",
      ...config,
    });

    const responseContentType: string =
      httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetSigningKeysResponse =
      new operations.GetSigningKeysResponse({
        statusCode: httpRes.status,
        contentType: responseContentType,
        rawResponse: httpRes,
      });
    const decodedRes = new TextDecoder().decode(httpRes?.data);
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(responseContentType, `application/json`)) {
          res.classes = [];
          const resFieldDepth: number = utils.getResFieldDepth(res);
          res.classes = utils.objectToClass(
            JSON.parse(decodedRes),
            components.SigningKey,
            resFieldDepth
          );
        } else {
          throw new errors.SDKError(
            "unknown content-type received: " + responseContentType,
            httpRes.status,
            decodedRes,
            httpRes
          );
        }
        break;
      case (httpRes?.status >= 400 && httpRes?.status < 500) ||
        (httpRes?.status >= 500 && httpRes?.status < 600):
        throw new errors.SDKError(
          "API error occurred",
          httpRes.status,
          decodedRes,
          httpRes
        );
    }

    return res;
  }
}
