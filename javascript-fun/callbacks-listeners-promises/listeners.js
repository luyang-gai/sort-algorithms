const $ = require('jquery')(window);
//
let finder = {
    run: (records) => {
        let self = this;
        setTimeout(() => {
            records.push(3, 4);
            self.trigger('done', records);
        }, 1000);
    }
};

let processor = {
    run: (records) => {
        let self = this;
        setTimeout(() => {
            records.push(5, 6);
            self.trigger('done', records);
        }, 1000);
    }
};

let eventable = {
    on: function(event, cb) {
        $(this).on(event, cb);
    },
    trigger: function (event, args) {
        $(this).trigger(event, args);
    }
};

$.extend(finder, eventable);
$.extend(processor, eventable);

finder.on('done', (events, records) => {
   processor.run(records);
});

processor.on('done', (events, records) => {
    console.log(records);
});

finder.run([1, 2]);