import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for top-level Blog Page
const Blog = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <h1>${entry.getIn(['data', 'title'], null)}</h1>
        ${this.props.widgetFor('body')}
        <hr/>

        <!-- Article List Placeholder (for illustrative purposes) -->
        <section>
          <article class="article-card article-card--tags">
            <a class="article-card__link" href="#">
              <h5 class="article-card__title">Placeholder Article</h5>
              <p class="article-card__summary">
                This is not a real article and is only visible in the CMS.
              </p>
              <p class="tag-list">
                <a class="tag" href="#" rel="tag">Politics</a>
                <a class="tag" href="#" rel="tag">Philosophy</a>
                <a class="tag" href="#" rel="tag">Technology</a>
              </p>
            </a>
          </article>
          <article class="article-card article-card--tags">
            <a class="article-card__link" href="#">
              <h5 class="article-card__title">Placeholder Article</h5>
              <p class="article-card__summary">
                This is not a real article and is only visible in the CMS.
              </p>
              <p class="tag-list">
                <a class="tag" href="#" rel="tag">Politics</a>
                <a class="tag" href="#" rel="tag">Philosophy</a>
                <a class="tag" href="#" rel="tag">Technology</a>
              </p>
            </a>
          </article>
        </section>
      </main>
    `;
  },
});

export default Blog;
