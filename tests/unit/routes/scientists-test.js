import { module, test } from 'qunit';
import { setupTest } from 'hello-ember/tests/helpers';

module('Unit | Route | Scientists', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:scientists');
    assert.ok(route);
  });
});
