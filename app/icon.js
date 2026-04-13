import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #a855f7 50%, #ec4899 100%)',
          borderRadius: '12px',
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          UP
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
