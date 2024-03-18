import scanner from 'sonarqube-scanner';
scanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.projectKey': 'trip-app',
      'sonar.projectName': 'Trip App',
      'sonar.projectVersion': '1.0',
      'sonar.sources': 'src',
      'sonar.exclusions': '**/node_modules/**/*, **/*.spec.ts, **/*.spec.tsx',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.ts.file.suffixes': '.ts,.tsx',
      'sonar.sourceEncoding': 'UTF-8',
  
      
    },
  },
  () => {
    console.log('SonarQube analysis completed.');
  }
);
