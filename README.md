## PROJETO SIMPLES DE CRIACAO DE SERVIDOR COM REACT 


CRIACAO DE SERVIDOR MUITO BASICO, ANOTACOES

1 <br>
Criar uma pasta separada para ao servidor 
CMD -> npm init -y
![image](https://github.com/user-attachments/assets/5012576c-07f8-46e6-99dd-4995f712f64c)

2
CMD -> dependencias
npm i ; npm i sequelize ; npm i express ; npm i cors 
![image](https://github.com/user-attachments/assets/eb81bdc6-56cc-410d-882c-53884a8ab963)
![image](https://github.com/user-attachments/assets/cfaa08fc-0e84-4c02-ac87-80b1b6b6abbf)
![image](https://github.com/user-attachments/assets/151091b8-ff56-47c9-abe5-f36e9216af88)
**SQLITE3
![image](https://github.com/user-attachments/assets/9d2cf58a-182c-40d3-9bdc-c82670a57289)


3 <br>
CMD -> criar pastas
mkdir config ; mkdir middlewares ; mkdir models ; mkdir routes
![image](https://github.com/user-attachments/assets/0089793d-a4c2-45b3-b83c-108df8d7117b)

4 <br>
pasta config -> Criar arquivo config.js / .ts
![image](https://github.com/user-attachments/assets/4a27c0c1-30be-43af-b7a6-7a957b2dde2e)
![image](https://github.com/user-attachments/assets/26a62172-687d-4d51-8aa7-4af618285771)


5 <br>
![image](https://github.com/user-attachments/assets/f06b25bf-cea6-4e39-9641-d7607100f19e)
para ver a criação do banco de dados
![image](https://github.com/user-attachments/assets/e5424e97-d699-4565-8abb-eea6cbdce92c)
com o sqlite instalado no vscode para ver o banco de dados
![image](https://github.com/user-attachments/assets/a388fc20-3b77-46ac-8dc9-fc3d51bcfeed)

6
na pasta models criar os modelos do banco
![image](https://github.com/user-attachments/assets/cbba18ce-6dc9-48b9-ad80-68e9decb2ddf)
![image](https://github.com/user-attachments/assets/faed47b3-4b86-4f3c-b946-2fee2056a2a9)



7 <br>
![image](https://github.com/user-attachments/assets/33a7c8e0-4f2b-4da7-8f80-8a99db6face9)
criar arquivo para as rotas para fazer o CRUD do model
![image](https://github.com/user-attachments/assets/715f32ea-012a-45ea-92c3-f9d2024ef105)

8 <br>
Arquivo de sincronizacao
criar o arquivo na base do servidor 
![image](https://github.com/user-attachments/assets/0255c260-79dc-453b-af56-544f72bc06eb)
![image](https://github.com/user-attachments/assets/aa31c8b4-2dfa-409d-b3e9-61c5d83cfaee)


9 <br>
criar o arquivo index na raiz do projeto para subir o servidor usando as rotas
![image](https://github.com/user-attachments/assets/af7bee3b-9454-4eef-b097-1d140323cac0)

10 <br>
![image](https://github.com/user-attachments/assets/fca00ab0-5335-4291-85d7-80904cb887d2)
![image](https://github.com/user-attachments/assets/c0565d57-fbbc-4ce5-a2d3-5f81296c97b6)
![image](https://github.com/user-attachments/assets/a67c5aff-a7ef-40fe-95a3-341108c032cd)

## criptografar senha

![image](https://github.com/user-attachments/assets/6e2f6720-3c54-4387-96d4-ba905e2b302b) <br>
![image](https://github.com/user-attachments/assets/260ff701-f7c9-4693-80b7-9aa4452d9f85) <br>
![image](https://github.com/user-attachments/assets/e7707a66-f005-4928-ad24-ef80319af9c9) <br>
No contexto de funções de hashing, um salt é uma sequência de caracteres ou um número que é <br>
combinada com a entrada original (neste caso, a string s) antes de aplicar o algoritmo de hash.  <br>
Isso ajuda a prevenir ataques, especialmente contra ataques de força bruta e ataques de tabela arco-íris <br>
![image](https://github.com/user-attachments/assets/2f338168-877c-438c-86d1-e57551975b49) <br>
![image](https://github.com/user-attachments/assets/b7e70b71-0886-41b9-9e4f-fc514a4bb1b2) <br>

comparar senhas com o bcryptjs <br>
![image](https://github.com/user-attachments/assets/36b5bac1-137c-4f1d-9d4a-e63e21a4a965) <br>
bcryptjs.compare retorna um boolean <br>
![image](https://github.com/user-attachments/assets/34ade8db-0428-47de-b078-0566b0b45330) <br>
 



















