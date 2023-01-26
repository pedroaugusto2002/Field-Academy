
        let inputNewTask = document.querySelector('#createTask');
        let addTask = document.querySelector('#addTask');
        let taskList = document.querySelector('#taskList');

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
            
            let li = document.createElement('li');
            li.id = task.id;
            

            let span = document.createElement('span');
            span.classList.add('taskContent');
            span.innerHTML = task.name;

            let div = document.createElement('div');

            let buttonEdit = document.createElement('button');
            buttonEdit.classList.add('bntAction');
            buttonEdit.innerHTML = '<i class="fa fa-pencil"></i>';
            buttonEdit.setAttribute('onclick', 'edit('+task.id+')');

            let buttonDelete = document.createElement('button');
            buttonDelete.classList.add('bntAction');
            buttonDelete.innerHTML = '<i class="fa fa-trash"></i>';
            buttonDelete.setAttribute('onclick', 'remove('+task.id+')');

            div.appendChild(buttonEdit);
            div.appendChild(buttonDelete);

            li.appendChild(span);
            li.appendChild(div);
            return li;
        }

        function edit(){
            console.log(arguments)
            alert(arguments[0])
        }

       