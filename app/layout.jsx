import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
    title: 'Nature Pistachio - Cooperativa de Pistachos en Castilla La Mancha',
    description: 'Productora y procesadora de pistacho ecologico y convencional en Toledo.',
}

export const viewport = {
    themeColor: '#1a2e1f',
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${playfair.variable} ${inter.variable} antialiased`}>
            <body>{children}</body>
        </html>
    )
}
