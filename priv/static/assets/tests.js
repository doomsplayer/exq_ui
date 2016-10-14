define('exq-admin/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n6 errors');
  });
});
define('exq-admin/tests/helpers/resolver', ['exports', 'ember/resolver', 'exq-admin/config/environment'], function (exports, _emberResolver, _exqAdminConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _exqAdminConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _exqAdminConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('exq-admin/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/resolver.js should pass jshint.\nhelpers/resolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/resolver.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/resolver.js: line 11, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
  });
});
define('exq-admin/tests/helpers/start-app', ['exports', 'ember', 'exq-admin/app', 'exq-admin/router', 'exq-admin/config/environment'], function (exports, _ember, _exqAdminApp, _exqAdminRouter, _exqAdminConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var App;

    var attributes = _ember['default'].merge({}, _exqAdminConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _exqAdminRouter['default'].reopen({
      location: 'none'
    });

    _ember['default'].run(function () {
      App = _exqAdminApp['default'].create(attributes);
      App.setupForTesting();
      App.injectTestHelpers();
    });

    App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

    return App;
  }
});
define('exq-admin/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/start-app.js should pass jshint.\nhelpers/start-app.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/start-app.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/start-app.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/start-app.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nhelpers/start-app.js: line 6, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n5 errors');
  });
});
define('exq-admin/tests/test-helper', ['exports', 'exq-admin/tests/helpers/resolver', 'ember-qunit'], function (exports, _exqAdminTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_exqAdminTestsHelpersResolver['default']);

  document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

  QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container' });
  var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
  document.getElementById('ember-testing-container').style.visibility = containerVisibility;
});
define('exq-admin/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'test-helper.js should pass jshint.\ntest-helper.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ntest-helper.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ntest-helper.js: line 8, col 1, document.write can be a form of eval.\n\n3 errors');
  });
});
/* jshint ignore:start */

require('exq-admin/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map