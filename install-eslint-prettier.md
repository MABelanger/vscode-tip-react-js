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
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': ['warn'],
  },
```
