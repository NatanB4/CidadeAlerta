## Teste para vaga de Desenvolvedor Back End

Fonte do exercício em: (Exercício - Back-end.pdf)
Arquivo pra ser exportado para o insomnia na pasta /insomnia 

```
para rodar é nescessario NODEJS
  -> npm install
  -> npm run dev / npm run start
  -> listerning: localhost:3300
```

```
API Back-end com as seguintes funcionalidades:
● Autenticação de Usuário e Senha
    -> POST - /sessions (Logar)
       Body: {
          "username": "admin",
	      "password": "admin"
        } 
       Header: não precisa.

    -> DEL - /sessions (Deslogar)
       Body: não precisa.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
● Listagem de Códigos Penais com paginação, filtro e ordenação por todos os campos
    -> POST - /criminal/search 
       Body: {
        "page": 1,
        "perPage": 2,
        "orderByColumn": "id",
        "orderByDirection": "asc",
        "filterColumn": "name", 
        "filterValue": "Casos suspeitos"
       }
       //obs: todos os campos acima exeto (page, perPage) são opcionais.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
● Inclusão de Código Penal
    -> POST - /criminal
       Body: {
        "name": "George Orwell - 1984",
        "description": "Um caso um pouco complicado e interessante.",
        "penality": 1,
        "prisonTime": 2,
        "statusId": 1 //Tem que existir!
       }
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
● Exclusão de Código Penal
    -> DEL - /criminal/:id
       Body: não precisa.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
● Edição de Código Penal
    -> PUT - /criminal
       Body: {
        "id": "1", // tem que existir!
        "name": "Casos suspeitos",
        "description": "enfim era um vez",
        "penality": 1,
        "prisonTime": 2,
        "statusId": 1 // tem que existir!
       }
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
● Visualização do Código Penal pelo ID
    -> GET - /criminal/:id
       Body: não precisa.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------

====>(User)

● Registrar
    -> POST - /users
       Body: {
        "username": "natan",
        "password": "1234",
        "password_confirmation": "1234"
       }.
       Header: não precisa.
--------------------------------
● Deletar
    -> DEL - /users/:name
       Body: não precisa.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
● Pegar informações
    -> GET - /users
       Body: não precisa.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
● Atualizar
    -> PUT - /users
       Body: {
        "username": "natan",
        "password": "312"
       }.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------

====>(Status)

● Criar
    -> POST - /status
       Body: {
	    "name":"Perigoso"
       }
       Header: Authorization Bearer TOKEN (pego na request de login).
--------------------------------
● Deletar
    -> DEL - /status/:id
       Body: não precisa.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
● Pegar informações
    -> GET - /status/:id
       Body: não precisa.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
● Atualizar
    -> PUT - /status
       Body: {
        "id": 1,
        "name": "312"
       }.
       Header: Authorization Bearer TOKEN (pego na request de login)
--------------------------------
```


