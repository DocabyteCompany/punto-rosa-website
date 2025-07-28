# TODO - Sistema Híbrido de Servicios Punto Rosa

## **INSTRUCCIÓN GENERAL**
**Antes de comenzar cada tarea, analizar todos los divs y componentes que afecten a esa sección para entender el impacto y dependencias.**

---

## **FASE 1: Preparación y Estructura de Datos**

### **Tarea 1.1: Actualizar Tipos y Interfaces**
- [ ] **ANALIZAR:** Componentes que usan interfaces de servicios actuales
- [ ] Crear `types/services.ts` con interfaces actualizadas
- [ ] Definir estructura de datos para servicios mexicanos
- [ ] Actualizar tipos en componentes existentes

### **Tarea 1.2: Crear Datos de Servicios**
- [ ] **ANALIZAR:** Dónde se usan los datos de servicios actuales
- [ ] Crear `data/services.ts` con todos los servicios reales
- [ ] Organizar por categorías: Masajes, Tratamientos, Especiales
- [ ] Incluir precios en MXN, descripciones, imágenes
- [ ] Agregar contenido bilingüe (ES/EN)

### **Tarea 1.3: Actualizar Información de Contacto**
- [ ] **ANALIZAR:** Componentes que contienen información de contacto
- [ ] Cambiar número WhatsApp a mexicano: (55) 49186534
- [ ] Actualizar precios en `BookingSystem.tsx`
- [ ] Actualizar precios en `Chatbot.tsx`
- [ ] Actualizar `SocialMedia.tsx`

---

## **FASE 2: Componentes Base**

### **Tarea 2.1: Crear Sistema de Pestañas**
- [ ] **ANALIZAR:** Estructura actual de ServicesGrid y componentes relacionados
- [ ] Crear `components/ServicesTabs.tsx`
  - [ ] Componente de pestañas con animaciones
  - [ ] Estados activos e inactivos
  - [ ] Transiciones suaves
  - [ ] Responsive design

### **Tarea 2.2: Actualizar ServiceCard**
- [ ] **ANALIZAR:** Estructura actual de ServiceCard y sus dependencias
- [ ] Rediseñar `components/ServiceCard.tsx`
  - [ ] Nuevo layout con imagen prominente
  - [ ] Botón "Reservar" destacado
  - [ ] Hover effects mejorados
  - [ ] Información de precio en MXN

### **Tarea 2.3: Crear Controles de Carrusel**
- [ ] **ANALIZAR:** Componentes de navegación existentes
- [ ] Crear `components/CarouselControls.tsx`
  - [ ] Flechas de navegación
  - [ ] Indicadores de puntos
  - [ ] Controles responsive

---

## **FASE 3: Carrusel Principal**

### **Tarea 3.1: Implementar Carrusel Base**
- [ ] **ANALIZAR:** Estructura de grid actual y componentes de navegación
- [ ] Crear `components/ServicesCarousel.tsx`
  - [ ] Integrar Embla Carousel
  - [ ] Configurar 3 slides visibles en desktop
  - [ ] Implementar responsive (2 en tablet, 1 en mobile)
  - [ ] Agregar auto-play con pausa en hover

### **Tarea 3.2: Funcionalidades Avanzadas**
- [ ] **ANALIZAR:** Interacciones de usuario existentes
- [ ] Implementar navegación por teclado
- [ ] Agregar swipe gestures para mobile
- [ ] Crear indicadores de progreso
- [ ] Optimizar performance

---

## **FASE 4: Sistema Integrado**

### **Tarea 4.1: Crear Componente Principal**
- [ ] **ANALIZAR:** ServicesGrid actual y su integración en Index.tsx
- [ ] Crear `components/ServicesSection.tsx`
  - [ ] Integrar pestañas + carrusel
  - [ ] Manejar cambio de categorías
  - [ ] Gestionar estado global
  - [ ] Conectar con sistema de reservas

### **Tarea 4.2: Integración con Booking**
- [ ] **ANALIZAR:** Sistema de booking actual y sus props
- [ ] Conectar botones "Reservar" con `BookingSystem`
  - [ ] Pasar datos del servicio seleccionado
  - [ ] Scroll automático a sección de booking
  - [ ] Pre-llenar formulario con servicio

### **Tarea 4.3: Actualizar Página Principal**
- [ ] **ANALIZAR:** Estructura completa de Index.tsx y navegación
- [ ] Reemplazar `ServicesGrid` en `pages/Index.tsx`
  - [ ] Integrar nuevo `ServicesSection`
  - [ ] Mantener funcionalidades existentes
  - [ ] Actualizar navegación

---

## **FASE 5: Optimización y Pulido**

### **Tarea 5.1: Animaciones y Transiciones**
- [ ] **ANALIZAR:** Animaciones existentes en el proyecto
- [ ] Implementar animaciones de entrada
  - [ ] Fade-in escalonado para cards
  - [ ] Transiciones entre pestañas
  - [ ] Efectos hover refinados

### **Tarea 5.2: Responsive y Accesibilidad**
- [ ] **ANALIZAR:** Implementación responsive actual
- [ ] Optimizar para todos los dispositivos
  - [ ] Implementar navegación por teclado
  - [ ] Agregar ARIA labels
  - [ ] Optimizar para lectores de pantalla

### **Tarea 5.3: Performance**
- [ ] **ANALIZAR:** Performance actual del proyecto
- [ ] Lazy loading de imágenes
- [ ] Optimizar re-renders
- [ ] Implementar memoización
- [ ] Optimizar bundle size

---

## **FASE 6: Testing y Finalización**

### **Tarea 6.1: Testing Funcional**
- [ ] **ANALIZAR:** Funcionalidades existentes que deben mantenerse
- [ ] Probar navegación entre pestañas
- [ ] Verificar carrusel en diferentes dispositivos
- [ ] Testear integración con booking
- [ ] Validar responsive design

### **Tarea 6.2: Testing de UX**
- [ ] **ANALIZAR:** Flujo de usuario actual
- [ ] Verificar flujo de reserva
- [ ] Probar animaciones y transiciones
- [ ] Validar accesibilidad
- [ ] Optimizar velocidad de carga

### **Tarea 6.3: Limpieza y Documentación**
- [ ] **ANALIZAR:** Código que puede quedar obsoleto
- [ ] Limpiar código no utilizado
- [ ] Documentar componentes nuevos
- [ ] Actualizar README si es necesario
- [ ] Commit final con todos los cambios

---

## **Cronograma Estimado:**
- **Fase 1:** 1-2 horas
- **Fase 2:** 2-3 horas  
- **Fase 3:** 2-3 horas
- **Fase 4:** 1-2 horas
- **Fase 5:** 1-2 horas
- **Fase 6:** 1 hora

**Total estimado: 8-13 horas**

---

## **Servicios a Implementar:**

### **Masajes:**
1. **Masaje Harmony** - $500 MXN
2. **Masaje Mixto** - $550 MXN
3. **Masaje de Liberación Miofascial** - $500 MXN
4. **Drenaje Linfático Manual** - $500 MXN
5. **Masaje Deportivo** - $500 MXN
6. **Masajes en Cabina** - $500 MXN

### **Tratamientos:**
7. **Presoterapia** - $550 MXN
8. **Gimnasia Pasiva** - $550 MXN
9. **Cavitación** - $400 MXN

### **Especiales:**
10. **Suero Vitaminado** - $1,200 MXN

### **Contacto:**
- **Teléfono:** (55) 49186534
- **Servicios adicionales:** Sueros vitaminados a domicilio 