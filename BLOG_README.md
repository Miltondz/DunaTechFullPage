# 📝 Guía para Agregar Nuevos Artículos al Blog

## 📂 Estructura del Blog

```
/data
  └── blogArticles.ts       # Base de datos de artículos
/components
  ├── Blog.tsx             # Listado de artículos
  └── BlogArticle.tsx      # Visualización individual
/pages
  └── BlogPage.tsx         # Página principal del blog
/public/images/
  ├── web_taller01.jpeg    # Imagen AutoTaller Pro
  ├── urlz01.jpg           # Imagen urlz.lat
  └── [tus-imagenes]       # Agrega aquí las imágenes de nuevos artículos
```

---

## ✅ Pasos para Agregar un Nuevo Artículo

### 1️⃣ Preparar la Imagen del Artículo

1. **Ubicación:** Guarda tu imagen en `/public/images/`
2. **Nombre:** Usa un nombre descriptivo en minúsculas con guiones
   - ✅ Correcto: `caso-exito-tienda-online.jpg`
   - ❌ Incorrecto: `Imagen 1.png`

3. **Especificaciones recomendadas:**
   - **Tamaño:** 1200 x 630 px (ratio 1.91:1)
   - **Formato:** JPG o PNG
   - **Peso:** < 500 KB (optimizada para web)
   - **Contenido:** Relevante al tema del artículo

---

### 2️⃣ Editar blogArticles.ts

Abre el archivo: `/data/blogArticles.ts`

**Busca el array `blogArticles`** y agrega tu nuevo artículo al final:

```typescript
export const blogArticles: BlogArticle[] = [
    {
        // ... artículos existentes ...
    },
    // 👇 AGREGA TU NUEVO ARTÍCULO AQUÍ
    {
        id: 'mi-nuevo-articulo',
        title: 'Título del Artículo Completo',
        slug: 'mi-nuevo-articulo',  // mismo que id
        excerpt: 'Resumen breve del artículo en 150-160 caracteres para SEO',
        content: `
# Título Principal del Artículo

## Subtítulo

Este es un párrafo de ejemplo. Puedes usar **texto en negrita** para destacar.

### Puntos Importantes:

- Punto 1 con lista
- Punto 2 con lista
- Punto 3 con lista

## Otra Sección

Más contenido aquí...

---

**Conclusión:** Texto final del artículo.
        `,
        author: 'Tu Nombre',
        date: '2025-01-20',  // formato YYYY-MM-DD
        category: 'Casos de Uso',  // o 'Tecnología', 'Tutorial', etc.
        tags: ['Tag1', 'Tag2', 'Tag3'],
        image: '/images/mi-imagen.jpg',
        imageAlt: 'Descripción SEO de la imagen',
        readTime: '5 min',
        featured: false  // true para destacar
    }
];
```

---

### 3️⃣ Formato del Contenido (Markdown Simplificado)

El campo `content` acepta Markdown básico:

#### **Encabezados:**
```markdown
# Título H1
## Título H2
### Título H3
#### Título H4
```

#### **Texto:**
```markdown
Párrafo normal

**Texto en negrita**

[Texto del enlace](https://ejemplo.com)
```

#### **Listas:**
```markdown
- Item 1
- Item 2
- Item 3

1. Primero
2. Segundo
3. Tercero
```

#### **Separador:**
```markdown
---
```

---

### 4️⃣ Campos Obligatorios Explicados

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **id** | Identificador único (sin espacios) | `'caso-exito-ecommerce'` |
| **title** | Título visible del artículo | `'Cómo Desarrollamos una Tienda Online'` |
| **slug** | URL del artículo (igual que id) | `'caso-exito-ecommerce'` |
| **excerpt** | Resumen breve (SEO: 150-160 chars) | `'Descubre cómo creamos...'` |
| **content** | Contenido completo en Markdown | `# Título\n\nContenido...` |
| **author** | Nombre del autor | `'Milton Díaz'` |
| **date** | Fecha de publicación (YYYY-MM-DD) | `'2025-01-20'` |
| **category** | Categoría del artículo | `'Casos de Uso'` |
| **tags** | Array de etiquetas | `['React', 'E-commerce']` |
| **image** | Ruta de la imagen | `'/images/mi-imagen.jpg'` |
| **imageAlt** | Descripción para SEO | `'Sistema de ventas...'` |
| **readTime** | Tiempo de lectura estimado | `'5 min'` |
| **featured** | Destacar en portada (true/false) | `true` |

---

### 5️⃣ SEO: Palabras Clave Recomendadas

Incluye estas palabras en tu contenido para mejor posicionamiento:

