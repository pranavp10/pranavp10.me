const extension = [
  {
    name: 'Auto Import',
    description:
      'Automatically finds, parses and provides code actions and code completion for all available imports. Works with Typescript and TSX.',
    imgUrl: '/extension/AutoImport.png',
    githubLink: 'https://github.com/soates/Auto-Import',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=steoates.autoimport',
    background: '#086baa',
  },
  {
    name: 'Auto Rename Tag',
    description: 'Auto rename paired HTML/XML tag',
    imgUrl: '/extension/autoRename.png',
    githubLink: 'https://github.com/formulahendry/vscode-auto-rename-tag',
    marketplace:
      'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag',
    background: '#445469',
  },
  {
    name: 'Bracket Pair Colorizer',
    description: 'A customizable extension for colorizing matching brackets Installation',
    imgUrl: '/extension/bracket.png',
    githubLink: 'https://github.com/CoenraadS/BracketPair',
    marketplace:
      'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer',
    background: '#333333',
  },
  {
    name: 'Code Spell Checker',
    description: 'A basic spell checker that works well with camelCase code.',
    imgUrl: '/extension/spellChecker.png',
    githubLink: 'https://github.com/streetsidesoftware/vscode-spell-checker',
    marketplace:
      'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker',
    background: '#69ab3c',
  },
  {
    name: 'Color Highlight',
    description: 'Highlight web colors in your editor',
    imgUrl: '/extension/colorHighlight.png',
    githubLink: 'https://github.com/egonyans/vscode-ext-color-highlight',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight',
    background: '#1E1E1E',
  },
  {
    name: 'Debugger for Chrome',
    description:
      'Debug your JavaScript code in the Chrome browser, or any other target that supports the Chrome Debugger protocol.',
    imgUrl: '/extension/chrome.png',
    githubLink: 'https://github.com/Microsoft/vscode-chrome-debug',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome',
    background: '#de5246',
  },
  {
    name: 'DotENV',
    description: 'Syntax highlighting for .env files',
    imgUrl: '/extension/dotenv.png',
    githubLink: 'https://github.com/mikestead/vscode-dotenv',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv',
    background: '#ecd53f',
  },
  {
    name: 'EditorConfig',
    description: 'Override user/workspace settings with settings found in .editorconfig files.',
    imgUrl: '/extension/editConfig.png',
    githubLink: 'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig',
    website: 'https://editorconfig.org/',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig',
    background: '#e0f0f1',
  },
  {
    name: 'Code snippets',
    description: 'ES7 React/Redux/GraphQL/React-Native code snippets',
    imgUrl: '/extension/CodeSnippets.png',
    githubLink: 'https://github.com/dsznajder/vscode-es7-javascript-react-snippets',
    marketplace:
      'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets',
    background: '#61d9fb',
  },
  {
    name: 'ESLint',
    description: 'The Rules for the Javascript Programers',
    imgUrl: '/extension/eslint.png',
    githubLink: 'https://github.com/Microsoft/vscode-eslint',
    website: 'https://eslint.org/',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
    background: '#f26623',
  },
  {
    name: 'Git Graph',
    description: 'View a Git Graph of your repository, and perform Git actions from the graph.',
    imgUrl: '/extension/gitGraph.png',
    githubLink: 'https://github.com/mhutchie/vscode-git-graph',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph',
    background: '#818181',
  },
  {
    name: 'Git History',
    description: 'View git log, file history, compare branches or commits',
    imgUrl: '/extension/gitHistory.png',
    githubLink: 'https://github.com/DonJayamanne/gitHistoryVSCode',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory',
    background: '#0874b5',
  },
  {
    name: 'gitignore',
    description:
      'Language support for .gitignore files. Lets you pull .gitignore files from the repository.',
    imgUrl: '/extension/gitignore.png',
    githubLink: 'https://github.com/CodeZombieCH/vscode-gitignore',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore',
    background: '#f05033',
  },
  {
    name: 'GitLens',
    description: 'Get all the commits for each line',
    imgUrl: '/extension/gitLens.png',
    githubLink: 'https://github.com/eamodio/vscode-gitlens',
    website: 'http://gitlens.amod.io/',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
    background: '#8647ae',
  },
  {
    name: 'HTML CSS Support',
    description: 'Auto complete the css class for html',
    imgUrl: '/extension/htmlcss.png',
    githubLink: 'https://github.com/ecmel/vscode-html-css',

    marketplace: 'https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css',
    background: '#000000',
  },
  {
    name: 'HTML Snippets',
    description: 'Full HTML tags including HTML5 Snippets',
    imgUrl: '/extension/html.png',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets',
    background: '#e44d26',
  },
  {
    name: 'Import Cost',
    description: 'The size of the imported package.',
    imgUrl: '/extension/importCost.png',
    githubLink: 'https://github.com/wix/import-cost',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost',
    background: '#2471bd',
  },
  {
    name: 'JS (ES6) code snippets',
    description: 'Code snippets for JavaScript in ES6 syntax',
    imgUrl: '/extension/es6.png',
    githubLink: 'https://github.com/xabikos/vscode-javascript',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets',
    background: '#d2b318',
  },
  {
    name: 'Kite',
    description:
      'AI-powered programming assistant that helps you write Python & JavaScript code inside Visual Studio Code.',
    imgUrl: '/extension/kite.png',
    githubLink: 'https://github.com/kiteco/vscode-plugin',
    website: 'https://www.kite.com/',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=kiteco.kite',
    background: '#0083d6',
  },
  {
    name: 'npm',
    description:
      'npm scripts defined in the package.json file and validating the installed modules against the dependencies defined in the package.json.',
    imgUrl: '/extension/npm.png',
    githubLink: 'https://github.com/Microsoft/vscode-npm-scripts',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script',
    background: '#c93331',
  },
  {
    name: 'npm Intellisense',
    description: 'autocompletes npm modules in import statements.',
    imgUrl: '/extension/npm.png',
    githubLink: 'https://github.com/ChristianKohler/NpmIntellisense',
    marketplace:
      'https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense',
    background: '#c93331',
  },
  {
    name: 'Prettier-Code formatter',
    description: 'You press save and code is formatted',
    imgUrl: '/extension/prettier.png',
    githubLink: 'https://github.com/prettier/prettier-vscode',
    website: 'https://prettier.io/',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
    background: '#ffe04b',
  },
  {
    name: 'Path Intellisense',
    description: 'Auto Completes filenames.',
    imgUrl: '/extension/path.png',
    githubLink: 'https://github.com/ChristianKohler/PathIntellisense',
    marketplace:
      'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
    background: '#30384f',
  },
  {
    name: 'Peacock',
    description:
      'Subtly change the workspace color of your workspace. Ideal when you have multiple VS Code instances and you want to quickly identify which is which.',
    imgUrl: '/extension/peacock.png',
    githubLink: 'https://github.com/johnpapa/vscode-peacock',
    website: 'https://papapeacockstorage.z13.web.core.windows.net/',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock',
    background: '#0083d6',
  },
  {
    name: 'Settings Sync',
    description:
      'Synchronize Settings, Snippets, Themes, File Icons, Launch, Keybindings, Workspaces and Extensions Across Multiple Machines Using GitHub Gist.',
    imgUrl: '/extension/sync.png',
    githubLink: 'https://github.com/shanalikhan/code-settings-sync',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
    background: '#353535',
  },
  {
    name: 'TODO Highlight',
    description: 'highlight TODOs, FIXMEs, and any keywords, annotations...',
    imgUrl: '/extension/todo.png',
    githubLink: 'https://github.com/wayou/vscode-todo-highlight',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight',
    background: '#eb5151',
  },
  {
    name: 'vscode-icons',
    description: 'Bring icons to your Visual Studio Code',
    imgUrl: '/extension/icons.png',
    githubLink: 'https://github.com/vscode-/extension/vscode-icons',
    marketplace:
      'https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons',
    background: '#0083d6',
  },
  {
    name: 'Dracula',
    description: 'Theme',
    imgUrl: '/extension/dracula.png',
    githubLink: 'https://github.com/dracula/visual-studio-code',
    website: 'https://draculatheme.com/visual-studio-code',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula',
    background: '#3c4557',
  },
  {
    name: 'Cobalt2',
    description: 'Theme',
    imgUrl: '/extension/cobalt2.png',
    githubLink: 'https://github.com/wesbos/cobalt2-vscode',
    marketplace: 'https://marketplace.visualstudio.com/items?itemName=wesbos.theme-cobalt2',
    background: '#122738',
  },
];

