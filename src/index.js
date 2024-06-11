// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import './attractions.js';
import './ski.js';
import './camping.js';

class MainPage extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
		this.setupNavigation();
	}

	render() {
		this.shadowRoot.innerHTML = `
			<style>
				:host {
					font-family: 'Poppins', sans-serif;
					box-sizing: border-box;
					padding: 0;
					margin: 0;
				}

				.body {
					width: 100%;
					height: 90vh;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			</style>
			
				<attractions-page></attractions-page>
				<ski-resort-page></ski-resort-page>
				<camping-page></camping-page>
		`;
	}
}

customElements.define('webcomp-attractions-bolzano', MainPage);
