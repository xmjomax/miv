const miv = require('../miv');

// var t = _.times(6, _.partial(_.uniqueId, 'ball_'));
// var c = _.times(6, _.partial(_.uniqueId, 'ball_'));
// var e = miv.times(6, miv.uniqueId.bind(null, 'ball_'));
// console.log(_.partial)

miv.times(4, function (index) {
    console.log(index)
})