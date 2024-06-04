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
  stages {
    stage('Build') {
      steps {
        echo 'Building the application'
      }
    }

    stage('Checkout') {
            steps {
                // Checkout the code from the GitHub repository
                  git branch: 'main', git credentialsId: GITHUB_CREDENTIALS, url: 'https://github.com/Shyamal2023/cypress-kd-demo.git'
            }
        }
        
    stage('Install Dependencies') {
            steps {
                // Install necessary dependencies (assuming npm)
                bat "npm install"
                }
        }

    stage('Run Test') {
      steps {
        bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
      }
      post {
                always {
                                        
                    // Publish HTML test report
                    publishHTML(target: [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'cypress/reports/html',
                        reportFiles: 'index.html',
                        reportName: 'Cypress Cucumber Test Report'
                    ])
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