const config = `{
  "workbench.colorTheme": "Dracula",
  "editor.renderLineHighlight": "line",
  "editor.renderWhitespace": "all",
  "window.zoomLevel": 2,
  "editor.renderIndentGuides": false,
  "workbench.iconTheme": "vscode-icons",
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
  "editor.fontFamily": "Operator Mono,'Fira Code', Menlo, Monaco, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.fontWeight": "400",
  "editor.lineHeight": 25,
  "prettier.eslintIntegration": true,
  "editor.letterSpacing": 0.5,
  "editor.fontSize": 17,
  "editor.cursorBlinking": "solid",
  "editor.cursorSmoothCaretAnimation": true,
  "workbench.editor.enablePreviewFromQuickOpen": false,
  "files.insertFinalNewline": true,
  "files.trimTrailingWhitespace": true,
  "telemetry.enableCrashReporter": false,
  "workbench.settings.enableNaturalLanguageSearch": false,
  "editor.formatOnPaste": true,
  "telemetry.enableTelemetry": false,
  "workbench.editor.highlightModifiedTabs": true,
  "editor.detectIndentation": true,
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "editor.cursorStyle": "line",
  "editor.cursorWidth": 5,
  "workbench.colorCustomizations": {
    "editorCursor.foreground": "#ffff00",
    "terminalCursor.foreground": "#ffff00",
    "editor.lineHighlightBackground": "#c8bdbd2d"
  },

  "importCost.showCalculatingDecoration": true,
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "workbench.startupEditor": "newUntitledFile",
  "launch": {},
  "javascript.updateImportsOnFileMove.enabled": "always",
  "cSpell.userWords": [
    "Checkmark",
    "Formik",
    "Onboarded",
    "deduping",
    "favicons",
    "globby",
    "prettierrc"
  ],
  "kite.showWelcomeNotificationOnStartup": false,
  "files.associations": {
    "*.md": "mdx"
  },
  "gitlens.gitCommands.closeOnFocusOut": true,
  "editor.renameOnType": true,
  "editor.largeFileOptimizations": false,
  "sync.autoDownload": false,
  "auto-rename-tag.activationOnLanguage": [
    "*"
  ],
  "sync.gist": "0f8ef2730499efee297b796b310e9b44"
}
`;
export { extension, config };
