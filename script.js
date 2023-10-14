async function getAdvice() {
    const data = await fetch('https://api.adviceslip.com/advice')
    const dataObj = await data.json()

    document.querySelector('.advice-id').textContent = dataObj.slip.id
    document.querySelector('.advice-content').textContent = dataObj.slip.advice
}

getAdvice()