/*
 * Copyright 2019 André Schepers
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.js'
import './css/index.css';
import store from './store';
import 'font-awesome/css/font-awesome.min.css'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
document.getElementById('root')
);
