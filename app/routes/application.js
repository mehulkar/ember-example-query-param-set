import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    foo: {
      refreshModel: false,
      replace: true
    }
  },

  model() {
    console.log('MODEL HOOK!');
  },
});
