import htm from 'https://unpkg.com/htm?module';
import format from 'https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module';

const html = htm.bind(h);

// Preview component for a Project
const Project = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <div class="page-container">
        <h1>
          <span class="project-card__emoji">${entry.getIn(['data', 'emoji'], null)}</span>
          ${entry.getIn(['data', 'title'], null)}
        </h1>
        <hr/>

        ${this.props.widgetFor('body')}

        <nav>
          <a href="#">← View All Projects</a>
        </nav>
      </div>
    `;
  },
});

export default Project;
