const score={win:0,lose:0,draw:0};
let a=document.querySelector(".show");
let b=document.querySelector(".choice");
let c=document.querySelector(".declare");
let d=document.querySelector(".reset");
a.innerHTML="Wins : "+0+"<br>Losses : "+0+"<br>Draws : "+0;
d.addEventListener("click",function f()
{
    score.win=0;
    score.lose=0;
    score.draw=0;
    a.innerHTML="Wins : "+score.win+"<br>Losses : "+score.lose+"<br>Draws : "+score.draw;
})
function commove()
{
    let com = Math.random();
    let c="";
    if(com>=0 && com<1/3)
    {
        c="Rock";
    }
    else if(com>=1/3 && com<2/3)
    {
        c="Paper";
    }
    else
    {
        c="Scissors";
    }
    return c;
}
function imp(user,com)
{
    let result='';
    if(user==='Rock')
    {
        if(com==='Rock')
        {
            result="It's a Draw !";
            score.draw++;
        }
        else if(com==='Paper')
        {
            result='You lose !';
            score.lose++;
        }
        else
        {
            result='You win !';
            score.win++;
        }
    }
    else if(user==='Paper')
    {
        if(com==='Rock')
        {
            result='You win !';
            score.win++;
        }
        else if(com==='Paper')
        {
            result="It's a Draw !";
            score.draw++;
        }
        else
        {
            result='You lose !';
            score.lose++;
        }
    }
    else
    {
        if(com==='Rock')
        {
            result='You lose !';
            score.lose++;
        }
        else if(com==='Paper')
        {
            result='You win !';
            score.win++;
        }
        else
        {
            result="It's a Draw !";
            score.draw++;
        }
    }
    return result;
}
function display(um)
{
    let cm=commove();
    b.innerHTML='<p>You Chose : </p><img class="um" src="'+um+'.png"> <br> <p>Comuter Chose : </p><img class="cm" src="'+cm+'.png">';
    c.innerHTML=imp(um,cm);
    a.innerHTML="Wins : "+score.win+"<br>Losses : "+score.lose+"<br>Draws : "+score.draw;
}