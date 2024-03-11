pipeline {
    agent {
        node {
            label 'node'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from version control
                git 'https://github.com/Ammaridrees210/Indus-Automation.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js using NVM (Node Version Manager)
                sh '''
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
                    source ~/.bashrc
                    nvm install v20.11.0
                '''
                // Install project dependencies using npm
                sh 'npm install'
            }
        }
        // stage('Build') {
        //     steps {
        //         // Your Node.js build steps here (if applicable)
        //     }
        // }
        stage('Test') {
            steps {
                // Run tests using npm
                sh 'npm run cypress:run'
            }
        }
        // Add more stages as needed
    }
    // Post-build actions, etc.
    // post {
    //     always {
    //         // Archive artifacts, send notifications, etc.
    //     }
    // }
}

