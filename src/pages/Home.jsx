import { Link } from 'react-router-dom'
import { tools } from '../data/tools'

function Home() {
  const featuredTools = tools.slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Discover the Best AI Tools</h1>
        <p className="text-xl text-gray-600">
          Your one-stop destination for finding the perfect AI tools for your needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {featuredTools.map(tool => (
          <div key={tool.id} className="bg-white rounded-lg shadow-md p-6">
            <img 
              src={tool.image} 
              alt={tool.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
            <p className="text-gray-600 mb-4">{tool.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/tools"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Tools
        </Link>
      </div>
    </div>
  )
}

export default Home