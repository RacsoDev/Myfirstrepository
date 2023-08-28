function setApp() {
    const bodyElement = document.getElementsByTagName('body')[0];
    const button = document.body.getElementsByTagName('div')[0];
    const getButtonInnerHTML = (hexcolor) => `Tab to change it again! #${hexcolor}`; 
    const isHexColorTooDark = (hexcolor) => {
        var r = parseInt(hexcolor.substr(1,2),16);
        var g = parseInt(hexcolor.substr(3,2),16);
        var b = parseInt(hexcolor.substr(4,2),16);
        var yiq = ((r*299)+(g*587)+(b*114))/1000;
        // Return true if colour is too dark, false if not
        return yiq < 95;
    }

    const setBackgroundToRandomColor = () => {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const isDarkColor = isHexColorTooDark(randomColor);
        
        bodyElement.style.backgroundColor = `#${randomColor}`;
        
        button.style.color = `${!isDarkColor ? 'white' : 'black' }`;
        button.style.backgroundColor = `${isDarkColor ? 'white' : 'black' }`;
        button.style.border = `2px solid #${randomColor - 30}`;

        const newButtonLabel = getButtonInnerHTML(randomColor);
        button.innerHTML = newButtonLabel;
    }
    
    const handleBodyElementClick = () => {
        setBackgroundToRandomColor();
        setApp();
    }
    
    button.onclick = handleBodyElementClick;
}

setApp();
