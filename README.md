# Internet Radio Jukebox

A zero-config custom Lovelace card for Home Assistant that turns your media players into an internet radio jukebox.

![HACS Badge](https://img.shields.io/badge/HACS-Custom-orange.svg)

## Features

- **Zero-config** — just add `type: custom:jukebox-card` and it works
- **104 built-in stations** across 12 genres (Alternative, Rock, Metal, Pop, Lounge/Chill, Sleep, House, Tech House, 80s, Polish, Italian, French)
- **Auto-discovers speakers** — finds all media players in your Home Assistant
- **Visual card editor** — full GUI for configuring stations and speakers
- **Station explorer** — search and browse thousands of stations via the Radio Browser API
- **Now-playing banner** with stop button
- **Per-category grids** with horizontal scroll and pagination dots
- **Station logos** from SomaFM CDN, Radio Browser favicons, or custom URLs
- **Hash-color fallback** for stations without logos
- **Volume control** with debounced slider
- **Speaker persistence** via localStorage

## Installation

### HACS (Recommended)

1. Open HACS in Home Assistant
2. Go to **Frontend** → three-dot menu → **Custom repositories**
3. Add `https://github.com/philrenda/jukebox-card` as a **Dashboard** repository
4. Click **Install**
5. Restart Home Assistant

### Manual

1. Download `jukebox-card.js` from the [latest release](https://github.com/philrenda/jukebox-card/releases)
2. Copy it to `/config/www/jukebox-card.js`
3. Add the resource in **Settings → Dashboards → Resources**:
   - URL: `/local/jukebox-card.js`
   - Type: JavaScript Module

## Usage

Add the card to any dashboard:

```yaml
type: custom:jukebox-card
```

That's it! The card will auto-discover your speakers and show 104 built-in stations.

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `columns` | number | 3 | Stations per row |
| `tile_height` | string | `"120px"` | Height of station tiles |
| `speakers` | list | auto | Manual speaker list (overrides auto-discovery) |
| `categories` | list | built-in | Custom station categories (replaces defaults) |

### Custom Speakers

```yaml
type: custom:jukebox-card
speakers:
  - name: Living Room
    entity_id: media_player.living_room_speaker
  - name: Kitchen
    entity_id: media_player.kitchen_speaker
```

### Custom Stations

```yaml
type: custom:jukebox-card
categories:
  - name: My Favorites
    stations:
      - name: KEXP
        url: https://kexp-mp3-128.streamguys1.com/kexp128.mp3
      - name: SomaFM Groove Salad
        url: https://ice5.somafm.com/groovesalad-128-mp3
        logo: https://api.somafm.com/logos/256/groovesalad256.png
```

Or use the built-in visual editor to add stations without writing YAML.

## License

MIT
