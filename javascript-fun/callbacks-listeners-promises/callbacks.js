finder([1, 2], (records) => {
    processor(records, (records) => {
       console.log(records);
    });
});

function finder(records, cb) {
    setTimeout(() => {
        records.push(3, 4);
        cb(records);
    }, 1000);
}

function processor(records, cb) {
    setTimeout(() => {
        records.push(5, 6);
        cb(records);
    }, 1000);
}