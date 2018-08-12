## poc-webdriverio

O **poc-webdriverio** é um projeto de testes de integração. <br/>
Os testes são desenvolvidos em JavaScript utilizando o framework [WebDriverIO](http://webdriver.io/). <br/>

#### Pré requisitos

- node >= 8.9.x
- yarn >= 1.9.x

#### Como executar

Veja como montar um [Servidor Selenium](https://github.com/zalando/zalenium) para executar os testes. <br/>

Para instalar as dependências do projeto;
```
yarn install
```

São necessárias as seguintes configurações: <br/>
No arquivo package.json existe script `tests` nele deve ser configurado.
- `--host` - Informe o host do Selenium Grid, ex: 172.21.6.4
- `--baseUrl` - Informe a url do sistema, ex: https://phptravels.org/

Para executar testes;
```
yarn run tests
```
Neste momento testes serão executados no chrome, porém é possível alterar o arquivo de configuração para executar em outros browsers. <br/>

Caso queria fazer debug do teste, inclua o código `browser.debug()` na linha onde deseja fazer debug.
*Mais informações: [debug](http://webdriver.io/api/utility/debug.html).*

#### Allure Reports

Para gerar o report, execute;
```
yarn run report
```

No diretório *'./allure-logs/allure-report'* haverá os reports do teste.

Abra a index.html no firefox, ou execute;
```
./bin/open-report.sh
```

#### Eslint

Para visualizar os problemas do projeto, execute;
```
yarn run check
```

Para ajustar erros do projeto utilizando o Eslint, execute;
```
yarn run format
```
