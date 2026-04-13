import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Urvish Patel | Full Stack Software Engineer',
  description: 'Software Engineer specializing in building scalable web applications with React.js, Node.js, and modern technologies.',
  keywords: ['Full Stack Developer', 'React.js', 'Node.js', 'Software Engineer', 'Web Development'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
