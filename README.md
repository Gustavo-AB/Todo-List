<h1>Todo List</h1>
<p>API Lista de Tarefas</p>
<p>Rotas de exemplo</p>
<h3>Criar uma ToDo</h3>
<p>Requisição do tipo POST</p>
<p><i>http://localhost:3333/create_todo</i></p>
<p>Deve ser passado para essa rota os valores: name, description e dead_zone</p>
<p>ex:
<br>
{
	"name":"Teste da todo",
	"description":"Teste description da ToDo",
	"dead_zone":"02/04/2023"
}
</p>
<h2></h2>
<p>Requisição do tipo GET</p>
<h3>Obter todas as ToDos</h3>
<p><i>http://localhost:3333/get_todos</i></p>
<p>E ai vc vai ter todas as ToDos criadas</p>
<h2></h2>
<p>Requisição do tipo PUT</p>
<h3>Atualizar para concluida</h3>
<p>É necessario passar o id da ToDo que será atualizada, e é possivel obter o id pela rota de get, ai passa o id no header da requisição e um json com o campo ex:</p>
<p><i>http://localhost:3333/finished</i></p>
<p>
	{
	"finished":true
	}
</p>
<h2></h2>
<h3>Deletar</h3>
<p>Requisição do tipo DELETE</p>
<p>Basta passar no header o id da ToDo que deseja deletar</p>
<p><i>http://localhost:3333/delete_todo</i></p>

