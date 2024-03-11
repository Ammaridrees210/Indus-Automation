pipeline {
    agent {
            node {
        label 'node'
        }
    }
    
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
                    def server = 'npm run start'
                    echo "Starting local server: $server"
                    def proc = bat(script: "start /B $server", returnStatus: true)
                    if (proc != 0) {
                        error "Failed to start local server"
                        }
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

