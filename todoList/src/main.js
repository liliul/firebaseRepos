// id no html
const idInputTask = document.getElementById('idInputTask');
const buttonTask = document.getElementById('button-task');

// variaveis
let db = [];
let inputTask = idInputTask.value;

// function adiciona no input e checked no banco de dados e atualiza 
function create() {
	const pushDB = idInputTask.value;

	db.push({ 'inputDB': pushDB,'checkedDB': ''});
	
	updateDB()	
}

// funcão rederiza o html das tarefas 
function setHtml() {
	// limpa html
	document.getElementById('add-task').innerHTML = '';
	
	// recuperando dados do localStorage
	db = JSON.parse(localStorage.getItem('todolist')) ?? []
	
	// adicionando quantas tarefas foram criadas na fução contar tarefas criada
	tasksCreateLength(db.length)
	
	// adicionar na fução taskCompleted quantas tarefas estão checadas
	var counter=0
	db.forEach(d => {
		if(d.checkedDB === 'checked') {
			tasksCompleted(counter++ + 1)
		} else tasksCompleted(counter)
	})
	
	// verifica se o banco de dados esta zerado e rederiza html
	if(db.length === 0) {
		
		document.getElementById('add-task').innerHTML = `
			<div class="articles-void">
				<span class="void-icon">
					<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<rect width="56" height="56" fill="url(#pattern0)"/>
					<defs>
					<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use xlink:href="#image0_43_191" transform="scale(0.01)"/>
					</pattern>
					<image id="image0_43_191" width="100" height="100" xlink:href="data:image/png;base64,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"/>
					</defs>
					</svg>
				</span>
				<p class="void-p">Você ainda não tem tarefas cadastradas</p>
				<small class="void-small">Crie tarefas e organize seus itens a fazer</small>
			</div> 
		`
	}

	// renderizar as informações do banco de dados no html
	db.map((list, index) => {
		addTask(list.inputDB, list.checkedDB , index)
	})	
}

// fução cria o html das tarefas
function addTask(text, checkedDB, index) {
	
	// cria uma div com html das tarefas e adiciona no id add-task
	const div = document.createElement('div')
		
	div.innerHTML = `
		<article class="tasks">
			<div class="checked">
				<input type="checkbox" ${checkedDB} onchange="checkboxUp(this,${index})" class="checked_input" name="nameCheck" data-input=${index}>
			</div>

			<div class="tasks_text">
				<p class="tasks-p" data-p="${index}">
					${text}
				</p>
			</div>

			<div class="trash" data-id=${index} onclick="deleteTask(${index})">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14.2021 9.98548H12.8716V15.5073H14.2021V9.98548Z" fill="#808080"/>
					<path d="M11.4624 9.98548H10.1318V15.5073H11.4624V9.98548Z" fill="#808080"/>
					<path d="M18.478 7.16712C18.4754 7.03061 18.4295 6.89846 18.3469 6.78975C18.2642 6.68104 18.1492 6.6014 18.0184 6.56232C17.9596 6.53782 17.8974 6.52252 17.8339 6.51696H14.2868C14.1525 6.07791 13.8808 5.69355 13.5117 5.42047C13.1426 5.14739 12.6956 5 12.2365 5C11.7774 5 11.3304 5.14739 10.9613 5.42047C10.5922 5.69355 10.3205 6.07791 10.1862 6.51696H6.63911C6.58068 6.51814 6.52269 6.52729 6.46674 6.54418H6.45162C6.31318 6.58701 6.19334 6.67547 6.11163 6.79515C6.02992 6.91483 5.99117 7.05866 6.00169 7.20319C6.01222 7.34771 6.0714 7.48441 6.16958 7.59099C6.26776 7.69757 6.39916 7.76774 6.54234 7.79006L7.25298 17.5334C7.26382 17.9127 7.41693 18.2741 7.68191 18.5458C7.94688 18.8175 8.30435 18.9797 8.68332 19H15.7867C16.1662 18.9804 16.5244 18.8186 16.79 18.5468C17.0556 18.2751 17.2092 17.9132 17.22 17.5334L17.9277 7.79914C18.0802 7.77797 18.22 7.70232 18.3212 7.58615C18.4223 7.46999 18.478 7.32116 18.478 7.16712ZM12.2365 6.21456C12.3661 6.21458 12.4943 6.24146 12.6129 6.29351C12.7316 6.34556 12.8382 6.42164 12.926 6.51696H11.547C11.6346 6.42135 11.7411 6.34507 11.8599 6.29299C11.9786 6.24092 12.1069 6.21421 12.2365 6.21456ZM15.7867 17.7904H8.68332C8.60168 17.7904 8.47467 17.6573 8.45955 17.4457L7.75798 7.81123H16.715L16.0135 17.4457C15.9984 17.6573 15.8714 17.7904 15.7867 17.7904Z" fill="#808080"/>
				</svg>
			</div>
		</article>
	`
	document.getElementById('add-task').appendChild(div);
	
	// virifica se input:checkbox esta checado e adiciona style ou remove style
	if (checkedDB) {
		document.querySelector(`[data-p="${index}"]`).setAttribute('style', 'text-decoration:line-through;');
	}else {
		document.querySelector(`[data-p="${index}"]`).removeAttribute('style');
	}

	// limpa o input de cria tarefas
	idInputTask.value = ""
}

// contador de quantas tarefas foram criadas
function tasksCreateLength(index) {
	document.getElementById('task-create').innerText = index
}

// contador de quantas tarefas estão checadas 
function tasksCompleted(index) {
	document.querySelector('.completed-counter').innerText= index; 
}

// se o input:checkbox foi selecionado. guarda ou remove do localStorage 
function checkboxUp(check, index) {

	if (check.checked) {
		db[index].checkedDB = 'checked';
	}else {
		db[index].checkedDB = '';
	}

	updateDB()
}

// remover tarefas e atualiza os dados
function deleteTask(index) {
	db.splice(index, 1)
	
	updateDB()
}

// atualizar os dados e html
function updateDB() {
	localStorage.setItem('todolist', JSON.stringify(db))

	setHtml()
}

// butão que cria tarefa e atualiza dados
buttonTask.addEventListener('click', function () {
	
	if(idInputTask.value == '') return
	
	create()
	
	updateDB()	
})

// se a tarefa foi criada mostra
setHtml()