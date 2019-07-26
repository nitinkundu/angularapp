pipeline 
{
    agent any
    
    
    tools {nodejs "nodejs"}
    
    
    
    stages {
       
        stage('installing dependencies') {
            steps {
               sh 'npm install'
            }
        }
          /*stage('test') {
              steps {
                 sh 'npm run test'
              }
         }*/
       /* stage('SonarQube') 
       {
           
            environment {
                scannerHome=tool 'sonar scanner'
            }
             //tools {scannerHome "SonarScanner"}
        steps{
             withSonarQubeEnv(credentialsId: 'sonar_token_ankush', installationName: 'sonar_server') {
                  sh '${scannerHome}/bin/sonar-scanner -Dproject.settings=./sonar-project.properties'
              }
              //sh 'npm run sonar'
           
            //timeout(time: 1, unit: 'HOURS') {
                //waitForQualityGate abortPipeline: true
            //}
           }
            
        }*/          
      
       
        stage('build') {
            steps {
                sh 'npm run build'
                
            }
        }
        stage ('zipping'){
            steps {
                 
                sh 'cd dist/angularclient; zip -r ../../abcApp.zip . ;'
            }
        }
        stage ('Nexus'){
            steps{
                sh 'ls'
                withCredentials([usernamePassword(credentialsId: 'sudipa_nexus', passwordVariable: 'pass', usernameVariable: 'usr')]) {
                 sh label: '', script: 'curl -u ${usr}:${pass} --upload-file abcApp.zip http://ec2-3-17-164-37.us-east-2.compute.amazonaws.com:8081/nexus/content/repositories/devopstraining/Frontend_Angular/abcApp.zip'
                }
                
            }
        }
        stage ('Deploy') {
            steps {
              withCredentials([file(credentialsId: 'angular-react-deployment-server', variable: 'deployment_server')]) {
                   sh 'scp -v -i ${deployment_server} abcApp.zip ubuntu@18.224.182.74:/home/ubuntu'
                   sh 'ssh -v -i ${deployment_server} ubuntu@18.224.182.74 "cd /home/ubuntu; unzip -o abcApp.zip -d angular__App;pm2 restart "angularapp""'
                  
               }
            }
        }
        
    }
    post { 
         success { 
            
            slackSend (color: '#00BB00', message: " SUCCESS: Job '${JOB_NAME} [${BUILD_NUMBER}]' (${BUILD_URL})")
         }
         failure {
            
            slackSend (color: '#BB0000', message: " FAILURE: Job '${JOB_NAME} [${BUILD_NUMBER}]' (${BUILD_URL})")
         }
    }

}
