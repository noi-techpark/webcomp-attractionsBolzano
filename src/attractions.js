// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

const data = require("./data.json");

class AttractionsPage extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.render();
	}

	render() {
		let attractions = "";
		for (let i in data.attractions) {
			let attr = data.attractions[i];
			attractions += `<div class="attraction-item"><img src="`+attr.img+`"><h3>`+attr.title+`</h3><p>`+attr.descr+`</p><button onclick="window.location.href='`+attr.locationEmbed+`'">Get There</button></div>`;
		}
		this.shadow.innerHTML = `
			<style>
				:host {
					display: block;
					font-family: 'Poppins', sans-serif;
				}

				.attractions-section {
					padding: 50px 20px;
					background-color: #f8f8f8;
					text-align: center;
				}

				.attractions-section h2 {
					font-size: 36px;
					margin-bottom: 30px;
					color: #333;
					font-weight: bold;
					text-transform: uppercase;
					letter-spacing: 2px;
					text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
					border-bottom: 2px solid #333;
					padding-bottom: 8px;
				}

				.attractions-list {
					display: flex;
					justify-content: space-around;
					flex-wrap: wrap;
					gap: 20px;
				}

				.attraction-item {
					background-color: #fff;
					border-radius: 10px;
					box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
					overflow: hidden;
					width: 300px;
					padding: 20px;
					text-align: center;
				}

				.attraction-item img {
					width: 100%;
					height: 200px;
					object-fit: cover;
					margin-bottom: 20px;
				}

				.attraction-item h3 {
					font-size: 24px;
					margin: 0 0 10px;
					color: #333;
				}

				.attraction-item button {
					background-color: #4CAF50;
					color: white;
					border: none;
					padding: 10px 20px;
					font-size: 16px;
					border-radius: 5px;
					cursor: pointer;
					transition: background-color 0.3s ease;
				}

				.attraction-item button:hover {
					background-color: #45a049;
				}
			</style>

			<section class="attractions-section">
				<h2>Cultural Attractions</h2>
				<div class="attractions-list">`+attractions+`</div>
			</section>
		`;
	}
}

customElements.define('attractions-page', AttractionsPage);
