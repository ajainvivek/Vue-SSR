module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Generate a Bloge Component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What should it be called?',
            validate: function (value) {
                if ((/.+/).test(value)) { return true; }
                return 'name is required';
            }
        }],
        actions: [{
            type: 'add',
            path: 'client/components/{{properCase name}}/src/{{properCase name}}.vue',
            templateFile: 'templates/component/src/component.txt'
        }, {
            type: 'add',
            path: 'client/components/{{properCase name}}/index.js',
            templateFile: 'templates/component/index.txt'
        }, {
            type: 'add',
            path: 'client/components/{{properCase name}}/src/README.md',
            templateFile: 'templates/component/src/document.txt'
        }]
    });
}