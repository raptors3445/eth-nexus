import './globals.css'

export const metadata = {
  title: 'ETH Nexus | Zero-Fee P2P Exchange',
  description: 'Cyberpunk themed Web3 P2P Ethereum exchange',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-slate-100 min-h-screen selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  )
}
