// Función para cifrar el texto
function cifrarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const mensaje = document.getElementById('mensaje');
    
    if (inputText.trim() === '') {
        mostrarMensaje('Por favor, ingresa un texto para cifrar.', 'red');
        return;
    }

    // Cifrado
    const textoCifrado = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    outputText.value = textoCifrado;
    mostrarMensaje('Texto cifrado con éxito.', 'green');
}

// Función para descifrar el texto
function descifrarTexto() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    const mensaje = document.getElementById('mensaje');
    
    if (inputText.trim() === '') {
        mostrarMensaje('Por favor, ingresa un texto para descifrar.', 'red');
        return;
    }

    // Descifrado
    const textoDescifrado = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    outputText.value = textoDescifrado;
    mostrarMensaje('Texto descifrado con éxito.', 'green');
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    mostrarMensaje('Texto copiado al portapapeles.', 'green');
}

// Función para mostrar mensajes en la interfaz
function mostrarMensaje(texto, color) {
    const mensaje = document.getElementById('mensaje');
    mensaje.innerText = texto;
    mensaje.style.backgroundColor = color;
    mensaje.style.display = 'block';

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 3000);
}