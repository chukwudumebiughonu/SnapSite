import { ClerkProvider } from "@clerk/nextjs";
import {dark} from "@clerk/themes";

const Layout = ({children}: {children:React.ReactNode}) => {
  return (
  <ClerkProvider appearance={{ baseTheme: dark }}>
   {children}
  </ClerkProvider>
  )
}

export default Layout;