


var actions = function(data) {
    var actions = [];

    actions.push({
        type: 'add',
        path: 'views/{{dashCase name}}/index.js',
        template: "const html = require('choo/html');\nconst styles = require('./styles.css');\n\nmodule.exports = (param) => (state, emitter) => html`\n  <main class=${styles.root}>\n    <h1>{{dashCase name}} component</h1>\n    <h1>Param: ${param}</h1>\n  </main>\n`"
    });

    actions.push({
        type: 'add',
        path: 'views/{{dashCase name}}/styles.css',
        template: ".root{\n /* your styles */ \n}"
    });

    return actions;
}

module.exports = function (plop) {
  plop.setGenerator('view', {
      description: 'create a view',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'name?',
          validate: function (value) {
              if ((/.+/).test(value)) { return true; }
              return 'name is required';
          }
      }],
      actions: function(data){
        data.type = 'view';
        return actions.apply(this,arguments);
      }
  });
};
