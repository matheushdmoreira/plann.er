<p align="center">
  <img src="https://docs.google.com/uc?id=1duX5xnzVFJg3qX-vLbAIcZjH_ecoG78x" width="100%" />
</p>

# Planne.er - Mobile App

Esta aplicação com o nome de Plann.er consiste basicamente no cadastro e organização de viagens, cadastro de atividades/links importantes e confirmação de presença. 🚀

## Executando o projeto

Abaixo seguem as instruções para você executar o projeto em sua máquina.

Comece clonando o repositório:

```sh
git clone https://github.com/matheushdmoreira/plann.er
```

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Após instalar o Node.js, vamos acessar a pasta api do projeto, instalar as dependências e, então, subir o servidor HTTP.

```sh
cd server

# Instalando as dependências
npm install

# Subir o servidor HTTP
npm run dev
```

### Mobile

Para executar o app pass.in utilizamos o Expo, uma ferramenta incrível da comunidade React Native. Além do Expo, é necessário que você utilize algum emulador local ou um dispositivo físico pra visualizar a aplicação.

> Você pode instalar o Expo e os emuladores seguindo [esse guia](https://react-native.rocketseat.dev/).

Instalando suas dependências:

```sh
cd mobile

# Instalando as dependências
npm install
```

Após configurar o ambiente mobile, você pode abrir o emulador e executar o projeto de acordo com a plataforma que estiver utilizando:

```sh
npx expo start
```

## Links rápidos ↗

- [Layout | Figma 🎨](https://www.figma.com/design/BY2pWgrEV1K1PN8r7iLOfO/NLW-Journey-%E2%80%A2-Planejador-de-viagem-(Community))

**📱 Mobile:**

- [Expo](https://github.com/expo/expo)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Expo Google Fonts](https://github.com/expo/google-fonts)
- [AsyncStorage](https://docs.expo.dev/versions/latest/sdk/async-storage)
- [NativeWind](https://www.nativewind.dev/quick-starts/expo)
- [DayJs](https://day.js.org/docs/en/installation/typescript)
- [Zod](https://zod.dev/?id=installation)
- [React Native Calendars](https://wix.github.io/react-native-calendars/docs/Intro#getting-started-)

## License

MIT License © [Matheus Moreira](https://github.com/matheushdmoreira)

