const scanner = require('sonarqube-scanner');

scanner(
    {
      serverUrl : 'https://sonarqube.sistemaagil.net',
      token : "0e2a5157d2dc0455223a07afceaef105e75ae110",
      options: {
        'sonar.projectKey':'webyavirac-front',
        'sonar.projectName': 'webyavirac-front',
        'sonar.projectDescription': 'Description for "My App" project...',
        'sonar.sourceEncoding':'UTF-8',
        'sonar.sources': 'src',
        'sonar.javascript.lcov.reportPaths': 'coverage/jest/lcov.info'
      }
    },
    () => process.exit()
  )