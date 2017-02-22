


var actions = function(data) {
    var actions = [];

    actions.push({
        type: 'add',
        path: 'views/{{dashCase name}}/index.js',
        template: "const html = require('choo/html');\nconst styles = require('./styles.css');\n\nmodule.exports = (config) => (state, prev, send) => html`\n  <main class=${styles.root}>\n    <h1>Title: ${state.title}</h1>\n    <h1>Subtitle: ${config}</h1>\n  </main>\n`"
    });

    actions.push({
        type: 'add',
        path: 'views/{{dashCase name}}/styles.css',
        template: ".root{\n  background-color: lightblue;\n  padding:20px;\n}"
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
