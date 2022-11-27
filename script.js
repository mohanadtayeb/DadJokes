// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log('response: waiting to parse', res)
//         return res.json()
//     })
//     .then( data => {
//         console.log('DATA PARSED...')
//         console.log(data.ticker.price)
// })
//     .catch(e => {
//         console.log("ERROR !!!" ,e)
//     })



axios.get('https://api.cryptonator.com/api/ticker/btc-usd\n')
    .then(res => {
        console.log(res.data.ticker.price)
    })

    .catch(err => {
        console.log('ERROR')
    })
const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')



const getDadJoke =  async () => {
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/',config )
    return res.data.joke



}
const addNewJoke = async () => {
    const jokeText = await getDadJoke()
    console.log(jokeText)
    const newLi = document.createElement('LI')
    newLi.append(jokeText)
    jokes.append(newLi)
}
button.addEventListener('click', addNewJoke)
