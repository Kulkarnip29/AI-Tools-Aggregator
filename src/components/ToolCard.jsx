function ToolCard({ tool }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
  src={tool.image} 
  alt={tool.name}
  className="w-full h-64 object-cover rounded-lg"
/>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded mb-2">
          {tool.category}
        </span>
        <p className="text-gray-600 mb-4">{tool.description}</p>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Visit Tool
        </a>
      </div>
    </div>
  )
}

export default ToolCard