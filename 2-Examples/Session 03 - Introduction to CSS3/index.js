if (typeof document === 'undefined') {
    // during server evaluation
    console.log('Server loadding...!!!!')
} else {
    // during client's browser evaluation
    const collection = document.getElementsByClassName("test");
    console.log(collection[0])
}