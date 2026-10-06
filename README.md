# Plan A — Gestión de Personal (PWA)

Aplicación web progresiva (PWA) para gestión de identificación de trabajadores y control de horas extras.

**Marca:** Plan A Soluciones Organizacionales  
**Versión:** 4.0  
**Última actualización:** Octubre 2026

---

## Módulos

### 👤 Identificación de trabajadores
- Datos personales: nombre, cédula, cargo, área, teléfono, correo
- Fecha de ingreso
- Seguridad social: EPS y ARL
- Contacto de emergencia (acudiente)
- Foto de perfil (cámara del celular)

### ⏰ Horas Extras — Flujo en 2 etapas

**Etapa 1 — Solicitud (antes de iniciar):**
1. Trabajador ingresa: fecha, jornada normal (entrada/salida), hora de inicio de extras
2. Sistema detecta automáticamente el tipo según horario y día (CST colombiano)
3. Trabajador agrega: motivo, GPS, foto del lugar/equipo
4. Solicitud llega al líder del área para aprobación

**Etapa 2 — Cierre (al finalizar):**
1. Trabajador registra: hora de salida, GPS de cierre, foto de evidencia
2. Sistema calcula total de horas
3. Cierre llega al líder con el valor estimado a pagar (solo visible para líder y admin)

### Cálculo de valores (Código Sustantivo del Trabajo - Colombia)
| Tipo | Horario | Recargo |
|------|---------|---------|
| Diurna | Lun–Sáb 6:00am – 9:00pm | +25% |
| Nocturna | Lun–Sáb 9:00pm – 6:00am | +75% |
| Dominical/Festiva diurna | Dom/Festivos 6:00am – 9:00pm | +100% |
| Dominical/Festiva nocturna | Dom/Festivos 9:00pm – 6:00am | +150% |

Límite legal: **2 horas/día · 12 horas/semana** (Art. 167 CST · Ley 50/1990)

---

## Roles
- **Admin (Daniel):** crea usuarios, ve todo, aprueba cualquier solicitud
- **Líder:** aprueba/rechaza solicitudes de su área, ve el valor calculado
- **Trabajador:** llena su perfil, solicita y cierra horas extras

## Credenciales por defecto
- Usuario: `admin` / Contraseña: `admin2026`
- ⚠️ Cámbielas desde Admin → Mi cuenta al primer ingreso

---

## Archivos
```
plan-a-pwa/
├── index.html      ← App principal (toda la lógica)
├── manifest.json   ← Configuración PWA (ícono, nombre, colores)
├── sw.js           ← Service Worker (funcionamiento offline)
├── icon-192.svg    ← Ícono 192×192
├── icon-512.svg    ← Ícono 512×512
└── README.md       ← Este archivo
```

## Despliegue

### Vercel (recomendado)
1. Cree cuenta en vercel.com
2. Haga clic en Add New → Project → seleccione esta carpeta
3. Deploy sin cambiar nada

### GitHub Pages
1. Suba esta carpeta a un repositorio de GitHub
2. Settings → Pages → Branch: main → /root → Save
3. URL: `https://usuario.github.io/plan-a-pwa`

---

## Desarrollado por
**Plan A Soluciones Organizacionales**
