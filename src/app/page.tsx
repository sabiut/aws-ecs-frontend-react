'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [backendStatus, setBackendStatus] = useState<string>('checking...')
  const [backendUrl] = useState(process.env.BACKEND_URL || 'http://localhost:8000')

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch(`${backendUrl}/health/`)
        if (response.ok) {
          setBackendStatus('connected')
        } else {
          setBackendStatus('error')
        }
      } catch (error) {
        console.error('Backend connection failed:', error)
        setBackendStatus('disconnected')
      }
    }

    checkBackend()
  }, [backendUrl])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            React Frontend
          </h1>
          <p className="text-gray-600 mb-6">
            Connected to Django Backend
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">
                Backend Status:
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                backendStatus === 'connected'
                  ? 'bg-green-100 text-green-800'
                  : backendStatus === 'checking...'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {backendStatus}
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">
                Backend URL:
              </span>
              <span className="text-xs text-gray-500 font-mono">
                {backendUrl}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Refresh Status
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}