// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import{mojo}from"//resources/mojo/mojo/public/js/bindings.js";export const MAX_URL_CHARS=2097152;export const UrlSpec={$:{}};mojo.internal.Struct(UrlSpec.$,"Url",[mojo.internal.StructField("url",0,0,mojo.internal.String,null,false,0)],[[0,16]]);export class Url{constructor(){this.url}}