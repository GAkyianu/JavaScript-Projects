// Utilzing the .concat() method
function full_sentence() {
    var part_1 = "Summer is fast approaching ";
    var part_2 = "and I have still not decided ";
    var part_3 = "where we are going this time. ";
    var part_4 = "Hopefully, something will come up soon!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}