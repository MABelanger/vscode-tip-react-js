# Install prettier

CTRL + P

```
ext install esbenp.prettier-vscode
```

# Install eslint

CTRL + P

```
ext install dbaeumer.vscode-eslint
```

# Edit user preference

CTRL + P

```
> Preferences: Open Settings (JSON)
```

Add the lines

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
}
```

# config the project

Example with react

```
➜  vscode-tip-react-js git:(master) ✗ npx eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-airbnb@latest
The config that you've selected requires the following dependencies:

```

# add eslint rules

```js
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': ['warn'],
    'max-len': [1, 80, 2],
    'no-shadow': 'off',
    'react/destructuring-assignment': 'off',
    emitWarning: 0,
  },
```

```js
  {
    'max-len': ['error', { code: 80 }]
  }
```

# disable vscodevim conflict CTRL + C,D

```js
  "vim.useCtrlKeys": false,
  "vim.handleKeys": {
    "<C-c>": false,
    "<C-d>": false,
    "<A-S-Up>": false,
    "<A-S-Down>": false
  }
```

# install react plugin

CTRL + P

```
ext install dsznajder.es7-react-js-snippets
```

# function and import

```
imd→	import { destructuredModule } from 'module'
ren→	render() { return( ) }
clo→	console.log(`object`, object)
rfc→	react function component proptype
rfcp→	react function component proptype
```

# Keyboard shortcut

```
CTRL + `
Toogle terminal

CTRL + TAB
Switch between file tab

CTRL +_P
Find file in the project

CTRL + B
Toogle Explorer
```

# dev env

.env.development
ESLINT_NO_DEV_ERRORS=true

# prod env

.env.production
DISABLE_ESLINT_PLUGIN=true
