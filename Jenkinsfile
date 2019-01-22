pipeline {
    agent any
    stages {
        stage('Compile') {
            steps {
                sh 'yarn add package.json'
                sh 'yarn build'
            }
        }
    
    }
}