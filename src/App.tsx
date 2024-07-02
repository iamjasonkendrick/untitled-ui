import { ThemeProvider } from './components/theme-provider'
import Landing from './pages/landing'

export default function App() {
  return (
    <>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <Landing />
      </ThemeProvider>
    </>
  )
}
