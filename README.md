# Internet Radio Jukebox

A zero-config custom Lovelace card for Home Assistant that turns your media players into an internet radio jukebox. Supports both dark and light themes.

![HACS Badge](https://img.shields.io/badge/HACS-Custom-orange.svg)

![Internet Radio Jukebox Screenshot](screenshots/jukebox-card.png)

## Features

- **Zero-config** — just add `type: custom:jukebox-card` and it works
- **104 built-in stations** across 12 genres (Alternative, Rock, Metal, Pop, Lounge/Chill, Sleep, House, Tech House, 80s, Polish, Italian, French)
- **Auto-discovers speakers** — finds all media players in your Home Assistant
- **Visual card editor** — full GUI for configuring stations and speakers
- **Station explorer** — search and browse thousands of stations via the Radio Browser API
- **Dark and light theme support** — text and controls adapt to your HA theme
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

Add the card to any dashboard view:

```yaml
type: custom:jukebox-card
```

That's it! The card will auto-discover your speakers and show 104 built-in stations organized by genre. Click any station tile to start playing on the selected speaker.

### Visual Card Editor

You can configure everything through the UI — no YAML needed:

1. Edit your dashboard and add a new card
2. Search for **Internet Radio Jukebox**
3. Use the **General** tab to set columns, tile height, and speaker mode
4. Use the **Stations** tab to manage categories and stations
5. The **Explore** sub-tab lets you search thousands of internet radio stations and add them with one click

### Configuration Options

All options are optional. The card works with zero configuration.

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `columns` | number | 3 | Number of station tiles per row |
| `tile_height` | string | `"120px"` | Height of each station tile |
| `speakers` | list | auto-discover | Manual speaker list (overrides auto-discovery) |
| `categories` | list | 104 built-in | Custom station categories (replaces defaults entirely) |

### Custom Speakers

Override auto-discovery with a specific list of speakers:

```yaml
type: custom:jukebox-card
speakers:
  - name: Living Room
    entity_id: media_player.living_room_speaker
  - name: Kitchen
    entity_id: media_player.kitchen_speaker
```

### Custom Stations

Replace the built-in stations with your own:

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
  - name: Chill
    stations:
      - name: Drone Zone
        url: https://ice5.somafm.com/dronezone-256-mp3
        logo: https://api.somafm.com/logos/256/dronezone256.png
      - name: Groove Salad Classic
        url: https://ice5.somafm.com/gsclassic-128-mp3
        logo: https://api.somafm.com/logos/256/gsclassic256.png
```

Or use the built-in visual editor to add, remove, and reorder stations without writing any YAML.

## Dark and Light Theme Support

The card automatically adapts to your Home Assistant theme. Speaker controls, category headers, and all text use HA theme variables (`--primary-text-color`, `--card-background-color`, etc.) so they update instantly when you switch themes. Station tiles use a consistent dark style with white text overlays for readability regardless of theme.

## License

MIT
