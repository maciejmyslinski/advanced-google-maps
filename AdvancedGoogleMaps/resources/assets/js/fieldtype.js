Vue.component('advanced_google_maps-fieldtype', {
  mixins: [Fieldtype],

  data: function() {
    return {
      //
    };
  },

  computed: {
    //
  },

  methods: {
    focus() {
      this.$els.firstInput.focus();
    },
  },

  ready: function() {
    //
  },

  // prettier-ignore
  template: '' +
  '<div style="display: flex; flex-direction: column;">' +
    '<label>Zoom' +
      '<input v-model="data.zoom" type="number" min="0" max="20" />' +
    '</label>' +
    '<label>Height' +
      '<input v-model="data.height" />' +
    '</label>' +
    '<label>Width' +
      '<input v-model="data.width" />' +
    '</label>' +
    '<label>Address' +
      '<input v-model="data.address" />' +
    '</label>' +
    '<label style="width: 100%">Styles' +
      '<textarea style="width: 100%; height: 400px;" v-model="data.styles" v-el:first-input placeholder="Your styles in JSON"></textarea>' +
    '</label>' +
  '</div>'
});
