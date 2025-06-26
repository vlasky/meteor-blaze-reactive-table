Package.describe({
  summary: "A reactive table designed for Blaze. Supports Meteor 3.0.",
  version: "0.8.45",
  name: "vlasky:blaze-reactive-table",
  git: "https://github.com/vlasky/meteor-blaze-reactive-table.git"
});

Package.onUse(function (api) {
    api.versionsFrom(["METEOR@2.0", "METEOR@3.0"]);
    api.use('templating@1.4.0', 'client');
    api.use('jquery@1.11.11 || 3.0.0', 'client');
    api.use('underscore', ['server', 'client']);
    api.use('tracker', 'client');
    api.use('reactive-var', 'client');
    api.use("vlasky:blaze-i18n@0.4.4", 'client');
    api.use("mongo", ["server", "client"]);
    api.use("check", "server");

    api.use("fortawesome:fontawesome@4.7.0", 'client', {weak: true});

    api.addFiles('lib/reactive_table.html', 'client');
    api.addFiles('lib/filter.html', 'client');
    api.addFiles('lib/reactive_table_i18n.js', 'client');
    api.addFiles('lib/reactive_table.js', 'client');
    api.addFiles('lib/reactive_table.css', 'client');
    api.addFiles('lib/sort.js', 'client');
    api.addFiles('lib/filter.js', ['client', 'server']);
    api.addFiles('lib/server.js', 'server');

    api.export("ReactiveTable", ["client", "server"]);
});

Package.onTest(function (api) {
    api.use('templating@1.4.0', 'client');
    api.use('jquery@1.11.11 || 3.0.0', 'client');
    api.use('underscore', ['client', 'server']);
    api.use('tracker', 'client');
    api.use('reactive-var', 'client');
    api.use("vlasky:blaze-i18n@0.4.4", 'client');
    api.use("mongo", ["server", "client"]);
    api.use("check", "server");
    api.use("audit-argument-checks", "server");

    api.addFiles('lib/reactive_table.html', 'client');
    api.addFiles('lib/filter.html', 'client');
    api.addFiles('lib/reactive_table_i18n.js', 'client');
    api.addFiles('lib/reactive_table.js', 'client');
    api.addFiles('lib/reactive_table.css', 'client');
    api.addFiles('lib/sort.js', 'client');
    api.addFiles('lib/filter.js', ['client', 'server']);
    api.addFiles('lib/server.js', 'server');

    api.export("ReactiveTable", ["client", "server"]);

    api.use(['tinytest', 'test-helpers'], 'client');
    api.addFiles('test/helpers.js', ['client', 'server']);
    api.addFiles('test/test_collection_argument.js', 'client');
    api.addFiles('test/test_no_data_template.html', 'client');
    api.addFiles('test/test_settings.js', 'client');
    api.addFiles('test/test_fields_tmpl.html', 'client');
    api.addFiles('test/test_fields.js', 'client');

    api.use('accounts-password', ['client', 'server']);
    api.addFiles('test/test_reactivity_server.js', 'server');
    api.addFiles('test/test_reactivity.html', 'client');
    api.addFiles('test/test_reactivity.js', 'client');

    api.addFiles('test/test_sorting.js', 'client');
    api.addFiles('test/test_filtering_server.js', 'server');
    api.addFiles('test/test_filtering.js', 'client');
    api.addFiles('test/test_pagination.js', 'client');
    api.addFiles('test/test_i18n.js', 'client');
    api.addFiles('test/test_events_tmpl.html', 'client');
    api.addFiles('test/test_events.js', 'client');
    api.addFiles('test/test_column_toggles.js', 'client');
    api.addFiles('test/test_multiple_tables.js', 'client');
    api.addFiles('test/test_template.html', 'client');
    api.addFiles('test/test_template.js', 'client');
    api.addFiles('test/test_custom_filters.js', 'client');

    api.use("dburles:collection-helpers", "client");
    api.addFiles("test/test_compatibility.js", "client");
});
