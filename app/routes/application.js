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

  setupController(controller, model, transition) {
    const { foo } = this.paramsFor('application');
    console.log(`foo qp: ${foo}`);
    if (foo) {
      transition.then(() => {
        console.log('removing qp');
        const ctrl =this.controllerFor('application');
        ctrl.set('foo', null);
      })
    }
  }
});
