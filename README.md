# WebyaviracFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

token sonar 
0e2a5157d2dc0455223a07afceaef105e75ae110


# codigo sonar 
pipeline {
    agent any
    environment {
        PROJEC_NAME = "webyavirac-front" 
        TAGS = 'sistemaagil'
        HOME = '.'
    }    
    stages {

        stage("Analisis Sonar"){
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
}hola