import { 
        useState, 
        useEffect 
        } 
from "react";

import type Liff from '@line/liff'

export const useLiff = () => {
  
    const [loading, setLoading] = useState(true);
  
    const [liff, setLiff] = useState<typeof Liff>()
    useEffect(() => {
        let unmounted = false
        const func = async () => {
          const liff = (await import('@line/liff')).default
          console.log('import liff')
          await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID || "1655688058-yvdQp0ko"})
          if (!unmounted) {
            setLiff(liff)
          }
        }
        func()
        const cleanup = () => {
          unmounted = true
        }

        return cleanup
    }, [])
  
    return {
      liff,
    };
  };