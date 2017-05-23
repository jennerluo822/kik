/**
 * Created by jennerluo on 2017/5/22.
 */
function determineDate() {
    import('moment')
        .then(moment => moment().format('LLLL'))
        .then(str => console.log(str))
        .catch(err => console.log('Failed to load moment', err));
}

determineDate();