pipeline {
    agent any
    environment {
<<<<<<< HEAD:webyavirac-front/Jenkinsfile
        PROJEC_NAME = "webyavirac"
=======
        PROJEC_NAME = "webyavirac-front" 
>>>>>>> NicoleTitumaita:Jenkinsfile
        TAGS = 'sistemaagil'
        HOME = '.'
    }    
    stages {

        stage("Analisis Sonar"){
            agent {
<<<<<<< HEAD:webyavirac-front/Jenkinsfile
                docker {
=======
                docker { //agente docker 
>>>>>>> NicoleTitumaita:Jenkinsfile
                    label 'integracion'
                    image 'node:16'
                }
            }
            steps{ 
                sh "npm install"
                sh "npm run sonar"  
            }
        }

<<<<<<< HEAD:webyavirac-front/Jenkinsfile
        // stage("Respuesta Sonar"){
        //     agent {
        //         docker {
        //             label 'integracion'
        //             image 'jq:latest'
        //             args '--network=service_net' 
        //         }
        //     }
        //     environment {
        //         SONAR_CREDENTIALS = credentials('sonar-admin')
        //     }            
        //     steps{ 
        //         script {
        //             estatus = sh(
        //                 script: 'curl -u $SONAR_CREDENTIALS_USR:$SONAR_CREDENTIALS_PSW -s http://sonarqube:9000/api/qualitygates/project_status?projectKey=${PROJEC_NAME} | jq .projectStatus.status',
        //                 returnStdout: true
        //             ).trim().toUpperCase().replaceAll("[\n\r]", "")
        //             if (estatus == '"ERROR"'){
        //                 throw new Exception("No supera los estandares de calidad..")

        //             }
        //             if (estatus.isEmpty()){
        //                 throw new Exception("Not OK status isEmpty, please check sonarqube report")
        //             }
        //         }
        //     }
        // }
=======
        stage("Respuesta Sonar"){
            agent {
                docker {
                    label 'integracion'
                    image 'jq:latest'
                    args '--network=service_net' 
                }
            }
            environment {
                SONAR_CREDENTIALS = credentials('sonar-admin')
            }            
            steps{ 
                script {
                    estatus = sh(
                        script: 'curl -u $SONAR_CREDENTIALS_USR:$SONAR_CREDENTIALS_PSW -s http://sonarqube:9000/api/qualitygates/project_status?projectKey=${PROJEC_NAME} | jq .projectStatus.status',
                        returnStdout: true
                    ).trim().toUpperCase().replaceAll("[\n\r]", "")
                    if (estatus == '"ERROR"'){
                        throw new Exception("No supera los estandares de calidad..")

                    }
                    if (estatus.isEmpty()){
                        throw new Exception("Not OK status isEmpty, please check sonarqube report")
                    }
                }
            }
        }
>>>>>>> NicoleTitumaita:Jenkinsfile

        stage("Despliegue"){
            agent {
                label 'integracion'
            }
            steps{
                sh 'docker build -f devops/Dockerfile -t webyavirac:latest .'
                sh 'docker stack rm webyavirac-na'
                sh 'docker stack deploy -c devops/stack.yml webyavirac-na'
            }    
        }
       
    }
}