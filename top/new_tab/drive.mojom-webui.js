// chrome/browser/new_tab_page/modules/drive/drive.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { UrlSpec as url_mojom_UrlSpec } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export class DriveHandlerPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'drive.mojom.DriveHandler', scope);
    }
}
export class DriveHandlerRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(DriveHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    getFiles() {
        return this.proxy.sendMessage(629233276, DriveHandler_GetFiles_ParamsSpec.$, DriveHandler_GetFiles_ResponseParamsSpec.$, []);
    }
    dismissModule() {
        this.proxy.sendMessage(1096216357, DriveHandler_DismissModule_ParamsSpec.$, null, []);
    }
    restoreModule() {
        this.proxy.sendMessage(165547078, DriveHandler_RestoreModule_ParamsSpec.$, null, []);
    }
}
;
/**
 * An object which receives request messages for the DriveHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export class DriveHandlerReceiver {
    constructor(impl) {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(DriveHandlerRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.helper_internal_.registerHandler(629233276, DriveHandler_GetFiles_ParamsSpec.$, DriveHandler_GetFiles_ResponseParamsSpec.$, impl.getFiles.bind(impl));
        this.helper_internal_.registerHandler(1096216357, DriveHandler_DismissModule_ParamsSpec.$, null, impl.dismissModule.bind(impl));
        this.helper_internal_.registerHandler(165547078, DriveHandler_RestoreModule_ParamsSpec.$, null, impl.restoreModule.bind(impl));
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
}
export class DriveHandler {
    static get $interfaceName() {
        return "drive.mojom.DriveHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new DriveHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
/**
 * An object which receives request messages for the DriveHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export class DriveHandlerCallbackRouter {
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(DriveHandlerRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.getFiles =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(629233276, DriveHandler_GetFiles_ParamsSpec.$, DriveHandler_GetFiles_ResponseParamsSpec.$, this.getFiles.createReceiverHandler(true /* expectsResponse */));
        this.dismissModule =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1096216357, DriveHandler_DismissModule_ParamsSpec.$, null, this.dismissModule.createReceiverHandler(false /* expectsResponse */));
        this.restoreModule =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(165547078, DriveHandler_RestoreModule_ParamsSpec.$, null, this.restoreModule.createReceiverHandler(false /* expectsResponse */));
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
}
export const FileSpec = { $: {} };
export const DriveHandler_GetFiles_ParamsSpec = { $: {} };
export const DriveHandler_GetFiles_ResponseParamsSpec = { $: {} };
export const DriveHandler_DismissModule_ParamsSpec = { $: {} };
export const DriveHandler_RestoreModule_ParamsSpec = { $: {} };
mojo.internal.Struct(FileSpec.$, 'File', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('justificationText', 8, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('mimeType', 16, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('title', 24, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('itemUrl', 32, 0, url_mojom_UrlSpec.$, null, false /* nullable */, 0),
], [[0, 48],]);
mojo.internal.Struct(DriveHandler_GetFiles_ParamsSpec.$, 'DriveHandler_GetFiles_Params', [], [[0, 8],]);
mojo.internal.Struct(DriveHandler_GetFiles_ResponseParamsSpec.$, 'DriveHandler_GetFiles_ResponseParams', [
    mojo.internal.StructField('files', 0, 0, mojo.internal.Array(FileSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(DriveHandler_DismissModule_ParamsSpec.$, 'DriveHandler_DismissModule_Params', [], [[0, 8],]);
mojo.internal.Struct(DriveHandler_RestoreModule_ParamsSpec.$, 'DriveHandler_RestoreModule_Params', [], [[0, 8],]);