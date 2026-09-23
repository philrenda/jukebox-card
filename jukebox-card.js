// ─────────────────────────────────────────────────────────────────
//  Jukebox Card v2.1.0 — Zero-config, self-service station management
//  + Cast speaker tracking, Alexa TuneIn, custom image upload
// ─────────────────────────────────────────────────────────────────

// ── Built-in Default Stations ──────────────────────────────────
// SomaFM stations use CDN logos; all others use hash-color fallback.
const DEFAULT_STATIONS = [
  {
    name: 'Alternative',
    stations: [
      { name: 'KEXP 90.3', url: 'https://kexp-mp3-128.streamguys1.com/kexp128.mp3' },
      { name: 'Indie Pop Rocks', url: 'https://ice5.somafm.com/indiepop-128-mp3', logo: 'https://api.somafm.com/logos/256/indiepop256.png' },
      { name: 'Underground 80s', url: 'https://ice5.somafm.com/u80s-128-mp3', logo: 'https://api.somafm.com/logos/256/u80s256.png' },
      { name: 'Lush', url: 'https://ice5.somafm.com/lush-128-mp3', logo: 'https://api.somafm.com/logos/256/lush256.png' },
      { name: 'Fluid', url: 'https://ice5.somafm.com/fluid-128-mp3', logo: 'https://api.somafm.com/logos/256/fluid256.png' },
      { name: 'Seven Inch Soul', url: 'https://ice5.somafm.com/7soul-128-mp3', logo: 'https://api.somafm.com/logos/256/7soul256.png' },
      { name: 'Folk Forward', url: 'https://ice5.somafm.com/folkfwd-128-mp3', logo: 'https://api.somafm.com/logos/256/folkfwd256.png' },
      { name: 'Digitalis', url: 'https://ice5.somafm.com/digitalis-128-mp3', logo: 'https://api.somafm.com/logos/256/digitalis256.png' },
      { name: 'Suburbs of Goa', url: 'https://ice5.somafm.com/suburbsofgoa-128-mp3', logo: 'https://api.somafm.com/logos/256/suburbsofgoa256.png' },
      { name: 'BAGeL Radio', url: 'https://ice5.somafm.com/bagel-128-mp3', logo: 'https://api.somafm.com/logos/256/bagel256.png' },
      { name: 'Black Rock FM', url: 'https://ice5.somafm.com/brfm-128-mp3', logo: 'https://api.somafm.com/logos/256/brfm256.png' },
      { name: 'PopTron', url: 'https://ice5.somafm.com/poptron-128-mp3', logo: 'https://api.somafm.com/logos/256/poptron256.png' },
    ]
  },
  {
    name: 'Rock',
    stations: [
      { name: 'Radio Paradise Rock', url: 'http://stream.radioparadise.com/rock-flac' },
      { name: 'Radio Paradise Main', url: 'http://stream-uk1.radioparadise.com/aac-320' },
      { name: 'Left Coast 70s', url: 'https://ice5.somafm.com/seventies-128-mp3', logo: 'https://api.somafm.com/logos/256/seventies256.png' },
      { name: 'Covers', url: 'https://ice5.somafm.com/covers-128-mp3', logo: 'https://api.somafm.com/logos/256/covers256.png' },
      { name: 'Boot Liquor', url: 'https://ice5.somafm.com/bootliquor-128-mp3', logo: 'https://api.somafm.com/logos/256/bootliquor256.png' },
      { name: 'ThistleRadio', url: 'https://ice5.somafm.com/thistle-128-mp3', logo: 'https://api.somafm.com/logos/256/thistle256.png' },
      { name: 'Sonic Universe', url: 'https://ice5.somafm.com/sonicuniverse-128-mp3', logo: 'https://api.somafm.com/logos/256/sonicuniverse256.png' },
      { name: 'Bossa Beyond', url: 'https://ice5.somafm.com/bossa-128-mp3', logo: 'https://api.somafm.com/logos/256/bossa256.png' },
    ]
  },
  {
    name: 'Metal',
    stations: [
      { name: 'Metal Detector', url: 'https://ice5.somafm.com/metal-128-mp3', logo: 'https://api.somafm.com/logos/256/metal256.png' },
      { name: 'Doomed', url: 'https://ice5.somafm.com/doomed-128-mp3', logo: 'https://api.somafm.com/logos/256/doomed256.png' },
      { name: 'DEF CON Radio', url: 'https://ice5.somafm.com/defcon-128-mp3', logo: 'https://api.somafm.com/logos/256/defcon256.png' },
      { name: 'Darksynth', url: 'https://stream.nightride.fm/darksynth.mp3' },
      { name: 'Horrorsynth', url: 'https://stream.nightride.fm/horrorsynth.mp3' },
      { name: 'EBSM', url: 'https://stream.nightride.fm/ebsm.mp3' },
      { name: 'Spacesynth', url: 'https://stream.nightride.fm/spacesynth.mp3' },
      { name: 'Dark Zone', url: 'https://ice5.somafm.com/darkzone-128-mp3', logo: 'https://api.somafm.com/logos/256/darkzone256.png' },
    ]
  },
  {
    name: 'Pop',
    stations: [
      { name: 'The In-Sound', url: 'https://ice5.somafm.com/insound-128-mp3', logo: 'https://api.somafm.com/logos/256/insound256.png' },
      { name: 'ANTENNE Top 40', url: 'http://mp3channels.webradio.antenne.de:80/top-40' },
      { name: 'Secret Agent', url: 'https://ice5.somafm.com/secretagent-128-mp3', logo: 'https://api.somafm.com/logos/256/secretagent256.png' },
      { name: 'Covers', url: 'https://ice5.somafm.com/covers-128-mp3', logo: 'https://api.somafm.com/logos/256/covers256.png' },
      { name: 'Illinois St Lounge', url: 'https://ice5.somafm.com/illstreet-128-mp3', logo: 'https://api.somafm.com/logos/256/illstreet256.png' },
      { name: 'Tiki Time', url: 'https://ice5.somafm.com/tikitime-128-mp3', logo: 'https://api.somafm.com/logos/256/tikitime256.png' },
      { name: 'Seven Inch Soul', url: 'https://ice5.somafm.com/7soul-128-mp3', logo: 'https://api.somafm.com/logos/256/7soul256.png' },
      { name: 'Heavyweight Reggae', url: 'https://ice5.somafm.com/reggae-128-mp3', logo: 'https://api.somafm.com/logos/256/reggae256.png' },
    ]
  },
  {
    name: 'Lounge / Chill',
    stations: [
      { name: 'Groove Salad', url: 'https://ice5.somafm.com/groovesalad-256-mp3', logo: 'https://api.somafm.com/logos/256/groovesalad256.png' },
      { name: 'Lush', url: 'https://ice5.somafm.com/lush-128-mp3', logo: 'https://api.somafm.com/logos/256/lush256.png' },
      { name: 'Bossa Beyond', url: 'https://ice5.somafm.com/bossa-128-mp3', logo: 'https://api.somafm.com/logos/256/bossa256.png' },
      { name: 'Illinois St Lounge', url: 'https://ice5.somafm.com/illstreet-128-mp3', logo: 'https://api.somafm.com/logos/256/illstreet256.png' },
      { name: 'Secret Agent', url: 'https://ice5.somafm.com/secretagent-128-mp3', logo: 'https://api.somafm.com/logos/256/secretagent256.png' },
      { name: 'Suburbs of Goa', url: 'https://ice5.somafm.com/suburbsofgoa-128-mp3', logo: 'https://api.somafm.com/logos/256/suburbsofgoa256.png' },
      { name: 'Groove Salad Classic', url: 'https://ice5.somafm.com/gsclassic-128-mp3', logo: 'https://api.somafm.com/logos/256/gsclassic256.png' },
      { name: 'RP Mellow', url: 'http://stream.radioparadise.com/mellow-flac' },
    ]
  },
  {
    name: 'Sleep',
    stations: [
      { name: 'Drone Zone', url: 'https://ice5.somafm.com/dronezone-256-mp3', logo: 'https://api.somafm.com/logos/256/dronezone256.png' },
      { name: 'Sleeping Pill', url: 'http://radio.stereoscenic.com/asp-h' },
      { name: 'Sounds of Rain', url: 'http://radio.hearme.fm:8192/stream' },
      { name: 'Ocean Sounds', url: 'http://radio.hearme.fm:8162/stream' },
      { name: 'Deep Space One', url: 'https://ice5.somafm.com/deepspaceone-128-mp3', logo: 'https://api.somafm.com/logos/256/deepspaceone256.png' },
      { name: 'Dark Zone', url: 'https://ice5.somafm.com/darkzone-128-mp3', logo: 'https://api.somafm.com/logos/256/darkzone256.png' },
    ]
  },
  {
    name: 'House',
    stations: [
      { name: 'Beat Blender', url: 'https://ice5.somafm.com/beatblender-128-mp3', logo: 'https://api.somafm.com/logos/256/beatblender256.png' },
      { name: 'The Trip', url: 'https://ice5.somafm.com/thetrip-128-mp3', logo: 'https://api.somafm.com/logos/256/thetrip256.png' },
      { name: 'Frisky Deep', url: 'https://stream.deep.friskyradio.com/' },
      { name: 'Frisky Chill', url: 'https://stream.frisky.friskyradio.com/' },
      { name: 'Chillsynth', url: 'https://stream.nightride.fm/chillsynth.mp3' },
      { name: 'Lush', url: 'https://ice5.somafm.com/lush-128-mp3', logo: 'https://api.somafm.com/logos/256/lush256.png' },
      { name: 'Fluid', url: 'https://ice5.somafm.com/fluid-128-mp3', logo: 'https://api.somafm.com/logos/256/fluid256.png' },
      { name: 'Space Station', url: 'https://ice5.somafm.com/spacestation-128-mp3', logo: 'https://api.somafm.com/logos/256/spacestation256.png' },
    ]
  },
  {
    name: 'Tech House',
    stations: [
      { name: 'cliqhop idm', url: 'https://ice5.somafm.com/cliqhop-128-mp3', logo: 'https://api.somafm.com/logos/256/cliqhop256.png' },
      { name: 'Dub Step Beyond', url: 'https://ice5.somafm.com/dubstep-128-mp3', logo: 'https://api.somafm.com/logos/256/dubstep256.png' },
      { name: 'Rektory', url: 'https://stream.nightride.fm/rektory.mp3' },
      { name: 'Datawave', url: 'https://stream.nightride.fm/datawave.mp3' },
      { name: 'Vaporwaves', url: 'https://ice5.somafm.com/vaporwaves-128-mp3', logo: 'https://api.somafm.com/logos/256/vaporwaves256.png' },
      { name: 'Mission Control', url: 'https://ice5.somafm.com/missioncontrol-128-mp3', logo: 'https://api.somafm.com/logos/256/missioncontrol256.png' },
      { name: 'Deep Space One', url: 'https://ice5.somafm.com/deepspaceone-128-mp3', logo: 'https://api.somafm.com/logos/256/deepspaceone256.png' },
      { name: 'DEF CON Radio', url: 'https://ice5.somafm.com/defcon-128-mp3', logo: 'https://api.somafm.com/logos/256/defcon256.png' },
    ]
  },
  {
    name: '80s',
    stations: [
      { name: 'Underground 80s', url: 'https://ice5.somafm.com/u80s-128-mp3', logo: 'https://api.somafm.com/logos/256/u80s256.png' },
      { name: 'PopTron', url: 'https://ice5.somafm.com/poptron-128-mp3', logo: 'https://api.somafm.com/logos/256/poptron256.png' },
      { name: 'Seven Inch Soul', url: 'https://ice5.somafm.com/7soul-128-mp3', logo: 'https://api.somafm.com/logos/256/7soul256.png' },
      { name: 'Darksynth', url: 'https://stream.nightride.fm/darksynth.mp3' },
      { name: 'Chillsynth', url: 'https://stream.nightride.fm/chillsynth.mp3' },
      { name: 'Datawave', url: 'https://stream.nightride.fm/datawave.mp3' },
      { name: 'Spacesynth', url: 'https://stream.nightride.fm/spacesynth.mp3' },
      { name: 'Vaporwaves', url: 'https://ice5.somafm.com/vaporwaves-128-mp3', logo: 'https://api.somafm.com/logos/256/vaporwaves256.png' },
    ]
  },
];


