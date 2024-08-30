# Gerador de QR Code e Senhas

Este projeto fornece uma ferramenta simples para gerar QR codes e senhas aleatórias. O código permite ao usuário escolher entre duas opções:

1. **Gerar um QR Code**: Cria um QR code com base nas informações fornecidas pelo usuário.
2. **Gerar uma Senha**: Cria uma senha aleatória conforme a configuração pré-definida no arquivo `.env`.

## Funcionalidades

- **Opção 1: Gerar QR Code**
  - Solicita ao usuário as informações que devem ser codificadas em um QR code.
  - Gera e exibe um QR code com base nas informações fornecidas.

- **Opção 2: Gerar Senha**
  - Cria uma senha aleatória baseada nas configurações especificadas no arquivo `.env`.
  - A senha gerada atende às regras de configuração definidas no arquivo de ambiente.

## Configuração

1. **Instale as Dependências**
   - Certifique-se de ter o Node.js instalado.
   - Execute `npm install` para instalar as dependências do projeto.

2. **Configuração do Arquivo `.env`**
   - Crie um arquivo `.env` na raiz do projeto.
   - Configure os parâmetros necessários para a geração de senhas. Por exemplo:
       ```
     UPPERCASE_LETTERS=true
     LOWERCASE_LETTERS=true
     NUMBERS=true
     SPECIAL_CHARACTERS=false
     PASSWORD_LENGHT=12
       ```

3. **Executando o Código**
   - Execute o script com `node src/index.js`.
   - Escolha entre as opções fornecidas pelo menu interativo.

## Exemplos de Uso

```bash
node src/index.js
```

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, abra um pull request ou envie um issue com sugestões.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

