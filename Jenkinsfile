// pipeline {
//     agent any

//     tools {
//         git 'Git'
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 // Checkout your source code from the repository
//                 git 'https://github.com/Ammaridrees210/Indus-Automation.git'
//             }
//         }
//         stage('Run Cypress Tests') {
//             steps {
//                 // Install dependencies and run Cypress tests
//                 script {
//                     // Using script block to ensure npm and Cypress commands are executed in the same shell
//                     // Install Node.js dependencies
//                     sh 'npm install'
                    
//                     // Run Cypress tests
//                     sh 'cypress run'
//                 }
//             }
//         }
//     }
// }

pipeline {
    agent any
    
    stages {
        stage('build') {
            steps {
                echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh 'npm install'
                sh 'npm ci'
                sh 'npm run cy:run'
            }
        }
        
        stage('start local server') {
            steps {
                script {
                    sh 'nohup npm run start &'
                    sh 'sleep 30'
                }
            }
        }
        
        stage('cypress parallel tests') {
            environment {
                // Set Cypress environment variables
                CYPRESS_trashAssetsBeforeRuns = 'false'
            }
            
            parallel {
                // Run tests in parallel
                stage('cypress') {
                    steps {
                        echo "Running build ${env.BUILD_ID}"
                        sh "npm run cy:run"
                        }
                    }
                }
            }
        }
    }
    
    post {
        always {
            echo 'Stopping local server'
            sh 'pkill -f http-server'
        }
    }

