pipeline {
  agent any
   environment {
        // Define the credentials ID for GitHub
        GITHUB_CREDENTIALS = 'de4a2f73-cf01-4fa3-a3b9-2d8cff0572ec'
    }
  parameters{
    string(name:'SPEC' , defaultValue:"cypress/integration/**/*.{feature,features}" , description : "Enter the script")
    choice(name : 'BROWSER', choices : ['chrome','edge','firefox'], description : "Enter the browser where the script should run")
  }

  options{
    ansiColor('xterm')
    retry(1)
  }
  stages {
    stage('Build') {
      steps {
        echo 'Building the application'
      }
    }

    stage('Checkout') {
            steps {
                // Checkout the code from the GitHub repository
                 git([url: 'https://github.com/Shyamal2023/cypress-kd-demo.git', branch: 'main', credentialsId: 'de4a2f73-cf01-4fa3-a3b9-2d8cff0572ec'])
                  //git branch:'main', git credentialsId:'de4a2f73-cf01-4fa3-a3b9-2d8cff0572ec', url:'https://github.com/Shyamal2023/cypress-kd-demo.git'
            }
        }
        
    stage('Install Dependencies') {
            steps {
                // Install necessary dependencies (assuming npm)
                bat "npm install"
                bat "npm install --save-dev cypress-cucumber-preprocessor"
                }
        }

    stage('Run Test') {
      steps {
        bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
      }
      post {
                always {
                                        
                    // Publish HTML test report
                    publishHTML (target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'cypress/reports/html',
                        reportFiles: 'index.html',
                        reportName: 'Test Report'
                    ])

                     success {
            emailext (
                to: 'shyamal.nakade@gmail.com',
                subject: "Pipeline ${currentBuild.fullDisplayName} succeeded",
                body: "Congratulations! Your pipeline ${currentBuild.fullDisplayName} completed successfully.\n\nCheck it out at: ${env.BUILD_URL}",
            )
        }
        failure {
            emailext (
                to: 'shyamal.nakade@mail.com',
                subject: "Pipeline ${currentBuild.fullDisplayName} failed",
                body: "Oops! Your pipeline ${currentBuild.fullDisplayName} failed.\n\nCheck the console output at: ${env.BUILD_URL}/console",
            )
        }
                }
            }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying the application'
      }
    }

  }
}