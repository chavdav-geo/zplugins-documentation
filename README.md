# ⚡ zPlugins - Documentación Oficial

Repositorio de la documentación oficial de **zPlugins**, guías de configuración, optimización y recursos para servidores de Minecraft.

Sitio oficial: [zplugins-documentation](https://github.com/chavdav-geo/zplugins-documentation)

---

## 📦 Contenido de la Documentación

* **zVoidChest:**
  * Visión General y compatibilidad con versiones 1.18 - 1.21+.
  * Instalación paso a paso y configuración de bases de datos (SQLite / MySQL).
  * Lista exhaustiva de comandos administrativos y permisos (`voidchest.admin`, límites por rango).
  * Sistema de Tiers (Niveles) y fórmulas de sub-mejoras.
  * Mecánicas: Auto-Sell, Smart Chunk Collector, Auto-Smelt, Auto-Compress, Sistema de Combustible (Gasolina) y Hologramas 3D nativos.
  * Archivos de configuración (`config.yml`, `chests.yml`, `prices.yml`, menús e idiomas).
  * Preguntas frecuentes y solución de problemas.

* **ajLeaderboards Config:**
  * Guía técnica de opciones en `config.yml` (`stat-refresh`, `blocking-fetch`, `update-on-join`, `update-stats`).
  * Sintaxis de Placeholders para tops históricos y periódicos (daily, weekly, monthly).
  * Integración con **FancyHolograms** y DecentHolograms.
  * Optimización de rendimiento para servidores con alta concurrencia y modo solo lectura en Lobbies.

---

## 💬 Soporte & Enlaces Oficiales

* **Soporte Técnico:** [support@chavdav.wtf](mailto:support@chavdav.wtf)
* **Contacto Comercial / Configuraciones Personalizadas:** [contac@chavdav.wtf](mailto:contac@chavdav.wtf)
* **Comunidad Discord:** [discord.gg/zresources](https://discord.gg/zresources)
* **Tienda BuiltByBit:** [BuiltByBit](https://builtbybit.com)

---

## 🚀 Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm --filter=web dev

# Compilar para producción
pnpm --filter=web build
```
