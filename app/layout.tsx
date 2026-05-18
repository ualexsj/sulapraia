import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { keywords, site } from '@/lib/data';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['500','600','700'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Sulapraia | Biquíni Atacado e Moda Praia Premium', template: '%s | Sulapraia' },
  description: 'Fornecedor de biquíni e moda praia atacado para lojistas, revendedoras e boutiques. Coleções premium, pedido mínimo atacado e envio para todo Brasil.',
  keywords,
  alternates: { canonical: '/' },
  openGraph: { title: 'Sulapraia | Beachwear atacado premium', description: 'Biquínis tendência 2026 para revenda, boutiques e lojas de moda praia.', url: site.url, siteName: 'Sulapraia', locale: 'pt_BR', type: 'website', images: ['/assets/og-sulapraia.svg'] },
  twitter: { card: 'summary_large_image', title: 'Sulapraia | Moda praia atacado', description: 'Marca brasileira de beachwear atacado com estética premium.' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
    <body>
      {site.gtm && <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtm}');`}</Script>}
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
      {site.analytics && <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.analytics}`} strategy="afterInteractive" />}
      {site.analytics && <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.analytics}');`}</Script>}
      {site.pixel && <noscript><img height="1" width="1" style={{display:'none'}} src={`https://www.facebook.com/tr?id=${site.pixel}&ev=PageView&noscript=1`} alt="" /></noscript>}
    </body>
  </html>;
}
