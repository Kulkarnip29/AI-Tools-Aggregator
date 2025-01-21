import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">AI Tools Aggregator</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-200">Home</Link>
            <Link to="/tools" className="hover:text-blue-200">Tools</Link>
            <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar