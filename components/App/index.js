import React from 'react'
import Script from 'next/script'
import Header from '../Header'

function App({ config, extra }) {
    const header = config.use_header ? (<Header config={config.layout.header}></Header>) : null
    return (
        <div>
            <Script src="https://cdn.tailwindcss.com" />
            {header}
            <h1 className="text-3l underline">hla dude</h1>
        </div>
    )
}

export default App;