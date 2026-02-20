import './globals.css'

export const metadata = {
    title: 'Nature Pistachio - Cooperativa de Pistachos en Castilla La Mancha',
    description: 'Productora y procesadora de pistacho ecológico y convencional en Toledo.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    )
}
