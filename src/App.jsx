import './index.css'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Minimal Template</h1>
      <div className="space-x-4">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </div>
  )
}

export default App
