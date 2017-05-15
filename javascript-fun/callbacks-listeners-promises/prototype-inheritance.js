
function Car() {
    return {
        drive: function drive() {
            console.log('driving');
        }
    }
}

// Car.prototype.drive = function() {
//     console.log('driving');
// };

let honda = new Car();
honda.drive();