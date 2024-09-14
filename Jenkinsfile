pipeline {
    agent any
    tools {
        nodejs 'node'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Verify Branch') {
            steps {
                echo "${env.GIT_BRANCH}"
            }
        }

        stage('Verify Node.js and npm') {
            steps {
                script {
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }

        stage('Run tests') {
            steps {
                script {
                        sh '''
                            npm install jest --legacy-peer-deps
                            npm test
                        '''
                }
            }
            post {
                success {
                    echo "Tests passed :)"
                }
                failure {
                    echo "Tests failed :("
                }
            }
        }
               
        stage('Docker build and push') {
            when {
                anyOf {
                    branch 'tests'
                    branch 'develop'
                    branch 'master'
                }
            }
            steps {
                script {
                    dir("$WORKSPACE") {
                        docker.withRegistry('', 'dockerhub-tiptop') {
                            sh 'docker build --no-cache -t thetiptopymcm/thetiptop-frontend .'
                            sh 'docker push thetiptopymcm/thetiptop-frontend:latest'
                        }
                    }
                }
            }
        }


        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Deploy to Staging and Preprod') {
            when {  
                branch 'tests'
                branch 'develop'
            }
            steps {
                withCredentials([
                    file(credentialsId: 'ovh-kubeconfig', variable: 'KUBECONFIG'),
                    string(credentialsId: 'tiptopbackendtoken', variable: 'GITHUB_TOKEN')
                ]) {
                    script {
                        sh 'git clone https://$GITHUB_TOKEN@github.com/The-Tip-Top/workflow_furious_duck.git'

                        dir('workflow_furious_duck/frontend') {
                            sh 'kubectl delete deployment web-deployment-staging -n staging'
                            sh 'kubectl apply -f staging/ -n front-staging'
                            sh 'kubectl apply -f pre-prod/ -n front-pre-prod'
                        }
                    }
                }
            }
        }

        stage('Manual Deploy to Production') {
            when {  
                branch 'master' 
            }
            steps {
                withCredentials([file(credentialsId: 'ovh-kubeconfig')]) {
                    script {
                        input message: "Deploy to Production?", ok: "Deploy"
                        
                        sh 'git clone https://github.com/The-Tip-Top/workflow_furious_duck.git'

                        dir('workflow_furious_duck/frontend') {
                            sh 'kubectl apply -f production/'
                        }
                    }
                }
            }
        }
    }
}