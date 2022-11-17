define(function() {
    "use strict";

    window['requirejs'].config({
        map: {
            '*': {
                'pyvtkjs': 'nbextensions/pyvtkjs/index',
            },
        }
    });
    // Export the required load_ipython_extention
    return {
        load_ipython_extension : function() {}
    };
});
