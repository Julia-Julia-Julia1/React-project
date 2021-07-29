function TaskList(props){

console.log(props);
return (
<ul>
<li>{props.siteName}</li>
<li>{props.version}</li>
<li>Task 3 </li>
</ul>

)

}

export default TaskList;