// ── Card Editor ────────────────────────────────────────────────
class JukeboxCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._hass = null;
    this._activeTab = 'general';
    this._expandedCategory = -1;
    this._addingToCategory = null;
    this._addStationTab = 'explore';
    this._searchQuery = '';
    this._searchResults = [];
    this._searchLoading = false;
    this._searchTimeout = null;
    this._exploreView = 'home';
    this._exploreData = [];
    this._exploreLoading = false;
    this._exploreTitle = '';
    this._genreCache = null;
    this._countryCache = null;
    this._previewAudio = null;
  }

  connectedCallback() {
    this._render();
  }

  setConfig(config) {
    this._config = { ...config };
    this._render();
  }

  set hass(hass) {
    this._hass = hass;
  }

  // ── Helpers ──

  _esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  _hashColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${Math.abs(hash) % 360}, 40%, 30%)`;
  }

  _ensureCategories() {
    if (!this._config.categories) {
      this._config.categories = JSON.parse(JSON.stringify(DEFAULT_STATIONS));
    }
  }

  _fireConfigChanged() {
    const config = {};
    // Only include keys that have values
    if (this._config.type) config.type = this._config.type;
    if (this._config.columns !== undefined) config.columns = this._config.columns;
    if (this._config.tile_height !== undefined) config.tile_height = this._config.tile_height;
    if (this._config.speakers) config.speakers = this._config.speakers;
    if (this._config.categories) config.categories = this._config.categories;
    if (this._config.custom_logos) config.custom_logos = this._config.custom_logos;
    this.dispatchEvent(new CustomEvent('config-changed', {
      bubbles: true,
      composed: true,
      detail: { config }
    }));
  }

  _getWorkingCategories() {
    return this._config.categories || DEFAULT_STATIONS;
  }

  // ── Render ──

  _render() {
    if (!this.shadowRoot) return;

    // Save focus state
    const activeEl = this.shadowRoot.activeElement;
    const focusId = activeEl ? activeEl.getAttribute('data-focus-id') : null;
    const cursorPos = activeEl && activeEl.selectionStart !== undefined ? activeEl.selectionStart : null;

    this.shadowRoot.innerHTML = `
      <style>${this._getEditorStyles()}</style>
      <div class="editor">
        <div class="tabs">
          <div class="tab ${this._activeTab === 'general' ? 'active' : ''}" data-tab="general">General</div>
          <div class="tab ${this._activeTab === 'stations' ? 'active' : ''}" data-tab="stations">Stations</div>
        </div>
        <div class="tab-content">
          ${this._activeTab === 'general' ? this._renderGeneralTab() : this._renderStationsTab()}
        </div>
      </div>
    `;

    this._attachListeners();

    // Restore focus
    if (focusId) {
      const el = this.shadowRoot.querySelector(`[data-focus-id="${focusId}"]`);
      if (el) {
        el.focus();
        if (cursorPos !== null && el.setSelectionRange) {
          try { el.setSelectionRange(cursorPos, cursorPos); } catch (e) {}
        }
      }
    }

    // Scroll add-station panel into view
    if (this._addingToCategory !== null) {
      const panel = this.shadowRoot.querySelector('.add-station-panel');
      if (panel) {
        requestAnimationFrame(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }));
      }
    }
  }

  _renderGeneralTab() {
    const config = this._config;
    const columns = config.columns !== undefined ? config.columns : 4;
    const tileHeight = config.tile_height !== undefined ? config.tile_height : 120;
    const manualSpeakers = !!config.speakers;
    const speakers = config.speakers || [];

    // Build media_player datalist options
    let datalistOptions = '';
    if (this._hass) {
      for (const entityId of Object.keys(this._hass.states)) {
        if (entityId.startsWith('media_player.')) {
          const friendly = this._hass.states[entityId].attributes.friendly_name || entityId;
          datalistOptions += `<option value="${this._esc(entityId)}">${this._esc(friendly)}</option>`;
        }
      }
    }

    let speakerRows = '';
    if (manualSpeakers) {
      speakers.forEach((sp, i) => {
        speakerRows += `
          <div class="speaker-row">
            <button class="icon-btn move-speaker-up" data-speaker-idx="${i}" ${i === 0 ? 'disabled' : ''} title="Move up">&#9650;</button>
            <button class="icon-btn move-speaker-down" data-speaker-idx="${i}" ${i === speakers.length - 1 ? 'disabled' : ''} title="Move down">&#9660;</button>
            <input type="text" class="field" placeholder="Name" value="${this._esc(sp.name || '')}"
              data-focus-id="spk-name-${i}" data-speaker-idx="${i}" data-speaker-field="name">
            <input type="text" class="field" list="mp-entities" placeholder="media_player.xxx" value="${this._esc(sp.entity || '')}"
              data-focus-id="spk-entity-${i}" data-speaker-idx="${i}" data-speaker-field="entity">
            <button class="icon-btn delete-speaker" data-speaker-idx="${i}" title="Remove">&times;</button>
          </div>
        `;
      });
    }

    return `
      <div class="general-tab">
        <div class="field-group">
          <label>Columns</label>
          <input type="number" class="field field-sm" id="cfg-columns" min="1" max="8" value="${columns}" data-focus-id="columns">
        </div>
        <div class="field-group">
          <label>Tile Height (px)</label>
          <input type="number" class="field field-sm" id="cfg-tile-height" min="40" max="300" value="${tileHeight}" data-focus-id="tile-height">
        </div>
        <div class="field-group">
          <label>Speaker Mode</label>
          <div class="toggle-row">
            <button class="toggle-btn ${!manualSpeakers ? 'active' : ''}" data-speaker-mode="auto">Auto-discover</button>
            <button class="toggle-btn ${manualSpeakers ? 'active' : ''}" data-speaker-mode="manual">Manual</button>
          </div>
          ${!manualSpeakers ? '<div class="hint">Speakers with PLAY_MEDIA support are detected automatically.</div>' : ''}
        </div>
        ${manualSpeakers ? `
          <div class="speakers-manual">
            <datalist id="mp-entities">${datalistOptions}</datalist>
            ${speakerRows}
            <button class="action-btn" id="add-speaker-btn">+ Add Speaker</button>
          </div>
        ` : ''}
      </div>
    `;
  }

  _renderStationsTab() {
    const categories = this._getWorkingCategories();
    const isDefault = !this._config.categories;

    let catSections = '';
    categories.forEach((cat, i) => {
      const expanded = this._expandedCategory === i;
      let stationRows = '';
      if (expanded) {
        cat.stations.forEach((st, j) => {
          const thumbStyle = st.logo
            ? `background-image:url(${this._esc(st.logo)});background-size:cover;background-position:center;`
            : `background-color:${this._hashColor(st.name)};`;
          stationRows += `
            <div class="station-row">
              <div class="station-thumb" style="${thumbStyle}"></div>
              <span class="station-name">${this._esc(st.name)}</span>
              <button class="icon-btn delete-station" data-cat="${i}" data-station="${j}" title="Remove">&times;</button>
            </div>
          `;
        });
      }

      const inlineAddPanel = (this._addingToCategory === i) ? this._renderAddStationPanel() : '';

      catSections += `
        <div class="category-section ${expanded ? 'expanded' : ''}">
          <div class="category-header" data-index="${i}">
            <span class="chevron">${expanded ? '\u25BC' : '\u25B6'}</span>
            <span class="cat-name-display" data-index="${i}">${this._esc(cat.name)}</span>
            <span class="station-count">(${cat.stations.length})</span>
            <span class="cat-actions">
              <button class="icon-btn rename-cat" data-index="${i}" title="Rename category">&#9998;</button>
              <button class="icon-btn move-up" data-index="${i}" ${i === 0 ? 'disabled' : ''} title="Move up">\u25B2</button>
              <button class="icon-btn move-down" data-index="${i}" ${i === categories.length - 1 ? 'disabled' : ''} title="Move down">\u25BC</button>
              <button class="icon-btn delete-cat" data-index="${i}" title="Delete category">&times;</button>
            </span>
          </div>
          ${expanded ? `
            <div class="station-list">
              ${stationRows}
              <button class="action-btn add-station-btn" data-cat="${i}">+ Add Station</button>
            </div>
          ` : ''}
        </div>
        ${inlineAddPanel}
      `;
    });

    return `
      <div class="stations-tab">
        ${isDefault ? '<div class="hint">Showing built-in defaults. Changes will create a custom station list.</div>' : ''}
        ${catSections}
        <div class="bottom-actions">
          <button class="action-btn" id="add-category-btn">+ Add Category</button>
          ${!isDefault ? '<button class="action-btn secondary" id="reset-defaults-btn">Reset to Defaults</button>' : ''}
        </div>
      </div>
    `;
  }

  _renderAddStationPanel() {
    const categories = this._getWorkingCategories();
    const catIdx = this._addingToCategory;
    if (catIdx === null || catIdx >= categories.length) return '';
    const cat = categories[catIdx];

    let tabContent = '';
    if (this._addStationTab === 'explore') {
      tabContent = this._renderExploreTab();
    } else if (this._addStationTab === 'browse') {
      tabContent = `<div class="browse-section">${this._renderBrowseDefaults()}</div>`;
    } else {
      tabContent = this._renderManualForm();
    }

    return `
      <div class="add-station-panel">
        <div class="panel-header">
          <span>Add Station to "${this._esc(cat.name)}"</span>
          <button class="icon-btn close-panel" title="Close">&times;</button>
        </div>
        <div class="sub-tabs">
          <div class="sub-tab ${this._addStationTab === 'explore' ? 'active' : ''}" data-subtab="explore">Explore</div>
          <div class="sub-tab ${this._addStationTab === 'browse' ? 'active' : ''}" data-subtab="browse">Browse Defaults</div>
          <div class="sub-tab ${this._addStationTab === 'manual' ? 'active' : ''}" data-subtab="manual">Manual</div>
        </div>
        <div class="panel-content">
          ${tabContent}
        </div>
      </div>
    `;
  }

  _renderExploreTab() {
    const searchBar = `
      <div class="explore-search">
        <input type="text" class="field" id="radio-search-input" placeholder="Search stations by name..."
          value="${this._esc(this._searchQuery)}" data-focus-id="radio-search">
      </div>
    `;

    // If actively searching, show search results
    if (this._searchQuery && this._searchQuery.length >= 2) {
      let results = '';
      if (this._searchLoading) {
        results = '<div class="explore-status">Searching...</div>';
      } else if (this._searchResults.length === 0) {
        results = '<div class="explore-status">No stations found</div>';
      } else {
        results = this._renderStationResults(this._searchResults);
      }
      return `${searchBar}${results}`;
    }

    // Browse mode based on _exploreView
    if (this._exploreLoading) {
      return `${searchBar}<div class="explore-status">Loading...</div>`;
    }

    let content = '';
    switch (this._exploreView) {
      case 'home':
        content = this._renderExploreHome();
        break;
      case 'popular':
        content = `
          <button class="explore-back" id="explore-back-btn">\u2190 Back</button>
          <div class="explore-section-title">Popular Stations</div>
          ${this._renderStationResults(this._exploreData)}
        `;
        break;
      case 'genres':
        content = `
          <button class="explore-back" id="explore-back-btn">\u2190 Back</button>
          <div class="explore-section-title">Browse by Genre</div>
          ${this._renderTagList(this._exploreData)}
        `;
        break;
      case 'countries':
        content = `
          <button class="explore-back" id="explore-back-btn">\u2190 Back</button>
          <div class="explore-section-title">Browse by Country</div>
          ${this._renderTagList(this._exploreData)}
        `;
        break;
      case 'genre':
      case 'country':
        content = `
          <button class="explore-back" id="explore-back-btn">\u2190 Back</button>
          <div class="explore-section-title">${this._esc(this._exploreTitle)}</div>
          ${this._exploreData.length === 0
            ? '<div class="explore-status">No stations found</div>'
            : this._renderStationResults(this._exploreData)
          }
        `;
        break;
    }

    return `${searchBar}${content}`;
  }

  _renderExploreHome() {
    return `
      <div class="explore-nav">
        <button class="explore-nav-btn" data-explore-nav="popular">
          <span class="nav-label">Popular Stations</span>
          <span class="nav-arrow">\u203A</span>
        </button>
        <button class="explore-nav-btn" data-explore-nav="genres">
          <span class="nav-label">Browse by Genre</span>
          <span class="nav-arrow">\u203A</span>
        </button>
        <button class="explore-nav-btn" data-explore-nav="countries">
          <span class="nav-label">Browse by Country</span>
          <span class="nav-arrow">\u203A</span>
        </button>
      </div>
    `;
  }

  _renderTagList(items) {
    if (!items || !items.length) return '<div class="explore-status">No results</div>';
    return `<div class="tag-list">${items.map((item, i) => `
      <button class="tag-item" data-tag-idx="${i}">
        <span class="tag-name">${this._esc(item.name)}</span>
        <span class="tag-count">${(item.stationcount || '').toLocaleString()}</span>
        <span class="tag-arrow">\u203A</span>
      </button>
    `).join('')}</div>`;
  }

  _renderStationResults(stations) {
    if (!stations || !stations.length) return '<div class="explore-status">No stations found</div>';
    return `<div class="explore-results">${stations.map((s, i) => {
      const favicon = s.favicon || '';
      const thumbStyle = favicon
        ? `background-image:url(${this._esc(favicon)});background-size:cover;background-position:center;`
        : `background-color:${this._hashColor(s.name)};`;
      const meta = [s.country, s.tags ? s.tags.split(',').slice(0, 3).join(', ') : ''].filter(Boolean).join(' \u00B7 ');
      const streamUrl = s.url_resolved || s.url;
      return `
        <div class="explore-result">
          <div class="explore-thumb" style="${thumbStyle}">${!favicon ? '\u25B6' : ''}</div>
          <div class="explore-result-info">
            <div class="explore-result-name">${this._esc(s.name)}</div>
            ${meta ? `<div class="explore-result-meta">${this._esc(meta)}</div>` : ''}
            ${s.bitrate ? `<div class="explore-result-meta">${s.bitrate} kbps${s.codec ? ' \u00B7 ' + this._esc(s.codec) : ''}</div>` : ''}
          </div>
          <button class="icon-btn preview-btn" data-preview-url="${this._esc(streamUrl)}" data-preview-idx="${i}" title="Preview">\u25B6</button>
          <button class="icon-btn add-explore-btn" data-explore-result="${i}" title="Add">+</button>
        </div>
      `;
    }).join('')}</div>`;
  }

  _renderBrowseDefaults() {
    const categories = this._getWorkingCategories();
    const catIdx = this._addingToCategory;
    const currentUrls = new Set(categories[catIdx].stations.map(s => s.url));

    return DEFAULT_STATIONS.map((defCat, ci) => `
      <div class="browse-category">
        <div class="browse-cat-name">${this._esc(defCat.name)}</div>
        ${defCat.stations.map((s, si) => `
          <div class="browse-station ${currentUrls.has(s.url) ? 'already-added' : ''}">
            <span class="browse-station-name">${this._esc(s.name)}</span>
            ${currentUrls.has(s.url)
              ? '<span class="check">\u2713</span>'
              : `<button class="icon-btn add-browse-btn" data-def-cat="${ci}" data-def-idx="${si}" title="Add">+</button>`
            }
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  _renderManualForm() {
    return `
      <div class="manual-form">
        <div class="field-group">
          <label>Station Name</label>
          <input type="text" class="field" id="manual-name" placeholder="My Station" data-focus-id="manual-name">
        </div>
        <div class="field-group">
          <label>Stream URL</label>
          <input type="text" class="field" id="manual-url" placeholder="https://..." data-focus-id="manual-url">
        </div>
        <div class="field-group">
          <label>Logo URL (optional)</label>
          <input type="text" class="field" id="manual-logo" placeholder="https://..." data-focus-id="manual-logo">
        </div>
        <button class="action-btn" id="manual-add-btn">Add Station</button>
      </div>
    `;
  }

  // ── Event Handling ──

  _attachListeners() {
    const root = this.shadowRoot;

    // Tab switching
    root.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this._stopPreview();
        this._activeTab = tab.dataset.tab;
        this._addingToCategory = null;
        this._render();
      });
    });

    // Sub-tab switching
    root.querySelectorAll('.sub-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this._stopPreview();
        this._addStationTab = tab.dataset.subtab;
        this._render();
      });
    });

    // ── General tab ──
    const colInput = root.querySelector('#cfg-columns');
    if (colInput) {
      colInput.addEventListener('change', e => {
        this._config.columns = parseInt(e.target.value) || 4;
        this._fireConfigChanged();
      });
    }

    const heightInput = root.querySelector('#cfg-tile-height');
    if (heightInput) {
      heightInput.addEventListener('change', e => {
        this._config.tile_height = parseInt(e.target.value) || 120;
        this._fireConfigChanged();
      });
    }

    // Speaker mode toggle
    root.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.speakerMode;
        if (mode === 'auto') {
          delete this._config.speakers;
        } else {
          if (!this._config.speakers) {
            this._config.speakers = [{ name: '', entity: '' }];
          }
        }
        this._fireConfigChanged();
        this._render();
      });
    });

    // Speaker field changes
    root.querySelectorAll('[data-speaker-field]').forEach(input => {
      input.addEventListener('change', e => {
        const idx = parseInt(e.target.dataset.speakerIdx);
        const field = e.target.dataset.speakerField;
        if (this._config.speakers && this._config.speakers[idx]) {
          this._config.speakers[idx][field] = e.target.value.trim();
          this._fireConfigChanged();
        }
      });
    });

    // Delete speaker
    root.querySelectorAll('.delete-speaker').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.speakerIdx);
        if (this._config.speakers) {
          this._config.speakers.splice(idx, 1);
          if (this._config.speakers.length === 0) delete this._config.speakers;
          this._fireConfigChanged();
          this._render();
        }
      });
    });

    // Move speaker up
    root.querySelectorAll('.move-speaker-up').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.speakerIdx);
        if (idx > 0 && this._config.speakers) {
          const spk = this._config.speakers;
          [spk[idx - 1], spk[idx]] = [spk[idx], spk[idx - 1]];
          this._fireConfigChanged();
          this._render();
        }
      });
    });

    // Move speaker down
    root.querySelectorAll('.move-speaker-down').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.speakerIdx);
        if (this._config.speakers && idx < this._config.speakers.length - 1) {
          const spk = this._config.speakers;
          [spk[idx], spk[idx + 1]] = [spk[idx + 1], spk[idx]];
          this._fireConfigChanged();
          this._render();
        }
      });
    });

    // Add speaker
    const addSpkBtn = root.querySelector('#add-speaker-btn');
    if (addSpkBtn) {
      addSpkBtn.addEventListener('click', () => {
        if (!this._config.speakers) this._config.speakers = [];
        this._config.speakers.push({ name: '', entity: '' });
        this._fireConfigChanged();
        this._render();
      });
    }

    // ── Stations tab ──

    // Category expand/collapse
    root.querySelectorAll('.category-header').forEach(hdr => {
      const chevron = hdr.querySelector('.chevron');
      const nameDisp = hdr.querySelector('.cat-name-display');
      const clickArea = [chevron, nameDisp].filter(Boolean);
      clickArea.forEach(el => {
        el.addEventListener('click', e => {
          e.stopPropagation();
          const idx = parseInt(hdr.dataset.index);
          this._expandedCategory = this._expandedCategory === idx ? -1 : idx;
          this._addingToCategory = null;
          this._render();
        });
      });
    });

    // Category rename (double-click name or pencil button)
    const renameCategory = (idx) => {
      const current = this._getWorkingCategories()[idx].name;
      const newName = prompt('Category name:', current);
      if (newName && newName.trim()) {
        this._ensureCategories();
        this._config.categories[idx].name = newName.trim();
        this._fireConfigChanged();
        this._render();
      }
    };
    root.querySelectorAll('.cat-name-display').forEach(el => {
      el.addEventListener('dblclick', e => {
        e.stopPropagation();
        renameCategory(parseInt(el.dataset.index));
      });
    });
    root.querySelectorAll('.rename-cat').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        renameCategory(parseInt(btn.dataset.index));
      });
    });

    // Move category up/down
    root.querySelectorAll('.move-up').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        if (idx > 0) {
          this._ensureCategories();
          const cats = this._config.categories;
          [cats[idx - 1], cats[idx]] = [cats[idx], cats[idx - 1]];
          this._expandedCategory = idx - 1;
          this._fireConfigChanged();
          this._render();
        }
      });
    });

    root.querySelectorAll('.move-down').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        this._ensureCategories();
        const cats = this._config.categories;
        if (idx < cats.length - 1) {
          [cats[idx], cats[idx + 1]] = [cats[idx + 1], cats[idx]];
          this._expandedCategory = idx + 1;
          this._fireConfigChanged();
          this._render();
        }
      });
    });

    // Delete category
    root.querySelectorAll('.delete-cat').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const idx = parseInt(btn.dataset.index);
        const cats = this._getWorkingCategories();
        if (!confirm(`Delete category "${cats[idx].name}" and all its stations?`)) return;
        this._ensureCategories();
        this._config.categories.splice(idx, 1);
        if (this._config.categories.length === 0) delete this._config.categories;
        this._expandedCategory = -1;
        this._addingToCategory = null;
        this._fireConfigChanged();
        this._render();
      });
    });

    // Delete station
    root.querySelectorAll('.delete-station').forEach(btn => {
      btn.addEventListener('click', () => {
        const catIdx = parseInt(btn.dataset.cat);
        const stIdx = parseInt(btn.dataset.station);
        this._ensureCategories();
        this._config.categories[catIdx].stations.splice(stIdx, 1);
        this._fireConfigChanged();
        this._render();
      });
    });

    // Add station button (opens panel)
    root.querySelectorAll('.add-station-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this._stopPreview();
        this._addingToCategory = parseInt(btn.dataset.cat);
        this._addStationTab = 'explore';
        this._searchQuery = '';
        this._searchResults = [];
        this._exploreView = 'home';
        this._exploreData = [];
        this._render();
      });
    });

    // Add category
    const addCatBtn = root.querySelector('#add-category-btn');
    if (addCatBtn) {
      addCatBtn.addEventListener('click', () => {
        this._ensureCategories();
        this._config.categories.push({ name: 'New Category', stations: [] });
        this._expandedCategory = this._config.categories.length - 1;
        this._fireConfigChanged();
        this._render();
      });
    }

    // Reset to defaults
    const resetBtn = root.querySelector('#reset-defaults-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (!confirm('Reset all stations to built-in defaults? Custom stations will be lost.')) return;
        delete this._config.categories;
        this._expandedCategory = -1;
        this._addingToCategory = null;
        this._fireConfigChanged();
        this._render();
      });
    }

    // Close add-station panel
    const closePanel = root.querySelector('.close-panel');
    if (closePanel) {
      closePanel.addEventListener('click', () => {
        this._stopPreview();
        this._addingToCategory = null;
        this._render();
      });
    }

    // ── Add Station Panel ──

    // Radio Browser search input
    const searchInput = root.querySelector('#radio-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => {
        this._searchQuery = e.target.value;
        clearTimeout(this._searchTimeout);
        if (!this._searchQuery || this._searchQuery.length < 2) {
          this._searchResults = [];
          this._render();
          return;
        }
        this._searchTimeout = setTimeout(() => this._doSearch(this._searchQuery), 300);
      });
    }

    // Explore nav buttons (Popular / Genre / Country)
    root.querySelectorAll('[data-explore-nav]').forEach(btn => {
      btn.addEventListener('click', () => {
        const nav = btn.dataset.exploreNav;
        if (nav === 'popular') this._fetchPopular();
        else if (nav === 'genres') this._fetchGenres();
        else if (nav === 'countries') this._fetchCountries();
      });
    });

    // Explore back button
    const exploreBack = root.querySelector('#explore-back-btn');
    if (exploreBack) {
      exploreBack.addEventListener('click', () => {
        switch (this._exploreView) {
          case 'popular':
          case 'genres':
          case 'countries':
            this._exploreView = 'home';
            break;
          case 'genre':
            this._exploreView = 'genres';
            this._exploreData = this._genreCache || [];
            break;
          case 'country':
            this._exploreView = 'countries';
            this._exploreData = this._countryCache || [];
            break;
        }
        this._render();
      });
    }

    // Tag list items (genres/countries)
    root.querySelectorAll('.tag-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.tagIdx);
        const item = this._exploreData[idx];
        if (!item) return;
        if (this._exploreView === 'genres') this._fetchByGenre(item.name);
        else if (this._exploreView === 'countries') this._fetchByCountry(item.name);
      });
    });

    // Add from explore results
    root.querySelectorAll('.add-explore-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.dataset.exploreResult);
        let station;
        if (this._searchQuery && this._searchQuery.length >= 2) {
          station = this._searchResults[idx];
        } else {
          station = this._exploreData[idx];
        }
        if (station) this._addStationFromApi(station);
      });
    });

    // Preview/play station buttons
    root.querySelectorAll('.preview-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.dataset.previewUrl;
        if (this._previewAudio && !this._previewAudio.paused) {
          const wasSame = this._previewingUrl === url;
          this._stopPreview();
          // If same station, just stop
          if (wasSame) {
            btn.textContent = '\u25B6';
            btn.classList.remove('previewing');
            return;
          }
        }
        this._previewAudio = new Audio(url);
        this._previewingUrl = url;
        this._previewAudio.volume = 0.5;
        this._previewAudio.play().catch(() => {});
        // Update button to show stop
        btn.textContent = '\u25A0';
        btn.classList.add('previewing');
        this._previewAudio.addEventListener('ended', () => {
          btn.textContent = '\u25B6';
          btn.classList.remove('previewing');
        });
        this._previewAudio.addEventListener('error', () => {
          btn.textContent = '\u25B6';
          btn.classList.remove('previewing');
        });
        // Stop preview on any other preview button
        root.querySelectorAll('.preview-btn').forEach(other => {
          if (other !== btn) {
            other.textContent = '\u25B6';
            other.classList.remove('previewing');
          }
        });
      });
    });

    // Add from browse defaults
    root.querySelectorAll('.add-browse-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const defCat = parseInt(btn.dataset.defCat);
        const defIdx = parseInt(btn.dataset.defIdx);
        const station = DEFAULT_STATIONS[defCat].stations[defIdx];
        if (station) {
          this._ensureCategories();
          this._config.categories[this._addingToCategory].stations.push({ ...station });
          this._fireConfigChanged();
          this._render();
        }
      });
    });

    // Manual add
    const manualBtn = root.querySelector('#manual-add-btn');
    if (manualBtn) {
      manualBtn.addEventListener('click', () => {
        const name = root.querySelector('#manual-name').value.trim();
        const url = root.querySelector('#manual-url').value.trim();
        const logo = root.querySelector('#manual-logo').value.trim();
        if (!name || !url) {
          alert('Name and Stream URL are required.');
          return;
        }
        this._ensureCategories();
        const station = { name, url };
        if (logo) station.logo = logo;
        this._config.categories[this._addingToCategory].stations.push(station);
        this._fireConfigChanged();
        this._render();
      });
    }
  }

  async _doSearch(query) {
    this._searchLoading = true;
    this._render();
    try {
      const resp = await fetch(
        `https://de1.api.radio-browser.info/json/stations/search?name=${encodeURIComponent(query)}&limit=20&order=clickcount&reverse=true&hidebroken=true`
      );
      if (!resp.ok) throw new Error('API error');
      this._searchResults = await resp.json();
    } catch (e) {
      this._searchResults = [];
    }
    this._searchLoading = false;
    this._render();
  }

  async _fetchPopular() {
    this._exploreLoading = true;
    this._exploreView = 'popular';
    this._render();
    try {
      const resp = await fetch('https://de1.api.radio-browser.info/json/stations/topclick/50?hidebroken=true');
      this._exploreData = await resp.json();
    } catch (e) {
      this._exploreData = [];
    }
    this._exploreLoading = false;
    this._render();
  }

  async _fetchGenres() {
    if (this._genreCache) {
      this._exploreView = 'genres';
      this._exploreData = this._genreCache;
      this._render();
      return;
    }
    this._exploreLoading = true;
    this._exploreView = 'genres';
    this._render();
    try {
      const resp = await fetch('https://de1.api.radio-browser.info/json/tags?order=stationcount&reverse=true&limit=50&hidebroken=true');
      const data = await resp.json();
      this._genreCache = data.filter(t => t.stationcount > 10);
      this._exploreData = this._genreCache;
    } catch (e) {
      this._exploreData = [];
    }
    this._exploreLoading = false;
    this._render();
  }

  async _fetchCountries() {
    if (this._countryCache) {
      this._exploreView = 'countries';
      this._exploreData = this._countryCache;
      this._render();
      return;
    }
    this._exploreLoading = true;
    this._exploreView = 'countries';
    this._render();
    try {
      const resp = await fetch('https://de1.api.radio-browser.info/json/countries?order=stationcount&reverse=true&limit=60&hidebroken=true');
      const data = await resp.json();
      this._countryCache = data.filter(c => c.stationcount > 50);
      this._exploreData = this._countryCache;
    } catch (e) {
      this._exploreData = [];
    }
    this._exploreLoading = false;
    this._render();
  }

  async _fetchByGenre(genre) {
    this._exploreLoading = true;
    this._exploreView = 'genre';
    this._exploreTitle = genre;
    this._render();
    try {
      const resp = await fetch(`https://de1.api.radio-browser.info/json/stations/bytag/${encodeURIComponent(genre)}?order=clickcount&reverse=true&limit=30&hidebroken=true`);
      this._exploreData = await resp.json();
    } catch (e) {
      this._exploreData = [];
    }
    this._exploreLoading = false;
    this._render();
  }

  async _fetchByCountry(country) {
    this._exploreLoading = true;
    this._exploreView = 'country';
    this._exploreTitle = country;
    this._render();
    try {
      const resp = await fetch(`https://de1.api.radio-browser.info/json/stations/bycountryexact/${encodeURIComponent(country)}?order=clickcount&reverse=true&limit=30&hidebroken=true`);
      this._exploreData = await resp.json();
    } catch (e) {
      this._exploreData = [];
    }
    this._exploreLoading = false;
    this._render();
  }

  _stopPreview() {
    if (this._previewAudio) {
      this._previewAudio.pause();
      this._previewAudio.src = '';
      this._previewAudio = null;
    }
    this._previewingUrl = null;
  }

  _addStationFromApi(apiStation) {
    this._ensureCategories();
    const newStation = {
      name: apiStation.name,
      url: apiStation.url_resolved || apiStation.url
    };
    if (apiStation.favicon) newStation.logo = apiStation.favicon;
    this._config.categories[this._addingToCategory].stations.push(newStation);
    this._fireConfigChanged();
    this._render();
  }

  // ── Styles ──

  _getEditorStyles() {
    return `
      :host { display: block; color-scheme: inherit; }
      .editor {
        font-family: var(--primary-font-family, sans-serif);
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .tabs {
        display: flex;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
        margin-bottom: 16px;
      }
      .tab {
        padding: 8px 16px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        color: var(--secondary-text-color);
        font-weight: 500;
        user-select: none;
      }
      .tab.active {
        color: var(--primary-color, #03a9f4);
        border-bottom-color: var(--primary-color, #03a9f4);
      }
      .tab:hover:not(.active) {
        color: var(--primary-text-color);
      }
      .field-group {
        margin-bottom: 12px;
      }
      .field-group label {
        display: block;
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
      }
      .field {
        width: 100%;
        padding: 8px 10px;
        border-radius: 6px;
        border: 1px solid var(--divider-color, #e0e0e0);
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 14px;
        font-family: inherit;
        box-sizing: border-box;
      }
      .field:focus {
        outline: none;
        border-color: var(--primary-color, #03a9f4);
      }
      .field-sm { width: 80px; }
      .hint {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
        font-style: italic;
      }

      /* Toggle */
      .toggle-row {
        display: flex;
        gap: 0;
        border-radius: 6px;
        overflow: hidden;
        border: 1px solid var(--divider-color, #e0e0e0);
        width: fit-content;
      }
      .toggle-btn {
        padding: 6px 14px;
        border: none;
        background: var(--card-background-color, #fff);
        color: var(--secondary-text-color);
        font-size: 13px;
        cursor: pointer;
        font-family: inherit;
      }
      .toggle-btn.active {
        background: var(--primary-color, #03a9f4);
        color: #fff;
      }

      /* Speakers manual */
      .speakers-manual { margin-top: 8px; }
      .speaker-row {
        display: flex;
        gap: 6px;
        margin-bottom: 6px;
        align-items: center;
      }
      .speaker-row .field { flex: 1; }
      .speaker-row .move-speaker-up,
      .speaker-row .move-speaker-down {
        width: 24px;
        height: 24px;
        font-size: 10px;
      }

      /* Icon button */
      .icon-btn {
        background: none;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 4px;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 16px;
        padding: 0;
        flex-shrink: 0;
        font-family: inherit;
      }
      .icon-btn:hover { background: var(--divider-color, #e0e0e0); }
      .icon-btn:disabled { opacity: 0.3; cursor: default; }

      /* Action button */
      .action-btn {
        padding: 8px 14px;
        border-radius: 6px;
        border: 1px solid var(--divider-color, #e0e0e0);
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        cursor: pointer;
        font-size: 13px;
        font-family: inherit;
      }
      .action-btn:hover { background: var(--divider-color, #e0e0e0); }
      .action-btn.secondary { color: var(--error-color, #db4437); border-color: var(--error-color, #db4437); }

      /* Categories */
      .category-section {
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        margin-bottom: 8px;
        overflow: hidden;
      }
      .category-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        background: var(--card-background-color, #fff);
        user-select: none;
      }
      .chevron {
        font-size: 10px;
        color: var(--secondary-text-color);
        cursor: pointer;
        width: 14px;
        text-align: center;
      }
      .cat-name-display {
        flex: 1;
        font-weight: 500;
        cursor: pointer;
      }
      .station-count {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .cat-actions {
        display: flex;
        gap: 4px;
      }
      .cat-actions .icon-btn { width: 24px; height: 24px; font-size: 12px; }

      /* Station list */
      .station-list {
        padding: 8px 12px;
        border-top: 1px solid var(--divider-color, #e0e0e0);
      }
      .station-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 0;
      }
      .station-thumb {
        width: 32px;
        height: 32px;
        border-radius: 4px;
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
      }
      .station-name {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
      }
      .bottom-actions {
        display: flex;
        gap: 8px;
        margin-top: 8px;
      }

      /* Add Station Panel */
      .add-station-panel {
        margin-top: 12px;
        border: 2px solid var(--primary-color, #03a9f4);
        border-radius: 8px;
        overflow: hidden;
      }
      .panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        background: var(--primary-color, #03a9f4);
        color: #fff;
        font-weight: 500;
        font-size: 13px;
      }
      .panel-header .icon-btn {
        color: #fff;
        border-color: rgba(255,255,255,0.4);
      }
      .sub-tabs {
        display: flex;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }
      .sub-tab {
        padding: 6px 12px;
        cursor: pointer;
        font-size: 12px;
        color: var(--secondary-text-color);
        border-bottom: 2px solid transparent;
        user-select: none;
      }
      .sub-tab.active {
        color: var(--primary-color, #03a9f4);
        border-bottom-color: var(--primary-color, #03a9f4);
      }
      .panel-content {
        padding: 12px;
        max-height: 400px;
        overflow-y: auto;
      }

      /* Search */
      .search-section .field { margin-bottom: 8px; }
      .search-results { min-height: 40px; }
      .search-loading, .no-results {
        text-align: center;
        color: var(--secondary-text-color);
        padding: 12px;
        font-size: 13px;
      }
      .search-result {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 0;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }
      .search-result:last-child { border-bottom: none; }
      .result-info { flex: 1; overflow: hidden; }
      .result-name {
        font-size: 13px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .result-meta {
        font-size: 11px;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* Browse defaults */
      .browse-category { margin-bottom: 12px; }
      .browse-cat-name {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
        padding-left: 2px;
      }
      .browse-station {
        display: flex;
        align-items: center;
        padding: 4px 2px;
      }
      .browse-station-name {
        flex: 1;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .browse-station.already-added { opacity: 0.5; }
      .check {
        color: var(--success-color, #4caf50);
        font-size: 14px;
        padding: 0 6px;
      }

      /* Manual form */
      .manual-form .action-btn { margin-top: 4px; }

      /* Explorer */
      .explore-search { margin-bottom: 10px; }
      .explore-status {
        text-align: center;
        color: var(--secondary-text-color);
        padding: 16px;
        font-size: 13px;
      }
      .explore-nav {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .explore-nav-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        cursor: pointer;
        font-size: 14px;
        font-family: inherit;
        text-align: left;
        transition: background 0.15s;
      }
      .explore-nav-btn:hover { background: var(--secondary-background-color, #f5f5f5); }
      .nav-label { flex: 1; }
      .nav-arrow {
        font-size: 18px;
        color: var(--secondary-text-color);
      }
      .explore-back {
        display: inline-block;
        padding: 4px 0;
        border: none;
        background: none;
        color: var(--primary-color, #03a9f4);
        cursor: pointer;
        font-size: 13px;
        font-family: inherit;
        margin-bottom: 8px;
      }
      .explore-back:hover { text-decoration: underline; }
      .explore-section-title {
        font-size: 14px;
        font-weight: 600;
        color: var(--primary-text-color);
        margin-bottom: 10px;
      }

      /* Tag list (genres/countries) */
      .tag-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .tag-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 6px;
        border: none;
        background: none;
        color: var(--primary-text-color);
        cursor: pointer;
        font-size: 13px;
        font-family: inherit;
        text-align: left;
        width: 100%;
      }
      .tag-item:hover { background: var(--secondary-background-color, #f5f5f5); }
      .tag-name { flex: 1; text-transform: capitalize; }
      .tag-count {
        font-size: 11px;
        color: var(--secondary-text-color);
        min-width: 40px;
        text-align: right;
      }
      .tag-arrow {
        font-size: 16px;
        color: var(--secondary-text-color);
      }

      /* Explore station results */
      .explore-results {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .explore-result {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 4px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
      }
      .explore-result:last-child { border-bottom: none; }
      .explore-thumb {
        width: 40px;
        height: 40px;
        border-radius: 6px;
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: rgba(255,255,255,0.6);
        overflow: hidden;
      }
      .explore-result-info { flex: 1; overflow: hidden; min-width: 0; }
      .explore-result-name {
        font-size: 13px;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .explore-result-meta {
        font-size: 11px;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* Preview button */
      .preview-btn {
        font-size: 12px !important;
        color: var(--primary-color, #03a9f4) !important;
      }
      .preview-btn.previewing {
        color: #ff9800 !important;
        border-color: #ff9800 !important;
        background: rgba(255, 152, 0, 0.1);
      }
    `;
  }
}


