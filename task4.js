//On the screen show the user how long back each of the post was edited in seconds ago.
//Just add "{ current timestamp  - postcreated At timestamp }" on each of the post. 
const posts = [
    {title: 'Post one', body:'This is post one', createAt: new Date().getTime()},
    {title: 'Post two', body:'This is post two', createAt: new Date().getTime()}
];

let intervalId=0;
function getPosts(){
    clearInterval(intervalId);
    intervalId = setInterval(()=>{
        let output='';
        posts.forEach((post)=>{    
            output += `<li>${post.title} edited at ${(new Date().getTime()-post.createAt)/1000} seconds ago</li>`;
            console.log(`${post.createAt}`);
        });
        document.body.innerHTML = output;
    }, 1000);
}

function create4thPost(post, callback){
    setTimeout(()=>{
        posts.push({...post, createAt: new Date().getTime()});
        callback();
    },7000)
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push({...post, createAt: new Date().getTime()});
        callback();
    },3000)
}

createPost({title:'Post three', body:'This is post four'}, getPosts);
create4thPost({title:'Post four', body:'This is post four'},getPosts);
