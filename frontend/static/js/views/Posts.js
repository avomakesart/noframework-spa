import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }

  async getHtml() {
    return `
            <h1>Posts</h1>
            <p>
                This is a cool text that is beign passed in the dom
            </p>
            <a href="/" class="nav__link" data-link>Home</a>
            <a href="/posts/1" class="nav__link" data-link>Post One</a>
            <a href="/posts/2" class="nav__link" data-link>Post two</a>
            <a href="/posts/3" class="nav__link" data-link>Post three</a>
            <p>
        </p>
        `;
  }
}
