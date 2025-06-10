# 📅 Guía de Integración para Agendar Llamadas

## 🎯 Mejores Opciones para Digital Leveling

### 1. **Calendly** (Recomendado) ⭐
- **Costo**: Gratis hasta 1 tipo de evento, Pro $8/mes
- **URL**: https://calendly.com
- **Configuración**:
  1. Crear cuenta en Calendly
  2. Configurar disponibilidad (ej: Lun-Vie 9:00-18:00)
  3. Crear evento "Consulta Gratuita - 30 min"
  4. Integrar con Google Calendar/Outlook
  5. Configurar Zoom/Google Meet automático
  6. Personalizar formulario de reserva

**URL de ejemplo**: `https://calendly.com/digitalleveling/consulta-gratuita`

### 2. **Cal.com** (Open Source) 🔓
- **Costo**: Gratis (self-hosted) o $12/mes (cloud)
- **URL**: https://cal.com
- **Ventajas**: Código abierto, personalización total
- **Configuración**: Similar a Calendly pero más flexible

### 3. **Google Calendar Appointment Schedules** (Gratis) 🆓
- **Costo**: Gratis
- **Configuración**:
  1. Ir a Google Calendar
  2. Crear "Appointment Schedule"
  3. Configurar disponibilidad
  4. Compartir link público

### 4. **Microsoft Bookings** (Para Office 365) 🏢
- **Costo**: Incluido en Microsoft 365 Business
- **Ideal si**: Ya usas Microsoft 365

### 5. **Acuity Scheduling** (Avanzado) 💼
- **Costo**: Desde $14/mes
- **Ventajas**: Pagos integrados, automatizaciones avanzadas

## 🛠️ Implementación Técnica

### Opción A: Redirección Directa
\`\`\`javascript
const handleBooking = () => {
  window.open('https://calendly.com/digitalleveling/consulta-gratuita', '_blank')
}
\`\`\`

### Opción B: Widget Embebido
\`\`\`html
<!-- Calendly inline widget -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/digitalleveling/consulta-gratuita" 
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
\`\`\`

### Opción C: Popup Modal
\`\`\`javascript
// Calendly popup
window.Calendly.initPopupWidget({
  url: 'https://calendly.com/digitalleveling/consulta-gratuita'
})
\`\`\`

## 📋 Configuración Recomendada

### Información del Evento:
- **Nombre**: "Consulta Gratuita - Digital Leveling"
- **Duración**: 30 minutos
- **Descripción**: "Conversemos sobre tu proyecto digital sin compromiso"
- **Ubicación**: Google Meet (automático)

### Preguntas del Formulario:
1. ¿Cuál es tu nombre completo?
2. ¿Cuál es el nombre de tu empresa?
3. ¿Qué tipo de proyecto tienes en mente?
4. ¿Cuál es tu presupuesto estimado?
5. ¿Cuándo te gustaría comenzar?
6. Cuéntanos más sobre tu proyecto

### Disponibilidad Sugerida:
- **Lunes a Viernes**: 9:00 - 18:00 (GMT-3)
- **Buffer time**: 15 minutos entre citas
- **Advance notice**: Mínimo 2 horas
- **Date range**: Hasta 60 días en el futuro

## 🎨 Personalización

### Branding:
- Logo de Digital Leveling
- Colores: #FEC73F (amarillo), #000000 (negro)
- Mensaje de bienvenida personalizado
- Email de confirmación con branding

### Automatizaciones:
- Email de confirmación inmediato
- Recordatorio 24h antes
- Recordatorio 1h antes
- Follow-up post-reunión

## 💡 Alternativas Adicionales

### Para WhatsApp:
\`\`\`javascript
const whatsappBooking = () => {
  const message = "Hola! Me gustaría agendar una consulta gratuita para mi proyecto digital."
  window.open(`https://wa.me/34614473197?text=${encodeURIComponent(message)}`)
}
\`\`\`

### Para Email Directo:
\`\`\`javascript
const emailBooking = () => {
  const subject = "Solicitud de Consulta Gratuita"
  const body = "Hola! Me gustaría agendar una consulta gratuita para discutir mi proyecto digital."
  window.open(`mailto:info@digitalleveling.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
}
\`\`\`

## 🚀 Recomendación Final

**Para Digital Leveling, recomiendo Calendly Pro** porque:
- ✅ Fácil configuración
- ✅ Integración perfecta con Google Meet/Zoom
- ✅ Formularios personalizables
- ✅ Recordatorios automáticos
- ✅ Branding personalizado
- ✅ Analytics incluidos
- ✅ Costo accesible ($8/mes)

**Configuración en 3 pasos**:
1. Crear cuenta en Calendly
2. Configurar evento "Consulta Gratuita"
3. Reemplazar URL en el código: `https://calendly.com/digitalleveling/consulta-gratuita`
