# untitled


## 설치 

`npm i`

### 개발

`npm run start`

### 빌드

`npm run build`

## vscode 설정

- vscode eslint extension 설치하고
- `settings.json`열고 다음 추가

```json
{
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "javascript.format.enable": false,
    "typescript.format.enable": false
}
```
