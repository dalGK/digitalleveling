"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingrese un email válido.",
  }),
  company: z.string().optional(),
  phone: z.string().min(6, {
    message: "Por favor ingrese un número de teléfono válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
})

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-dlgold" />,
      title: "Email",
      value: "Leveling.digi@gmail.com",
      link: "mailto:Leveling.digi@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-dlgold" />,
      title: "Teléfono",
      value: "+34 614 47 31 97",
      link: "tel:+34614473197",
    },
    {
      icon: <MapPin className="h-5 w-5 text-dlgold" />,
      title: "Dirección",
      value: "España, Madrid",
      link: "#",
    },
  ]

  return (
    <section id="contacto" className="w-full py-20 bg-dlblack">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dlgold">Contáctenos</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Estamos listos para ayudarle en su próximo proyecto. Contáctenos para una consulta inicial gratuita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-none bg-dlgray shadow-md">
            <CardHeader>
              <CardTitle className="text-white">Envíenos un Mensaje</CardTitle>
              <CardDescription className="text-white/60">
                Complete el formulario y nos pondremos en contacto con usted lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Nombre</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Su nombre"
                              {...field}
                              className="bg-dlblack border-dlgray/50 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="su.email@ejemplo.com"
                              {...field}
                              className="bg-dlblack border-dlgray/50 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Empresa (opcional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Nombre de su empresa"
                              {...field}
                              className="bg-dlblack border-dlgray/50 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Teléfono</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Su número de teléfono"
                              {...field}
                              className="bg-dlblack border-dlgray/50 text-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntenos sobre su proyecto o consulta"
                            className="min-h-[120px] bg-dlblack border-dlgray/50 text-white"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-dlgold text-dlblack hover:bg-dlgold/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-dlblack"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                      </span>
                    )}
                  </Button>

                  {isSuccess && (
                    <div
                      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                      role="alert"
                    >
                      <strong className="font-bold">¡Gracias! </strong>
                      <span className="block sm:inline">
                        Hemos recibido su mensaje y nos pondremos en contacto pronto.
                      </span>
                    </div>
                  )}
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="flex flex-col justify-between">
            <Card className="border-none bg-dlgray shadow-md mb-8">
              <CardHeader>
                <CardTitle className="text-white">Información de Contacto</CardTitle>
                <CardDescription className="text-white/60">
                  Puede contactarnos directamente a través de los siguientes medios.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a key={index} href={info.link} className="flex items-start hover:text-dlgold transition-colors">
                      <div className="mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h4 className="font-medium text-white">{info.title}</h4>
                        <p className="text-white/60">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none bg-dlgray shadow-md h-full">
              <CardHeader>
                <CardTitle className="text-white">Horario de Atención</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/60">Lunes - Viernes</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Sábado</span>
                    <span className="text-white">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Domingo</span>
                    <span className="text-white">Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

