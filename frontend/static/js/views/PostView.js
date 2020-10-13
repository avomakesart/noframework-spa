import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Viewing Post');
  }

  async getHtml() {
    return `
            <h1>Posts</h1>
            <p>
                This is a cool text that is beign passed in the dom
            </p>
            <a href="/" class="nav__link" data-link>Home</a>
            <p>
        </p>
        `;
  }
}
