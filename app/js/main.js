function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift) % 26) + base);
        }
        return char;
    }).join('');
}

function applyCaesarCipher() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const result = caesarCipher(text, shift);
    document.getElementById('result').textContent = result;
}