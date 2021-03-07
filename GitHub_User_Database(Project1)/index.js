users=['Nkap23','ParthPrajapati43','RitikPPatel05','Samyak2406','vivek9patel','vok8','vasu-gondaliya'];
for(i=0;i<users.length;++i){
    url='https://api.github.com/users/'+users[i];
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(githubuser){
        curr_id="users"+githubuser.id;
        left_id="left"+githubuser.id;

        newdiv=document.createElement('div');
        newdiv.id=curr_id;
        newdiv.className='card';
        document.getElementById('main').appendChild(newdiv);
        newdiv.innerHTML=`<img src=${githubuser.avatar_url}>
                        <br>
                        <div id='content'>
                        <span class="name">${githubuser.name} (${githubuser.login})</span>
                        <br>
                        <i>${githubuser.bio}</i>
                        <br>
                        <br>
                        <b>Email:</b> ${githubuser.email}
                        <br>
                        <b>Location:</b> ${githubuser.location}
                        <br>
                        <b>Repos:</b> ${githubuser.public_repos}
                        <br>
                        <b>Followers:</b> ${githubuser.followers}
                        <br>
                        <b>Following:</b> ${githubuser.following}
                        </div>`;

        bre=document.createElement('br');
        document.body.appendChild(bre);

        //document.getElementById(curr_id).style.display="flex";
        //document.getElementById(left_id).style.flex="32%";
        //document.getElementById(right_id).style.flex="68%";
    });
}