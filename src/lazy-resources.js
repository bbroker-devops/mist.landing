// <!--
// @license
// Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
// This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
// The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
// The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
// Code distributed by Google as part of the polymer project is also
// subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
// -->

// <!-- landing-app -->
// <!-- <script type="module" src="../node_modules/@polymer/app-layout/app-drawer/app-drawer.js"></script>
// <script type="module" src="../node_modules/@polymer/paper-icon-button/paper-icon-button.js"></script>
// <script type="module" src="./landing-icons.js"></script>
// <script type="module" src="./landing-snackbar.js"></script>
// <script type="module" src="./landing-tabs.js"></script>
// <script type="module" src="./landing-tab.js"></script>
// <script type="module" src="./landing-set-password.js"></script>
// <script type="module" src="./landing-reset-password.js"></script> -->

// <!-- landing-home -->

// <!-- landing-list -->
// <!-- landing-detail -->
// <script type="module" src="./landing-network-warning.js"></script>
// <script type="module" src="./landing-not-found.js"></script>
// <script type="module" src="./landing-error.js"></script> 

import '../node_modules/@polymer/polymer/polymer-legacy.js';
import { Polymer } from '../node_modules/@polymer/polymer/lib/legacy/polymer-fn.js';

import "../node_modules/@polymer/app-layout/app-drawer/app-drawer.js"
import "../node_modules/@polymer/paper-icon-button/paper-icon-button.js"
import "./landing-icons.js"
import "./landing-snackbar.js"
import "./landing-tabs.js"
import "./landing-tab.js"
import "./landing-set-password.js"
import "./landing-reset-password.js"

import "./landing-network-warning.js"
import "./landing-not-found.js"
import "./landing-error.js"

Polymer({
    is: 'lazy-resources'
});