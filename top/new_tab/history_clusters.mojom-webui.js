// chrome/browser/new_tab_page/modules/history_clusters/history_clusters.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { mojo } from '//resources/mojo/mojo/public/js/bindings.js';
import { CartSpec as ntp_historyClusters_cart_mojom_CartSpec } from './cart.mojom-webui.js';
import { DiscountSpec as ntp_historyClusters_discount_mojom_DiscountSpec } from './discount.mojom-webui.js';
import { ClusterSpec as historyClusters_mojom_ClusterSpec, URLVisitSpec as historyClusters_mojom_URLVisitSpec } from './history_cluster_types.mojom-webui.js';
import { LayoutTypeSpec as ntp_historyClusters_mojom_LayoutTypeSpec } from './history_clusters_layout_type.mojom-webui.js';
import { UrlSpec as url_mojom_UrlSpec } from '//resources/mojo/url/mojom/url.mojom-webui.js';
export class PageHandlerPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'ntp.history_clusters.mojom.PageHandler', scope);
    }
}
export class PageHandlerRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    getClusters() {
        return this.proxy.sendMessage(1833237246, PageHandler_GetClusters_ParamsSpec.$, PageHandler_GetClusters_ResponseParamsSpec.$, []);
    }
    getCartForCluster(cluster) {
        return this.proxy.sendMessage(374277123, PageHandler_GetCartForCluster_ParamsSpec.$, PageHandler_GetCartForCluster_ResponseParamsSpec.$, [
            cluster
        ]);
    }
    getDiscountsForCluster(cluster) {
        return this.proxy.sendMessage(1336441948, PageHandler_GetDiscountsForCluster_ParamsSpec.$, PageHandler_GetDiscountsForCluster_ResponseParamsSpec.$, [
            cluster
        ]);
    }
    showJourneysSidePanel(query) {
        this.proxy.sendMessage(1155722897, PageHandler_ShowJourneysSidePanel_ParamsSpec.$, null, [
            query
        ]);
    }
    openUrlsInTabGroup(urls, tabGroupName) {
        this.proxy.sendMessage(1996334493, PageHandler_OpenUrlsInTabGroup_ParamsSpec.$, null, [
            urls,
            tabGroupName
        ]);
    }
    dismissCluster(visits, clusterId) {
        this.proxy.sendMessage(1397200182, PageHandler_DismissCluster_ParamsSpec.$, null, [
            visits,
            clusterId
        ]);
    }
    recordClick(clusterId) {
        this.proxy.sendMessage(1416077403, PageHandler_RecordClick_ParamsSpec.$, null, [
            clusterId
        ]);
    }
    recordDisabled(clusterId) {
        this.proxy.sendMessage(296266732, PageHandler_RecordDisabled_ParamsSpec.$, null, [
            clusterId
        ]);
    }
    recordLayoutTypeShown(layoutType, clusterId) {
        this.proxy.sendMessage(1752400673, PageHandler_RecordLayoutTypeShown_ParamsSpec.$, null, [
            layoutType,
            clusterId
        ]);
    }
}
;
/**
 * An object which receives request messages for the PageHandler
 * mojom interface. Must be constructed over an object which implements that
 * interface.
 */
