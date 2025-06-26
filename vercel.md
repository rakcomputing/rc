🚀 Deploy Next.js Project ទៅ Vercel ដោយផ្ទាល់ (Without GitHub)

## តម្លើង Vercel CLI

បើអ្នកមិនទាន់មាន Vercel CLI, ត្រូវតម្លើងសិន៖

npm install -g vercel

## Login ចូល Vercel

បើអ្នកមិនទាន់ login, ប្រើបញ្ជា៖

vercel login

➡️ បំពេញ Email របស់អ្នក & Verify

## Deploy Project

ចូលទៅក្នុង project folder, បន្ទាប់មក run៖

vercel

✅ Vercel នឹងសួរអំពី project name, framework, និង build settings ដូចជា:

✔ Would you like to link to an existing project? → n

✔ What’s your project’s name? → (ជ្រើសរើសឬវាយឈ្មោះ project)

✔ In which directory is your code located? → (បើ . គឺ root folder)

✔ Set up and deploy? → y (ចូល deploy)

## (Optional) Redeploy Project

ប្រសិនបើអ្នកចង់ re-deploy ឬ update project ច្រើនដង៖

vercel --prod
✅ នេះធ្វើឲ្យ Vercel update project ដែលមានស្រាប់ដោយមិនចាំបាច់ commit ទៅ GitHub! 🚀
