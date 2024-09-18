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

        // stage('Run tests') {
        //     steps {
        //         script {
        //                 sh '''
        //                     npm install jest --legacy-peer-deps
        //                     npm test
        //                 '''
        //         }
        //     }
        //     post {
        //         success {
        //             echo "Tests passed :)"
        //         }
        //         failure {
        //             echo "Tests failed :("
        //         }
        //     }
        // }

        // stage('Next.js build') {
        //     steps {
        //         script {
        //             dir("$WORKSPACE") {
        //                 sh 'npm install --frozen-lockfile'
        //                 sh 'npm run build'
        //                 sh 'ls -l .next && ls -l .next/standalone && ls -l .next/static'
        //             }
        //         }
        //     }
        // }

               
        stage('Docker build and push') {
            when {
                anyOf {
                    branch 'upJenkins'
                    branch 'develop'
                    branch 'master'
                }
            }
            steps {
                script {
                    dir("$WORKSPACE") {
                        docker.withRegistry('', 'dockerhub-tiptop') {
                            sh 'docker build --no-cache -t thetiptopymcm/thetiptop-frontend:st .'
                            sh 'docker push thetiptopymcm/thetiptop-frontend:st'
                            // def image = docker.build('thetiptopymcm/thetiptop-frontend:st', '--no-cache .')
                            // image.push()
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
               anyOf {
                    branch 'upJenkins'
                    branch 'develop'
                    branch 'master'
                }
            }
            steps {
                withCredentials([
                    file(credentialsId: 'ovh-kubeconfig', variable: 'KUBECONFIG'),
                    string(credentialsId: 'git_clone_token', variable: 'GITHUB_TOKEN')
                ]) {
                    script {
                        sh 'git clone https://$GITHUB_TOKEN@github.com/The-Tip-Top/workflow_furious_duck.git'

                        dir('workflow_furious_duck/frontend') {
                            // sh 'kubectl delete deployment web-deployment-staging -n staging'
                            // sh 'kubectl apply -f staging/ -n front-staging'
                            // sh 'kubectl apply -f pre-prod/ -n front-pre-prod'
                             sh '''
                                if kubectl get deployment frontend-staging-deployment -n front-staging > /dev/null 2>&1; then
                                    kubectl delete deployment frontend-staging-deployment -n front-staging
                                fi
                                '''
                             sh '''
                                if kubectl get deployment frontend-pre-prod-deployment -n front-pre-prod > /dev/null 2>&1; then
                                    kubectl delete deployment frontend-pre-prod-deployment -n front-pre-prod
                                fi
                                '''
                            sh 'kubectl apply -f staging/ -n front-staging'
                            sh 'kubectl apply -f pre-prod/ -n front-pre-prod'

                            sh 'kubectl -n front-staging  set image deployment/frontend-staging-deployment frontend=thetiptopymcm/thetiptop-frontend:test-env'
                            sh 'kubectl -n front-pre-prod set image deployment/frontend-pre-prod-deployment frontend=thetiptopymcm/thetiptop-frontend:test-env'
                           
                            sh 'kubectl  rollout restart deployment/frontend-staging-deployment -n front-staging'
                            sh 'kubectl  rollout restart deployment/frontend-pre-prod-deployment -n front-pre-prod'
                        }
                    }
                }
            }
        }

        // stage('Manual Deploy to Production') {
        //     when {  
        //         branch 'master' 
        //     }
        //     steps {
        //         withCredentials([file(credentialsId: 'ovh-kubeconfig')]) {
        //             script {
        //                 input message: "Deploy to Production?", ok: "Deploy"
                        
        //                 sh 'git clone https://github.com/The-Tip-Top/workflow_furious_duck.git'

        //                 dir('workflow_furious_duck/frontend') {
        //                     sh 'kubectl apply -f production/'
        //                 }
        //             }
        //         }
        //     }
        // }
    }
}