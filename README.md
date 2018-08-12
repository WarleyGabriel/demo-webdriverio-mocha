## Poc WebDriverIO

**Poc WebDriverIO** é um projeto de testes de integração, nesse projeto ocorre o cadastro de um contato no site [phptravels](https://phptravels.org) <br/>
Os testes são desenvolvidos em JavaScript utilizando o framework [WebDriverIO](http://webdriver.io/) <br/><br/>
O projeto [poc-selenium](https://github.com/WarleyGabriel/poc-selenium) tem os mesmos cenários de teste, porém nesse projeto não tem frameworks auxiliares. 
Após analisar os dois projetos, fica claro como um framework como o WebDriverIO pode nós ajudar a criar testes

#### Pré requisitos

- node >= 8.9.x
- yarn >= 1.9.x
- Servidor Selenium: Veja como montar um Servidor: [Grid Selenium](https://github.com/zalando/zalenium) para executar os testes 

#### Como executar

Para instalar as dependências do projeto, execute;
```
yarn install
```

São necessárias as seguintes configurações: <br/>
No arquivo package.json existe script `tests` nele deve ser configurado;
- `--host` - Informe o host do Selenium Grid, exemplo: 172.21.6.4
- `--baseUrl` - Informe a url do sistema, exemplo: https://phptravels.org/

Para executar testes, execute;
```
yarn run tests
```
Neste momento os testes serão executados no chrome, porém é possível alterar o arquivo de configuração para executar em outros browsers <br/>

Caso queria fazer debug do teste, inclua o código `browser.debug()` na linha onde deseja fazer debug <br/>
*Mais informações: [WebDriverIO, como fazer debug](http://webdriver.io/api/utility/debug.html)*

#### Allure Reports

Report é gerado desse modelo: <br/>
![alt text](https://github.com/WarleyGabriel/poc-webdriverio/blob/master/image/allure-report.png)

Para gerar o report, execute;
```
yarn run report
```

No diretório *'./allure-logs/allure-report'* haverá os reports do teste

Abra a index.html no firefox, ou execute;
```
./bin/open-report.sh
```

#### Eslint

Para visualizar possíveis problemas no código do projeto, execute;
```
yarn run check
```

Para que o Eslint ajuste os erros do projeto, execute;
```
yarn run format
```
