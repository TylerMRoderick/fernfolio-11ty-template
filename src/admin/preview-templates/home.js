import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for the Home page
const Home = createClass({
  render() {
    const entry = this.props.entry;

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
                src="${entry.getIn(['data', 'image'], null)}"
                alt="${entry.getIn(['data', 'image_alt'], null)}"
                width="1000px"
                height="1000px"
                loading="lazy" />
            </div>
          </div>

          <!-- Project List Placeholder (for illustrative purposes) -->
          <hr/>
          <h2>Projects</h2>
          <section>
            <div class="project-grid">
              <div class="project-card">
                <h5>
                  <a class="project-card__title" href="#">
                    <span class="project-card__emoji">👾</span>
                    Placeholder Project
                  </a>
                </h5>
                <p>This is not a real project and is only visible in the CMS.</p>
                <p class="tag-list">
                  <a class="project-card__tag tag" href="#" rel="tag">Javascript</a>
                  <a class="project-card__tag tag" href="#" rel="tag">React</a>
                </p>
              </div>
              <div class="project-card">
                <h5>
                  <a class="project-card__title" href="#">
                    <span class="project-card__emoji">👾</span>
                    Another Placeholder
                  </a>
                </h5>
                <p>This is the summary for the second placeholder project.</p>
                <p class="tag-list">
                  <a class="project-card__tag tag" href="#" rel="tag">Golang</a>
                  <a class="project-card__tag tag" href="#" rel="tag">GraphQL</a>
                </p>
              </div>
            </div>
          </section>


          <!-- Article List Placeholder (for illustrative purposes) -->
          <hr/>
          <h2>Articles</h2>
          <section>
            <article class="article-card">
              <a class="article-card__link" href="#">
                <h6 class="article-card__title">Placeholder Article</h6>
                <p class="article-card__summary">
                  This is not a real article and is only visible in the CMS.
                </p>
              </a>
            </article>
            <article class="article-card">
              <a class="article-card__link" href="#">
                <h6 class="article-card__title">Placeholder Article</h6>
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
