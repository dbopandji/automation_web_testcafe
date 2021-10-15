pipeline {
    agent {
        label 'jenkins-slave1'
    }
    stages{
        stage('Install Dependencies'){
            steps{
                sh "npm install"
            }
        }

        stage('Running Test'){
            steps{
                sh "npm run test-chrome"    
            }

            post{
                always{
                    publishHTML target : [
                        allowMissing: false,
                        alwaysLinkToLastBuild: false,
                        keepAll: true,
                        reportDir: 'reports',
                        reportFiles: 'ui_automation_reporter.html',
                        reportName: 'Testcafe Automation Report',
                        reportTitles: 'Testcafe Automation REPORT'
                    ] 
                } 
            }
        }
    }
    post{
        always{
            echo "Finish"
        }
    }
}