// ── Card ───────────────────────────────────────────────────────
class JukeboxCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._config = {};
    this._hass = null;
    this._lastStateHash = null;
    this._selectedSpeaker = null;
    this._zones = null;
    this._zoneSeq = 0;
    this._activeZoneId = null;
    this._draggingVolume = false;
    this._volumeTimeout = null;
    this._deviceVolumeTimeouts = {};
    this._showDeviceVolumes = false;
    this._helperChecked = false;
    this._castSpeakers = new Set();
  }

  connectedCallback() {
    this._onResize = () => this._sizeCard();
    window.addEventListener('resize', this._onResize);
    this._sizeCard();
  }

  disconnectedCallback() {
    if (this._onResize) window.removeEventListener('resize', this._onResize);
  }

  // Pin the card to the viewport bottom so .stations-area scrolls internally
  // while the controls above it stay fixed. Falls back to natural height
  // (whole-page scroll) when the viewport is too short to be usable.
  _sizeCard() {
    const card = this.shadowRoot && this.shadowRoot.querySelector('ha-card');
    if (!card) return;
    card.style.height = '';
    const top = card.getBoundingClientRect().top;
    const h = Math.floor(window.innerHeight - top - 8);
    if (h >= 300) card.style.height = h + 'px';
  }

  static getConfigElement() {
    return document.createElement('jukebox-card-editor');
  }

  static getStubConfig() {
    return {};
  }

  setConfig(config) {
    // Validate categories if provided
    if (config.categories) {
      for (const cat of config.categories) {
        if (!cat.name) throw new Error('Each category needs a name');
        if (!cat.stations || !cat.stations.length) {
          throw new Error(`Category "${cat.name}" needs at least one station`);
        }
        for (const s of cat.stations) {
          if (!s.name || !s.url) {
            throw new Error(`Every station in "${cat.name}" needs a name and url`);
          }
        }
      }
    }

    // Validate speakers if provided
    if (config.speakers) {
      for (const sp of config.speakers) {
        if (!sp.name || !sp.entity) {
          throw new Error('Each speaker needs a name and entity');
        }
      }
    }

    this._config = { tile_height: 120, ...config }; // columns: auto from width unless set

    // Zones are reconstructed from live playback state
    this._zones = null;
    this._activeZoneId = null;

    if (this._hass) this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._ensureNowPlayingHelper();
    this._learnGroups(hass);
    if (this._config) this._reconcileZones(hass);
    // Auto-cleanup cast tracking — remove idle/off speakers
    if (this._castSpeakers && this._castSpeakers.size > 0) {
      for (const id of [...this._castSpeakers]) {
        const state = hass.states[id];
        if (!state || state.state === 'idle' || state.state === 'off') {
          this._castSpeakers.delete(id);
        }
      }
    }
    if (this._draggingVolume) return;
    const hash = this._computeStateHash(hass);
    if (hash === this._lastStateHash) return;
    this._lastStateHash = hash;
    // Full re-render only when structure changed (speaker list, panels).
    // Playback/volume changes patch the existing DOM so scroll positions
    // (vertical page + horizontal station rows) are never disturbed.
    const structural = this._computeStructuralHash();
    if (!this.shadowRoot.querySelector('ha-card') || structural !== this._lastStructuralHash) {
      this._render();
    } else {
      this._updateDynamic();
    }
  }

  _computeStructuralHash() {
    const speakers = this._getSpeakers();
    const parts = [
      speakers.map(s => `${s.entity}:${s.name}`).join(','),
      this._showDeviceVolumes ? '1' : '0'
    ];
    if (this._showDeviceVolumes) {
      parts.push(speakers.filter(s => {
        const st = this._hass.states[s.entity];
        return st && (st.attributes.volume_level !== undefined ||
                      ((st.attributes.supported_features || 0) & 4));
      }).map(s => s.entity).join(','));
    }
    return parts.join('||');
  }

  _ensureNowPlayingHelper() {
    if (this._helperChecked) return;
    this._helperChecked = true;
    const entityId = 'input_text.jukebox_now_playing';
    if (this._hass.states[entityId]) return;
    this._hass.callWS({
      type: 'config/helpers/create',
      domain: 'input_text',
      name: 'Jukebox Now Playing',
    }).catch(() => {});
  }

  // ── Speaker Management ──

  _getSpeakers() {
    if (this._config.speakers && this._config.speakers.length) {
      return this._config.speakers;
    }
    return this._autoDiscoverSpeakers();
  }

  _autoDiscoverSpeakers() {
    if (!this._hass) return [];
    const speakers = [];
    for (const [entityId, state] of Object.entries(this._hass.states)) {
      if (!entityId.startsWith('media_player.')) continue;
      if (state.state === 'unavailable') continue;
      const features = state.attributes.supported_features || 0;
      if (features & 512) {
        speakers.push({
          name: state.attributes.friendly_name || entityId,
          entity: entityId
        });
      }
    }
    // Fallback: if no speakers with PLAY_MEDIA, show all non-unavailable media players
    if (speakers.length === 0) {
      for (const [entityId, state] of Object.entries(this._hass.states)) {
        if (!entityId.startsWith('media_player.')) continue;
        if (state.state === 'unavailable') continue;
        speakers.push({
          name: state.attributes.friendly_name || entityId,
          entity: entityId
        });
      }
    }
    return speakers.sort((a, b) => a.name.localeCompare(b.name));
  }

  // True for Cast multi-room groups (device model "Google Cast Group").
  // Falls back to group_members>1 when the registry lookup isn't available.
  _isSpeakerGroup(entityId) {
    try {
      const ent = this._hass.entities && this._hass.entities[entityId];
      const devId = ent && ent.device_id;
      const dev = devId && this._hass.devices && this._hass.devices[devId];
      if (dev && dev.model) return dev.model === 'Google Cast Group';
    } catch (e) { /* ignore */ }
    const st = this._hass.states[entityId];
    const gm = st && st.attributes && st.attributes.group_members;
    return Array.isArray(gm) && gm.length > 1;
  }

  // ── Group membership (see Zones engine below for selection state) ──
  // Playback: group entity (native sync) + extras individually — members
  // are NEVER cast to individually while their group is active (a second
  // cast session on a member kills the group stream on that device).

  // Cast integration exposes NO group membership (group_members always
  // null) — mapping was measured empirically 2026-09-23 (volume-0 probe)
  // and is re-learned at runtime whenever a group plays (_learnGroups).
  // No built-in group membership — resolved from (in order): live HA
  // group_members attribute, the `speaker_groups` card config option,
  // then the map auto-learned the first time each group plays.
  static get GROUP_MEMBERS() {
    return {};
  }

  _groupMembers(groupEntity) {
    const known = new Set(this._getSpeakers().map(s => s.entity));
    const st = this._hass && this._hass.states[groupEntity];
    const gm = st && st.attributes && st.attributes.group_members;
    if (Array.isArray(gm) && gm.length) {
      return gm.filter(id => id !== groupEntity && known.has(id));
    }
    const cfgMap = this._config && this._config.speaker_groups;
    if (cfgMap && Array.isArray(cfgMap[groupEntity])) {
      return cfgMap[groupEntity].filter(id => known.has(id));
    }
    let learned = null;
    try { learned = JSON.parse(localStorage.getItem('jukebox-group-map') || 'null'); } catch (e) {}
    const map = (learned && learned[groupEntity]) || this.constructor.GROUP_MEMBERS[groupEntity];
    return Array.isArray(map) ? map.filter(id => known.has(id)) : [];
  }

  // Whenever a group is playing, note which individual speakers carry the
  // same media_content_id — keeps the membership map current if Phil
  // rearranges groups in the Google Home app.
  _learnGroups(hass) {
    try {
      const speakers = this._getSpeakers();
      const groups = speakers.filter(sp => this._isSpeakerGroup(sp.entity));
      const solos = speakers.filter(sp => !this._isSpeakerGroup(sp.entity));
      let learned = null;
      try { learned = JSON.parse(localStorage.getItem('jukebox-group-map') || 'null'); } catch (e) {}
      learned = learned || {};
      let changed = false;
      for (const g of groups) {
        const gst = hass.states[g.entity];
        if (!gst || gst.state !== 'playing') continue;
        const gid = gst.attributes.media_content_id;
        if (!gid) continue;
        const members = solos.filter(sp => {
          const st = hass.states[sp.entity];
          return st && (st.state === 'playing' || st.state === 'buffering') &&
                 st.attributes.media_content_id === gid;
        }).map(sp => sp.entity).sort();
        if (members.length > 1 && JSON.stringify(learned[g.entity]) !== JSON.stringify(members)) {
          learned[g.entity] = members;
          changed = true;
        }
      }
      if (changed) localStorage.setItem('jukebox-group-map', JSON.stringify(learned));
    } catch (e) { /* ignore */ }
  }

  // ── Zones engine (v3.0) ──
  // A zone = one playback session: {id, g: group|null, s: [individual
  // entity_ids, group members included], station: {name,url}|null,
  // lastCmd}. station===null => draft zone being built via [+].
  // STRICT no-steal (Phil): a speaker owned by one zone is disabled in
  // every other zone; a group is selectable only when ALL members are
  // free. Freeing = uncheck in the owning zone.

  _zoneList() {
    if (!this._zones) this._reconstructZones();
    return this._zones;
  }

  _activeZone() {
    const zones = this._zoneList();
    let z = zones.find(zz => zz.id === this._activeZoneId);
    if (!z) {
      z = zones.find(zz => zz.station) || zones[0];
      if (!z) z = this._newDraftZone();
      this._activeZoneId = z.id;
    }
    return z;
  }

  _newDraftZone() {
    const zones = this._zoneList();
    let d = zones.find(z => !z.station);
    if (d) return d;
    d = { id: ++this._zoneSeq, g: null, s: [], station: null, lastCmd: Date.now(), user: true };
    zones.push(d);
    return d;
  }

  // A zone is "live" while its audio runs (or briefly after a command).
  // Stopped zones persist as presets: they keep their chip + selection but
  // no longer OWN their speakers — other zones may claim them.
  _zoneLive(z) {
    if (!z || !z.station) return false;
    if (Date.now() - (z.lastCmd || 0) < 15000) return true;
    const watch = new Set(this._zoneTargets(z).concat(z.s));
    return [...watch].some(id => {
      const st = this._hass && this._hass.states[id];
      return st && ['playing', 'buffering', 'paused'].includes(st.state);
    });
  }

  _zoneOwner(entityId) {
    return this._zoneList().find(z => this._zoneLive(z) && z.s.includes(entityId)) || null;
  }

  // Commanded targets minus speakers owned by OTHER live zones (a stopped
  // zone may have "lost" speakers to newer zones; never cast over them).
  _effectiveTargets(z) {
    const busy = id => { const o = this._zoneOwner(id); return o && o.id !== z.id; };
    if (z.g) {
      const members = this._groupMembers(z.g);
      const freeM = members.filter(m => !busy(m));
      const extras = z.s.filter(id => !members.includes(id) && !busy(id));
      if (freeM.length === members.length) return [z.g].concat(extras);
      return freeM.concat(extras);
    }
    return z.s.filter(id => !busy(id));
  }

  _persistZones() {
    try {
      const user = this._zoneList().filter(z => z.user);
      localStorage.setItem('jukebox-zones-v1', JSON.stringify({
        act: this._activeZoneId,
        zones: user.map(z => ({ id: z.id, g: z.g, s: z.s, station: z.station }))
      }));
    } catch (e) { /* ignore */ }
  }

  _zoneName(z) {
    const byId = {};
    this._getSpeakers().forEach(sp => { byId[sp.entity] = sp.name; });
    if (z.g) {
      const members = new Set(this._groupMembers(z.g));
      const extra = z.s.filter(id => !members.has(id)).length;
      return (byId[z.g] || z.g) + (extra ? ` +${extra}` : '');
    }
    if (!z.s.length) return 'New';
    const first = byId[z.s[0]] || z.s[0];
    return z.s.length === 1 ? first : `${first} +${z.s.length - 1}`;
  }

  _zoneTargets(z) {
    if (!z) return [];
    if (z.g) {
      const members = new Set(this._groupMembers(z.g));
      return [z.g].concat(z.s.filter(id => !members.has(id)));
    }
    return [...z.s];
  }

  _playTargets() { return this._effectiveTargets(this._activeZone()); }

  _isGroupFullySelected(groupEntity) { return this._activeZone().g === groupEntity; }

  _groupAvailability(groupEntity) {
    const z = this._activeZone();
    const members = this._groupMembers(groupEntity);
    if (!members.length) return { ok: false, why: 'members unknown' };
    for (const m of members) {
      const owner = this._zoneOwner(m);
      if (owner && owner.id !== z.id) return { ok: false, why: 'in ' + this._zoneName(owner) };
    }
    return { ok: true, why: '' };
  }

  _speakerBusyIn(entityId) {
    const z = this._activeZone();
    const owner = this._zoneOwner(entityId);
    return (owner && owner.id !== z.id) ? owner : null;
  }

  _toggleSpeaker(entityId) {
    const z = this._activeZone();
    if (this._speakerBusyIn(entityId)) return; // strict no-steal
    const sel = new Set(z.s);
    if (sel.has(entityId)) {
      sel.delete(entityId);
      // unchecking a member of the active group breaks the group
      if (z.g && this._groupMembers(z.g).includes(entityId)) z.g = null;
    } else {
      sel.add(entityId);
    }
    z.s = [...sel];
    z.lastCmd = Date.now();
    this._gcZone(z);
    this._persistZones();
  }

  _toggleGroup(groupEntity) {
    const z = this._activeZone();
    if (z.g === groupEntity) {
      const members = new Set(this._groupMembers(groupEntity));
      z.s = z.s.filter(id => !members.has(id));
      z.g = null;
    } else {
      if (!this._groupAvailability(groupEntity).ok) return;
      z.g = groupEntity;
      z.s = [...this._groupMembers(groupEntity)];
    }
    z.lastCmd = Date.now();
    this._gcZone(z);
    this._persistZones();
  }

  _gcZone(z) {
    if (z.station && !this._zoneTargets(z).length) this._removeZone(z);
  }

  _removeZone(z) {
    this._zones = this._zoneList().filter(zz => zz.id !== z.id);
    if (this._activeZoneId === z.id) {
      const next = this._zones.find(zz => zz.station) || this._zones[0];
      this._activeZoneId = next ? next.id : this._newDraftZone().id;
    }
    this._persistZones();
  }

  _switchZone(id) {
    const zones = this._zoneList();
    if (!zones.find(z => z.id === id)) return;
    const cur = zones.find(z => z.id === this._activeZoneId);
    this._activeZoneId = id;
    // abandon an untouched draft when leaving it
    if (cur && !cur.station && !cur.s.length && cur.id !== id) {
      this._zones = zones.filter(z => z.id !== cur.id);
    }
    this._persistZones();
  }

  // Page load: seed persisted user zones (they survive reloads as
  // presets), then let reconcile discover any external sessions.
  _reconstructZones() {
    this._zones = [];
    this._zoneSeq = this._zoneSeq || 0;
    const hass = this._hass;
    if (!hass) return;
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem('jukebox-zones-v1') || 'null'); } catch (e) {}
    const known = new Set(this._getSpeakers().map(sp => sp.entity));
    if (saved && Array.isArray(saved.zones)) {
      for (const z of saved.zones) {
        const sel = (z.s || []).filter(id => known.has(id));
        if (!sel.length && !z.station) continue;
        this._zones.push({
          id: z.id, g: (z.g && known.has(z.g)) ? z.g : null, s: sel,
          station: z.station || null, lastCmd: 0, user: true
        });
        this._zoneSeq = Math.max(this._zoneSeq, z.id);
      }
      if (saved.act && this._zones.find(z => z.id === saved.act)) this._activeZoneId = saved.act;
    }
    this._reconcileZones(hass);
  }

  _stationFromState(st) {
    const cid = st.attributes.media_content_id || '';
    for (const c of this._getCategories()) {
      const hit = (c.stations || []).find(x => x.url === cid);
      if (hit) return { name: hit.name, url: hit.url };
    }
    return { name: st.attributes.media_title || 'External stream', url: cid };
  }

  // Reconcile external changes on every hass update: GC zones whose audio
  // died elsewhere; surface sessions started outside the jukebox.
  _reconcileZones(hass) {
    const zones = this._zoneList();
    // USER zones persist when stopped (deleted only via long-press);
    // auto-discovered external zones still GC once dead.
    for (const z of [...zones]) {
      if (!z.station || z.user) continue;
      const watch = new Set(this._zoneTargets(z).concat(z.s));
      const alive = [...watch].some(id => {
        const st = hass.states[id];
        return st && ['playing', 'buffering', 'paused'].includes(st.state);
      });
      if (alive) { z.lastAlive = Date.now(); continue; }
      const ref = Math.max(z.lastCmd || 0, z.lastAlive || 0);
      if (Date.now() - ref > 25000) this._removeZone(z);
    }
    // discovery: a zone "claims" a playing speaker when the speaker is in
    // its selection AND plays its station — everything else is external
    const claimed = (sp, cid) => this._zoneList().some(z =>
      z.s.includes(sp) && z.station && z.station.url === cid);
    const solos = this._getSpeakers().filter(sp => !this._isSpeakerGroup(sp.entity));
    const clusters = {};
    for (const sp of solos) {
      const st = hass.states[sp.entity];
      if (!st || st.state !== 'playing') continue;
      const cid = st.attributes.media_content_id || ('solo:' + sp.entity);
      if (claimed(sp.entity, cid)) continue;
      if (this._zoneOwner(sp.entity)) continue;
      (clusters[cid] = clusters[cid] || []).push(sp.entity);
    }
    for (const cid of Object.keys(clusters)) {
      const st = hass.states[clusters[cid][0]];
      this._zones.push({ id: ++this._zoneSeq, g: null, s: clusters[cid], station: this._stationFromState(st), lastCmd: Date.now(), user: false });
    }
    const groups = this._getSpeakers().filter(sp => this._isSpeakerGroup(sp.entity));
    for (const g of groups) {
      if (this._zoneList().find(z => z.g === g.entity)) continue;
      const st = hass.states[g.entity];
      if (!st || st.state !== 'playing') continue;
      const members = this._groupMembers(g.entity).filter(m => !this._zoneOwner(m));
      this._zones.push({ id: ++this._zoneSeq, g: g.entity, s: members, station: this._stationFromState(st), lastCmd: Date.now(), user: false });
    }
  }

  _speakerSummary() { return this._zoneName(this._activeZone()); }

  _resolveSelectedSpeaker() {
    const targets = this._playTargets();
    return targets[0] || null;
  }

  // ── Category Management ──

  _getCategories() {
    if (this._editCats) return this._editCats; // live edit session working copy
    if (this._dirCats) return this._dirCats;   // unsaved directory additions
    if (this._config.categories && this._config.categories.length) {
      return this._config.categories;
    }
    return DEFAULT_STATIONS;
  }

  // ── State ──

  _computeStateHash(hass) {
    const speakers = this._getSpeakers();
    const zs = this._zoneList().map(z => `${z.id}:${z.g || ''}:${z.s.join('.')}:${z.station ? z.station.url : ''}`).join(';');
    const parts = [`zones:${zs}~act:${this._activeZoneId}`, `spk:${speakers.map(s => s.entity).join(',')}`];
    parts.push(`dvol:${this._showDeviceVolumes ? '1' : '0'}`);
    parts.push(`cast:${this._castSpeakers ? this._castSpeakers.size : 0}`);
    for (const s of speakers) {
      const st = hass.states[s.entity];
      if (!st) { parts.push(''); continue; }
      parts.push(
        `${st.state}|${st.attributes.media_content_id || ''}|` +
        `${st.attributes.volume_level || ''}|${st.attributes.media_title || ''}`
      );
    }
    const npe = hass.states['input_text.jukebox_now_playing'];
    parts.push(npe ? npe.state : '');
    return parts.join('||');
  }

  _getActiveStationUrl() {
    // zone-scoped COMMANDED state: what this zone was told to play.
    // (Gating this on live entity state made the banner drop during
    // buffering and let the GC eat healthy zones.)
    if (!this._hass) return null;
    const z = this._activeZone();
    return (z && z.station) ? z.station.url : null;
  }

  // ── Actions ──

  async _getSignedImageUrl(logo) {
    if (!logo) return null;
    if (logo.startsWith('http://') || logo.startsWith('https://')) return logo;
    try {
      const result = await this._hass.callWS({
        type: 'auth/sign_path',
        path: logo,
        expires: 86400
      });
      return `${window.location.origin}${result.path}`;
    } catch (e) {
      return `${window.location.origin}${logo}`;
    }
  }

  async _castTo(targets, station, categoryName) {
    if (!this._hass || !targets.length) return;
    const streamTargets = [];
    for (const target of targets) {
      // Alexa devices need TuneIn voice command instead of direct stream
      if (this._isAlexaDevice(target)) {
        this._hass.callService('media_player', 'play_media', {
          entity_id: target,
          media_content_type: 'custom',
          media_content_id: `play ${station.name} on tunein`
        });
        this._castSpeakers.add(target);
      } else {
        streamTargets.push(target);
      }
    }

    if (streamTargets.length) {
      const logoUrl = await this._getSignedImageUrl(station.logo);

      const extra = {
        metadata: {
          metadataType: 3,
          title: station.name,
          artist: categoryName || 'Internet Radio',
          albumName: categoryName || 'Internet Radio',
          ...(logoUrl ? { images: [{ url: logoUrl, width: 256, height: 256 }] } : {})
        },
        title: station.name,
        stream_type: 'LIVE'
      };
      if (logoUrl) extra.thumb = logoUrl;

      for (const target of streamTargets) {
        this._hass.callService('media_player', 'play_media', {
          entity_id: target,
          media_content_id: station.url,
          media_content_type: 'audio/mp3',
          extra
        });
        this._castSpeakers.add(target);
      }
    }
  }

  async _playStation(station, categoryName) {
    if (!this._hass) return;
    const z = this._activeZone();
    const targets = this._effectiveTargets(z);
    if (!targets.length) {
      // empty draft zone — hint at the speaker picker instead of playing
      const btn = this.shadowRoot.querySelector('.speaker-btn');
      if (btn) { btn.classList.add('nag'); setTimeout(() => btn.classList.remove('nag'), 900); }
      return;
    }
    z.station = { name: station.name, url: station.url };
    z.lastCmd = Date.now();
    this._persistZones();

    // Optimistic banner: show the tapped station immediately and hold it
    // through the buffering gap so the banner never flashes back to idle
    this._pendingStation = { name: station.name, url: station.url, ts: Date.now() };
    this._updateDynamic();

    await this._castTo(targets, station, categoryName);

    this._hass.callService('input_text', 'set_value', {
      entity_id: 'input_text.jukebox_now_playing',
      value: station.name
    });
  }

  // Station currently playing on the selection (or optimistically pending),
  // as {station, category} from the configured lists — used to apply
  // checkbox changes to LIVE playback.
  _currentStationObj() {
    const z = this._activeZone();
    const url = this._pendingStation ? this._pendingStation.url : (z && z.station ? z.station.url : null);
    if (!url) return null;
    for (const c of this._getCategories()) {
      const hit = (c.stations || []).find(st => st.url === url);
      if (hit) return { station: hit, category: c.name };
    }
    // external/unknown stream — still re-castable
    const name = (this._pendingStation && this._pendingStation.name) || (z && z.station && z.station.name) || 'Stream';
    return { station: { name, url }, category: null };
  }

  // Live-apply a selection change while a station is playing: newly added
  // targets start the current station, removed targets stop. When nothing
  // is playing this is a no-op (selection only affects the next tap).
  _applySelectionDiff(before, after, cur) {
    if (!this._hass) return;
    const b = new Set(before), a = new Set(after);
    const removed = before.filter(id => !a.has(id));
    const added = after.filter(id => !b.has(id));
    // stops are unconditional — an undetectable station must never strand
    // audio on a deselected target
    for (const id of removed) {
      this._hass.callService('media_player', 'media_stop', { entity_id: id });
      this._castSpeakers.delete(id);
    }
    if (cur && added.length) this._castTo(added, cur.station, cur.category);
  }

  _stopPlayback() {
    if (!this._hass) return;
    this._pendingStation = null;
    const z = this._activeZone();
    for (const target of this._effectiveTargets(z)) {
      this._hass.callService('media_player', 'media_stop', { entity_id: target });
      this._castSpeakers.delete(target);
    }
    // the zone SURVIVES as a stopped preset (chip dims); its speakers are
    // now free for other zones. Delete = long-press the chip.
    z.lastCmd = 0;
    this._persistZones();
    this._lastStateHash = null;
    this._updateDynamic();
  }

  _stopCastSpeakers() {
    for (const entityId of this._castSpeakers) {
      this._hass.callService('media_player', 'media_stop', { entity_id: entityId });
    }
    this._castSpeakers.clear();
    this._lastStateHash = null;
    this._updateDynamic();
  }

  _isAlexaDevice(entityId) {
    const state = this._hass.states[entityId];
    if (!state) return false;
    if (state.attributes.last_called !== undefined) return true;
    if (entityId.includes('alexa') || entityId.includes('echo')) return true;
    return false;
  }

  _openImageUpload(station, catIdx, stationIndex) {
    const overlay = document.createElement('div');
    overlay.className = 'image-upload-overlay';

    const modal = document.createElement('div');
    modal.className = 'image-upload-modal';

    const title = document.createElement('div');
    title.className = 'image-upload-title';
    title.textContent = `Custom Image: ${station.name}`;
    modal.appendChild(title);

    const preview = document.createElement('canvas');
    preview.className = 'image-upload-preview';
    preview.width = 256;
    preview.height = 256;
    const ctx = preview.getContext('2d');
    ctx.fillStyle = this._hashColor(station.name);
    ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.font = '14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Tap to select image', 128, 128);
    modal.appendChild(preview);

    let sourceImg = null;
    let scale = 1;
    let panX = 0, panY = 0;
    let dragging = false, lastX = 0, lastY = 0;

    const drawPreview = () => {
      if (!sourceImg) return;
      ctx.clearRect(0, 0, 256, 256);
      const w = sourceImg.width * scale;
      const h = sourceImg.height * scale;
      const x = (256 - w) / 2 + panX;
      const y = (256 - h) / 2 + panY;
      ctx.drawImage(sourceImg, x, y, w, h);
    };

    // Pan
    preview.addEventListener('pointerdown', (e) => {
      if (!sourceImg) { fileInput.click(); return; }
      dragging = true; lastX = e.clientX; lastY = e.clientY;
      preview.setPointerCapture(e.pointerId);
    });
    preview.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      panX += e.clientX - lastX;
      panY += e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      drawPreview();
    });
    preview.addEventListener('pointerup', () => { dragging = false; });

    // Zoom
    preview.addEventListener('wheel', (e) => {
      if (!sourceImg) return;
      e.preventDefault();
      scale *= e.deltaY < 0 ? 1.1 : 0.9;
      scale = Math.max(0.1, Math.min(5, scale));
      drawPreview();
    });

    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          sourceImg = img;
          const fitScale = Math.max(256 / img.width, 256 / img.height);
          scale = fitScale;
          panX = 0; panY = 0;
          drawPreview();
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
    modal.appendChild(fileInput);

    const btnRow = document.createElement('div');
    btnRow.className = 'image-upload-buttons';

    const selectBtn = document.createElement('button');
    selectBtn.className = 'upload-btn';
    selectBtn.innerHTML = '<ha-icon icon="mdi:image-plus"></ha-icon><span>Select Image</span>';
    selectBtn.addEventListener('click', () => fileInput.click());
    btnRow.appendChild(selectBtn);

    const saveBtn = document.createElement('button');
    saveBtn.className = 'upload-btn save';
    saveBtn.innerHTML = '<ha-icon icon="mdi:content-save"></ha-icon><span>Save</span>';
    saveBtn.addEventListener('click', () => {
      if (!sourceImg) return;
      preview.toBlob((blob) => {
        const reader = new FileReader();
        reader.onload = () => {
          const dataUri = reader.result;
          if (!this._config.custom_logos) this._config.custom_logos = {};
          this._config.custom_logos[station.url] = dataUri;
          this._fireConfigChanged();
          this._saveCardConfig({ custom_logos: this._config.custom_logos }, false);
          overlay.remove();
          this._lastStateHash = null;
          this._render();
        };
        reader.readAsDataURL(blob);
      }, 'image/jpeg', 0.85);
    });
    btnRow.appendChild(saveBtn);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'upload-btn remove';
    removeBtn.innerHTML = '<ha-icon icon="mdi:delete"></ha-icon><span>Remove</span>';
    removeBtn.addEventListener('click', () => {
      if (this._config.custom_logos) {
        delete this._config.custom_logos[station.url];
        if (Object.keys(this._config.custom_logos).length === 0) delete this._config.custom_logos;
        this._fireConfigChanged();
        this._saveCardConfig({ custom_logos: this._config.custom_logos || null }, false);
      }
      overlay.remove();
      this._lastStateHash = null;
      this._render();
    });
    btnRow.appendChild(removeBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'upload-btn';
    cancelBtn.innerHTML = '<ha-icon icon="mdi:close"></ha-icon><span>Cancel</span>';
    cancelBtn.addEventListener('click', () => overlay.remove());
    btnRow.appendChild(cancelBtn);

    modal.appendChild(btnRow);
    overlay.appendChild(modal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    this.shadowRoot.appendChild(overlay);
  }

  _fireConfigChanged() {
    this.dispatchEvent(new CustomEvent('config-changed', {
      bubbles: true,
      composed: true,
      detail: { config: { ...this._config } }
    }));
  }

  _setVolume(level) {
    if (!this._hass) return;
    // master slider: group entity (spreads across members) + extras
    const sel = this._playTargets();
    if (!sel.length) return;
    clearTimeout(this._volumeTimeout);
    this._volumeTimeout = setTimeout(() => {
      for (const id of sel) {
        this._hass.callService('media_player', 'volume_set', {
          entity_id: id,
          volume_level: level
        });
      }
    }, 100);
  }

  _setDeviceVolume(entityId, level) {
    if (!this._hass) return;
    clearTimeout(this._deviceVolumeTimeouts[entityId]);
    this._deviceVolumeTimeouts[entityId] = setTimeout(() => {
      this._hass.callService('media_player', 'volume_set', {
        entity_id: entityId,
        volume_level: level
      });
    }, 100);
  }

  _hashColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${Math.abs(hash) % 360}, 40%, 30%)`;
  }

  // ── Render ──

  _render() {
    if (!this._config || !this._hass) return;

    const root = this.shadowRoot;
    const config = this._config;
    const speakers = this._getSpeakers();
    const categories = this._getCategories();

    // Resolve speaker: localStorage > active player > first
    this._selectedSpeaker = this._resolveSelectedSpeaker();

    const activeUrl = this._getActiveStationUrl();
    this._otherZoneUrls = new Set(this._zoneList()
      .filter(z => z.id !== this._activeZone().id && z.station)
      .map(z => z.station.url));
    const speakerState = this._hass.states[this._selectedSpeaker];
    const isPlaying = speakerState && speakerState.state === 'playing';
    const volume = speakerState ? (speakerState.attributes.volume_level || 0) : 0;

    // Find active station name
    let activeStationName = null;
    if (activeUrl) {
      for (const cat of categories) {
        const match = cat.stations.find(s => s.url === activeUrl);
        if (match) { activeStationName = match.name; break; }
      }
    }
    if (!activeStationName && isPlaying && speakerState.attributes.media_title) {
      activeStationName = speakerState.attributes.media_title;
    }

    // Save scroll positions
    const scrollPositions = {};
    root.querySelectorAll('.station-scroll').forEach(el => {
      scrollPositions[el.dataset.category] = el.scrollLeft;
    });
    const prevArea = root.querySelector('.stations-area');
    const stationsScrollTop = prevArea ? prevArea.scrollTop : undefined;

    root.innerHTML = '';

    const card = document.createElement('ha-card');
    // Optional mural background: painted on the CARD so it sits behind
    // everything (banner, speaker controls AND the station list). The
    // stations area scrolls its content over it — the image stays
    // still. Dark overlay keeps all text/tiles readable.
    if (config.background_image) {
      const fit = config.background_fit || 'fill';
      const size = fit === 'fill' ? 'cover' : fit === 'fit' ? 'contain' : fit === 'stretch' ? '100% 100%' : 'auto';
      const dim = config.background_dim !== undefined ? config.background_dim : 0.62;
      const applyBg = (u) => {
        card.style.background =
          `linear-gradient(rgba(12,12,16,${dim}), rgba(12,12,16,${dim})), ` +
          `url('${u}') center / ${size} no-repeat fixed`;
      };
      const ref = config.background_image;
      if (ref.startsWith('media-source://')) {
        // media folder auth-URLs expire — store the ref, resolve fresh
        if (this._bgCache && this._bgCache.id === ref) applyBg(this._bgCache.url);
        jbResolveMedia(this._hass, ref)
          .then(u => { this._bgCache = { id: ref, url: u }; applyBg(u); })
          .catch(() => {});
      } else {
        applyBg(ref);
      }
    }

    const style = document.createElement('style');
    style.textContent = this._getStyles();
    card.appendChild(style);

    const container = document.createElement('div');
    container.className = 'jukebox';
    const effCols = config.columns || this._autoCols || 4;
    container.style.setProperty('--columns', effCols);
    // responsive: derive columns from real container width (masonry view
    // cells, phone screens, panel views all differ) unless config pins it
    if (!this._roCols) {
      this._roCols = new ResizeObserver(entries => {
        const w = entries[0] && entries[0].contentRect ? entries[0].contentRect.width : 0;
        if (!w) return;
        const auto = Math.max(2, Math.min(6, Math.floor(w / 170)));
        if (auto !== this._autoCols) {
          this._autoCols = auto;
          if (!this._config.columns) { this._lastStructuralHash = null; this._render(); }
        }
      });
    }
    this._roCols.disconnect();
    this._roCols.observe(container);
    this._containerEl = container;
    container.addEventListener('scroll', ev => {
      const t = ev.target;
      const isRow = t && t.classList && t.classList.contains('station-scroll');
      const isMenu = t && t.classList && t.classList.contains('speaker-menu');
      if (this._speakerMenuOpen && !isMenu) this._closeSpeakerMenu();
      // vertical scrolling resets every playlist row to its first station
      // — but never during edit mode (fights drag auto-scroll) or when the
      // render pipeline is programmatically restoring positions
      if (!isRow && !isMenu && !this._vScrollReset && !this._jiggle && !this._suppressRowReset) {
        this._vScrollReset = true;
        setTimeout(() => { this._vScrollReset = false; }, 600);
        this.shadowRoot.querySelectorAll('.station-scroll').forEach(sc => {
          if (sc.scrollLeft > 0) sc.scrollTo({ left: 0, behavior: 'smooth' });
        });
      }
    }, { capture: true, passive: true });
    container.style.setProperty('--tile-height', `${config.tile_height}px`);

    // ── Controls ──
    const controls = document.createElement('div');
    controls.className = 'controls';

    // Zone chips: one chip per playback session + [+] for a new zone
    const zoneBar = document.createElement('div');
    zoneBar.className = 'zone-chips';
    controls.appendChild(zoneBar);

    if (speakers.length > 0) {
      // Speaker select
      const speakerWrap = document.createElement('div');
      speakerWrap.className = 'speaker-wrap';
      const spkIcon = document.createElement('ha-icon');
      spkIcon.setAttribute('icon', 'mdi:speaker');
      speakerWrap.appendChild(spkIcon);
      // Multi-select dropdown: button + checkbox menu. Groups act as
      // toggles for all their members; individuals check independently.
      const btn = document.createElement('button');
      btn.className = 'speaker-btn';
      btn.innerHTML = `<span class="speaker-btn-label"></span><span class="speaker-caret">▾</span>`;
      const menu = document.createElement('div');
      menu.className = 'speaker-menu';

      const groupSpeakers = speakers.filter(sp => this._isSpeakerGroup(sp.entity));
      const soloSpeakers = speakers.filter(sp => !this._isSpeakerGroup(sp.entity));
      const addRows = (list, header, isGroup) => {
        if (!list.length) return;
        if (header) {
          const hd = document.createElement('div');
          hd.className = 'speaker-menu-header';
          hd.textContent = header;
          menu.appendChild(hd);
        }
        for (const sp of list) {
          const row = document.createElement('div');
          row.className = 'speaker-item';
          if (isGroup) { row.dataset.group = sp.entity; } else { row.dataset.entity = sp.entity; }
          row.innerHTML = `<span class="spk-check"></span><span class="spk-name">${this._esc ? this._esc(sp.name) : sp.name}</span><span class="spk-busy"></span>`;
          row.addEventListener('click', e => {
            e.stopPropagation();
            if (row.classList.contains('disabled')) return; // strict no-steal
            const before = this._playTargets();
            const cur = this._currentStationObj();
            if (isGroup) { this._toggleGroup(sp.entity); } else { this._toggleSpeaker(sp.entity); }
            this._selectedSpeaker = this._playTargets()[0] || null;
            this._applySelectionDiff(before, this._playTargets(), cur);
            this._syncSpeakerMenu(this.shadowRoot);
            this._lastStateHash = null;
          });
          // Per-speaker volume, shown only while checked (individuals only —
          // a group's members each expose their own slider)
          if (!isGroup) {
            const st = this._hass.states[sp.entity];
            // Fully Kiosk players don't report volume_level while idle —
            // show a mid slider so the control is still usable
            const devVol = st && st.attributes.volume_level !== undefined ? (st.attributes.volume_level || 0) : 0.7;
            const vw = document.createElement('div');
            vw.className = 'spk-vol-wrap';
            const sl = document.createElement('input');
            sl.type = 'range';
            sl.className = 'volume-slider spk-vol';
            sl.min = '0'; sl.max = '1'; sl.step = '0.02';
            sl.value = devVol;
            const pct = document.createElement('span');
            pct.className = 'vol-pct spk-vol-pct';
            pct.textContent = `${Math.round(devVol * 100)}%`;
            const entityId = sp.entity;
            ['click', 'mousedown', 'touchstart', 'pointerdown'].forEach(evt =>
              sl.addEventListener(evt, e => e.stopPropagation()));
            sl.addEventListener('input', e => {
              e.stopPropagation();
              this._draggingVolume = true;
              this._setDeviceVolume(entityId, parseFloat(e.target.value));
              pct.textContent = `${Math.round(e.target.value * 100)}%`;
            });
            sl.addEventListener('change', e => { e.stopPropagation(); this._draggingVolume = false; });
            vw.appendChild(sl);
            vw.appendChild(pct);
            row.appendChild(vw);
          }
          menu.appendChild(row);
        }
      };
      const both = groupSpeakers.length && soloSpeakers.length;
      addRows(groupSpeakers, both ? 'Speaker Groups' : null, true);
      addRows(soloSpeakers, both ? 'Individual Speakers' : null, false);

      btn.addEventListener('click', e => {
        e.stopPropagation();
        this._speakerMenuOpen = !this._speakerMenuOpen;
        menu.classList.toggle('open', this._speakerMenuOpen);
      });
      if (!this._speakerDocClose) {
        this._speakerDocClose = () => {
          if (!this._speakerMenuOpen) return;
          this._speakerMenuOpen = false;
          const m = this.shadowRoot.querySelector('.speaker-menu');
          if (m) m.classList.remove('open');
          this._updateDynamic();
        };
        document.addEventListener('click', this._speakerDocClose);
      }
      if (this._speakerMenuOpen) menu.classList.add('open');

      speakerWrap.appendChild(btn);
      speakerWrap.appendChild(menu);
      const dirBtn = document.createElement('button');
      dirBtn.className = 'dir-btn';
      dirBtn.title = 'Settings';
      const dirIco = document.createElement('ha-icon');
      dirIco.setAttribute('icon', 'mdi:cog');
      dirBtn.appendChild(dirIco);
      dirBtn.addEventListener('click', e => {
        e.stopPropagation();
        this._closeSpeakerMenu();
        this._openSettingsMenu(speakerWrap, dirBtn);
      });
      speakerWrap.appendChild(dirBtn);
      controls.appendChild(speakerWrap);
      // initial label + checks
      setTimeout(() => { this._syncSpeakerMenu(this.shadowRoot); this._syncZoneChips(this.shadowRoot); }, 0);

      // Volume
      const volWrap = document.createElement('div');
      volWrap.className = 'volume-wrap';
      const volIcon = document.createElement('ha-icon');
      volIcon.className = 'vol-icon';
      volIcon.setAttribute('icon',
        volume === 0 ? 'mdi:volume-off' :
        volume < 0.5 ? 'mdi:volume-medium' : 'mdi:volume-high'
      );
      volWrap.appendChild(volIcon);
      const slider = document.createElement('input');
      slider.type = 'range';
      slider.className = 'volume-slider';
      slider.min = '0'; slider.max = '1'; slider.step = '0.02';
      slider.value = volume;
      slider.addEventListener('input', e => {
        this._draggingVolume = true;
        this._setVolume(parseFloat(e.target.value));
        volPct.textContent = `${Math.round(e.target.value * 100)}%`;
      });
      slider.addEventListener('change', () => { this._draggingVolume = false; });
      volWrap.appendChild(slider);
      const volPct = document.createElement('span');
      volPct.className = 'vol-pct';
      volPct.textContent = `${Math.round(volume * 100)}%`;
      volWrap.appendChild(volPct);
      controls.appendChild(volWrap);

    } else {
      const noSpk = document.createElement('div');
      noSpk.className = 'no-speakers';
      noSpk.textContent = 'No media players found';
      controls.appendChild(noSpk);
    }

    container.appendChild(controls);

    // ── Now Playing Banner (always rendered to prevent layout jump) ──
    const banner = document.createElement('div');
    banner.className = 'now-playing';
    const bs = this._bannerState(activeUrl, activeStationName, isPlaying);
    this._fillBanner(banner, bs.name, bs.playing);
    container.appendChild(banner);

    // ── Stop Cast Button (always in DOM, hidden when no cast speakers) ──
    const stopCast = document.createElement('button');
    stopCast.className = 'stop-cast-btn';
    const stopIco = document.createElement('ha-icon');
    stopIco.setAttribute('icon', 'mdi:stop');
    stopCast.appendChild(stopIco);
    const stopCastLabel = document.createElement('span');
    stopCastLabel.className = 'stop-cast-label';
    stopCast.appendChild(stopCastLabel);
    stopCast.addEventListener('click', () => this._stopCastSpeakers());
    this._updateStopCastBtn(stopCast);
    container.appendChild(stopCast);

    // ── Categories (vertically scrollable; controls above stay fixed) ──
    const stationsArea = document.createElement('div');
    stationsArea.className = 'stations-area';

    categories.forEach((cat, catIdx) => {
      const section = document.createElement('div');
      section.className = 'category';
      section.dataset.cat = String(catIdx);

      const header = document.createElement('div');
      header.className = 'cat-header';
      header.textContent = cat.name;
      header.dataset.cat = String(catIdx);
      header.addEventListener('contextmenu', e => e.preventDefault());
      let hTimer = null;
      header.addEventListener('pointerdown', (e) => {
        if (this._jiggle) return;
        hTimer = setTimeout(() => { hTimer = null; this._openPlaylistManager(); }, 500);
      });
      ['pointerup', 'pointerleave', 'pointercancel'].forEach(evn =>
        header.addEventListener(evn, () => { if (hTimer) { clearTimeout(hTimer); hTimer = null; } }));
      section.appendChild(header);

      const scroller = document.createElement('div');
      scroller.className = 'station-scroll';
      scroller.dataset.category = catIdx;

      // Split into pages
      const cols = effCols;
      const pages = [];
      for (let i = 0; i < cat.stations.length; i += cols) {
        pages.push(cat.stations.slice(i, i + cols));
      }

      pages.forEach(pageStations => {
        const page = document.createElement('div');
        page.className = 'station-page';

        pageStations.forEach((station, stationIndex) => {
          const tile = document.createElement('div');
          tile.className = 'station-tile';
          if (this._otherZoneUrls && this._otherZoneUrls.has(station.url)) tile.classList.add('other-zone');
          tile.dataset.url = station.url;
          if (activeUrl && station.url === activeUrl) tile.classList.add('active');

          // Custom logo takes priority over station.logo
          const customLogo = this._config.custom_logos && this._config.custom_logos[station.url];
          const logoUrl = customLogo || station.logo;

          if (logoUrl) {
            tile.style.backgroundImage = `url(${logoUrl})`;
            tile.style.backgroundColor = this._hashColor(station.name);
            tile.classList.add('has-logo');
          } else {
            tile.classList.add('no-logo');
            tile.style.backgroundColor = this._hashColor(station.name);
            const ico = document.createElement('ha-icon');
            ico.setAttribute('icon', 'mdi:radio');
            ico.className = 'fallback-icon';
            tile.appendChild(ico);
          }

          const label = document.createElement('div');
          label.className = 'name-overlay';
          label.textContent = station.name;
          tile.appendChild(label);

          const xBadge = document.createElement('div');
          xBadge.className = 'tile-x';
          xBadge.innerHTML = '&times;';
          xBadge.addEventListener('pointerdown', e => e.stopPropagation());
          xBadge.addEventListener('pointerup', e => e.stopPropagation());
          xBadge.addEventListener('click', e => {
            e.stopPropagation();
            if (this._jiggle !== 'stations') return;
            this._editDeleteStation(+tile.dataset.cat, +tile.dataset.abs);
          });
          tile.appendChild(xBadge);

          // Tap = play. Hard-press = enter rearrange (jiggle) mode — it
          // must NOT play. While jiggling: drag = move, tap = artwork
          // editor (the old long-press image-upload lives there now).
          tile.dataset.cat = String(catIdx);
          tile.dataset.abs = String(cat.stations.indexOf(station));
          let pressTimer = null;
          let longPressTriggered = false;
          tile.addEventListener('contextmenu', e => e.preventDefault());
          tile.addEventListener('pointerdown', (e) => {
            if (this._jiggle === 'stations') { this._dragStart(e, tile, 'stations'); return; }
            if (this._jiggle) return;
            longPressTriggered = false;
            pressTimer = setTimeout(() => {
              pressTimer = null;
              longPressTriggered = true;
              e.preventDefault();
              this._enterJiggle('stations');
            }, 500);
          });
          tile.addEventListener('pointerup', () => {
            if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
            if (longPressTriggered) return;
            if (this._jiggle === 'stations') {
              if (!this._dragMoved) this._openImageUpload(station, catIdx, stationIndex);
              return;
            }
            if (this._jiggle) return;
            this._playStation(station, cat.name);
          });
          tile.addEventListener('pointerleave', () => { if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; } });
          tile.addEventListener('pointermove', (e) => {
            if (pressTimer && (Math.abs(e.movementX) > 5 || Math.abs(e.movementY) > 5)) {
              clearTimeout(pressTimer); pressTimer = null;
            }
          });
          page.appendChild(tile);
        });

        // Pad last page
        for (let i = pageStations.length; i < cols; i++) {
          const empty = document.createElement('div');
          empty.className = 'station-tile empty';
          page.appendChild(empty);
        }

        scroller.appendChild(page);
      });

      section.appendChild(scroller);

      // Pagination dots
      if (pages.length > 1) {
        const dots = document.createElement('div');
        dots.className = 'dots';
        pages.forEach((_, i) => {
          const dot = document.createElement('span');
          dot.className = 'dot' + (i === 0 ? ' active' : '');
          dot.addEventListener('click', () => {
            scroller.scrollTo({ left: scroller.offsetWidth * i, behavior: 'smooth' });
          });
          dots.appendChild(dot);
        });

        scroller.addEventListener('scroll', () => {
          const page = Math.round(scroller.scrollLeft / scroller.offsetWidth);
          dots.querySelectorAll('.dot').forEach((d, i) => {
            d.classList.toggle('active', i === page);
          });
        });

        section.appendChild(dots);
      }

      stationsArea.appendChild(section);
    });

    container.appendChild(stationsArea);

    card.appendChild(container);
    root.appendChild(card);

    // Restore scroll positions (re-apply after layout so scroll-snap can't reset them)
    const restoreScroll = () => {
      root.querySelectorAll('.station-scroll').forEach(el => {
        const pos = scrollPositions[el.dataset.category];
        if (pos !== undefined && el.scrollLeft !== pos) el.scrollLeft = pos;
      });
      if (stationsScrollTop !== undefined) {
        const area = root.querySelector('.stations-area');
        if (area && area.scrollTop !== stationsScrollTop) area.scrollTop = stationsScrollTop;
      }
    };
    this._suppressRowReset = true;
    restoreScroll();
    requestAnimationFrame(() => {
      restoreScroll();
      requestAnimationFrame(() => { this._suppressRowReset = false; });
    });
    this._sizeCard();
    requestAnimationFrame(() => this._sizeCard());

    this._lastStructuralHash = this._computeStructuralHash();
  }

  // Returns what the banner should display, holding the just-tapped station
  // (active styling) through the buffering gap instead of flashing idle.
  _bannerState(activeUrl, activeStationName, isPlaying) {
    if (this._pendingStation) {
      const p = this._pendingStation;
      if (activeUrl === p.url || Date.now() - p.ts > 20000) {
        this._pendingStation = null;
      } else {
        return { name: p.name, playing: true };
      }
    }
    return { name: activeStationName, playing: isPlaying };
  }

  _fillBanner(banner, activeStationName, isPlaying) {
    const key = `${isPlaying ? 1 : 0}|${activeStationName || ''}`;
    if (banner.dataset.key === key) return;
    banner.dataset.key = key;
    banner.innerHTML = '';
    banner.classList.toggle('active', !!(activeStationName && isPlaying));
    banner.classList.toggle('idle', !(activeStationName && isPlaying));
    const npIcon = document.createElement('ha-icon');
    npIcon.setAttribute('icon', 'mdi:radio');
    banner.appendChild(npIcon);
    const npText = document.createElement('span');
    npText.textContent = (activeStationName && isPlaying) ? activeStationName : 'Select a station to play';
    banner.appendChild(npText);
    // Stop button always in layout so the banner height never changes
    const stopBtn = document.createElement('ha-icon');
    stopBtn.setAttribute('icon', 'mdi:stop');
    stopBtn.className = 'stop-btn';
    if (activeStationName && isPlaying) {
      stopBtn.addEventListener('click', () => this._stopPlayback());
    } else {
      stopBtn.style.visibility = 'hidden';
    }
    banner.appendChild(stopBtn);
  }

  _updateStopCastBtn(btn) {
    // visibility (not display) so the space stays reserved and nothing below jumps
    const n = this._castSpeakers ? this._castSpeakers.size : 0;
    btn.style.visibility = n > 0 ? '' : 'hidden';
    const label = btn.querySelector('.stop-cast-label');
    if (label) label.textContent = ` Stop ${n} Speaker${n > 1 ? 's' : ''}`;
  }

  // In-place update for playback/volume state changes — leaves the DOM tree
  _syncSpeakerMenu(root) {
    const label = root.querySelector('.speaker-btn-label');
    if (label) label.textContent = this._speakerSummary();
    const z = this._activeZone();
    const sel = new Set(z.s);
    root.querySelectorAll('.speaker-item').forEach(row => {
      const check = row.querySelector('.spk-check');
      if (!check) return;
      let on, busyNote = '';
      if (row.dataset.group) {
        on = z.g === row.dataset.group;
        if (!on) {
          const avail = this._groupAvailability(row.dataset.group);
          if (!avail.ok) busyNote = avail.why;
        }
      } else {
        on = sel.has(row.dataset.entity);
        const owner = this._speakerBusyIn(row.dataset.entity);
        if (owner) busyNote = 'in ' + this._zoneName(owner);
      }
      check.classList.toggle('checked', on);
      row.classList.toggle('checked', on);
      row.classList.toggle('disabled', !!busyNote);
      const busyEl = row.querySelector('.spk-busy');
      if (busyEl) busyEl.textContent = busyNote;
      if (!this._draggingVolume && row.dataset.entity) {
        const st = this._hass.states[row.dataset.entity];
        if (st && st.attributes.volume_level !== undefined) {
          const v = st.attributes.volume_level || 0;
          const sl = row.querySelector('.spk-vol');
          if (sl) sl.value = v;
          const pct = row.querySelector('.spk-vol-pct');
          if (pct) pct.textContent = `${Math.round(v * 100)}%`;
        }
      }
    });
  }

  // ── Edit mode (jiggle) ──
  // A SESSION: hard-press enters edit mode; every move/delete mutates a
  // working copy (this._editCats) with a full undo stack; nothing is
  // saved until "Exit Edit Mode" — then it all persists at once and the
  // undo history is gone (per Phil).

  _enterJiggle(kind) {
    if (!this._canEdit()) return;
    if (!this._editCats) {
      this._editCats = this._getCategories().map(c => ({ ...c, stations: [...c.stations] }));
      this._editUndo = [];
    }
    this._jiggle = kind;
    this._dragMoved = false;
    if (this._containerEl) {
      this._containerEl.classList.remove('jiggle-stations', 'jiggle-playlists');
      this._containerEl.classList.add('jiggle-' + kind);
    }
    this._mountEditBar();
    this._syncOverlayState();
  }

  _exitJiggle() {
    if (this._containerEl) {
      this._containerEl.classList.remove('jiggle-stations', 'jiggle-playlists');
    }
    const bar = this.shadowRoot.querySelector('.edit-bar');
    if (bar) bar.remove();
    this._jiggle = null;
    this._setDropTarget(null);
    this._syncOverlayState();
  }

  _exitJiggleAndSave() {
    const cats = this._editCats;
    this._editCats = null;
    this._editUndo = null;
    this._exitJiggle();
    if (cats) this._saveCategories(cats, true);
  }

  _editSnapshot() {
    if (this._editUndo) {
      this._editUndo.push(this._editCats.map(c => ({ ...c, stations: [...c.stations] })));
    }
  }

  _editUndoLast() {
    if (!this._editUndo || !this._editUndo.length) return;
    this._editCats = this._editUndo.pop();
    this._editRefresh();
  }

  _editDeleteStation(catIdx, absIdx) {
    if (!this._editCats || !this._editCats[catIdx]) return;
    this._editSnapshot();
    this._editCats[catIdx].stations.splice(absIdx, 1);
    this._editRefresh();
  }

  // re-render the grid from the working copy while STAYING in edit mode
  _editRefresh() {
    this._lastStructuralHash = null;
    this._render();
    if (this._jiggle && this._containerEl) {
      this._containerEl.classList.add('jiggle-' + this._jiggle);
    }
    this._mountEditBar();
  }

  _mountEditBar() {
    if (!this._containerEl) return;
    this._containerEl.style.position = 'relative';
    let bar = this.shadowRoot.querySelector('.edit-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'edit-bar';
      const undo = document.createElement('button');
      undo.className = 'edit-undo';
      undo.textContent = 'Undo Last Change';
      undo.addEventListener('click', e => { e.stopPropagation(); this._editUndoLast(); });
      const exit = document.createElement('button');
      exit.className = 'edit-exit';
      exit.textContent = 'Exit Edit Mode';
      exit.addEventListener('click', e => { e.stopPropagation(); this._exitJiggleAndSave(); });
      bar.appendChild(undo);
      bar.appendChild(exit);
      this._containerEl.appendChild(bar);
    }
    const u = bar.querySelector('.edit-undo');
    if (u) u.disabled = !(this._editUndo && this._editUndo.length);
  }

  _setDropTarget(t) {
    if (this._dropTargetEl) this._dropTargetEl.classList.remove('drop-target');
    this._dropTargetEl = t;
    if (t) t.classList.add('drop-target');
  }

  // Drag = a fixed-position ghost that follows the finger ANYWHERE
  // (original stays put, dimmed), with edge auto-scroll: vertical on the
  // stations area, horizontal on whichever row is under the finger.
  _dragStart(e, el, kind) {
    e.preventDefault();
    const startX = e.clientX, startY = e.clientY;
    this._dragMoved = false;
    let ghost = null;
    const mkGhost = () => {
      const src = kind === 'playlists' ? (el.querySelector('.cat-header') || el) : el;
      const r = src.getBoundingClientRect();
      ghost = src.cloneNode(true);
      ghost.classList.add('drag-ghost');
      ghost.style.cssText = `position:fixed;left:${r.left}px;top:${r.top}px;width:${r.width}px;height:${r.height}px;z-index:9999;pointer-events:none;margin:0;opacity:0.92;box-shadow:0 8px 24px rgba(0,0,0,0.6);`;
      (this._containerEl || this.shadowRoot).appendChild(ghost);
      el.classList.add('drag-src');
    };
    this._dragPt = { x: startX, y: startY };
    let rafId = null;
    const auto = () => {
      if (this._dragMoved) {
        const pt = this._dragPt;
        const va = this.shadowRoot.querySelector('.stations-area');
        if (va) {
          const r = va.getBoundingClientRect();
          if (pt.y < r.top + 70) va.scrollTop -= 14;
          else if (pt.y > r.bottom - 70) va.scrollTop += 14;
        }
        const under = this.shadowRoot.elementFromPoint(pt.x, pt.y);
        const rowEl = under && under.closest && under.closest('.station-scroll');
        if (rowEl) {
          const rr = rowEl.getBoundingClientRect();
          if (pt.x < rr.left + 60) rowEl.scrollLeft -= 14;
          else if (pt.x > rr.right - 60) rowEl.scrollLeft += 14;
        }
      }
      rafId = requestAnimationFrame(auto);
    };
    rafId = requestAnimationFrame(auto);
    const onMove = (ev) => {
      ev.preventDefault();
      this._dragPt = { x: ev.clientX, y: ev.clientY };
      if (!this._dragMoved && Math.hypot(ev.clientX - startX, ev.clientY - startY) > 8) {
        this._dragMoved = true;
        mkGhost();
      }
      if (!this._dragMoved) return;
      ghost.style.left = (ev.clientX - ghost.offsetWidth / 2) + 'px';
      ghost.style.top = (ev.clientY - ghost.offsetHeight / 2) + 'px';
      const under = this.shadowRoot.elementFromPoint(ev.clientX, ev.clientY);
      if (!under) { this._setDropTarget(null); return; }
      if (kind === 'stations') {
        const tile = under.closest && under.closest('.station-tile:not(.empty)');
        // hovering the tile's OWN original spot = "put it back" = no move
        // (falling through to the category here made a drop-in-place
        // append the station to the end of the playlist)
        if (tile === el) { this._setDropTarget(null); return; }
        if (tile) { this._setDropTarget(tile); return; }
        const cat = under.closest && under.closest('.category');
        this._setDropTarget(cat || null);
      } else {
        const cat = under.closest && under.closest('.category');
        this._setDropTarget(cat && cat !== el ? cat : null);
      }
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove, true);
      window.removeEventListener('pointerup', onUp, true);
      cancelAnimationFrame(rafId);
      if (ghost) ghost.remove();
      el.classList.remove('drag-src');
      const tgt = this._dropTargetEl;
      this._setDropTarget(null);
      if (this._dragMoved && tgt) this._performMove(el, tgt, kind);
      setTimeout(() => { this._dragMoved = false; }, 0);
    };
    window.addEventListener('pointermove', onMove, { capture: true, passive: false });
    window.addEventListener('pointerup', onUp, { capture: true });
  }

  _performMove(el, tgt, kind) {
    if (!this._editCats) return;
    this._editSnapshot();
    const cats = this._editCats;
    if (kind === 'stations') {
      const fromCat = +el.dataset.cat, fromAbs = +el.dataset.abs;
      if (isNaN(fromCat) || isNaN(fromAbs) || !cats[fromCat]) return;
      const [moved] = cats[fromCat].stations.splice(fromAbs, 1);
      if (!moved) return;
      if (tgt.classList.contains('station-tile')) {
        const toCat = +tgt.dataset.cat;
        let toAbs = +tgt.dataset.abs;
        if (toCat === fromCat && fromAbs < toAbs) toAbs -= 1;
        cats[toCat].stations.splice(toAbs, 0, moved);
      } else {
        const toCat = +tgt.dataset.cat;
        if (!cats[toCat]) return;
        cats[toCat].stations.push(moved);
      }
    } else {
      const from = +el.dataset.cat, to = +tgt.dataset.cat;
      if (isNaN(from) || isNaN(to) || from === to) return;
      const [movedCat] = cats.splice(from, 1);
      cats.splice(to > from ? to - 1 : to, 0, movedCat);
    }
    // edit session continues — save happens only on Exit Edit Mode
    this._editRefresh();
  }

  // Persist playlists/stations back into THIS card's config inside the
  // storage dashboard — self-service, works for any HA admin user.
  // Patch arbitrary keys on every jukebox card across sync_dashboards
  // (null value deletes the key). Same mechanism as _saveCategories.
  async _saveCardConfig(patch, render = true, sync = true) {
    this._config = { ...this._config, ...patch };
    for (const k of Object.keys(patch)) { if (patch[k] === null) delete this._config[k]; }
    const here = location.pathname.split('/')[1] || null;
    const targets = sync
      ? [...new Set([here, ...(this._config.sync_dashboards || [])])].filter(Boolean)
      : [here].filter(Boolean);
    for (const urlPath of targets) {
      try {
        const cfg = await this._hass.callWS({ type: 'lovelace/config', url_path: urlPath });
        let n = 0;
        const walk = (o) => {
          if (Array.isArray(o)) { o.forEach(walk); return; }
          if (o && typeof o === 'object') {
            if (o.type === 'custom:jukebox-card') {
              for (const k of Object.keys(patch)) {
                if (patch[k] === null) delete o[k]; else o[k] = patch[k];
              }
              n++;
            }
            Object.values(o).forEach(walk);
          }
        };
        walk(cfg);
        if (n) await this._hass.callWS({ type: 'lovelace/config/save', url_path: urlPath, config: cfg });
      } catch (e) {
        console.warn('jukebox-card: could not persist config to', urlPath, e);
      }
    }
    if (render) { this._lastStructuralHash = null; this._render(); }
  }

  async _saveCategories(cats, render = true) {
    this._config = { ...this._config, categories: cats };
    // playlists are a MASTER shared by all zones/speakers; with
    // `sync_dashboards: [url-path, ...]` in the card config the same
    // master is written to the jukebox cards on those dashboards too
    const here = location.pathname.split('/')[1] || null;
    const targets = [...new Set([here, ...(this._config.sync_dashboards || [])])].filter(Boolean);
    for (const urlPath of targets) {
      try {
        const cfg = await this._hass.callWS({ type: 'lovelace/config', url_path: urlPath });
        let n = 0;
        const walk = (o) => {
          if (Array.isArray(o)) { o.forEach(walk); return; }
          if (o && typeof o === 'object') {
            if (o.type === 'custom:jukebox-card') { o.categories = cats; n++; }
            Object.values(o).forEach(walk);
          }
        };
        walk(cfg);
        if (n) await this._hass.callWS({ type: 'lovelace/config/save', url_path: urlPath, config: cfg });
      } catch (e) {
        console.warn('jukebox-card: could not persist playlists to', urlPath, e);
      }
    }
    if (render) { this._lastStructuralHash = null; this._render(); }
  }

  // ── Station directory (radio-browser.info) ──
  async _dirApi(path) {
    for (const host of ['de1', 'at1', 'nl1']) {
      try {
        const r = await fetch(`https://${host}.api.radio-browser.info${path}`);
        if (r.ok) return await r.json();
      } catch (e) { /* try next mirror */ }
    }
    throw new Error('radio-browser unreachable');
  }

  _isAdmin() {
    return !!(this._hass && this._hass.user && this._hass.user.is_admin);
  }

  _canEdit() {
    return this._isAdmin() || !!this._config.allow_non_admin_edit;
  }

  _openSettingsMenu(wrap, anchor) {
    const old = this.shadowRoot.querySelector('.settings-menu');
    if (old) { old.remove(); return; } // second tap on the gear closes it
    const menu = document.createElement('div');
    menu.className = 'settings-menu';
    menu.addEventListener('click', e => e.stopPropagation());
    const item = (icon, label, fn) => {
      const row = document.createElement('div');
      row.className = 'speaker-item settings-item';
      row.innerHTML = `<ha-icon icon="${icon}" style="--mdc-icon-size:20px"></ha-icon><span class="settings-label">${label}</span>`;
      row.addEventListener('click', e => { e.stopPropagation(); menu.remove(); fn(); });
      menu.appendChild(row);
    };
    if (this._canEdit()) {
      item('mdi:playlist-plus', 'Add stations…', () => this._openDir());
    }
    if (this._isAdmin()) {
      // background + permissions are admin-only regardless of the
      // "everyone can edit" setting (that setting covers playlists)
      item('mdi:image', 'Background…', () => this._openBgEditor());
      item('mdi:account-lock', 'Permissions & Speakers…', () => this._openPermissions());
    }
    if (!menu.children.length) {
      const row = document.createElement('div');
      row.className = 'settings-label';
      row.style.padding = '10px';
      row.style.opacity = '0.7';
      row.textContent = 'Editing is limited to admins';
      menu.appendChild(row);
    }
    wrap.appendChild(menu);
    const closeDoc = (ev) => {
      const path = ev.composedPath ? ev.composedPath() : [];
      // ignore clicks on the menu AND on the gear itself (the gear handler
      // does the toggle; the capture closer must not race it)
      if (path.includes(menu) || path.includes(anchor)) return;
      menu.remove();
      document.removeEventListener('click', closeDoc, true);
    };
    setTimeout(() => document.addEventListener('click', closeDoc, true), 0);
  }

  _openPermissions() {
    const overlay = document.createElement('div');
    overlay.className = 'image-upload-overlay';
    overlay.addEventListener('click', () => overlay.remove());
    const modal = document.createElement('div');
    modal.className = 'image-upload-modal';
    modal.style.maxHeight = '86vh';
    modal.style.overflowY = 'auto';
    modal.addEventListener('click', e => e.stopPropagation());
    modal.innerHTML = `<div class="image-upload-title">Who can edit playlists &amp; settings?</div>`;
    let allow = !!this._config.allow_non_admin_edit;
    const fits = document.createElement('div');
    fits.className = 'fit-row';
    const mkOpt = (label, val) => {
      const b = document.createElement('button');
      b.className = 'fit-btn' + ((val === allow) ? ' active' : '');
      b.textContent = label;
      b.addEventListener('click', e => {
        e.stopPropagation();
        allow = val;
        fits.querySelectorAll('.fit-btn').forEach(x => x.classList.toggle('active', x === b));
      });
      fits.appendChild(b);
    };
    mkOpt('Admins only', false);
    mkOpt('Everyone', true);
    modal.appendChild(fits);
    const note = document.createElement('div');
    note.className = 'dir-sub';
    note.style.cssText = 'padding:4px 2px 12px;white-space:normal;';
    note.textContent = 'Applies to this dashboard only. Note: Home Assistant only lets ADMIN accounts write dashboards \u2014 with "Everyone", a non-admin\u2019s edits appear to work but vanish when their page reloads.';
    modal.appendChild(note);

    // ── per-dashboard speaker availability ──
    const spTitle = document.createElement('div');
    spTitle.className = 'image-upload-title';
    spTitle.style.marginTop = '6px';
    spTitle.textContent = 'Speakers available on THIS dashboard';
    modal.appendChild(spTitle);
    const spNote = document.createElement('div');
    spNote.className = 'dir-sub';
    spNote.style.cssText = 'padding:0 2px 8px;white-space:normal;';
    spNote.textContent = 'Saved for this dashboard only \u2014 e.g. limit a guest dashboard to guest-area speakers.';
    modal.appendChild(spNote);
    const pool = this._autoDiscoverSpeakers();
    const manual = this._config.speakers && this._config.speakers.length
      ? new Set(this._config.speakers.map(sp => sp.entity)) : null;
    let autoMode = !manual;
    const checked = new Set(manual ? [...manual].filter(e => pool.find(p => p.entity === e)) : pool.map(p => p.entity));
    // explicit auto-discover toggle: ON = all current AND FUTURE speakers;
    // OFF = pinned manual selection below
    const autoRow = document.createElement('div');
    autoRow.className = 'speaker-item';
    autoRow.style.marginBottom = '6px';
    autoRow.innerHTML = `<span class="spk-check${autoMode ? ' checked' : ''}"></span><span class="spk-name" style="flex:1">Auto-discover &amp; add new speakers</span>`;
    modal.appendChild(autoRow);
    const spList = document.createElement('div');
    spList.style.cssText = 'max-height:220px;overflow-y:auto;border:1px solid var(--divider-color,#555);border-radius:10px;padding:4px;margin-bottom:12px;';
    const syncListState = () => {
      spList.style.opacity = autoMode ? '0.45' : '1';
      spList.style.pointerEvents = autoMode ? 'none' : 'auto';
      if (autoMode) {
        checked.clear();
        pool.forEach(p => checked.add(p.entity));
        spList.querySelectorAll('.spk-check').forEach(c => c.classList.add('checked'));
      }
    };
    autoRow.addEventListener('click', e => {
      e.stopPropagation();
      autoMode = !autoMode;
      autoRow.querySelector('.spk-check').classList.toggle('checked', autoMode);
      syncListState();
    });
    for (const sp of pool) {
      const row = document.createElement('div');
      row.className = 'speaker-item';
      row.innerHTML = `<span class="spk-check${checked.has(sp.entity) ? ' checked' : ''}"></span><span class="spk-name" style="flex:1">${this._esc ? this._esc(sp.name) : sp.name}</span>`;
      row.addEventListener('click', e => {
        e.stopPropagation();
        const chk = row.querySelector('.spk-check');
        if (checked.has(sp.entity)) { checked.delete(sp.entity); chk.classList.remove('checked'); }
        else { checked.add(sp.entity); chk.classList.add('checked'); }
      });
      spList.appendChild(row);
    }
    modal.appendChild(spList);
    syncListState();
    const btns = document.createElement('div');
    btns.className = 'image-upload-buttons';
    const mk = (label, cls, fn) => {
      const b = document.createElement('button');
      b.className = 'upload-btn' + (cls ? ' ' + cls : '');
      b.textContent = label;
      b.addEventListener('click', e => { e.stopPropagation(); fn(); });
      btns.appendChild(b);
    };
    mk('Save', 'save', () => {
      if (!autoMode && !checked.size) { spNote.textContent = 'Select at least one speaker (or turn auto-discover on).'; spNote.style.color = '#ef5350'; return; }
      overlay.remove();
      // BOTH settings are per-dashboard (sync_dashboards shares playlists only)
      this._saveCardConfig({ allow_non_admin_edit: allow || null }, false, false);
      const list = autoMode
        ? null // auto-discover: current and future speakers appear automatically
        : pool.filter(p => checked.has(p.entity)).map(p => ({ name: p.name, entity: p.entity }));
      this._saveCardConfig({ speakers: list }, true, false);
    });
    mk('Cancel', '', () => overlay.remove());
    modal.appendChild(btns);
    overlay.appendChild(modal);
    (this._containerEl || this.shadowRoot).appendChild(overlay);
  }

  _openBgEditor() {
    const overlay = document.createElement('div');
    overlay.className = 'image-upload-overlay';
    const modal = document.createElement('div');
    modal.className = 'image-upload-modal';
    modal.addEventListener('click', e => e.stopPropagation());
    const title = document.createElement('div');
    title.className = 'image-upload-title';
    title.textContent = 'Jukebox Background';
    modal.appendChild(title);

    let image = this._config.background_image || '';
    let fit = this._config.background_fit || 'fill';
    let previewUrl = null;

    const preview = document.createElement('div');
    preview.className = 'bg-preview';
    const paint = () => {
      const size = fit === 'fill' ? 'cover' : fit === 'fit' ? 'contain' : fit === 'stretch' ? '100% 100%' : 'auto';
      const shown = image.startsWith('media-source://') ? previewUrl : image;
      preview.style.background = shown
        ? `linear-gradient(rgba(12,12,16,0.62), rgba(12,12,16,0.62)), url('${shown}') center / ${size} no-repeat`
        : 'rgba(127,127,127,0.15)';
      preview.textContent = image ? '' : 'No background set';
    };
    if (image.startsWith('media-source://')) {
      jbResolveMedia(this._hass, image).then(u => { previewUrl = u; paint(); }).catch(() => {});
    }
    paint();
    modal.appendChild(preview);

    const urlInp = document.createElement('input');
    urlInp.className = 'dir-search';
    urlInp.placeholder = 'or image URL (e.g. /local/mural.jpg)';
    urlInp.value = (image.startsWith('data:') || image.startsWith('media-source://')) ? '' : image;
    urlInp.addEventListener('change', () => { if (urlInp.value.trim()) { image = urlInp.value.trim(); previewUrl = null; paint(); } });
    modal.appendChild(urlInp);

    const fits = document.createElement('div');
    fits.className = 'fit-row';
    ['fill', 'fit', 'stretch', 'center'].forEach(f => {
      const btn = document.createElement('button');
      btn.className = 'fit-btn' + (f === fit ? ' active' : '');
      btn.textContent = f[0].toUpperCase() + f.slice(1);
      btn.addEventListener('click', e => {
        e.stopPropagation();
        fit = f;
        fits.querySelectorAll('.fit-btn').forEach(x => x.classList.toggle('active', x === btn));
        paint();
      });
      fits.appendChild(btn);
    });
    modal.appendChild(fits);

    const btnRow = document.createElement('div');
    btnRow.className = 'image-upload-buttons';
    const mk = (label, cls, fn) => {
      const btn = document.createElement('button');
      btn.className = 'upload-btn' + (cls ? ' ' + cls : '');
      btn.textContent = label;
      btn.addEventListener('click', e => { e.stopPropagation(); fn(); });
      btnRow.appendChild(btn);
    };
    mk('Browse Media', '', () => {
      jbMediaBrowser(this._hass, this._containerEl || this.shadowRoot, (id, url) => {
        image = id;
        previewUrl = url;
        paint();
      });
    });
    mk('Save', 'save', () => {
      overlay.remove();
      this._saveCardConfig({ background_image: image || null, background_fit: image ? fit : null }, true);
    });
    mk('Remove', 'remove', () => {
      overlay.remove();
      this._saveCardConfig({ background_image: null, background_fit: null }, true);
    });
    mk('Cancel', '', () => overlay.remove());
    modal.appendChild(btnRow);

    overlay.appendChild(modal);
    overlay.addEventListener('click', () => overlay.remove());
    (this._containerEl || this.shadowRoot).appendChild(overlay);
  }

  _openDir() {
    this._dirStack = [];
    this._dirCats = null;
    this._renderDir({ mode: 'root', title: 'Add Stations' });
    setTimeout(() => this._syncOverlayState(), 0);
  }

  _closeDir() {
    const p = this.shadowRoot.querySelector('.dir-panel');
    if (p) p.remove();
    this._dirStack = null;
    this._syncOverlayState();
    if (this._dirCats) {
      const cats = this._dirCats;
      this._dirCats = null;
      this._saveCategories(cats, true);
    }
  }

  // tablet-helper hides its floating view-back button while a jukebox
  // overlay is up (it sits exactly over our panel controls)
  _syncOverlayState() {
    const open = !!(this.shadowRoot.querySelector('.dir-panel') ||
                    this.shadowRoot.querySelector('.pl-man') || this._jiggle);
    try { window.dispatchEvent(new CustomEvent('jukebox-overlay', { detail: { open } })); } catch (e) {}
  }

  async _renderDir(view, push = true) {
    if (!this._containerEl || !this._dirStack) return;
    if (push) this._dirStack.push(view);
    let panel = this.shadowRoot.querySelector('.dir-panel');
    if (!panel) {
      panel = document.createElement('div');
      panel.className = 'dir-panel';
      this._containerEl.appendChild(panel);
    }
    panel.innerHTML = '';
    const head = document.createElement('div');
    head.className = 'dir-head';
    const back = document.createElement('button');
    back.className = 'dir-iconbtn';
    back.textContent = '‹';
    // per Phil: back = leave the browser entirely (same as the ✕)
    back.addEventListener('click', () => { this._closeDir(); this._lastStructuralHash = null; this._render(); });
    const title = document.createElement('div');
    title.className = 'dir-title';
    title.textContent = view.title;
    const close = document.createElement('button');
    close.className = 'dir-iconbtn';
    close.innerHTML = '&times;';
    close.addEventListener('click', () => { this._closeDir(); this._lastStructuralHash = null; this._render(); });
    head.appendChild(back); head.appendChild(title); head.appendChild(close);
    panel.appendChild(head);
    const hintBar = document.createElement('div');
    hintBar.className = 'dir-hintbar';
    hintBar.textContent = 'Tap to Play on Speakers Selected on Previous Screen · Hard Press to Add to Playlist';
    panel.appendChild(hintBar);
    const body = document.createElement('div');
    body.className = 'dir-body';
    panel.appendChild(body);

    const navRow = (label, next) => {
      const row = document.createElement('div');
      row.className = 'dir-row';
      row.innerHTML = `<div class="dir-name" style="flex:1">${label}</div><div style="opacity:.5">›</div>`;
      row.addEventListener('click', () => this._renderDir(next));
      body.appendChild(row);
    };

    if (view.mode === 'root') {
      const inp = document.createElement('input');
      inp.className = 'dir-search';
      inp.placeholder = 'Search stations…';
      inp.addEventListener('keydown', ev => {
        const q = inp.value.trim();
        if (ev.key === 'Enter' && q) {
          this._renderDir({ mode: 'stations', title: 'Search: ' + q,
            path: `/json/stations/search?name=${encodeURIComponent(q)}&hidebroken=true&order=clickcount&reverse=true&limit=100` });
        }
      });
      body.appendChild(inp);
      navRow('★ Popular stations', { mode: 'stations', title: 'Popular', path: '/json/stations/topclick/100?hidebroken=true' });
      navRow('By genre', { mode: 'tags', title: 'Genres' });
      navRow('By country', { mode: 'countries', title: 'Countries' });
      return;
    }

    const loading = document.createElement('div');
    loading.className = 'dir-sub';
    loading.style.padding = '10px';
    loading.textContent = 'Loading…';
    body.appendChild(loading);
    try {
      if (view.mode === 'tags') {
        const tags = await this._dirApi('/json/tags?order=stationcount&reverse=true&hidebroken=true&limit=200');
        loading.remove();
        for (const t of tags) {
          if (!t.name) continue;
          navRow(`${t.name}  (${t.stationcount})`, { mode: 'stations', title: t.name,
            path: `/json/stations/bytagexact/${encodeURIComponent(t.name)}?hidebroken=true&order=clickcount&reverse=true&limit=100` });
        }
      } else if (view.mode === 'countries') {
        const cs = await this._dirApi('/json/countries');
        loading.remove();
        for (const c of cs) {
          if (!c.name) continue;
          navRow(`${c.name}  (${c.stationcount})`, { mode: 'stations', title: c.name,
            path: `/json/stations/bycountryexact/${encodeURIComponent(c.name)}?hidebroken=true&order=clickcount&reverse=true&limit=150` });
        }
      } else if (view.mode === 'stations') {
        const list = await this._dirApi(view.path);
        loading.remove();
        if (!list.length) {
          const none = document.createElement('div');
          none.className = 'dir-sub'; none.style.padding = '10px';
          none.textContent = 'No stations found.';
          body.appendChild(none);
        }
        for (const st of list) this._dirStationRow(body, st);
      }
    } catch (e) {
      loading.textContent = 'Station directory unreachable — check internet and try again.';
    }
  }

  _dirStationRow(body, st) {
    const row = document.createElement('div');
    row.className = 'dir-row';
    const img = document.createElement('img');
    img.className = 'dir-fav';
    if (st.favicon) { img.src = st.favicon; img.addEventListener('error', () => { img.style.visibility = 'hidden'; }); }
    else { img.style.visibility = 'hidden'; }
    row.appendChild(img);
    const txt = document.createElement('div');
    txt.style.flex = '1'; txt.style.minWidth = '0';
    const nm = document.createElement('div'); nm.className = 'dir-name'; nm.textContent = st.name;
    const sub = document.createElement('div'); sub.className = 'dir-sub';
    sub.textContent = [st.codec, st.bitrate ? st.bitrate + 'kbps' : '', st.country].filter(Boolean).join(' · ');
    txt.appendChild(nm); txt.appendChild(sub);
    row.appendChild(txt);
    row.dataset.url = st.url_resolved || st.url;
    const ctl = document.createElement('div');
    ctl.className = 'dir-ctl';
    const stopB = document.createElement('button');
    stopB.className = 'dir-stop';
    stopB.innerHTML = '<ha-icon icon="mdi:stop" style="--mdc-icon-size:18px"></ha-icon>';
    ['pointerdown', 'pointerup'].forEach(evn => stopB.addEventListener(evn, e => e.stopPropagation()));
    stopB.addEventListener('click', e => {
      e.stopPropagation();
      this._dirStopAt = Date.now();
      this._stopPlayback();
      this._syncDirRows();
    });
    ctl.appendChild(stopB);
    row.appendChild(ctl);
    let timer = null, held = false;
    row.addEventListener('contextmenu', e => e.preventDefault());
    row.addEventListener('pointerdown', () => {
      held = false;
      timer = setTimeout(() => { timer = null; held = true; this._dirAddPopup(body, row, st); }, 500);
    });
    row.addEventListener('pointerup', () => {
      if (timer) { clearTimeout(timer); timer = null; }
      if (held) return;
      // tap = preview on the active zone
      this._dirStopAt = 0;
      this._playStation({ name: st.name, url: st.url_resolved || st.url, ...(st.favicon ? { logo: st.favicon } : {}) }, 'Preview');
      setTimeout(() => this._syncDirRows(), 50);
    });
    ['pointerleave', 'pointercancel'].forEach(evn => row.addEventListener(evn, () => { if (timer) { clearTimeout(timer); timer = null; } }));
    body.appendChild(row);
  }

  _syncDirRows() {
    const panel = this.shadowRoot.querySelector('.dir-panel');
    if (!panel) return;
    let url = null;
    if (this._pendingStation) {
      url = this._pendingStation.url;
    } else if (!(this._dirStopAt && Date.now() - this._dirStopAt < 6000)) {
      const z = this._activeZone();
      // stopped zones keep their station as a preset — only show the
      // orange playing controls while audio is actually live
      if (z && z.station && this._zoneLive(z)) url = z.station.url;
    }
    panel.querySelectorAll('.dir-row[data-url]').forEach(r =>
      r.classList.toggle('playing', !!url && r.dataset.url === url));
  }

  _dirAddPopup(body, row, st) {
    const old = body.querySelector('.dir-pop');
    if (old) old.remove();
    body.style.position = 'relative';
    const pop = document.createElement('div');
    pop.className = 'dir-pop';
    const closePop = () => {
      pop.remove();
      document.removeEventListener('click', closeOnDoc, true);
    };
    // capture-phase doc closer MUST ignore clicks inside the popup —
    // capture runs before the buttons' own handlers, so without this
    // guard tapping "New playlist" destroyed the popup first
    const closeOnDoc = (ev) => {
      if (ev.composedPath && ev.composedPath().includes(pop)) return;
      closePop();
    };
    const mkBtn = (label, fn) => {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.addEventListener('click', e => { e.stopPropagation(); fn(); });
      pop.appendChild(btn);
      return btn;
    };
    for (const c of this._getCategories()) {
      mkBtn('Add to \u201c' + c.name + '\u201d', () => {
        this._dirAdd(st, c.name, null);
        closePop();
        this._dirToast('\u201c' + st.name + '\u201d added to \u201c' + c.name + '\u201d');
      });
    }
    mkBtn('\uFF0B New playlist\u2026', () => {
      pop.innerHTML = '';
      const hd = document.createElement('div');
      hd.style.cssText = 'font-weight:600;font-size:14px;padding:2px 2px 6px;';
      hd.textContent = 'Enter New Playlist Name';
      pop.appendChild(hd);
      const inp = document.createElement('input');
      inp.className = 'dir-search';
      inp.placeholder = 'Playlist name';
      pop.appendChild(inp);
      const create = () => {
        const name = inp.value.trim();
        if (!name) { inp.focus(); return; }
        this._dirAdd(st, null, name);
        closePop();
        this._dirToast('\u201c' + st.name + '\u201d added to new playlist \u201c' + name + '\u201d');
      };
      inp.addEventListener('keydown', ev => { if (ev.key === 'Enter') create(); });
      const ok = document.createElement('button');
      ok.textContent = 'Create & Add';
      ok.addEventListener('click', e => { e.stopPropagation(); create(); });
      pop.appendChild(ok);
      const cancel = document.createElement('button');
      cancel.textContent = 'Cancel';
      cancel.addEventListener('click', e => { e.stopPropagation(); closePop(); });
      pop.appendChild(cancel);
      setTimeout(() => inp.focus(), 50);
    });
    pop.style.left = '24px';
    pop.style.right = '24px';
    pop.style.top = (row.offsetTop + row.offsetHeight + 4) + 'px';
    body.appendChild(pop);
    setTimeout(() => document.addEventListener('click', closeOnDoc, true), 0);
  }

  // transient confirmation while STAYING on the browse screen — people
  // keep previewing and adding
  _dirToast(msg) {
    const panel = this.shadowRoot.querySelector('.dir-panel');
    if (!panel) return;
    const oldT = panel.querySelector('.dir-toast');
    if (oldT) oldT.remove();
    const t = document.createElement('div');
    t.className = 'dir-toast';
    t.textContent = msg;
    panel.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  _dirAdd(st, catName, newName) {
    // deferred: mutate a working copy only — ANY dashboard save makes HA
    // rebuild this card, which would destroy the browse panel and the
    // user's search context. The copy is saved when the panel closes.
    if (!this._dirCats) {
      this._dirCats = this._getCategories().map(c => ({ ...c, stations: [...c.stations] }));
    }
    const cats = this._dirCats;
    const stn = { name: st.name, url: st.url_resolved || st.url, ...(st.favicon ? { logo: st.favicon } : {}) };
    if (newName) {
      cats.push({ name: newName, stations: [stn] });
    } else {
      const c = cats.find(c => c.name === catName);
      if (!c) return;
      c.stations.push(stn);
    }
  }

  // ── Playlist manager (hard-press any playlist title) ──
  // Left drawer listing playlists: ≡ drag-handle (vertical drag), order
  // number input (set 7→2: it takes slot 2, old 2 becomes 3), ✕ delete
  // with confirm. All changes hit a working copy; saved on Done/close.
  _openPlaylistManager() {
    if (!this._canEdit()) return;
    if (this.shadowRoot.querySelector('.pl-man')) return;
    this._plCats = this._getCategories().map(c => ({ ...c, stations: [...c.stations] }));
    const panel = document.createElement('div');
    panel.className = 'pl-man';
    panel.addEventListener('click', e => e.stopPropagation());
    const head = document.createElement('div');
    head.className = 'pl-man-head';
    const ttl = document.createElement('div');
    ttl.className = 'dir-title';
    ttl.textContent = 'Playlists';
    const done = document.createElement('button');
    done.className = 'edit-exit';
    done.style.cssText = 'padding:9px 18px;border-radius:9px;border:none;font-weight:600;cursor:pointer;';
    done.textContent = 'Done';
    done.addEventListener('click', e => { e.stopPropagation(); this._closePlaylistManager(true); });
    head.appendChild(ttl); head.appendChild(done);
    panel.appendChild(head);
    const list = document.createElement('div');
    list.className = 'pl-man-list';
    panel.appendChild(list);
    (this._containerEl || this.shadowRoot).appendChild(panel);
    this._plRebuild(list);
    this._syncOverlayState();
  }

  _closePlaylistManager(save) {
    const p = this.shadowRoot.querySelector('.pl-man');
    if (p) p.remove();
    const cats = this._plCats;
    this._plCats = null;
    this._syncOverlayState();
    if (save && cats) this._saveCategories(cats, true);
  }

  _plRebuild(list) {
    list.innerHTML = '';
    this._plCats.forEach((c, idx) => {
      const row = document.createElement('div');
      row.className = 'pl-row';
      row.dataset.idx = String(idx);

      const grip = document.createElement('div');
      grip.className = 'pl-grip';
      grip.innerHTML = '&#9776;';
      grip.addEventListener('pointerdown', e => this._plDrag(e, list, row));
      row.appendChild(grip);

      const nm = document.createElement('div');
      nm.className = 'pl-name';
      nm.textContent = c.name;
      row.appendChild(nm);

      const num = document.createElement('input');
      num.className = 'pl-num';
      num.type = 'number';
      num.min = '1';
      num.max = String(this._plCats.length);
      num.value = String(idx + 1);
      num.addEventListener('click', e => e.stopPropagation());
      const applyNum = () => {
        let pos = parseInt(num.value, 10);
        if (isNaN(pos)) { num.value = String(idx + 1); return; }
        pos = Math.max(1, Math.min(this._plCats.length, pos)) - 1;
        if (pos === idx) { num.value = String(idx + 1); return; }
        const [moved] = this._plCats.splice(idx, 1);
        this._plCats.splice(pos, 0, moved);
        this._plRebuild(list);
      };
      num.addEventListener('change', applyNum);
      num.addEventListener('keydown', ev => { if (ev.key === 'Enter') { ev.preventDefault(); applyNum(); } });
      row.appendChild(num);

      const del = document.createElement('button');
      del.className = 'pl-del';
      del.innerHTML = '&times;';
      del.addEventListener('click', e => {
        e.stopPropagation();
        const conf = document.createElement('div');
        conf.className = 'pl-confirm';
        conf.innerHTML = `<div style="flex:1">Delete \u201c${c.name}\u201d and its ${c.stations.length} station${c.stations.length === 1 ? '' : 's'}?</div>`;
        const yes = document.createElement('button');
        yes.className = 'zone-del-btn';
        yes.textContent = 'Delete';
        yes.addEventListener('click', ev2 => {
          ev2.stopPropagation();
          this._plCats.splice(idx, 1);
          this._plRebuild(list);
        });
        const no = document.createElement('button');
        no.className = 'zone-del-cancel';
        no.textContent = 'Cancel';
        no.addEventListener('click', ev2 => { ev2.stopPropagation(); this._plRebuild(list); });
        conf.appendChild(yes); conf.appendChild(no);
        row.innerHTML = '';
        row.appendChild(conf);
      });
      row.appendChild(del);
      list.appendChild(row);
    });
  }

  _plDrag(e, list, row) {
    e.preventDefault();
    e.stopPropagation();
    const fromIdx = +row.dataset.idx;
    row.classList.add('pl-dragging');
    const onMove = (ev) => {
      ev.preventDefault();
      const under = this.shadowRoot.elementFromPoint(ev.clientX, ev.clientY);
      const over = under && under.closest && under.closest('.pl-row');
      if (over && over !== row) {
        const rows = [...list.children];
        const a = rows.indexOf(row), b = rows.indexOf(over);
        if (a < b) list.insertBefore(row, over.nextSibling);
        else list.insertBefore(row, over);
      }
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove, true);
      window.removeEventListener('pointerup', onUp, true);
      row.classList.remove('pl-dragging');
      const newIdx = [...list.children].indexOf(row);
      if (newIdx !== fromIdx && newIdx >= 0) {
        const [moved] = this._plCats.splice(fromIdx, 1);
        this._plCats.splice(newIdx, 0, moved);
      }
      this._plRebuild(list);
    };
    window.addEventListener('pointermove', onMove, { capture: true, passive: false });
    window.addEventListener('pointerup', onUp, { capture: true });
  }

  _showZoneDeletePopup(bar, chip, z) {
    this._closeZonePopup();
    this._closeSpeakerMenu();
    this._zonePopOpen = true;
    const pop = document.createElement('div');
    pop.className = 'zone-del-pop';
    const label = document.createElement('span');
    label.textContent = 'Remove zone?';
    pop.appendChild(label);
    const del = document.createElement('button');
    del.className = 'zone-del-btn';
    del.textContent = 'Remove';
    del.addEventListener('click', e => {
      e.stopPropagation();
      // removing a zone ALWAYS silences it — stop the group entity and
      // every member, except speakers that now belong to another zone
      const stopSet = new Set(this._zoneTargets(z).concat(z.s));
      for (const t of stopSet) {
        const owner = this._zoneOwner(t);
        if (owner && owner.id !== z.id) continue;
        this._hass.callService('media_player', 'media_stop', { entity_id: t });
        this._castSpeakers.delete(t);
      }
      this._closeZonePopup();
      this._removeZone(z);
      this._pendingStation = null;
      this._lastStateHash = null;
      this._updateDynamic();
    });
    pop.appendChild(del);
    const cancel = document.createElement('button');
    cancel.className = 'zone-del-cancel';
    cancel.innerHTML = '&times;';
    cancel.addEventListener('click', e => { e.stopPropagation(); this._closeZonePopup(); this._updateDynamic(); });
    pop.appendChild(cancel);
    // anchor right under the pressed chip
    pop.style.left = Math.max(0, chip.offsetLeft) + 'px';
    pop.style.top = (chip.offsetTop + chip.offsetHeight + 6) + 'px';
    bar.appendChild(pop);
    if (!this._zonePopDocClose) {
      this._zonePopDocClose = () => { if (this._zonePopOpen) { this._closeZonePopup(); this._updateDynamic(); } };
      document.addEventListener('click', this._zonePopDocClose);
    }
  }

  _closeZonePopup() {
    this._zonePopOpen = false;
    const pop = this.shadowRoot.querySelector('.zone-del-pop');
    if (pop) pop.remove();
  }

  _closeSpeakerMenu() {
    if (!this._speakerMenuOpen) return;
    this._speakerMenuOpen = false;
    const m = this.shadowRoot.querySelector('.speaker-menu');
    if (m) m.classList.remove('open');
  }

  _syncZoneChips(root) {
    const bar = root.querySelector('.zone-chips');
    if (!bar) return;
    const zones = this._zoneList();
    const act = this._activeZone();
    if (this._zonePopOpen) return; // don't wipe the delete popup mid-confirm
    bar.innerHTML = '';
    for (const z of zones) {
      const chip = document.createElement('div');
      const live = this._zoneLive(z);
      chip.className = 'zone-chip' + (z.id === act.id ? ' active' : '') + (z.station && !live ? ' stopped' : '');
      chip.textContent = this._zoneName(z) + (z.station ? ' · ' + z.station.name : '');
      // long-press -> delete popup anchored at the chip
      let lpTimer = null, lpFired = false;
      chip.addEventListener('contextmenu', e => e.preventDefault());
      chip.addEventListener('pointerdown', () => {
        lpFired = false;
        lpTimer = setTimeout(() => { lpFired = true; this._showZoneDeletePopup(bar, chip, z); }, 550);
      });
      ['pointerup', 'pointerleave', 'pointercancel'].forEach(evn =>
        chip.addEventListener(evn, () => clearTimeout(lpTimer)));
      chip.addEventListener('click', e => {
        e.stopPropagation();
        if (lpFired) return;
        this._closeSpeakerMenu();
        if (z.id === this._activeZone().id) return;
        this._switchZone(z.id);
        this._pendingStation = null;
        this._selectedSpeaker = this._playTargets()[0] || null;
        this._lastStateHash = null;
        this._updateDynamic();
      });
      bar.appendChild(chip);
    }
    const plus = document.createElement('div');
    plus.className = 'zone-chip plus';
    plus.textContent = '+ cast different music to other speakers';
    plus.addEventListener('click', e => {
      e.stopPropagation();
      this._closeSpeakerMenu();
      const d = this._newDraftZone();
      this._switchZone(d.id);
      this._pendingStation = null;
      this._selectedSpeaker = null;
      this._lastStateHash = null;
      this._updateDynamic();
    });
    bar.appendChild(plus);
  }

  // (and therefore all scroll positions) intact.
  _updateDynamic() {
    const root = this.shadowRoot;
    if (!this._config || !this._hass) return;
    if (!root.querySelector('ha-card')) { this._render(); return; }

    this._selectedSpeaker = this._resolveSelectedSpeaker();
    const activeUrl = this._getActiveStationUrl();
    this._otherZoneUrls = new Set(this._zoneList()
      .filter(z => z.id !== this._activeZone().id && z.station)
      .map(z => z.station.url));
    const speakerState = this._hass.states[this._selectedSpeaker];
    const isPlaying = speakerState && speakerState.state === 'playing';
    const volume = speakerState ? (speakerState.attributes.volume_level || 0) : 0;

    // Speaker dropdown label + checkboxes + zone chips
    this._syncSpeakerMenu(root);
    this._syncZoneChips(root);
    this._syncDirRows();

    // Main volume slider/icon/percent
    if (!this._draggingVolume) {
      const volWrap = root.querySelector('.volume-wrap');
      if (volWrap) {
        const slider = volWrap.querySelector('.volume-slider');
        if (slider) slider.value = volume;
        const pct = volWrap.querySelector('.vol-pct');
        if (pct) pct.textContent = `${Math.round(volume * 100)}%`;
        const icon = volWrap.querySelector('.vol-icon');
        if (icon) icon.setAttribute('icon',
          volume === 0 ? 'mdi:volume-off' :
          volume < 0.5 ? 'mdi:volume-medium' : 'mdi:volume-high'
        );
      }

      // Per-device volume sliders
      root.querySelectorAll('.device-vol-row').forEach(row => {
        const st = this._hass.states[row.dataset.entity];
        if (!st) return;
        const devVol = st.attributes.volume_level || 0;
        const devSlider = row.querySelector('.device-vol-slider');
        if (devSlider) devSlider.value = devVol;
        const devPct = row.querySelector('.vol-pct');
        if (devPct) devPct.textContent = `${Math.round(devVol * 100)}%`;
      });
    }

    // Now-playing banner
    let activeStationName = null;
    if (activeUrl) {
      for (const cat of this._getCategories()) {
        const match = cat.stations.find(s => s.url === activeUrl);
        if (match) { activeStationName = match.name; break; }
      }
    }
    if (!activeStationName && isPlaying && speakerState.attributes.media_title) {
      activeStationName = speakerState.attributes.media_title;
    }
    const banner = root.querySelector('.now-playing');
    if (banner) {
      const bs = this._bannerState(activeUrl, activeStationName, isPlaying);
      this._fillBanner(banner, bs.name, bs.playing);
    }

    // Stop-cast button
    const stopCast = root.querySelector('.stop-cast-btn');
    if (stopCast) this._updateStopCastBtn(stopCast);

    // Active tile highlight
    root.querySelectorAll('.station-tile[data-url]').forEach(t => {
      t.classList.toggle('active', !!activeUrl && t.dataset.url === activeUrl);
      t.classList.toggle('other-zone', this._otherZoneUrls.has(t.dataset.url) && t.dataset.url !== activeUrl);
    });
  }

  _getStyles() {
    return `
      :host { display: block; color-scheme: inherit; }
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        font-family: var(--primary-font-family, sans-serif);
        overflow: hidden;
      }
      .jukebox {
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: 100%;
        min-height: 0;
      }
      .jukebox > * { flex: 0 0 auto; }
      .stations-area {
        flex: 1 1 auto;
        min-height: 0;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 16px;
        overscroll-behavior: contain;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: thin;
      }
      .stations-area::-webkit-scrollbar { width: 6px; }
      .stations-area::-webkit-scrollbar-thumb {
        background: var(--divider-color, #ccc);
        border-radius: 3px;
      }

      /* ── Controls ── */
      .controls {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .speaker-wrap, .volume-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .speaker-wrap ha-icon, .volume-wrap ha-icon {
        color: var(--primary-text-color);
        --mdc-icon-size: 20px;
        flex-shrink: 0;
      }
      .speaker-wrap {
        position: relative;
      }
      .speaker-btn {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 14px;
        font-family: inherit;
        cursor: pointer;
        text-align: left;
      }
      .speaker-btn-label {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .speaker-caret { opacity: 0.7; flex-shrink: 0; }
      .speaker-menu {
        display: none;
        position: absolute;
        top: calc(100% + 4px);
        left: 28px;
        right: 0;
        z-index: 30;
        background: var(--card-background-color, #fff);
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 10px;
        box-shadow: 0 6px 18px rgba(0,0,0,0.45);
        max-height: 280px;
        overflow-y: auto;
        padding: 6px;
      }
      .speaker-menu.open { display: block; }
      .speaker-menu-header {
        font-size: 11px;
        letter-spacing: 1px;
        text-transform: uppercase;
        opacity: 0.6;
        padding: 6px 8px 2px;
      }
      .speaker-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 9px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 14px;
      }
      .speaker-item .spk-name { flex: 0 0 30%; }
      .spk-vol-wrap {
        display: none;
        flex: 1;
        align-items: center;
        gap: 8px;
        min-width: 0;
      }
      .speaker-item.checked .spk-vol-wrap { display: flex; }
      .spk-vol { flex: 1; }
      .zone-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        position: relative;
      }
      .zone-chips:empty { display: none; }
      .zone-chip {
        padding: 6px 14px;
        border-radius: 16px;
        border: 1px solid var(--divider-color, #555);
        background: rgba(127,127,127,0.12);
        color: var(--primary-text-color);
        font-size: 13px;
        cursor: pointer;
        white-space: nowrap;
        max-width: 46%;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .zone-chip.active {
        border-color: var(--primary-color, #03a9f4);
        background: rgba(3,169,244,0.18);
        font-weight: 600;
      }
      .dir-btn {
        width: 44px;
        height: 38px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, #555);
        background: var(--card-background-color, #222);
        color: var(--primary-text-color);
        cursor: pointer;
        flex-shrink: 0;
        --mdc-icon-size: 20px;
      }
      .dir-panel {
        position: absolute;
        inset: 0;
        z-index: 60;
        background: var(--card-background-color, #111);
        display: flex;
        flex-direction: column;
        border-radius: inherit;
      }
      .dir-head {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border-bottom: 1px solid var(--divider-color, #444);
        flex-shrink: 0;
      }
      .dir-title { flex: 1; font-weight: 600; font-size: 15px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .dir-iconbtn {
        background: none;
        border: none;
        color: var(--primary-text-color);
        font-size: 22px;
        line-height: 1;
        cursor: pointer;
        padding: 4px 10px;
      }
      .dir-hintbar {
        padding: 8px 14px;
        font-size: 12px;
        line-height: 1.4;
        color: var(--secondary-text-color, #aaa);
        background: rgba(3,169,244,0.08);
        border-bottom: 1px solid var(--divider-color, #444);
        flex-shrink: 0;
        white-space: normal;
      }
      .dir-body { flex: 1; overflow-y: auto; padding: 10px 12px; }
      .dir-ctl { display: none; align-items: center; gap: 8px; flex-shrink: 0; }
      .dir-row.playing .dir-ctl { display: flex; }
      .dir-row.playing { background: rgba(255,152,0,0.10); }
      .dir-stop {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border: 1px solid var(--divider-color, #555);
        background: none;
        color: var(--primary-text-color);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .dir-stop:hover { border-color: #FF9800; color: #FF9800; }
      .dir-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 10px 8px;
        border-radius: 8px;
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
      }
      .dir-row:hover { background: rgba(127,127,127,0.15); }
      .dir-fav { width: 40px; height: 40px; border-radius: 8px; object-fit: cover; background: rgba(127,127,127,0.15); flex-shrink: 0; }
      .dir-name { font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .dir-sub { font-size: 11px; opacity: 0.65; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .dir-search {
        width: 100%;
        box-sizing: border-box;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, #555);
        background: none;
        color: var(--primary-text-color);
        font-size: 14px;
        margin-bottom: 8px;
      }
      .dir-pop {
        position: absolute;
        z-index: 70;
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px;
        border-radius: 10px;
        background: var(--card-background-color, #222);
        border: 1px solid var(--divider-color, #555);
        box-shadow: 0 6px 18px rgba(0,0,0,0.5);
        max-height: 320px;
        overflow-y: auto;
      }
      .dir-pop button {
        text-align: left;
        padding: 9px 10px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, #555);
        background: none;
        color: var(--primary-text-color);
        font-size: 13px;
        cursor: pointer;
      }
      .dir-pop button:hover { background: rgba(127,127,127,0.15); }
      .dir-toast {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        max-width: 85%;
        background: rgba(18,18,22,0.95);
        border: 1px solid var(--divider-color, #555);
        color: var(--primary-text-color);
        padding: 11px 20px;
        border-radius: 22px;
        font-size: 13px;
        z-index: 90;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        animation: dir-toast 2.2s forwards;
      }
      @keyframes dir-toast {
        0% { opacity: 0; transform: translateX(-50%) translateY(8px); }
        12% { opacity: 1; transform: translateX(-50%) translateY(0); }
        82% { opacity: 1; }
        100% { opacity: 0; }
      }
      @keyframes jiggle {
        0% { transform: rotate(-1.2deg); }
        50% { transform: rotate(1.2deg); }
        100% { transform: rotate(-1.2deg); }
      }
      .jiggle-stations .station-tile:not(.empty) { animation: jiggle 0.28s infinite ease-in-out; }
      /* without touch-action:none the browser treats the drag as a scroll
         gesture and CANCELS the pointer — this is the core drag fix */
      .jiggle-stations .station-tile, .jiggle-playlists .cat-header { touch-action: none; }
      .jiggle-stations .station-scroll { scroll-snap-type: none; }
      .drag-src { opacity: 0.35; }
      .tile-x {
        display: none;
        position: absolute;
        top: 4px;
        left: 4px;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: rgba(40,40,44,0.92);
        color: #fff;
        border: 2px solid rgba(255,255,255,0.85);
        align-items: center;
        justify-content: center;
        font-size: 17px;
        line-height: 1;
        z-index: 5;
        cursor: pointer;
      }
      .jiggle-stations .station-tile:not(.empty) .tile-x { display: flex; animation: none; }
      .edit-bar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 80;
        display: flex;
        gap: 10px;
        padding: 10px 12px;
        background: rgba(15,15,18,0.94);
        border-bottom: 1px solid var(--divider-color, #555);
        box-sizing: border-box;
      }
      .edit-bar button {
        flex: 1;
        padding: 13px;
        font-size: 15px;
        font-weight: 600;
        border-radius: 10px;
        cursor: pointer;
      }
      .edit-exit {
        background: var(--primary-color, #03a9f4);
        color: #fff;
        border: none;
      }
      .edit-undo {
        background: none;
        color: var(--primary-text-color);
        border: 1px solid var(--divider-color, #666);
      }
      .edit-undo:disabled { opacity: 0.35; }
      .pl-man {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: min(360px, 88%);
        z-index: 85;
        background: var(--card-background-color, #16161a);
        border-right: 1px solid var(--divider-color, #555);
        box-shadow: 8px 0 24px rgba(0,0,0,0.5);
        display: flex;
        flex-direction: column;
      }
      .pl-man-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 12px;
        border-bottom: 1px solid var(--divider-color, #555);
      }
      .pl-man-list { flex: 1; overflow-y: auto; padding: 8px; }
      .pl-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 8px;
        border-radius: 8px;
        border: 1px solid transparent;
      }
      .pl-row.pl-dragging {
        background: rgba(3,169,244,0.15);
        border-color: var(--primary-color, #03a9f4);
      }
      .pl-grip {
        font-size: 18px;
        opacity: 0.7;
        padding: 4px 8px;
        cursor: grab;
        touch-action: none;
        flex-shrink: 0;
        user-select: none;
        -webkit-user-select: none;
      }
      .pl-name { flex: 1; font-size: 14px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .pl-num {
        width: 52px;
        padding: 7px 6px;
        text-align: center;
        border-radius: 8px;
        border: 1px solid var(--divider-color, #555);
        background: none;
        color: var(--primary-text-color);
        font-size: 14px;
        flex-shrink: 0;
      }
      .pl-del {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid var(--divider-color, #555);
        background: none;
        color: var(--primary-text-color);
        font-size: 17px;
        cursor: pointer;
        flex-shrink: 0;
      }
      .pl-del:hover { background: rgba(198,40,40,0.3); border-color: #c62828; }
      .settings-menu {
        position: absolute;
        top: calc(100% + 4px);
        right: 0;
        z-index: 35;
        min-width: 290px;
        background: var(--card-background-color, #222);
        border: 1px solid var(--divider-color, #555);
        border-radius: 10px;
        box-shadow: 0 6px 18px rgba(0,0,0,0.5);
        padding: 6px;
      }
      .bg-preview {
        width: 100%;
        aspect-ratio: 16/9;
        border-radius: 10px;
        border: 1px solid var(--divider-color, #555);
        margin: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--secondary-text-color, #999);
        font-size: 13px;
        overflow: hidden;
      }
      .fit-row { display: flex; gap: 8px; margin-bottom: 12px; }
      .fit-btn {
        flex: 1;
        padding: 9px 0;
        border-radius: 8px;
        border: 1px solid var(--divider-color, #555);
        background: none;
        color: var(--primary-text-color);
        font-size: 13px;
        cursor: pointer;
      }
      .fit-btn.active {
        background: var(--primary-color, #03a9f4);
        border-color: var(--primary-color, #03a9f4);
        color: #fff;
      }
      .settings-label {
        font-size: 14px;
        white-space: nowrap;
        overflow: visible;
        flex: 1;
      }
      .pl-confirm {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        font-size: 13px;
      }
      .jiggle-playlists .category { animation: jiggle 0.36s infinite ease-in-out; }
      .jiggle-stations .station-tile.dragging,
      .jiggle-playlists .category.dragging {
        animation: none;
        z-index: 100;
        position: relative;
        opacity: 0.92;
      }
      .drop-target { outline: 2px dashed var(--primary-color, #03a9f4); outline-offset: 2px; border-radius: 10px; }
      .station-tile { scroll-snap-align: start; }
      .station-tile, .cat-header {
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
      }
      .zone-chip {
        user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
      }
      .zone-chip.stopped {
        opacity: 0.55;
        border-style: dashed;
      }
      .zone-del-pop {
        position: absolute;
        z-index: 40;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        border-radius: 10px;
        background: var(--card-background-color, #222);
        border: 1px solid var(--divider-color, #555);
        box-shadow: 0 6px 18px rgba(0,0,0,0.5);
        font-size: 13px;
        white-space: nowrap;
      }
      .zone-del-btn {
        padding: 5px 12px;
        border-radius: 8px;
        border: none;
        background: #c62828;
        color: #fff;
        font-size: 13px;
        cursor: pointer;
      }
      .zone-del-cancel {
        padding: 2px 8px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, #555);
        background: none;
        color: var(--primary-text-color);
        font-size: 15px;
        cursor: pointer;
      }
      .zone-chip.plus {
        padding: 6px 12px;
        font-weight: 700;
        opacity: 0.8;
      }
      .speaker-item.disabled {
        opacity: 0.45;
        cursor: default;
      }
      .spk-busy {
        margin-left: auto;
        font-size: 11px;
        opacity: 0.75;
        white-space: nowrap;
        flex-shrink: 0;
      }
      .speaker-btn.nag {
        border-color: var(--primary-color, #03a9f4);
        box-shadow: 0 0 0 2px rgba(3,169,244,0.5);
        transition: box-shadow 0.2s;
      }
      .station-tile.other-zone::after {
        content: "";
        position: absolute;
        top: 6px;
        right: 6px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: var(--primary-color, #03a9f4);
        opacity: 0.55;
      }
      .spk-vol-pct { font-size: 12px; opacity: 0.8; width: 34px; text-align: right; flex-shrink: 0; }
      .speaker-item:hover { background: rgba(127,127,127,0.15); }
      .spk-check {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        border: 2px solid var(--secondary-text-color, #888);
        border-radius: 4px;
        position: relative;
        box-sizing: border-box;
      }
      .spk-check.checked {
        background: var(--primary-color, #03a9f4);
        border-color: var(--primary-color, #03a9f4);
      }
      .spk-check.checked::after {
        content: "";
        position: absolute;
        left: 4px;
        top: 0px;
        width: 5px;
        height: 9px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
      .spk-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .volume-slider {
        flex: 1;
        height: 6px;
        -webkit-appearance: none;
        appearance: none;
        background: var(--divider-color, #e0e0e0);
        border-radius: 3px;
        outline: none;
        cursor: pointer;
      }
      .volume-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 18px; height: 18px;
        border-radius: 50%;
        background: var(--primary-color, #03a9f4);
        cursor: pointer;
      }
      .volume-slider::-moz-range-thumb {
        width: 18px; height: 18px;
        border-radius: 50%;
        background: var(--primary-color, #03a9f4);
        border: none;
        cursor: pointer;
      }
      .vol-pct {
        min-width: 38px;
        text-align: right;
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .no-speakers {
        text-align: center;
        color: var(--secondary-text-color);
        font-size: 14px;
        padding: 8px;
      }

      /* ── Per-device Volume ── */
      .device-vol-toggle {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 500;
        color: var(--primary-text-color);
        cursor: pointer;
        padding: 6px 10px;
        margin-top: 4px;
        user-select: none;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        background: var(--secondary-background-color, #f5f5f5);
        transition: background 0.15s, border-color 0.15s;
      }
      .device-vol-toggle:hover {
        background: var(--primary-color, #ff9800);
        color: #fff;
        border-color: var(--primary-color, #ff9800);
      }
      .device-vol-chevron {
        font-size: 10px;
        width: 12px;
        text-align: center;
      }
      .device-volumes {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px 12px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        background: var(--secondary-background-color, #f5f5f5);
      }
      .device-vol-row {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .device-vol-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .device-vol-slider-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .device-vol-slider-wrap .volume-slider { flex: 1; }
      .device-vol-slider-wrap .vol-pct { min-width: 38px; }

      /* ── Now Playing ── */
      .now-playing {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 8px;
        font-weight: 500;
        font-size: 14px;
        min-height: 20px;
      }
      .now-playing.active {
        background: linear-gradient(135deg, #ff9800, #f57c00);
        color: #fff;
      }
      .now-playing.idle {
        background: var(--secondary-background-color, #f5f5f5);
        color: var(--secondary-text-color);
        opacity: 0.6;
      }
      .now-playing ha-icon { --mdc-icon-size: 20px; flex-shrink: 0; }
      .now-playing span {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .stop-btn {
        cursor: pointer;
        opacity: 0.8;
        --mdc-icon-size: 22px;
        flex-shrink: 0;
      }
      .stop-btn:hover { opacity: 1; }

      /* ── Stop Cast Button ── */
      .stop-cast-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 16px;
        border-radius: 20px;
        border: 2px solid #ff9800;
        background: rgba(255, 152, 0, 0.08);
        color: #ff9800;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        font-family: inherit;
        transition: background 0.15s;
        align-self: center;
      }
      .stop-cast-btn:hover { background: rgba(255, 152, 0, 0.2); }
      .stop-cast-btn ha-icon { --mdc-icon-size: 18px; }

      /* ── Category ── */
      .category {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .cat-header {
        font-size: 15px;
        font-weight: 600;
        color: var(--primary-text-color);
        padding-left: 2px;
        border-left: 3px solid #ff9800;
        padding-left: 8px;
      }

      /* ── Station Scroll ── */
      .station-scroll {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
      }
      .station-scroll::-webkit-scrollbar { display: none; }
      .station-page {
        display: grid;
        grid-template-columns: repeat(var(--columns), 1fr);
        gap: 8px;
        min-width: 100%;
        flex-shrink: 0;
        box-sizing: border-box;
        padding: 3px;
      }

      /* ── Station Tile ── */
      .station-tile {
        height: var(--tile-height);
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        transition: box-shadow 0.2s, transform 0.1s;
        -webkit-tap-highlight-color: transparent;
      }
      .station-tile.has-logo {
        background-color: #1a1a2e;
      }
      .station-tile:active:not(.empty) {
        transform: scale(0.96);
      }
      .station-tile.empty {
        cursor: default;
        visibility: hidden;
      }
      .station-tile.active {
        box-shadow: 0 0 0 2px #ff9800, 0 0 14px rgba(255, 152, 0, 0.4);
      }
      .station-tile.no-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .fallback-icon {
        color: rgba(255,255,255,0.5);
        --mdc-icon-size: 32px;
      }
      .name-overlay {
        position: absolute;
        bottom: 0; left: 0; right: 0;
        padding: 20px 8px 6px;
        background: linear-gradient(transparent, rgba(0,0,0,0.8));
        color: #fff;
        font-size: 11px;
        font-weight: 500;
        line-height: 1.3;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .station-tile.no-logo .name-overlay {
        background: linear-gradient(transparent, rgba(0,0,0,0.4));
        text-align: center;
      }

      /* ── Dots ── */
      .dots {
        display: flex;
        justify-content: center;
        gap: 6px;
        padding: 2px 0;
      }
      .dot {
        width: 8px; height: 8px;
        border-radius: 50%;
        background: var(--divider-color, #ccc);
        cursor: pointer;
        transition: background 0.2s;
      }
      .dot.active {
        background: #ff9800;
      }

      /* ── Image Upload Modal ── */
      .image-upload-overlay {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
      .image-upload-modal {
        background: var(--card-background-color, #fff);
        border-radius: 16px;
        padding: 20px;
        max-width: 320px;
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .image-upload-title {
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        color: var(--primary-text-color);
      }
      .image-upload-preview {
        width: 100%;
        aspect-ratio: 1;
        border-radius: 10px;
        cursor: pointer;
        touch-action: none;
      }
      .image-upload-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: center;
      }
      .upload-btn {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 8px 14px;
        border-radius: 20px;
        border: 1px solid var(--divider-color, #e0e0e0);
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 13px;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.15s;
      }
      .upload-btn:hover { background: var(--secondary-background-color, #f5f5f5); }
      .upload-btn ha-icon { --mdc-icon-size: 18px; }
      .upload-btn.save {
        border-color: var(--primary-color, #03a9f4);
        color: var(--primary-color, #03a9f4);
        font-weight: 500;
      }
      .upload-btn.save:hover { background: rgba(3, 169, 244, 0.1); }
      .upload-btn.remove {
        border-color: var(--error-color, #db4437);
        color: var(--error-color, #db4437);
      }
      .upload-btn.remove:hover { background: rgba(219, 68, 55, 0.1); }
    `;
  }

  getCardSize() {
    const categories = this._getCategories();
    return 2 + categories.length * 3;
  }
}

