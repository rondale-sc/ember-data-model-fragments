// Import the full module to ensure monkey-patches are applied before any store
// instances are created. Sad face for side-effects :(
import 'ember-data-model-fragments';

export default {
  name: 'fragmentTransform',
  before: 'ember-data',

  initialize(application) {

    application.inject('transform', 'store', 'service:store');

    // application.inject('transform:fragment', 'store', 'service:store');
    // application.inject('transform:fragment-array', 'store', 'service:store');
    // application.inject('transform:array', 'store', 'service:store');
  }
};
