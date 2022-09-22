pipeline{
    agent any //en que agente se va a correr el proyecto (maquina de windows)

    stages{
        stage('Ejecutar JenkinsFile CI'){ 
            steps{
                echo "[EXEC]Version node" // imprima por consola
                bat "node -v"
               // sh "node -v" ---- cuando es linux
            }
        }
        stage('Instalacion'){ //
            steps{
                echo "[EXEC] Instalar newman" //imprime
                bat "npm install newman" // ejecuta
               // sh "npm install newma"  ----- valido para linux y se quita el bat
                echo "[EXEC] Instalar reporter htmlextra"
                bat "npm install newman-reporter-htmlextra"
            }
        }
        stage('Prueba Collections'){
            steps{
                echo "[EXEC] EJECUNDO POSTMAN"
                bat "node newman run /Collections/tutorial.postman_collection.json" 
                     // sh "node newman run /Collections/tutorial.postman_collection.json"  ----- para linux
            }
        }
    }
}
