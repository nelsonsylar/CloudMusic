export default (function song_form(){
    var TestObject = AV.Object.extend('playlist');
    var testObject = new TestObject();
        testObject.save({
        name: '1',
        singer:'2',
    }).then(function(object) {
        console.log('leancloud success')
    })
}).call()