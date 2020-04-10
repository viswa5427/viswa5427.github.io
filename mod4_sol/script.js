/*
Solution of assignment 4:

Expected output:

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function() {
    var names = ["viivek", "viswa", "gowtham", "surya", "sandii", "hulk", "harsha", "mandi macha", "fighter", "prateek bro"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'v') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
