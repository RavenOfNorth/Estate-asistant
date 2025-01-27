import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/app/components/Header/Header";

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
            <Header />
                {children}
            <SpeedInsights />
            </body>
        </html>
    )
}