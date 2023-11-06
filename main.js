const TaskList=document.getElementById("task-list");
const InProgressList= document.getElementById("in-progress-list");
const CompletedList=document.getElementById("completed-list");
const inputTaskBox=document.getElementById('input-box');
const inputUserBox=document.getElementById('user-box');

function addTask()
{
    if(inputTaskBox.value==="")
    {
        alert("Write something there");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputTaskBox.value;
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
    inputTaskBox.value="";
}
function addUser()
{
    for(let i=0;i<TaskList.children.length;i++) {
        if (TaskList.children.item(i).classList.contains("checked")) {
            TaskList.children.item(i).children.item(3).innerHTML="User: " + inputUserBox.value;
            TaskList.children.item(i).classList.remove("checked");

        }
    }
    for(let i=0;i<InProgressList.children.length;i++) {
        if (InProgressList.children.item(i).classList.contains("checked")) {
            InProgressList.children.item(i).children.item(3).innerHTML="User: " + inputUserBox.value;
            InProgressList.children.item(i).classList.remove("checked");
        }
    }
    for(let i=0;i<CompletedList.children.length;i++) {
        if (CompletedList.children.item(i).classList.contains("checked")) {
            CompletedList.children.item(i).children.item(3).innerHTML="User: " + inputUserBox.value;
            CompletedList.children.item(i).classList.remove("checked");

        }
    }
    inputUserBox.value="";
}
function moveTasks()
{
    for(let i=0;i<TaskList.children.length;i++) {
        if (TaskList.children.item(i).classList.contains("checked")) {
            TaskList.children.item(i).classList.remove("checked");
            InProgressList.appendChild(TaskList.children.item(i));
            i--;
        }
    }
    for(let i=0;i<InProgressList.children.length;i++) {
        if (InProgressList.children.item(i).classList.contains("checked")) {
            InProgressList.children.item(i).classList.remove("checked");
            CompletedList.appendChild(InProgressList.children.item(i));
            i--;

        }
    }
}
function deselectTasks()
{
    for(let i=0;i<TaskList.children.length;i++) {
        if (TaskList.children.item(i).classList.contains("checked")) {
            TaskList.children.item(i).classList.remove("checked");

        }
    }
    for(let i=0;i<InProgressList.children.length;i++) {
        if (InProgressList.children.item(i).classList.contains("checked")) {
            InProgressList.children.item(i).classList.remove("checked");
        }
    }
    for(let i=0;i<CompletedList.children.length;i++) {
        if (CompletedList.children.item(i).classList.contains("checked")) {
            CompletedList.children.item(i).classList.remove("checked");

        }
    }
}
function removeTasks()
{
    for(let i=0;i<TaskList.children.length;i++) {
        if (TaskList.children.item(i).classList.contains("checked")) {
            TaskList.children.item(i).remove()
            i--;
        }
    }
    for(let i=0;i<InProgressList.children.length;i++) {
        if (InProgressList.children.item(i).classList.contains("checked")) {
            InProgressList.children.item(i).remove()
            i--;
        }
    }
    for(let i=0;i<CompletedList.children.length;i++) {
        if (CompletedList.children.item(i).classList.contains("checked")) {
            CompletedList.children.item(i).remove()
            i--;
        }
    }
}

TaskList.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName==="SPAN")
    {
        if(e.target.id==="RemoveButton")
            e.target.parentElement.remove();
        if(e.target.id==="Move_RightButton")
        {
            InProgressList.appendChild(e.target.parentElement);
        }
        if(e.target.id==="Move_LeftButton")
        {
            alert("It can't go left you dummy");
        }
    }
})
InProgressList.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName==="SPAN")
    {
        if(e.target.id==="RemoveButton")
            e.target.parentElement.remove();
        if(e.target.id==="Move_RightButton")
        {
            CompletedList.appendChild(e.target.parentElement);
        }
        if(e.target.id==="Move_LeftButton")
        {
            TaskList.appendChild(e.target.parentElement);
        }
    }
})
CompletedList.addEventListener("click",function(e)
{
    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName==="SPAN")
    {
        if(e.target.id==="RemoveButton")
            e.target.parentElement.remove();
        if(e.target.id==="Move_RightButton")
        {
            alert("It can't go right you dummy");
        }
        if(e.target.id==="Move_LeftButton")
        {
            InProgressList.appendChild(e.target.parentElement);
        }
    }
})



