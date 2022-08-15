pipeline {
    agent any
    environment {
        PROJEC_NAME = "webyavirac-front" 
        TAGS = 'sistemaagil'
        HOME = '.'
    }    
    stages {

        stage("Analisis Sonar"){
            //se descarga un agente docker en un servidor de integracion y descargate una imagen en particular
            agent {
                docker { //agente docker 
                    label 'integracion'
                    image 'node:16'
                }
            }
            steps{ 
                sh "npm install"
                sh "npm run sonar"  
            }
        }

        stage("Respuesta Sonar"){
            agent {
                docker {
                    label 'integracion'
                    image 'jq:latest'//imagen para que pueda analizar json herramienta
                    args '--network=service_net' // añadis a red 
                }
            }
            environment {
                SONAR_CREDENTIALS = credentials('sonar-admin')//jenkis busca la contraseña de sonar admin la guarda en una variable y despues la ocupa 
            }            
            steps{ 
                script {
                    estatus = sh(//ejecuta archivo sh con un resultado
                        script: 'curl -u $SONAR_CREDENTIALS_USR:$SONAR_CREDENTIALS_PSW -s http://sonarqube:9000/api/qualitygates/project_status?projectKey=${PROJEC_NAME} | jq .projectStatus.status', //usando las credenciales conectarse a sonarqube y examine el proyecto y lo pase a una utilidad para analizar json y solo extraiga la utilidad status
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