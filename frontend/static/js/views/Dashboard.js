import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dasboard');
  }

  async getHtml() {
    return `
            <h1>Welcome back, Dom</h1>
            <p>
                This is a cool text that is beign passed in the dom
            </p>
            <a href="/posts" class="nav__link" data-link>View recent posts</a>
            <p>
        </p>
        `;
  }
}
