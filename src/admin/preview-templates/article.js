import htm from 'https://unpkg.com/htm?module';
import format from 'https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module';

const html = htm.bind(h);

// Preview component for an Article
const Article = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <article>
          <h1>${entry.getIn(['data', 'title'], null)}</h1>
          <p>
            <small>
              <time
                >${format(
                  entry.getIn(['data', 'date'], new Date()),
                  'MMMM dd, yyyy'
                )}</time
              >
            </small>
          </p>
          <hr />

          ${this.props.widgetFor('body')}
          <p class="tag-list">
            ${entry
              .getIn(['data', 'tags'], [])
              .map((tag) => html` <a class="tag" href="#" rel="tag">${tag}</a> `)}
          </p>
        </article>
      </main>
    `;
  },
});

export default Article;
