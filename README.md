# devops-lab

Proiect **curat**, separat de MyRemediumFarm. Scop: invatare DevOps.

## Ce e aici
- API Express minimal (`GET /`, `GET /health`)
- Locuri goale: `docker/`, `terraform/`, `.github/workflows/`

## Plan de invatare
1. Linux (terminal) + ruleaza API local
2. Docker (+ Compose)
3. GitHub Actions (CI)
4. Terraform pe AWS (ECR → ECS Fargate)
5. (mai tarziu) Kubernetes

## Start local
```powershell
cd C:\Users\remed\Desktop\devops-lab
npm install
npm start
# browser: http://localhost:3000/health
npm test
```

Nu contine date sau secrete din productia Remedium.
