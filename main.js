const TaskList=document.getElementById("task-list");
const inputBox=document.getElementById('input-box');

function addTask()
{
    if(inputBox.value==="")
    {
        alert("Write something there");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        TaskList.appendChild(li);
        let remove= document.createElement("span");
        remove.id="RemoveButton";
        remove.innerHTML="\u00d7";
        let move_right= document.createElement("span");
        move_right.id="Move_RightButton";
        move_right.innerHTML="\u2192";
        let move_left= document.createElement("span");
        move_left.id="Move_LeftButton";
        move_left.innerHTML="\u2190";
        let user= document.createElement("div");
        user.id="user"
        user.innerHTML="User: None";
        li.appendChild(move_right);
        li.appendChild(remove);
        li.appendChild(move_left);
        li.appendChild(user);
    }
    inputBox.value="";
}
function removeTasks()
{
    for(let i=0;i<TaskList.children.length;i++)
    {
        if(TaskList.children.item(i).classList.contains("checked"))
        {
            TaskList.children.item(i).remove()
        }
    }
    TaskList.children.item(0).remove()
}

TaskList.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName==="SPAN")
    {
        if(e.target.parentElement.classList.contains("checked"))
            e.target.parentElement.remove();
    }
})



