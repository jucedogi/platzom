"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = platzom;
function platzom(str) {
    var translation = str;
    // Si la palabra termina en "ar" se le quitan esos dos caracteres.
    if (str.toLowerCase().endsWith("ar")) {
        translation = str.slice(0, -2);
    }
    // Si la palabra inicia con >, se le añade "pe" al final.
    if (str.toLowerCase().startsWith("z")) {
        translation += "pe";
    }
    // Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio.
    var length = translation.length;
    if (length >= 10) {
        var half = Math.round(length / 2);
        var firstHalf = translation.slice(0, half);
        var secondHalf = translation.slice(half);
        translation = firstHalf + "-" + secondHalf;
    }
    // Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la
    // misma palabra intercalando mayúsculas y mínúsculas.
    var reverse = function reverse(str) {
        return str.split('').reverse().join('');
    };
    var minMay = function minMay(str) {
        var length = str.length;
        var translation = '';
        var capitalize = true;
        for (var i = 0; i < length; i++) {
            var char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    };
    if (str === reverse(str)) {
        return minMay(str);
    }
    return translation;
}