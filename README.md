Maps on your website don't have to be boring 😎

Use Advanced Maps and embed a beautiful 💖 Maps on your website. Supports Google Maps and Mapbox 🙌.

## Config after installation:

1. Depending on which map provider you want to use, follow `Google Maps setup` or `Mapbox setup` (described below).
2. Render `{{ advanced_maps }}` among other `<script />` tags on your page
3. Create a new Fieldset. Add `AdvancedMaps` field into it.
4. Remember your `Field Variable`. It's your map's name and you need this in next steps.
5. Create a page that uses your newly created Fieldset.
6. Customize a map to your preferences.
7. Render your map like this: `{{ your_map_name | advanced_maps }}`.

## Google Maps setup

1. Provide Google API key in addon settings. [How do I get my API key?](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. In Google Cloud Platform Console enable `Maps Javascript API` and `Geocoding API`
3. ⚠️ Note: usage of this addon most likely will generate some cost in Google Cloud Platform. Make sure you know their pricing plans before continuing.

## Mapbox setup

1. From your [Mapbox account](https://account.mapbox.com/) copy Access token and paste it into the addon settings.

## Customizing a theme 🎨

### Google

1. Go to [Snazzy Maps](https://snazzymaps.com/)
2. Pick a color pallete you like
3. Paste the `JAVASCRIPT STYLE ARRAY` into the `Styles` texarea. The text you paste should start with `[` character and end with `]`.

### Mapbox

1. Go to [Mapbox Studio](https://studio.mapbox.com/)
2. Create a style you like
3. Click `share` at the top right
4. Copy `Your style URL` and paste it into the `Styles` input.

**Feeling stucked?** Hit me up on [hello@maciejmyslinski.com](mailto:hello@maciejmyslinski.com), we'll jump on a Hangout call and figure it out together. I'd love to hear your feedback and suggestions as well.
