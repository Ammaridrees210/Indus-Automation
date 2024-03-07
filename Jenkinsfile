pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Ammaridrees210/Indus-Automation.git'
            }
        }
        stage('Run CYpress test cases') {
            when{
                branch 'main'
            }
            steps {
                sh '''
                npm install
                npx cypress run
                '''
            }
        }
    }
}