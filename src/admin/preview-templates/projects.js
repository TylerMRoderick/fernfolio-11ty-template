import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for top-level Projects Page
const Projects = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main>
        <h1>${entry.getIn(['data', 'title'], null)}</h1>
        <p>${entry.getIn(['data', 'subtitle'], null)}</p>
        <hr/>

        ${this.props.widgetFor('body')}

        <!-- Project List Placeholder (for illustrative purposes) -->
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
      </main>
    `;
  },
});

export default Projects;
