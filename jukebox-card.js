// ─────────────────────────────────────────────────────────────────
//  Jukebox Card v2 — Zero-config, self-service station management
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
  {
    name: 'Polish',
    stations: [
      { name: 'RMF FM', url: 'http://195.150.20.242:8000/rmf_fm' },
      { name: 'Radio ZET', url: 'https://r.dcs.redcdn.pl/sc/o2/Eurozet/live/audio.livx?audio=5' },
      { name: 'Antyradio', url: 'https://an04.cdn.eurozet.pl/ant-web.mp3' },
      { name: 'Radio Eska', url: 'https://waw.ic.smcdn.pl/2380-1.mp3' },
      { name: 'RMF MAXXX', url: 'http://195.150.20.7/rmf_maxxx' },
      { name: 'Radio Nowy Swiat', url: 'https://stream.nowyswiat.online/mp3' },
      { name: 'Chillizet', url: 'https://ch.cdn.eurozet.pl/chi-net.mp3' },
      { name: 'Radio Pogoda', url: 'http://stream30.radiostream.pl/tuba138-1.mp3' },
      { name: 'Polskie Radio', url: 'http://mp3.polskieradio.pl:8900/;.mp3' },
      { name: 'MUZO.FM', url: 'http://stream4.nadaje.com/muzo' },
    ]
  },
  {
    name: 'Italian',
    stations: [
      { name: 'RTL 102.5', url: 'http://shoutcast.rtl.it:3010/' },
      { name: 'Radio 105', url: 'https://icecast.unitedradio.it/Radio105.mp3' },
      { name: 'Kiss Kiss', url: 'https://kisskiss.fluidstream.eu/KissKiss.aac' },
      { name: 'Monte Carlo', url: 'https://icecast.unitedradio.it/RMC.mp3' },
      { name: 'Virgin Radio IT', url: 'https://icecast.unitedradio.it/Virgin.mp3' },
      { name: 'Radio 24', url: 'http://shoutcast.radio24.it:8000/;' },
      { name: 'R101', url: 'http://icecast.unitedradio.it/r101' },
      { name: 'RAI Radio 1', url: 'http://icestreaming.rai.it/1.mp3' },
      { name: 'RAI Radio 2', url: 'http://icestreaming.rai.it/2.mp3' },
      { name: 'RAI Radio 3', url: 'http://icestreaming.rai.it/3.mp3' },
    ]
  },
  {
    name: 'French',
    stations: [
      { name: 'FIP', url: 'https://icecast.radiofrance.fr/fip-hifi.aac?id=radiofrance' },
      { name: 'France Inter', url: 'https://icecast.radiofrance.fr/franceinter-hifi.aac?id=radiofrance' },
      { name: 'Radio Nova', url: 'http://novazz.ice.infomaniak.ch/novazz-128.mp3' },
      { name: 'TSF Jazz', url: 'http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3' },
      { name: 'NRJ', url: 'http://streaming.nrjaudio.fm/oumvmk8fnozc' },
      { name: 'Skyrock', url: 'http://icecast.skyrock.net/s/natio_mp3_128k' },
      { name: 'Nostalgie', url: 'http://streaming.nrjaudio.fm/oug7girb92oc' },
      { name: 'RTL', url: 'http://streaming.radio.rtl.fr/rtl-1-44-128' },
      { name: "Mouv'", url: 'https://icecast.radiofrance.fr/mouv-hifi.aac?id=radiofrance' },
      { name: 'Cherie FM', url: 'http://streaming.nrjaudio.fm/ouuku85n3nje' },
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

    // Category name edit (double-click)
    root.querySelectorAll('.cat-name-display').forEach(el => {
      el.addEventListener('dblclick', e => {
        e.stopPropagation();
        const idx = parseInt(el.dataset.index);
        const current = this._getWorkingCategories()[idx].name;
        const newName = prompt('Category name:', current);
        if (newName && newName.trim()) {
          this._ensureCategories();
          this._config.categories[idx].name = newName.trim();
          this._fireConfigChanged();
          this._render();
        }
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
    this._draggingVolume = false;
    this._volumeTimeout = null;
    this._helperChecked = false;
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

    this._config = { columns: 4, tile_height: 120, ...config };

    // Resolve selected speaker from manual config
    if (config.speakers && config.speakers.length) {
      const stored = localStorage.getItem('jukebox-card-speaker');
      if (stored && config.speakers.find(s => s.entity === stored)) {
        this._selectedSpeaker = stored;
      } else {
        this._selectedSpeaker = config.speakers[0].entity;
      }
    }
    // If no speakers in config, resolved dynamically via _resolveSelectedSpeaker()

    if (this._hass) this._render();
  }

  set hass(hass) {
    this._hass = hass;
    this._ensureNowPlayingHelper();
    if (this._draggingVolume) return;
    const hash = this._computeStateHash(hass);
    if (hash !== this._lastStateHash) {
      this._lastStateHash = hash;
      this._render();
    }
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

  _resolveSelectedSpeaker() {
    const speakers = this._getSpeakers();
    if (!speakers.length) return null;
    const stored = localStorage.getItem('jukebox-card-speaker');
    if (stored && speakers.find(s => s.entity === stored)) {
      return stored;
    }
    return speakers[0].entity;
  }

  // ── Category Management ──

  _getCategories() {
    if (this._config.categories && this._config.categories.length) {
      return this._config.categories;
    }
    return DEFAULT_STATIONS;
  }

  // ── State ──

  _computeStateHash(hass) {
    const speakers = this._getSpeakers();
    const parts = [`sel:${this._selectedSpeaker}`, `spk:${speakers.map(s => s.entity).join(',')}`];
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
    if (!this._hass || !this._selectedSpeaker) return null;

    const state = this._hass.states[this._selectedSpeaker];
    if (!state || state.state !== 'playing') return null;

    const contentId = state.attributes.media_content_id || '';
    const title = state.attributes.media_title || '';
    const allStations = this._getCategories().flatMap(c => c.stations);

    // Direct URL match
    const byUrl = allStations.find(s => s.url === contentId);
    if (byUrl) return byUrl.url;

    // Match by media_title
    if (title) {
      const byTitle = allStations.find(s => s.name === title);
      if (byTitle) return byTitle.url;
    }

    // Fallback: now_playing_entity helper
    const npe = this._hass.states['input_text.jukebox_now_playing'];
    if (npe && npe.state && !['unknown', 'unavailable', ''].includes(npe.state)) {
      const byNpe = allStations.find(s => s.name === npe.state);
      if (byNpe) return byNpe.url;
    }

    return null;
  }

  // ── Actions ──

  _playStation(station) {
    if (!this._hass || !this._selectedSpeaker) return;

    this._hass.callService('media_player', 'play_media', {
      entity_id: this._selectedSpeaker,
      media_content_id: station.url,
      media_content_type: 'music'
    });

    this._hass.callService('input_text', 'set_value', {
      entity_id: 'input_text.jukebox_now_playing',
      value: station.name
    });
  }

  _stopPlayback() {
    if (!this._hass || !this._selectedSpeaker) return;
    this._hass.callService('media_player', 'media_stop', {
      entity_id: this._selectedSpeaker
    });
  }

  _setVolume(level) {
    if (!this._hass || !this._selectedSpeaker) return;
    clearTimeout(this._volumeTimeout);
    this._volumeTimeout = setTimeout(() => {
      this._hass.callService('media_player', 'volume_set', {
        entity_id: this._selectedSpeaker,
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

    // Resolve speaker for auto-discover mode
    if (!config.speakers || !config.speakers.length) {
      this._selectedSpeaker = this._resolveSelectedSpeaker();
    }

    const activeUrl = this._getActiveStationUrl();
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

    root.innerHTML = '';

    const card = document.createElement('ha-card');

    const style = document.createElement('style');
    style.textContent = this._getStyles();
    card.appendChild(style);

    const container = document.createElement('div');
    container.className = 'jukebox';
    container.style.setProperty('--columns', config.columns);
    container.style.setProperty('--tile-height', `${config.tile_height}px`);

    // ── Controls ──
    const controls = document.createElement('div');
    controls.className = 'controls';

    if (speakers.length > 0) {
      // Speaker select
      const speakerWrap = document.createElement('div');
      speakerWrap.className = 'speaker-wrap';
      const spkIcon = document.createElement('ha-icon');
      spkIcon.setAttribute('icon', 'mdi:speaker');
      speakerWrap.appendChild(spkIcon);
      const select = document.createElement('select');
      select.className = 'speaker-select';
      for (const sp of speakers) {
        const opt = document.createElement('option');
        opt.value = sp.entity;
        opt.textContent = sp.name;
        if (sp.entity === this._selectedSpeaker) opt.selected = true;
        select.appendChild(opt);
      }
      select.addEventListener('change', e => {
        this._selectedSpeaker = e.target.value;
        localStorage.setItem('jukebox-card-speaker', this._selectedSpeaker);
        this._lastStateHash = null;
        this._render();
      });
      speakerWrap.appendChild(select);
      controls.appendChild(speakerWrap);

      // Volume
      const volWrap = document.createElement('div');
      volWrap.className = 'volume-wrap';
      const volIcon = document.createElement('ha-icon');
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

    // ── Now Playing Banner ──
    if (activeStationName && isPlaying) {
      const banner = document.createElement('div');
      banner.className = 'now-playing';
      const npIcon = document.createElement('ha-icon');
      npIcon.setAttribute('icon', 'mdi:radio');
      banner.appendChild(npIcon);
      const npText = document.createElement('span');
      npText.textContent = activeStationName;
      banner.appendChild(npText);
      const stopBtn = document.createElement('ha-icon');
      stopBtn.setAttribute('icon', 'mdi:stop');
      stopBtn.className = 'stop-btn';
      stopBtn.addEventListener('click', () => this._stopPlayback());
      banner.appendChild(stopBtn);
      container.appendChild(banner);
    }

    // ── Categories ──
    categories.forEach((cat, catIdx) => {
      const section = document.createElement('div');
      section.className = 'category';

      const header = document.createElement('div');
      header.className = 'cat-header';
      header.textContent = cat.name;
      section.appendChild(header);

      const scroller = document.createElement('div');
      scroller.className = 'station-scroll';
      scroller.dataset.category = catIdx;

      // Split into pages
      const cols = config.columns;
      const pages = [];
      for (let i = 0; i < cat.stations.length; i += cols) {
        pages.push(cat.stations.slice(i, i + cols));
      }

      pages.forEach(pageStations => {
        const page = document.createElement('div');
        page.className = 'station-page';

        pageStations.forEach(station => {
          const tile = document.createElement('div');
          tile.className = 'station-tile';
          if (activeUrl && station.url === activeUrl) tile.classList.add('active');

          if (station.logo) {
            tile.style.backgroundImage = `url(${station.logo})`;
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

          tile.addEventListener('click', () => this._playStation(station));
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

      container.appendChild(section);
    });

    card.appendChild(container);
    root.appendChild(card);

    // Restore scroll positions
    root.querySelectorAll('.station-scroll').forEach(el => {
      const pos = scrollPositions[el.dataset.category];
      if (pos) el.scrollLeft = pos;
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
      .speaker-select {
        flex: 1;
        padding: 8px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, #e0e0e0);
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
        font-size: 14px;
        font-family: inherit;
        cursor: pointer;
      }
      .speaker-select option {
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color);
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

      /* ── Now Playing ── */
      .now-playing {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 14px;
        border-radius: 8px;
        background: linear-gradient(135deg, #ff9800, #f57c00);
        color: #fff;
        font-weight: 500;
        font-size: 14px;
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
        scroll-snap-align: start;
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

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'jukebox-card',
  name: 'Internet Radio Jukebox',
  description: 'Internet radio jukebox with speaker selection, categorized stations, and now-playing detection.',
  preview: false,
  documentationURL: 'https://github.com/philrenda/jukebox-card',
});
