import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Settings');
  }

  async getHtml() {
    return `
            <h1>Settings</h1>
            <p>
                This is a cool text that is beign passed in the dom
            </p>
            <a href="/posts" class="nav__link" data-link>Posts</a>
            <p>
        </p>
        `;
  }
}
