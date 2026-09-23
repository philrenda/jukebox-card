# Jukebox Card

A multi-zone internet-radio jukebox for Home Assistant dashboards. Play different stations on different speakers at the same time, browse and add stations from a 50,000-station directory, and manage playlists with iOS-style drag-and-drop — all from the card itself, no YAML editing required after setup.

Ships with a starter set of station playlists so it works out of the box, plus a companion **Jukebox Button** tile card for opening your jukebox view from any dashboard.

## Features

- **Zones** — cast different music to different speaker sets simultaneously. Zone chips across the top show each session ("Main House · WNCW"); tap a chip to control that zone, `+` to start a new one.
- **Speaker picker** — checkbox dropdown with speaker groups and individual speakers, per-speaker volume sliders (shown only for checked speakers), and a master volume that moves the whole zone.
- **Station directory** — browse [radio-browser.info](https://www.radio-browser.info) (Popular / by genre / by country / search), preview any station on your current zone with a tap, hold to add it to a playlist (or create a new playlist on the spot). Station artwork comes along automatically.
- **Edit mode** — hard-press any station tile: everything jiggles, ✕ badges delete, drag tiles anywhere (auto-scrolls as you go, across playlists too). A top bar offers **Undo Last Change** (multi-step) and **Exit Edit Mode** (the single save point).
- **Playlist manager** — hard-press any playlist title: reorder playlists by drag-handle or by typing an order number, delete a playlist (with confirmation).
- **Custom artwork & backgrounds** — per-station custom images (tap a tile while in edit mode), and a Settings menu to set the card background from an upload or URL with Fill / Fit / Stretch / Center options.
- **Permissions** — choose whether editing tools are visible to admins only or to everyone.

## Installation

### HACS (recommended)

1. HACS → three-dot menu → **Custom repositories** → add `https://github.com/philrenda/jukebox-card` with category **Dashboard**.
2. Install **Jukebox Card**, then reload your browser when prompted.

HACS registers the resource automatically. Both cards then appear in the Lovelace card picker as **Internet Radio Jukebox** and **Jukebox Button** — add them straight from the UI, no YAML needed.

### Manual

1. Copy `jukebox-card.js` to `config/www/jukebox-card.js`.
2. Add the resource (Settings → Dashboards → ⋮ → Resources, or YAML):

```yaml
lovelace:
  resources:
    - url: /local/jukebox-card.js
      type: module
```

3. Restart Home Assistant, hard-refresh your browser, and add the card from the picker.

## Card configuration

A bare card works immediately — speakers are auto-discovered and the built-in starter playlists load:

```yaml
type: custom:jukebox-card
```

All options:

```yaml
type: custom:jukebox-card
columns: 4                 # optional — omit for responsive auto-columns
tile_height: 120           # px
categories:                # your playlists — created/edited from the UI,
  - name: Jazz             # you rarely need to touch this by hand
    stations:
      - name: Example FM
        url: https://example.com/stream
        logo: https://example.com/logo.png
speakers:                  # optional manual speaker list (default: auto-discover)
  - name: Kitchen
    entity: media_player.kitchen
speaker_groups:            # optional group membership map — see "Speaker groups"
  media_player.whole_home:
    - media_player.kitchen
    - media_player.living_room
sync_dashboards:           # keep playlists identical across dashboards:
  - main-dashboard         # every save writes to the jukebox cards on all
  - tablet-dashboard       # listed dashboards (url paths)
background_image: /local/mural.jpg
background_fit: fill       # fill | fit | stretch | center
background_dim: 0.62       # darkening overlay 0–1
allow_non_admin_edit: false
```

### Jukebox Button (companion tile)

```yaml
type: custom:jukebox-button-card
image: /local/jukebox.jpg
fit: fill                  # fill | fit | stretch | center
height: 72
label: JUKEBOX             # rendered as an overlay — swap the image, keep the text
font: serif                # serif | modern | typewriter | script
tap_action:
  action: navigate
  navigation_path: /lovelace/jukebox
```

Long-press the button itself to open its editor (image upload/URL, fit, text, font) — changes save back to the dashboard automatically.

## Speaker groups — what to expect

Group support depends on what your media platform exposes:

| Platform | Group detected? | Members auto-detected? |
|---|---|---|
| **Sonos / platforms with `group_members`** | ✅ | ✅ immediately (native attribute) |
| **Google Cast groups** | ✅ (device registry) | ⚠️ learned the **first time the group plays** |
| **Amazon Echo (alexa_media)** | ❌ appears as a normal speaker | — |

**Google Cast:** Home Assistant does not expose Cast group membership, so the card learns it automatically — play anything on the group once and from then on its member speakers appear as checkboxes (with individual volume sliders) whenever the group is selected. The learned map is stored per browser, so each tablet/device learns on its own first group-play. To skip the learning step — or to pin membership across all devices — declare it explicitly with `speaker_groups:` (an explicit map always overrides what was learned).

**Amazon Echo:** playback works via a silent TuneIn directive (no voice involved), which matches stations **by name** — reliable for well-known stations, hit-or-miss for obscure directory finds. Echo multi-room groups are not detectable as groups and appear as ordinary speakers.

**Zone conflict rule (strict no-steal):** a speaker in use by one zone shows as disabled ("in Main House") everywhere else. To move it, uncheck it in the zone that owns it — it stops there and instantly becomes available. A group is selectable only when *every* member is free. Unchecking one member of a playing group breaks the group: the group control drops, remaining speakers continue individually.

## Backgrounds & artwork — step by step

**Card background** (the mural behind the whole jukebox — admins only):
1. Open the jukebox and tap the **⚙ gear** next to the speaker picker.
2. Choose **Background…**
3. **Browse Media** opens a folder navigator that starts in your `/media` folder ("My media") — back also reaches your other media sources (Image upload, AI-generated images, …). Tap an image to pick it. Or paste an **image URL** (`/local/yourfile.jpg` for files in `config/www`).
   *To use your own picture, upload it first via Home Assistant's Media page (sidebar → Media → My media → upload) — then pick it here.*
4. Pick how it fills the card — **Fill** (crop to cover), **Fit** (letterbox), **Stretch**, or **Center** — the preview updates live.
5. **Save**. A dark overlay keeps stations readable (tunable via `background_dim`). Media-folder picks are stored as durable references and re-resolved on every load, so they never expire.

**Jukebox Button** (the dashboard tile — admins only):
1. **Long-press the button itself** — its editor opens.
2. Browse Media / URL for the image, pick a fit.
3. Set the overlay **text** (clear it for no text) and one of four **fonts** — the text is drawn on top of the image, so you can swap images any time and keep your label.
4. **Save** — writes back to the dashboard (and any dashboards in its `sync_dashboards`).

**Station artwork**: stations added from the directory bring their own logos. To customize a tile: hard-press to enter edit mode, then **tap** the tile — upload, pan and zoom an image for that station.

## Gestures cheat-sheet

| Where | Gesture | Action |
|---|---|---|
| Station tile | Tap | Play on the active zone |
| Station tile | **Hard press** | Enter edit mode (jiggle) — never plays audio |
| Tile (edit mode) | Drag | Move within/between playlists (edges auto-scroll) |
| Tile (edit mode) | ✕ badge | Delete station (undoable) |
| Tile (edit mode) | Tap | Custom artwork editor |
| Edit-mode top bar | Undo / Exit | Undo any change this session / save everything & leave |
| Playlist title | **Hard press** | Playlist manager: drag-handle reorder, order numbers (typing 2 on #7 makes it #2 and shifts the rest), ✕ delete with confirmation |
| Zone chip | Tap | Switch which zone the controls target |
| Zone chip | **Hard press** | "Remove zone?" (stops its audio) |
| Directory row | Tap | Preview on the active zone (stop button appears on the playing row) |
| Directory row | **Hard press** | Add to a playlist / create a new playlist |
| Jukebox Button | **Long press** | Edit its image / fit / text / font |

## Permissions & per-dashboard speakers

Everything under **⚙ → Permissions & Speakers…** (admins only, saved **per dashboard**):

- **Who can edit** — *Admins only* or *Everyone*. This governs the playlist tools (add stations, rearrange, playlist manager). Backgrounds, the button editor, and this dialog itself are always admin-only.
- **Speakers available on THIS dashboard** — an **Auto-discover & add new speakers** toggle, plus a checklist. Toggle on = every current and future speaker appears automatically. Toggle off = the dashboard is pinned to exactly the boxes you check — ideal for kiosk/guest dashboards (e.g. an Airbnb tablet that should only reach guest-area speakers), and new speakers stay out until an admin revisits.

Three effective tiers:

| Capability | Everyone | "Everyone can edit" | Admins |
|---|---|---|---|
| Play, zones, volumes, allowed speakers | ✅ | ✅ | ✅ |
| Add stations, rearrange, playlist manager | — | ✅ | ✅ |
| Backgrounds, button editor, permissions & speakers | — | — | ✅ |

## Good to know

- **Saving requires an admin account.** Home Assistant only lets admins write dashboards. The Permissions setting can *show* editing tools to everyone, but a non-admin's edits appear to work only until their page reloads — they are never persisted. (Kiosk tablets running a dedicated admin user work fully.)
- **Storage-mode dashboards only** for in-UI saving (the HA default). YAML-mode dashboards can use every playback feature, but edits must be made in YAML.
- Playlists live in the card's config on the dashboard. Use `sync_dashboards` to keep several dashboards on one shared "master" list.
- Uploaded images are embedded as data-URIs in the dashboard config — fine for logos and buttons; for large background murals prefer a file in `/config/www` referenced as `/local/...`.
- If your HA is accessed over HTTPS, `http://` station logos won't display (mixed content) — playback itself is unaffected since the speaker fetches the stream directly.
- Zones persist across page reloads (per device) and rebuild themselves from whatever is actually playing — sessions started outside the jukebox (voice assistants etc.) show up as their own zone chips.
- **Want "this device" as a speaker?** Install [browser_mod](https://github.com/thomasloven/hass-browser_mod) and register the browser (Settings → Browser Mod on that device) — it then appears as a `media_player` the jukebox can target. Kiosk tablets running Fully Kiosk are better served by the official **Fully Kiosk integration**, which exposes the tablet as a media player natively. The mobile companion app alone cannot act as a speaker.

## License

MIT
