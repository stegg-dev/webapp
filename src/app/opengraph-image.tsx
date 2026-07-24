import { ImageResponse } from 'next/og';
import { SITE_URL } from './site-config';

export const alt =
  'Stegg — hide secret messages and photos in plain sight';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          color: '#ffffff',
          background:
            'radial-gradient(circle at 82% 18%, rgba(46, 204, 113, 0.25), transparent 34%), linear-gradient(135deg, #041713 0%, #082d24 58%, #0b4937 100%)',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            opacity: 0.16,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
          }}
        />

        <img
          alt=""
          src={`${SITE_URL}/stegg-dino-white.png`}
          width={520}
          height={350}
          style={{
            position: 'absolute',
            right: -40,
            bottom: -38,
            objectFit: 'contain',
            opacity: 0.1,
          }}
        />

        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '66px 72px 60px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
              <div
                style={{
                  width: 82,
                  height: 82,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 22,
                  background:
                    'linear-gradient(145deg, #0d563f 0%, #073527 100%)',
                  border: '1px solid rgba(110, 255, 178, 0.28)',
                  boxShadow: '0 18px 30px rgba(0,0,0,0.32)',
                }}
              >
                <img
                  alt=""
                  src={`${SITE_URL}/stegg-dino-white.png`}
                  width={62}
                  height={44}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 40,
                  fontWeight: 800,
                  letterSpacing: 13,
                }}
              >
                STEGG
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                color: '#8ce9b5',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 2.5,
              }}
            >
              AN APP BY RUNEWORKS
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 900,
            }}
          >
            <div
              style={{
                alignSelf: 'flex-start',
                display: 'flex',
                padding: '10px 18px',
                marginBottom: 22,
                borderRadius: 999,
                border: '1px solid rgba(82, 235, 151, 0.48)',
                color: '#6ff0a9',
                background: 'rgba(18, 105, 75, 0.22)',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: 2.5,
              }}
            >
              PRIVATE · OFFLINE · YOURS
            </div>

            <div
              style={{
                display: 'flex',
                fontSize: 70,
                lineHeight: 1.02,
                fontWeight: 800,
                letterSpacing: -2.8,
              }}
            >
              A secret can look like any other photo.
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 22,
                color: 'rgba(255,255,255,0.68)',
                fontSize: 25,
                lineHeight: 1.3,
              }}
            >
              Hide messages and photos in plain sight—processed only on your
              device.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
