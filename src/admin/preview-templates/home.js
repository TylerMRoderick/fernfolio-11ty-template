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
              <p class="hero__subtitle">${entry.getIn(['data', 'subtitle'], null)}</p>
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
        </div>
      </main>
    `;
  },
});

export default Home;
