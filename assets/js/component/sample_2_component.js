AFRAME.registerComponent('log', {
    scheme: {
        message: {type: 'string', default: 'Hello, World!'}
    },

    init: function() {
        console.log(this.data.message);
    }
)};