export class PageHandlerReceiver {
    constructor(impl) {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageHandlerRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.helper_internal_.registerHandler(1833237246, PageHandler_GetClusters_ParamsSpec.$, PageHandler_GetClusters_ResponseParamsSpec.$, impl.getClusters.bind(impl));
        this.helper_internal_.registerHandler(374277123, PageHandler_GetCartForCluster_ParamsSpec.$, PageHandler_GetCartForCluster_ResponseParamsSpec.$, impl.getCartForCluster.bind(impl));
        this.helper_internal_.registerHandler(1336441948, PageHandler_GetDiscountsForCluster_ParamsSpec.$, PageHandler_GetDiscountsForCluster_ResponseParamsSpec.$, impl.getDiscountsForCluster.bind(impl));
        this.helper_internal_.registerHandler(1155722897, PageHandler_ShowJourneysSidePanel_ParamsSpec.$, null, impl.showJourneysSidePanel.bind(impl));
        this.helper_internal_.registerHandler(1996334493, PageHandler_OpenUrlsInTabGroup_ParamsSpec.$, null, impl.openUrlsInTabGroup.bind(impl));
        this.helper_internal_.registerHandler(1397200182, PageHandler_DismissCluster_ParamsSpec.$, null, impl.dismissCluster.bind(impl));
        this.helper_internal_.registerHandler(1416077403, PageHandler_RecordClick_ParamsSpec.$, null, impl.recordClick.bind(impl));
        this.helper_internal_.registerHandler(296266732, PageHandler_RecordDisabled_ParamsSpec.$, null, impl.recordDisabled.bind(impl));
        this.helper_internal_.registerHandler(1752400673, PageHandler_RecordLayoutTypeShown_ParamsSpec.$, null, impl.recordLayoutTypeShown.bind(impl));
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
}
export class PageHandler {
    static get $interfaceName() {
        return "ntp.history_clusters.mojom.PageHandler";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageHandlerRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
/**
 * An object which receives request messages for the PageHandler
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
export class PageHandlerCallbackRouter {
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageHandlerRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.getClusters =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1833237246, PageHandler_GetClusters_ParamsSpec.$, PageHandler_GetClusters_ResponseParamsSpec.$, this.getClusters.createReceiverHandler(true /* expectsResponse */));
        this.getCartForCluster =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(374277123, PageHandler_GetCartForCluster_ParamsSpec.$, PageHandler_GetCartForCluster_ResponseParamsSpec.$, this.getCartForCluster.createReceiverHandler(true /* expectsResponse */));
        this.getDiscountsForCluster =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1336441948, PageHandler_GetDiscountsForCluster_ParamsSpec.$, PageHandler_GetDiscountsForCluster_ResponseParamsSpec.$, this.getDiscountsForCluster.createReceiverHandler(true /* expectsResponse */));
        this.showJourneysSidePanel =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1155722897, PageHandler_ShowJourneysSidePanel_ParamsSpec.$, null, this.showJourneysSidePanel.createReceiverHandler(false /* expectsResponse */));
        this.openUrlsInTabGroup =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1996334493, PageHandler_OpenUrlsInTabGroup_ParamsSpec.$, null, this.openUrlsInTabGroup.createReceiverHandler(false /* expectsResponse */));
        this.dismissCluster =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1397200182, PageHandler_DismissCluster_ParamsSpec.$, null, this.dismissCluster.createReceiverHandler(false /* expectsResponse */));
        this.recordClick =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1416077403, PageHandler_RecordClick_ParamsSpec.$, null, this.recordClick.createReceiverHandler(false /* expectsResponse */));
        this.recordDisabled =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(296266732, PageHandler_RecordDisabled_ParamsSpec.$, null, this.recordDisabled.createReceiverHandler(false /* expectsResponse */));
        this.recordLayoutTypeShown =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1752400673, PageHandler_RecordLayoutTypeShown_ParamsSpec.$, null, this.recordLayoutTypeShown.createReceiverHandler(false /* expectsResponse */));
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
export const PageHandler_GetClusters_ParamsSpec = { $: {} };
export const PageHandler_GetClusters_ResponseParamsSpec = { $: {} };
export const PageHandler_GetCartForCluster_ParamsSpec = { $: {} };
export const PageHandler_GetCartForCluster_ResponseParamsSpec = { $: {} };
export const PageHandler_GetDiscountsForCluster_ParamsSpec = { $: {} };
export const PageHandler_GetDiscountsForCluster_ResponseParamsSpec = { $: {} };
export const PageHandler_ShowJourneysSidePanel_ParamsSpec = { $: {} };
export const PageHandler_OpenUrlsInTabGroup_ParamsSpec = { $: {} };
export const PageHandler_DismissCluster_ParamsSpec = { $: {} };
export const PageHandler_RecordClick_ParamsSpec = { $: {} };
export const PageHandler_RecordDisabled_ParamsSpec = { $: {} };
export const PageHandler_RecordLayoutTypeShown_ParamsSpec = { $: {} };
mojo.internal.Struct(PageHandler_GetClusters_ParamsSpec.$, 'PageHandler_GetClusters_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_GetClusters_ResponseParamsSpec.$, 'PageHandler_GetClusters_ResponseParams', [
    mojo.internal.StructField('clusters', 0, 0, mojo.internal.Array(historyClusters_mojom_ClusterSpec.$, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetCartForCluster_ParamsSpec.$, 'PageHandler_GetCartForCluster_Params', [
    mojo.internal.StructField('cluster', 0, 0, historyClusters_mojom_ClusterSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetCartForCluster_ResponseParamsSpec.$, 'PageHandler_GetCartForCluster_ResponseParams', [
    mojo.internal.StructField('cart', 0, 0, ntp_historyClusters_cart_mojom_CartSpec.$, null, true /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetDiscountsForCluster_ParamsSpec.$, 'PageHandler_GetDiscountsForCluster_Params', [
    mojo.internal.StructField('cluster', 0, 0, historyClusters_mojom_ClusterSpec.$, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_GetDiscountsForCluster_ResponseParamsSpec.$, 'PageHandler_GetDiscountsForCluster_ResponseParams', [
    mojo.internal.StructField('discounts', 0, 0, mojo.internal.Map(url_mojom_UrlSpec.$, mojo.internal.Array(ntp_historyClusters_discount_mojom_DiscountSpec.$, false), false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ShowJourneysSidePanel_ParamsSpec.$, 'PageHandler_ShowJourneysSidePanel_Params', [
    mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenUrlsInTabGroup_ParamsSpec.$, 'PageHandler_OpenUrlsInTabGroup_Params', [
    mojo.internal.StructField('urls', 0, 0, mojo.internal.Array(url_mojom_UrlSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('tabGroupName', 8, 0, mojo.internal.String, null, true /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_DismissCluster_ParamsSpec.$, 'PageHandler_DismissCluster_Params', [
    mojo.internal.StructField('visits', 0, 0, mojo.internal.Array(historyClusters_mojom_URLVisitSpec.$, false), null, false /* nullable */, 0),
    mojo.internal.StructField('clusterId', 8, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_RecordClick_ParamsSpec.$, 'PageHandler_RecordClick_Params', [
    mojo.internal.StructField('clusterId', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordDisabled_ParamsSpec.$, 'PageHandler_RecordDisabled_Params', [
    mojo.internal.StructField('clusterId', 0, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordLayoutTypeShown_ParamsSpec.$, 'PageHandler_RecordLayoutTypeShown_Params', [
    mojo.internal.StructField('layoutType', 0, 0, ntp_historyClusters_mojom_LayoutTypeSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('clusterId', 8, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
], [[0, 24],]);
