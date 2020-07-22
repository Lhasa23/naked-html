let style = document.querySelector('#style')
let content = document.querySelector('#content')

const styleText = `
#taiji-wapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#taiji {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    animation: x 8s infinite linear;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.75);
}

#taiji > div:nth-child(1) {
    width: 50%;
    height: 100%;
    position: absolute;
    background-color: black;
    left: 0;
}

#taiji > div:nth-child(2) {
    width: 50%;
    height: 100%;
    position: absolute;
    background-color: white;
    right: 0;
}

#taiji > div:nth-child(3) {
    border-radius: 50%;
    width: 50%;
    height: 50%;
    position: absolute;
    background-color: black;
    left: 25%;
}

#taiji > div:nth-child(4) {
    border-radius: 50%;
    width: 50%;
    height: 50%;
    position: absolute;
    background-color: white;
    left: 25%;
    bottom: 0;
}

#taiji > div:nth-child(5) {
    border-radius: 50%;
    width: 12%;
    height: 12%;
    position: absolute;
    background-color: white;
    left: 45%;
    top: 20%;
}

#taiji > div:nth-child(6) {
    border-radius: 50%;
    width: 12%;
    height: 12%;
    position: absolute;
    background-color: black;
    left: 45%;
    bottom: 20%;
}

/* 最后，为我们的太极图加上动画吧！ */
@keyframes x {
  from {
      transform: rotate(0deg);
  }

  to {
      transform: rotate(360deg);
  }
}

`
let n = 0, stringCopy = ''
function step() {
    setTimeout(() => {
        if (styleText[n] === '\n') {
            stringCopy += '<br>'
        } else if (styleText[n] === ' ') {
            stringCopy += '&nbsp;'
        } else {
            stringCopy += styleText[n]
        }
        content.innerHTML = stringCopy
        // style.innerHTML = stringCopy
        style.innerHTML = styleText.substr(0, n)
        if (n < styleText.length - 1) {
            n++
            step()
        }
    }, 10)
}

step()
