import '@/styles/globals.css'
import { AppWrapper } from '@/context/context';
import { AppContent } from '@/context/appContent';


export default function App({ Component, pageProps }) {
  return(<>
  <AppWrapper>
  <AppContent>
  <Component {...pageProps} />
  </AppContent>
  </AppWrapper>
    </>  
)}
