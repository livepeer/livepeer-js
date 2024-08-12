/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assetCreate } from "../funcs/assetCreate.js";
import { assetCreateViaUrl } from "../funcs/assetCreateViaUrl.js";
import { assetDelete } from "../funcs/assetDelete.js";
import { assetGet } from "../funcs/assetGet.js";
import { assetGetAll } from "../funcs/assetGetAll.js";
import { assetUpdate } from "../funcs/assetUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Asset extends ClientSDK {
    /**
     * Retrieve assets
     */
    async getAll(options?: RequestOptions): Promise<operations.GetAssetsResponse> {
        return unwrapAsync(assetGetAll(this, options));
    }

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
     *
     * ## Direct Upload
     * For a direct upload, make a PUT request to the URL received in the url
     * field of the response above, with the raw video file as the request
     * body. response above:
     *
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
     *
     */
    async create(
        request: components.NewAssetPayload,
        options?: RequestOptions
    ): Promise<operations.RequestUploadResponse> {
        return unwrapAsync(assetCreate(this, request, options));
    }

    /**
     * Upload asset via URL
     */
    async createViaUrl(
        request: components.NewAssetFromUrlPayload,
        options?: RequestOptions
    ): Promise<operations.UploadAssetResponse> {
        return unwrapAsync(assetCreateViaUrl(this, request, options));
    }

    /**
     * Retrieves an asset
     */
    async get(assetId: string, options?: RequestOptions): Promise<operations.GetAssetResponse> {
        return unwrapAsync(assetGet(this, assetId, options));
    }

    /**
     * Patch an asset
     */
    async update(
        assetId: string,
        assetPatchPayload: components.AssetPatchPayload,
        options?: RequestOptions
    ): Promise<operations.UpdateAssetResponse> {
        return unwrapAsync(assetUpdate(this, assetId, assetPatchPayload, options));
    }

    /**
     * Delete an asset
     */
    async delete(
        assetId: string,
        options?: RequestOptions
    ): Promise<operations.DeleteAssetResponse> {
        return unwrapAsync(assetDelete(this, assetId, options));
    }
}
