# Digital Leveling - Website Profesional

Sitio web profesional para Digital Leveling, especializada en desarrollo web y consultoría digital.

## 🚀 Características

- **Framework**: Next.js 14 con App Router
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: React Icons
- **Tipografía**: Montserrat (Google Fonts)
- **Formularios**: Integración con Formspree
- **Hosting**: AWS Amplify / S3 + CloudFront

## 📋 Requisitos Previos

- Node.js 18.18 o superior
- npm o yarn
- Cuenta de AWS
- Dominio digitalleveling.com configurado en AWS

## 🛠️ Instalación Paso a Paso

### 1. Instalación de Node.js en Windows

1. Descarga Node.js desde [nodejs.org](https://nodejs.org/)
2. Ejecuta el instalador y sigue las instrucciones
3. Verifica la instalación:
   \`\`\`bash
   node --version
   npm --version
   \`\`\`

### 2. Clonar o Crear el Proyecto

#### Opción A: Crear desde cero
\`\`\`bash
npx create-next-app@latest digital-leveling-website --typescript --tailwind --eslint --app
cd digital-leveling-website
\`\`\`

#### Opción B: Clonar repositorio
\`\`\`bash
git clone https://github.com/tu-usuario/digital-leveling-website.git
cd digital-leveling-website
npm install
\`\`\`

### 3. Instalar Dependencias Adicionales

\`\`\`bash
npm install framer-motion react-icons
npm install -D @types/node @types/react @types/react-dom
\`\`\`

### 4. Configurar Variables de Entorno

Crea un archivo \`.env.local\` en la raíz del proyecto:

\`\`\`env
NEXT_PUBLIC_FORMSPREE_ID=tu_formspree_id
NEXT_PUBLIC_SITE_URL=https://digitalleveling.com
\`\`\`

### 5. Ejecutar en Desarrollo

\`\`\`bash
npm run dev
\`\`\`

Visita [http://localhost:3000](http://localhost:3000)

## 🌐 Configuración de AWS

### 1. Instalar AWS CLI

1. Descarga AWS CLI desde [aws.amazon.com/cli](https://aws.amazon.com/cli/)
2. Instala y configura:
   \`\`\`bash
   aws configure
   \`\`\`
   - AWS Access Key ID: [Tu Access Key]
   - AWS Secret Access Key: [Tu Secret Key]
   - Default region: us-east-1
   - Default output format: json

### 2. Opción A: Despliegue con AWS Amplify

#### Configuración Inicial
\`\`\`bash
npm install -g @aws-amplify/cli
amplify configure
amplify init
\`\`\`

#### Configurar Hosting
\`\`\`bash
amplify add hosting
# Selecciona: Amazon CloudFront and S3
amplify publish
\`\`\`

#### Configurar Dominio Personalizado
1. Ve a la consola de AWS Amplify
2. Selecciona tu aplicación
3. Ve a "Domain management"
4. Agrega digitalleveling.com
5. Sigue las instrucciones para configurar DNS

### 3. Opción B: Despliegue Manual con S3 + CloudFront

#### Crear Bucket S3
\`\`\`bash
aws s3 mb s3://digitalleveling-website --region us-east-1
aws s3 website s3://digitalleveling-website --index-document index.html
\`\`\`

#### Build y Deploy
\`\`\`bash
npm run build
npm run export
aws s3 sync out/ s3://digitalleveling-website --delete
\`\`\`

#### Configurar CloudFront
1. Ve a la consola de CloudFront
2. Crea una nueva distribución
3. Configura el origen como tu bucket S3
4. Configura el dominio personalizado

### 4. Configurar Route 53 (si no está configurado)

1. Ve a la consola de Route 53
2. Crea una zona hospedada para digitalleveling.com
3. Configura los registros A/AAAA para apuntar a CloudFront

## 📧 Configuración del Formulario de Contacto

### 1. Configurar Formspree

1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta gratuita
3. Crea un nuevo formulario
4. Copia el ID del formulario
5. Actualiza \`.env.local\` con tu FORMSPREE_ID

### 2. Configurar Email de Destino

En el archivo \`components/sections/Contact.tsx\`, actualiza la URL de Formspree:

\`\`\`javascript
const response = await fetch('https://formspree.io/f/TU_FORMSPREE_ID', {
  // ...
})
\`\`\`

## 🔄 Despliegue Continuo con GitHub Actions

Crea \`.github/workflows/deploy.yml\`:

\`\`\`yaml
name: Deploy to AWS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to S3
      env:
        AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
      run: |
        aws s3 sync out/ s3://digitalleveling-website --delete
        aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
digital-leveling-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       └── Contact.tsx
├── public/
│   └── assets/
├── .env.local
├── next.config.js
├── tailwind.config.js
└── package.json
\`\`\`

## 🎨 Personalización

### Colores
- Amarillo principal: \`#FEC73F\`
- Fondo negro: \`#000000\`
- Grises oscuros: \`#1a1a1a\`, \`#2a2a2a\`

### Tipografía
- Fuente principal: Montserrat
- Configurada en \`app/layout.tsx\`

### Animaciones
- Implementadas con Framer Motion
- Configuradas en cada componente de sección

## 📱 Responsive Design

El sitio está optimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Comandos Útiles

\`\`\`bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint

# Deploy a AWS (con Amplify)
amplify publish

# Deploy manual a S3
npm run build && aws s3 sync out/ s3://digitalleveling-website --delete
\`\`\`

## 📞 Soporte

Para soporte técnico o consultas:
- Email: leveling.digi@gmail.com
- WhatsApp: ++34 614 47 31 97

## 📄 Licencia

© 2024 Digital Leveling. Todos los derechos reservados.
\`\`\`

## 🎯 Próximos Pasos

1. **Instala el proyecto** usando las instrucciones del README
2. **Configura Formspree** para el formulario de contacto
3. **Sube tus assets** (logo, imágenes) a la carpeta `/public/assets`
4. **Personaliza el contenido** en cada sección según tus servicios reales
5. **Configura AWS** siguiendo la guía paso a paso
6. **Despliega** usando Amplify o S3 + CloudFront
