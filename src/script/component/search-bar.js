class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                .container {
                    display: flex;
                    justify-content: space-between;
                    position: sticky;
                    top: 10px;
                }
                
                .box {
                    width: 400px;
                    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
                    padding: 10px;
                    border-radius: 5px;
                    background-color: white;
                }
                
                .box>input {
                    width: 75%;
                    padding: 16px;
                    border: 0;
                    border-bottom: 1px solid #A27B5C;
                    font-weight: bold;
                }
                
                .box>input:focus {
                    outline: 0;
                    border-bottom: 2px solid #A27B5C;
                }
                
                .box>input:focus::placeholder {
                    font-weight: bold;
                }
                
                .box>input::placeholder {
                    color: #A27B5C;
                    font-weight: normal;
                }
                
                .box>button {
                    width: 23%;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 16px;
                    background-color: #A27B5C;
                    color: white;
                    border: 0;
                    text-transform: uppercase;
                }
                
                @media screen and (max-width: 550px) {
                    .box {
                        flex-direction: column;
                        position: static;
                    }
                    .box>input {
                        width: 100%;
                        margin-bottom: 12px;
                    }
                    .box>button {
                        width: 100%;
                    }
                }
            </style>
             <div id="search-container" class="container">
                <dic class="box">
                    <h3>Kategori</h3>
                </dic>
                <dic class="box">
                    <input placeholder="Search meal" id="searchElement" type="search">
                    <button id="searchButtonElement" type="submit">Search</button>
                </dic>
            </div>
        `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);