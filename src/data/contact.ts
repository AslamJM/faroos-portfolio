import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

export const contactMethods = [
    {
        icon: Phone,
        title: "Phone",
        value: "+1 (555) 123-4567",
        description: "Call us during business hours",
        action: "tel:+15551234567",
        color: "bg-blue-500",
    },
    {
        icon: Mail,
        title: "Email",
        value: "hello@architect.com",
        description: "Send us an email anytime",
        action: "mailto:hello@architect.com",
        color: "bg-green-500",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        value: "+1 (555) 123-4567",
        description: "Message us on WhatsApp",
        action: "https://wa.me/15551234567",
        color: "bg-emerald-500",
    },
    {
        icon: MapPin,
        title: "Visit Us",
        value: "123 Architecture Ave, Design District, NY 10001",
        description: "Come visit our studio",
        action: "https://maps.google.com/?q=123+Architecture+Ave+NY",
        color: "bg-red-500",
    },
]

export const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
]

export const projectTypes = [
    "Residential Design",
    "Commercial Architecture",
    "Interior Design",
    "Renovation & Remodeling",
    "Sustainable Design",
    "Urban Planning",
    "Consultation Services",
    "Other",
]

export const budgetRanges = ["Under $100K", "$100K - $500K", "$500K - $1M", "$1M - $5M", "$5M+", "Not sure yet"]