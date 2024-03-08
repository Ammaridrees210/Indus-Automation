pipeline {
    agent any

    tools {
        git 'Git'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from the repository
                git 'https://github.com/Ammaridrees210/Indus-Automation.git'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                // Install dependencies and run Cypress tests
                script {
                    // Using script block to ensure npm and Cypress commands are executed in the same shell
                    // Install Node.js dependencies
                    sh 'npm install'
                    
                    // Run Cypress tests
                    sh 'npx cypress run'
                }
            }
        }
    }
}