// ── Registration ───────────────────────────────────────────────
customElements.define('jukebox-card-editor', JukeboxCardEditor);
customElements.define('jukebox-card', JukeboxCard);

// ── shared media-folder helpers (used by both cards' background pickers) ──
async function jbBrowseMedia(hass, id) {
  const req = { type: 'media_source/browse_media' };
  if (id) req.media_content_id = id;
  return await hass.callWS(req);
}
async function jbResolveMedia(hass, id) {
  const r = await hass.callWS({ type: 'media_source/resolve_media', media_content_id: id });
  return r.url;
}
// Folder-navigating image picker. Opens in /media ("My media") when it
// exists, else at the media-source list. onPick(mediaContentId, resolvedUrl).
function jbMediaBrowser(hass, host, onPick) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;z-index:10050;background:rgba(0,0,0,0.65);display:flex;align-items:center;justify-content:center;';
  overlay.addEventListener('click', () => overlay.remove());
  const modal = document.createElement('div');
  modal.style.cssText = 'width:min(520px,94vw);max-height:80vh;background:#1c1c22;color:#eee;border:1px solid #555;border-radius:14px;display:flex;flex-direction:column;font-family:sans-serif;overflow:hidden;';
  modal.addEventListener('click', e => e.stopPropagation());
  const head = document.createElement('div');
  head.style.cssText = 'display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid #555;flex-shrink:0;';
  const back = document.createElement('button');
  back.textContent = '‹';
  back.style.cssText = 'background:none;border:none;color:#eee;font-size:22px;cursor:pointer;padding:2px 10px;';
  const title = document.createElement('div');
  title.style.cssText = 'flex:1;font-weight:600;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
  const close = document.createElement('button');
  close.innerHTML = '&times;';
  close.style.cssText = 'background:none;border:none;color:#eee;font-size:22px;cursor:pointer;padding:2px 10px;';
  close.addEventListener('click', () => overlay.remove());
  head.appendChild(back); head.appendChild(title); head.appendChild(close);
  modal.appendChild(head);
  const body = document.createElement('div');
  body.style.cssText = 'flex:1;overflow-y:auto;padding:8px;';
  modal.appendChild(body);
  overlay.appendChild(modal);
  host.appendChild(overlay);

  const stack = [];
  const show = async (id, autoEnteredMedia) => {
    body.innerHTML = '<div style="padding:12px;opacity:.7;font-size:13px;">Loading…</div>';
    let res;
    try { res = await jbBrowseMedia(hass, id); }
    catch (e) {
      body.innerHTML = '<div style="padding:12px;opacity:.7;font-size:13px;">Media browsing unavailable.</div>';
      return;
    }
    // default straight into "My media" (/media folder) when present
    if (autoEnteredMedia) {
      const mine = (res.children || []).find(c => c.media_content_id === 'media-source://media_source');
      if (mine) {
        stack.push({ id, title: res.title || 'Media' });
        show(mine.media_content_id, false);
        return;
      }
    }
    title.textContent = res.title || 'Media';
    back.style.visibility = stack.length ? 'visible' : 'hidden';
    body.innerHTML = '';
    const kids = (res.children || []).filter(c =>
      c.can_expand ||
      c.media_class === 'image' ||
      (c.media_content_type || '').startsWith('image/'));
    if (!kids.length) {
      body.innerHTML = '<div style="padding:12px;opacity:.7;font-size:13px;">No folders or images here.</div>';
    }
    for (const c of kids) {
      const row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:12px;padding:9px 8px;border-radius:8px;cursor:pointer;';
      row.addEventListener('mouseenter', () => { row.style.background = 'rgba(127,127,127,0.15)'; });
      row.addEventListener('mouseleave', () => { row.style.background = 'none'; });
      const ico = document.createElement('div');
      ico.style.cssText = 'width:38px;height:38px;border-radius:8px;background:rgba(127,127,127,0.15);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;background-size:cover;background-position:center;';
      if (c.thumbnail) { ico.style.backgroundImage = `url('${c.thumbnail}')`; }
      else { ico.textContent = c.can_expand ? '📁' : '🖼'; }
      row.appendChild(ico);
      const nm = document.createElement('div');
      nm.style.cssText = 'flex:1;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;';
      nm.textContent = c.title;
      row.appendChild(nm);
      row.addEventListener('click', async e => {
        e.stopPropagation();
        if (c.can_expand) {
          stack.push({ id, title: res.title });
          show(c.media_content_id, false);
        } else {
          let url = null;
          try { url = await jbResolveMedia(hass, c.media_content_id); } catch (e2) {}
          overlay.remove();
          onPick(c.media_content_id, url);
        }
      });
      body.appendChild(row);
    }
  };
  back.addEventListener('click', () => {
    const prev = stack.pop();
    if (prev) show(prev.id, false);
  });
  show(undefined, true);
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'jukebox-card',
  name: 'Internet Radio Jukebox',
  description: 'Multi-zone internet radio: playlists, station directory, drag-and-drop editing, per-speaker volumes.',
  preview: false,
  documentationURL: 'https://github.com/philrenda/jukebox-card',
});
window.customCards.push({
  type: 'jukebox-button-card',
  name: 'Jukebox Button',
  description: 'Dashboard tile that opens your jukebox view — user-swappable image, text and font.',
  preview: false,
  documentationURL: 'https://github.com/philrenda/jukebox-card',
});

