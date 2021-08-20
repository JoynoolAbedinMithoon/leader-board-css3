const titles = document.getElementsByClassName('section-title');
for (const title of titles) {
    title.style.color = 'green';
};

const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'rgba(255, 99, 71, 0.2)';
    player.style.marginRight = '5px';
    player.style.borderRadius = '10px';
}

document.getElementById('create-item').addEventListener('click', function ()
{
    const newList = document.createElement('li');
    newList.innerText = 'New item';
    document.getElementById('items').appendChild(newList);
})

document.getElementById('count-btn').addEventListener('click', function ()
{
    const inputField = document.getElementById('number-field');
    let inputValue = parseInt(inputField.value);
    if (inputValue == 5) {
        document.getElementById('count-btn').setAttribute("disabled", true);
    } else {
        inputValue += 1;
    }
    inputField.value = inputValue;
})