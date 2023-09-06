'use client'
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/app/theme/theme'
import FirstBlock from '@/app/pageblocks/firstblock'
import SecondBlock from './pageblocks/secondblock';


export default function Home() {
  return (
    <ThemeProvider theme={theme} >
      <div className='w-full bg-black'>
      <FirstBlock />
      <SecondBlock />
      </div>
    </ThemeProvider>
  )
}
