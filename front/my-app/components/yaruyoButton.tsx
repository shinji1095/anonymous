import { 
    FC,
    useState,
    useEffect,
    useCallback
    } from 'react'

import type Liff from '@line/liff'


const YaruyoButton:FC<{assName:string}> = ({assName}) => {
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

    let pushShareTargetPicker = useCallback(() =>{
        if(liff)
            liff.init({ liffId:"1655688058-yvdQp0ko" }).then(() => {
                if (!liff.isLoggedIn()) {
                    liff.login()
                }
                liff.shareTargetPicker([{
                    'type': 'text',
                    'text': 'おれ'+ assName +'やりはじめるけどお前は？'
                }])
                .then(() =>
                console.log('send: ', "message")
                ).catch((err: Error) =>
                alert(err)
                )
        })}, [liff])
    return (
        <span className="mr-2 d-none d-lg-inline text-white font-weight-bold small "
            onClick={pushShareTargetPicker}>やるよ宣言
        </span>
        
    )
}

export default YaruyoButton
