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
          <article class="article-card">
            <h5>
              <a class="article-card__title" href="#">
                Placeholder Article
              </a>
            </h5>
            <p class="article-card__summary">
              This is not a real article and is only visible in the CMS.
            </p>
            <p class="tag-list">
              <a class="tag" href="#" rel="tag">Politics</a>
              <a class="tag" href="#" rel="tag">Philosophy</a>
              <a class="tag" href="#" rel="tag">Technology</a>
            </p>
          </article>
          <article class="article-card">
            <h5>
              <a class="article-card__title" href="#">
                Another Placeholder
              </a>
            </h5>
            <p class="article-card__summary">
              This is the summary for the second placeholder article.
            </p>
            <p class="tag-list">
              <a class="tag" href="#" rel="tag">Sports</a>
              <a class="tag" href="#" rel="tag">Technology</a>
            </p>
          </article>
        </section>
      </main>
    `;
  },
});

export default Blog;
