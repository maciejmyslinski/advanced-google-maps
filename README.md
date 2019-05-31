Maps on your website don't have to be boring 😎

Use Advanced Google Maps and embed a beautiful 💖 Google Maps on your website.

Config after installation:

1. Provide Google API key in addon settings. [How do I get my API key?](https://developers.google.com/maps/documentation/javascript/get-api-key)
2. In Google Cloud Platform Console enable `Maps Javascript API` and `Geocoding API`
3. Render `{{ advanced_google_maps }}` among other `<script />` tags on your page
4. Use Advanced Google Maps field in a fieldset. `Field Variable` is now your map's name. This way you can embed multiple maps on the same page – each with different configuration.
5. Create a new Page with a fieldset that contains the map.
6. Render your map like this: `{{ my_map_name | advanced_google_maps }}`.

Customizing a theme 🎨

1. Go to [Snazzy Maps](https://snazzymaps.com/)
2. Pick a color pallete you like
3. Paste the `JAVASCRIPT STYLE ARRAY` into the `Styles` texarea. The text you paste should start with `[` character and end with `]`.

⚠️ Note: usage of this addon most likely will generate some cost in Google Cloud Platform. Make sure you know their pricing plans before continuing.
