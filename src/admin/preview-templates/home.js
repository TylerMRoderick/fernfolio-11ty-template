import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for the Home page
const Home = createClass({
  render() {
    const entry = this.props.entry;
    const image = entry.getIn(['data', 'image']);
    const imageSrc = this.props.getAsset(image);

    return html`
      <main>
        <div class="home-page">
          <div class="home-page__bg-square"></div>

          <!-- Hero -->
          <div class="hero">
            <div class="hero__col">
              <h1 class="hero__title gradient-text">${entry.getIn(['data', 'title'], null)}</h1>
              <div class="hero__body">${this.props.widgetFor('body')}</div>
            </div>
            <div class="hero__col">
              <img
                class="hero__image shadow"
                src="${imageSrc}"
                alt="${entry.getIn(['data', 'image_alt'], null)}"
                width="1000px"
                height="1000px"
                loading="lazy" />
            </div>
          </div>

          <!-- Project List Placeholder (for illustrative purposes) -->
          <div class="list-header">
            <h2 class="list-header__title">Projects</h2>
            <a class="btn btn--outline btn--sm" href="/projects">View All</a>
          </div>
          <section>
            <div class="project-grid">
              <div class="project-card">
                <h4>
                  <a class="project-card__title" href="#">
                    <span class="project-card__emoji">👾</span>
                    Placeholder Project
                  </a>
                </h4>
                <p>This is not a real project and is only visible in the CMS.</p>
                <p class="tag-list">
                  <a class="project-card__tag tag" href="#" rel="tag">Javascript</a>
                  <a class="project-card__tag tag" href="#" rel="tag">React</a>
                </p>
              </div>
              <div class="project-card">
                <h4>
                  <a class="project-card__title" href="#">
                    <span class="project-card__emoji">👾</span>
                    Another Placeholder
                  </a>
                </h4>
                <p>This is the summary for the second placeholder project.</p>
                <p class="tag-list">
                  <a class="project-card__tag tag" href="#" rel="tag">Golang</a>
                  <a class="project-card__tag tag" href="#" rel="tag">GraphQL</a>
                </p>
              </div>
            </div>
          </section>


          <!-- Article List Placeholder (for illustrative purposes) -->
          <div class="list-header">
            <h2 class="list-header__title">Articles</h2>
            <a class="btn btn--outline btn--sm" href="/blog">View All</a>
          </div>
          <section>
            <article class="article-card">
              <a class="article-card__link" href="#">
                <h5 class="article-card__title">Placeholder Article</h5>
                <p class="article-card__summary">
                  This is not a real article and is only visible in the CMS.
                </p>
              </a>
            </article>
            <article class="article-card">
              <a class="article-card__link" href="#">
                <h5 class="article-card__title">Placeholder Article</h5>
                <p class="article-card__summary">
                  This is not a real article and is only visible in the CMS.
                </p>
              </a>
            </article>
          </section>
        </div>
      </main>
    `;
  },
});

export default Home;
