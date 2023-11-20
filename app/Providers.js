// In Next.js, this file would be called: app/providers.jsx
'use client'

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function Providers({ children }) {
    const [queryClient] = useState(
        () =>
            new QueryClient(),
    )

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={true} />

            {children}
        </QueryClientProvider>
    )
}