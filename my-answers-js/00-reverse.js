/**
 * Created by ZacharySlates on 11/2/16.
 */
var reverse = function(string){
    var temp = "";
    for(var i = string.length - 1; i >= 0; i--){
        temp = temp + string.charAt(i);
    }
    return temp;
};

console.log(reverse("abc"));

console.log(reverse("") === "");