✅ **Generales:**
- Desarrollo de software a medida
- Aplicaciones web personalizadas
- Software para pymes Chile
- Transformación digital

✅ **Técnicas:**
- React + TypeScript
- Supabase
- Desarrollo full-stack
- Arquitectura escalable

✅ **Casos de Uso:**
- Caso de éxito
- Digitalización
- Automatización de procesos
- Sistema de gestión

---

### 6️⃣ Categorías Sugeridas

- **Casos de Uso** - Historias de clientes reales
- **Tecnología** - Explicaciones técnicas y arquitectura
- **Tutorial** - Guías paso a paso
- **Mejores Prácticas** - Tips y recomendaciones
- **Noticias** - Novedades de Dunatech

---

### 7️⃣ Compilar y Verificar

Después de agregar tu artículo:

```bash
# 1. Compilar el proyecto
npm run build

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Visitar en el navegador
http://localhost:3000/blog
```

---

## 📊 Checklist de Calidad

Antes de publicar tu artículo, verifica:

- [ ] Imagen optimizada (< 500 KB) y subida a `/public/images/`
- [ ] Título claro y descriptivo (< 60 caracteres)
- [ ] Excerpt optimizado para SEO (150-160 caracteres)
- [ ] Contenido con al menos 300 palabras
- [ ] Incluye palabras clave relevantes
- [ ] Formato Markdown correcto
- [ ] Tags específicos y relevantes (3-5 tags)
- [ ] imageAlt descriptivo para SEO
- [ ] Fecha correcta en formato YYYY-MM-DD
- [ ] Build sin errores (`npm run build`)
- [ ] Artículo se ve correctamente en `/blog`

---

## 🎨 Ejemplo Completo de Artículo

```typescript
{
    id: 'sistema-gestion-inventario-pyme',
    title: 'Sistema de Gestión de Inventario para PYME: Caso de Éxito',
    slug: 'sistema-gestion-inventario-pyme',
    excerpt: 'Cómo desarrollamos un sistema de gestión de inventario personalizado que redujo pérdidas en 45% para una PYME chilena del sector retail.',
    content: `
# Sistema de Gestión de Inventario para PYME

## El Problema

Una PYME del sector retail enfrentaba pérdidas significativas debido a:
- Control manual de inventario
- Falta de visibilidad en tiempo real
- Errores en conteos físicos

## La Solución

Desarrollamos un **sistema de gestión de inventario personalizado** con:

### Funcionalidades Clave:
- Código de barras y QR
- Alertas automáticas de stock bajo
- Reportes en tiempo real
- Integración con sistema de ventas

## Resultados

Después de 3 meses:

- ✅ 45% de reducción en pérdidas
- ✅ 60% menos tiempo en inventarios
- ✅ 100% de precisión en conteos

---

**¿Tu negocio necesita algo similar?** Contáctanos.
    `,
    author: 'Milton Díaz',
    date: '2025-01-20',
    category: 'Casos de Uso',
    tags: ['Gestión de Inventario', 'PYME', 'Retail', 'Software a Medida', 'Chile'],
    image: '/images/caso-inventario-pyme.jpg',
    imageAlt: 'Sistema de gestión de inventario desarrollado por Dunatech para PYME chilena',
    readTime: '6 min',
    featured: true
}
```

---

## 🚀 Tips para Artículos Exitosos

### ✍️ Contenido:
1. **Cuenta una historia:** Problema → Solución → Resultados
2. **Usa datos concretos:** "40% de mejora" es mejor que "gran mejora"
3. **Incluye visuales:** Imágenes relevantes y de calidad
4. **Sé específico:** Menciona tecnologías y métodos usados

### 📈 SEO:
1. **Título atractivo:** Incluye beneficio y keywords
2. **Excerpt convincente:** Resume el valor del artículo
3. **Headers lógicos:** H1 → H2 → H3 (jerarquía clara)
4. **Links internos:** Enlaza a servicios y aplicaciones de Dunatech
5. **CTA claro:** Invita a la acción al final

### 🎯 Engagement:
1. **Primera frase fuerte:** Engancha desde el inicio
2. **Párrafos cortos:** Facilita la lectura
3. **Listas y bullets:** Mejor escaneo visual
4. **Conclusión con CTA:** "Contáctanos", "Conoce más", etc.

---

## 📞 ¿Necesitas Ayuda?

Si tienes dudas sobre cómo agregar un artículo:

1. Revisa los artículos existentes en `blogArticles.ts`
2. Copia la estructura de un artículo similar
3. Sigue esta guía paso a paso
4. Verifica con `npm run build` antes de publicar

---

**Última actualización:** Enero 2025  
**Autor:** Equipo Dunatech
