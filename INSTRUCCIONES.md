# Instrucciones para desplegar a GitHub Pages

## El problema
La página en blanco ocurre porque el build en GitHub no tiene la ruta correcta `/Infranova/`.

## Solución

1. **Haz push de tus cambios a GitHub:**
```bash
git add .
git commit -m "Add Infranova base path"
git push origin main
```

2. **Esto disparará GitHub Actions** que ejecutará:
   - npm install
   - npm run build (con base: '/Infranova/')
   - Deploy a GitHub Pages

3. **Espera 2-3 minutos** y verifica en https://flxri72.github.io/Infranova/

## Verificación
Si quieres verificar que el workflow está funcionando:
- Ve a tu repositorio en GitHub
- Haz clic en la pestaña "Actions"
- Deberías ver "Deploy to GitHub Pages" ejecutándose o completado
