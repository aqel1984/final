'use client'

import { Moon, Sun, Loader } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useLoading } from '@/context/LoadingContext'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { isLoading, setIsLoading } = useLoading()

  // Example function to demonstrate loading state
  const handleLoadingDemo = async () => {
    setIsLoading(true)
    // Simulate an async operation
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold text-lg">Your Logo</div>
        
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          {/* Loading Demo Button */}
          <Button
            variant="outline"
            onClick={handleLoadingDemo}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            {isLoading && <Loader className="h-4 w-4 animate-spin" />}
            Test Loading
          </Button>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Primary Action Button */}
          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}