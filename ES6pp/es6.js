document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend')
    for(const friend of friends)
    {
        friend.style.backgroundColor = "sky"
    }
})

document.getElementById('center-third').addEventListener('click', function(){
    const thirdfirend = document.getElementById('third-friend')
    thirdfirend.style.textAlign = 'center' 
})

document.getElementById('Add-friend').addEventListener('click', function(){
    const friendcontainer = document.getElementById('friends')
    const newfriend = document.createElement('div')
    newfriend.innerHTML = `
     <h3 class="friend-name" > New Friend </h3> 
    <p> Yeeeeeeaaaa </p>
    ` 

    friendcontainer.appendChild(newfriend)
})