// ── jukebox-button-card ──
// Dashboard tile companion: user-swappable image with fit options, a
// fixed text label rendered as an overlay (so changing the image keeps
// the text), tap = navigate. Long-press opens its self-service editor.
class JukeboxButtonCard extends HTMLElement {
  setConfig(config) {
    this._config = { fit: 'fill', height: 72, label: 'JUKEBOX', ...config };
    this._render();
  }
  set hass(hass) {
    const first = !this._hass;
    this._hass = hass;
    if (first && this._config && (this._config.image || '').startsWith('media-source://')) this._render();
  }
  getCardSize() { return 1; }

  static get FONTS() {
    return {
      serif: "Georgia, 'Times New Roman', serif",
      modern: "'Segoe UI', Roboto, Arial, sans-serif",
      typewriter: "'Courier New', monospace",
      script: "'Brush Script MT', 'Segoe Script', cursive",
    };
  }

  _render() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    const c = this._config || {};
    const fit = c.fit || 'fill';
    const size = fit === 'fill' ? 'cover' : fit === 'fit' ? 'contain' : fit === 'stretch' ? '100% 100%' : 'auto';
    const fs = Math.max(18, Math.round((c.height || 72) * 0.4));
    const fontFam = this.constructor.FONTS[c.font || 'serif'] || this.constructor.FONTS.serif;
    let bgImage = c.image || '';
    if (bgImage.startsWith('media-source://')) {
      bgImage = (this._imgCache && this._imgCache.id === c.image) ? this._imgCache.url : '';
      if (!bgImage && this._hass) {
        jbResolveMedia(this._hass, c.image).then(u => {
          this._imgCache = { id: c.image, url: u };
          this._render();
        }).catch(() => {});
      }
    }
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        ha-card {
          position: relative; overflow: hidden; cursor: pointer;
          height: ${c.height || 72}px; border-radius: 12px;
          background: ${bgImage ? `url('${bgImage}') center / ${size} no-repeat` : '#141418'};
          user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;
        }
        .lbl {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          font-family: ${fontFam}; font-weight: 700;
          font-size: ${fs}px; letter-spacing: 7px; color: #fff;
          text-shadow: 0 2px 10px #000, 0 0 4px #000;
          background: ${c.label ? 'rgba(0,0,0,0.18)' : 'none'};
          pointer-events: none;
        }
        .ed-overlay { position: fixed; inset: 0; z-index: 999; background: rgba(0,0,0,0.6);
          display: flex; align-items: center; justify-content: center; }
        .ed-modal { width: min(440px, 92vw); background: #1c1c22; color: #eee; border-radius: 14px;
          padding: 16px; border: 1px solid #555; font-family: sans-serif; }
        .ed-title { font-weight: 700; font-size: 15px; margin-bottom: 10px; }
        .ed-prev { width: 100%; height: 84px; border-radius: 10px; border: 1px solid #555; margin-bottom: 10px;
          position: relative; overflow: hidden; }
        .ed-prev .lbl { font-size: 30px; }
        .ed-inp { width: 100%; box-sizing: border-box; padding: 9px 11px; border-radius: 8px;
          border: 1px solid #555; background: none; color: #eee; font-size: 13px; margin-bottom: 10px; }
        .ed-fits { display: flex; gap: 8px; margin-bottom: 10px; }
        .ed-fit { flex: 1; padding: 8px 0; border-radius: 8px; border: 1px solid #555; background: none;
          color: #eee; font-size: 12px; cursor: pointer; }
        .ed-fit.active { background: #03a9f4; border-color: #03a9f4; color: #fff; }
        .ed-check { display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-size: 13px; }
        .ed-btns { display: flex; gap: 8px; }
        .ed-btns button { flex: 1; padding: 10px 0; border-radius: 9px; border: 1px solid #555;
          background: none; color: #eee; font-size: 13px; font-weight: 600; cursor: pointer; }
        .ed-btns .save { background: #03a9f4; border-color: #03a9f4; color: #fff; }
      </style>
      <ha-card><div class="lbl">${c.label || ''}</div></ha-card>`;
    const card = this.shadowRoot.querySelector('ha-card');
    let t = null, lp = false;
    card.addEventListener('contextmenu', e => e.preventDefault());
    card.addEventListener('pointerdown', () => {
      lp = false;
      t = setTimeout(() => { t = null; lp = true; this._openEditor(); }, 500);
    });
    card.addEventListener('pointerup', () => {
      if (t) { clearTimeout(t); t = null; }
      if (lp) return;
      this._tap();
    });
    ['pointerleave', 'pointercancel'].forEach(ev =>
      card.addEventListener(ev, () => { if (t) { clearTimeout(t); t = null; } }));
  }

  _tap() {
    const ta = this._config.tap_action;
    if (ta && ta.action === 'navigate' && ta.navigation_path) {
      history.pushState(null, '', ta.navigation_path);
      window.dispatchEvent(new Event('location-changed'));
    } else if (ta && ta.action === 'url' && ta.url_path) {
      window.open(ta.url_path);
    }
  }

  _openEditor() {
    // long-press editor is admin-only — guests on kiosk dashboards must
    // not be able to fiddle with the button (their saves would be
    // rejected by HA anyway, but don't even show the editor)
    if (!(this._hass && this._hass.user && this._hass.user.is_admin)) return;
    let image = this._config.image || '';
    let fit = this._config.fit || 'fill';
    let label = this._config.label || '';
    let font = this._config.font || 'serif';
    let previewUrl = (this._imgCache && this._imgCache.id === image) ? this._imgCache.url : null;
    const overlay = document.createElement('div');
    overlay.className = 'ed-overlay';
    overlay.addEventListener('click', () => overlay.remove());
    const modal = document.createElement('div');
    modal.className = 'ed-modal';
    modal.addEventListener('click', e => e.stopPropagation());
    modal.innerHTML = `<div class="ed-title">Jukebox Button</div>
      <div class="ed-prev"><div class="lbl"></div></div>`;
    const prev = modal.querySelector('.ed-prev');
    const prevLbl = prev.querySelector('.lbl');
    const paint = () => {
      const size = fit === 'fill' ? 'cover' : fit === 'fit' ? 'contain' : fit === 'stretch' ? '100% 100%' : 'auto';
      const shown = image.startsWith('media-source://') ? previewUrl : image;
      prev.style.background = shown ? `url('${shown}') center / ${size} no-repeat` : '#141418';
      prevLbl.textContent = label;
      prevLbl.style.background = label ? 'rgba(0,0,0,0.18)' : 'none';
      prevLbl.style.fontFamily = this.constructor.FONTS[font] || this.constructor.FONTS.serif;
    };
    if (image.startsWith('media-source://') && !previewUrl && this._hass) {
      jbResolveMedia(this._hass, image).then(u => { previewUrl = u; paint(); }).catch(() => {});
    }
    const url = document.createElement('input');
    url.className = 'ed-inp';
    url.placeholder = 'or image URL (e.g. /local/button.jpg)';
    url.value = (image.startsWith('data:') || image.startsWith('media-source://')) ? '' : image;
    url.addEventListener('change', () => { if (url.value.trim()) { image = url.value.trim(); previewUrl = null; paint(); } });
    modal.appendChild(url);
    const fits = document.createElement('div');
    fits.className = 'ed-fits';
    ['fill', 'fit', 'stretch', 'center'].forEach(f => {
      const b = document.createElement('button');
      b.className = 'ed-fit' + (f === fit ? ' active' : '');
      b.textContent = f[0].toUpperCase() + f.slice(1);
      b.addEventListener('click', e => {
        e.stopPropagation(); fit = f;
        fits.querySelectorAll('.ed-fit').forEach(x => x.classList.toggle('active', x === b));
        paint();
      });
      fits.appendChild(b);
    });
    modal.appendChild(fits);
    const lblInp = document.createElement('input');
    lblInp.className = 'ed-inp';
    lblInp.placeholder = 'Button text (empty = no text)';
    lblInp.value = label;
    lblInp.addEventListener('input', () => { label = lblInp.value; paint(); });
    modal.appendChild(lblInp);
    const fontRow = document.createElement('div');
    fontRow.className = 'ed-fits';
    Object.keys(this.constructor.FONTS).forEach(f => {
      const b2 = document.createElement('button');
      b2.className = 'ed-fit' + (f === font ? ' active' : '');
      b2.textContent = f[0].toUpperCase() + f.slice(1);
      b2.style.fontFamily = this.constructor.FONTS[f];
      b2.addEventListener('click', e => {
        e.stopPropagation(); font = f;
        fontRow.querySelectorAll('.ed-fit').forEach(x => x.classList.toggle('active', x === b2));
        paint();
      });
      fontRow.appendChild(b2);
    });
    modal.appendChild(fontRow);
    const btns = document.createElement('div');
    btns.className = 'ed-btns';
    const mk = (label, cls, fn) => {
      const b = document.createElement('button');
      if (cls) b.className = cls;
      b.textContent = label;
      b.addEventListener('click', e => { e.stopPropagation(); fn(); });
      btns.appendChild(b);
    };
    mk('Browse Media', '', () => {
      if (!this._hass) return;
      jbMediaBrowser(this._hass, this.shadowRoot, (id, u) => {
        image = id;
        previewUrl = u;
        this._imgCache = { id, url: u };
        paint();
      });
    });
    mk('Save', 'save', () => {
      overlay.remove();
      this._saveSelf({ image: image || null, fit, label, font });
    });
    mk('Cancel', '', () => overlay.remove());
    modal.appendChild(btns);
    overlay.appendChild(modal);
    paint();
    this.shadowRoot.appendChild(overlay);
  }

  async _saveSelf(patch) {
    this._config = { ...this._config, ...patch };
    for (const k of Object.keys(patch)) { if (patch[k] === null) delete this._config[k]; }
    this._render();
    if (!this._hass) return;
    const here = location.pathname.split('/')[1] || null;
    const targets = [...new Set([here, ...(this._config.sync_dashboards || [])])].filter(Boolean);
    for (const urlPath of targets) {
      try {
        const cfg = await this._hass.callWS({ type: 'lovelace/config', url_path: urlPath });
        let n = 0;
        const walk = (o) => {
          if (Array.isArray(o)) { o.forEach(walk); return; }
          if (o && typeof o === 'object') {
            if (o.type === 'custom:jukebox-button-card') {
              for (const k of Object.keys(patch)) {
                if (patch[k] === null) delete o[k]; else o[k] = patch[k];
              }
              n++;
            }
            Object.values(o).forEach(walk);
          }
        };
        walk(cfg);
        if (n) await this._hass.callWS({ type: 'lovelace/config/save', url_path: urlPath, config: cfg });
      } catch (e) {
        console.warn('jukebox-button-card: could not persist to', urlPath, e);
      }
    }
  }
}
if (!customElements.get('jukebox-button-card')) {
  customElements.define('jukebox-button-card', JukeboxButtonCard);
}

console.info(
  '%c JUKEBOX-CARD %c v4.1.0 ',
  'background:#FF9800;color:#000;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;',
  'background:#222;color:#FF9800;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px;'
);
