import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Header from "@/app/components/Header/Header";

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
            <Header />
                {children}
            <SpeedInsights />
            <Analytics />
            </body>
        </html>
    )
}