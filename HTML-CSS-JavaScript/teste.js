
        let inputNewTask = document.querySelector('#createTask');
        let addTask = document.querySelector('#addTask');
        let taskList = document.querySelector('#taskList');
        let editWindow = document.getElementById('editWindow');
        let editWindowBackground = document.getElementById('editWindowBackground');
        let closeEditWindow = document.getElementById('closeWindow');
        let saveTask = document.getElementById('saveButton');
        let idTaskEdit = document.getElementById('idTaskEdit');
        let inputTaskEditText = document.getElementById('taskEditText');



        //quando a teclado do codigo 13 (enter) for apertada executara a ação
        inputNewTask.addEventListener('keyup', (e) => {

            if(e.key === 'Enter') {
                let task = {
                    name: inputNewTask.value,
                    id: idGenerator(),
                }
                createTask(task);
            }

        });
        //quando clicar no botão com o mouse ira executar a função (a mesma de cima)
        addTask.addEventListener('click', (e) => {

            let task = {
                name: inputNewTask.value,
                id: idGenerator(),
            }
            createTask(task);
        });

        closeEditWindow.addEventListener('click', (e) => {
            toogleEditWindow();
        });

        saveTask.addEventListener('click', (e)=>{
            e.preventDefault();
            let idTask = idTaskEdit.innerHTML.replace('#', '');
            
            let task = {
                name : inputTaskEditText.value,
                id : idTask,
            }

            let oldTask = document.getElementById(''+idTask+'');

            let li = createTagLi(task);
            taskList.replaceChild(li, oldTask);
            toogleEditWindow();


        });

        function idGenerator(){
            //vai arredonda para inteiro o numero aleatorio que o math randon gerou até 3k
            return Math.floor(Math.random() * 3000);
        }

        function createTask(task){
            if (inputNewTask.value != ''){
                let li = createTagLi(task);
                taskList.appendChild(li);
                inputNewTask.value = '';
            }
            else{
                alert('Nada digitado')
            }
        }

        //as tarefas foram criadas como listas, contendo o conteudo, e uma div para os dois botões
        function createTagLi(task){
            deleteTask
            let li = document.createElement('li');
            li.id = task.id;
            

            let span = document.createElement('span');
            span.classList.add('taskContent');
            span.innerHTML = task.name;

            let div = document.createElement('div');
            div.classList.add('taskListBnt');

            let buttonEdit = document.createElement('button');
            buttonEdit.classList.add('bntAction');
            buttonEdit.innerHTML = '<i class="fa fa-pencil"></i>';
            buttonEdit.setAttribute('onclick', 'editTask('+task.id+')');

            let buttonDelete = document.createElement('button');
            buttonDelete.classList.add('bntAction');
            buttonDelete.innerHTML = '<i class="fa fa-trash"></i>';
            buttonDelete.setAttribute('onclick', 'deleteTask('+task.id+')');

            div.appendChild(buttonEdit);
            div.appendChild(buttonDelete);

            li.appendChild(span);
            li.appendChild(div);
            return li;
        }

        function editTask(idTask){
            let li = document.getElementById(''+ idTask +'');
            if(li){
                idTaskEdit.innerHTML = '#' + idTask;
                inputTaskEditText.value = li.innerText;
                toogleEditWindow();
            }
            
        }

        function deleteTask(idTask){
            let confirm = window.confirm('Deseja excluir a tarefa?');
            if(confirm){
                let li = document.getElementById(''+ idTask +'');
                if(li){
                    taskList.removeChild(li);
                }    
            }

        }

        function toogleEditWindow(){
            editWindow.classList.toggle('open');
            editWindowBackground.classList.toggle('open');
        }

       