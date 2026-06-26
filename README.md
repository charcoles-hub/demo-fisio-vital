# 🏭 Landing Factory

Plantilla reutilizable para vender landing pages a clientes. **Cada cliente = editar 1 archivo + ajustar colores + deploy.** El 90% lo hace Claude Code desde el brief.

## Stack
Astro + Tailwind v4 · salida estática · deploy gratis (Cloudflare Pages / Vercel / Netlify).

## Flujo por cliente (objetivo: < 1h de tu tiempo)

1. **Brief.** Pásale `BRIEF.md` al cliente o úsalo de guion en una llamada de 10 min.
2. **Rellenar datos.** Dile a Claude Code: *"rellena `src/config/site.ts` con este brief: …"*. Todo el contenido (textos, servicios, precios, contacto) vive ahí.
3. **Colores y fuente.** Edita los tokens en `src/styles/global.css` (`--color-brand-*`, `--font-display`). Pon el color del logo del cliente.
4. **Imágenes (opcional).** Mete fotos del cliente en `/public` (ej. `hero.jpg`). Si no tiene, se generan con ComfyUI o se queda el degradado.
5. **Formulario.** Crea una access key gratis en [web3forms.com](https://web3forms.com) y ponla en `site.ts` → `formAccessKey`. Los mensajes llegan al email del cliente.
6. **Previsualizar.** `npm run dev` → http://localhost:4321
7. **Deploy.** `npm run build` y sube `dist/` a Cloudflare Pages (gratis). O conecta el repo a Vercel/Netlify para deploy automático.

## Comandos
```sh
npm run dev      # desarrollo en localhost:4321
npm run build    # genera dist/ estático
npm run preview  # previsualiza el build
```

## Estructura
```
src/
  config/site.ts        ← ÚNICO archivo a editar por cliente (contenido)
  styles/global.css     ← colores + fuente (tema por cliente)
  layouts/Layout.astro  ← head, fuentes, animación scroll
  components/
    Nav · Hero · Features · Pricing · Contact · Footer
  pages/index.astro     ← compone las secciones
BRIEF.md                ← formulario para el cliente
```

## Para un cliente nuevo
Copia toda la carpeta con otro nombre (`cp -r landing-factory cliente-x`) o haz un fork. Cada landing es independiente.

## Add-ons que puedes vender encima
Logo/branding (ComfyUI) · Miniaturas · Más secciones (galería, testimonios, FAQ) · Gestión de dominio · **Mantenimiento mensual** (recurrente = tu camino a "autónomo").
