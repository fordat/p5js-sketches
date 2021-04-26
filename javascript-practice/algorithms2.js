let activities = [
    ['work', 9],
    ['eat', 1],
    ['commute', 2],
    ['play game', 1],
    ['sleep', 7]
];

console.log(activities);

activities.splice(1, 0, ['programming',2]);

console.log(activities)

activities.forEach(activity => {
    let percentage = ((activity[1] / 24) * 100).toFixed()
    activity[2] = percentage + '%'
});

console.table(activities);


for (let i = 0; i < activities.length; i++) {
    // get size of inner array
    var innerArrayLength = activities[i].length;

    // loop that inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}