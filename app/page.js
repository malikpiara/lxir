import { Button } from '@/components/ui/button';
import { Sparkle } from 'lucide-react';
import Link from 'next/link';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Home() {
  return (
    <div className="bg-[#040429] text-white flex min-h-screen">
     <div className="fixed left-0 top-7 hidden h-[96vh] w-1/2 bg-[#040429] bg-opacity-5 p-3 md:block">
          <BlobAnimation />
          <Motto />

          <div className="absolute left-7 top-9 flex items-center gap-2 text-xl font-medium text-[#c5f0fb] animate-in">
           
              <Sparkle className="h-8 w-8 opacity-85"/>
            
          </div>
        </div>
       
        <div className='flex flex-col sm:ml-[50%] p-6 sm:p-16 animate-in space-y-2'>
          <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance uppercase'>Sandbox Lxir</h1>
          <p className="text-[#c5f0fbde] text-xl">
      Lisboa Summer Magic. August 27 — September 3.
    </p>

    <div>

    </div>
    <p className="text-[#fbfeffc7] text-xl mt-5">
     The Lisboa Sandbox Hub invites you to its first Unretreat—a quiet ripple in time where intention gathers and possibility stirs. This a return to presence, to questions without answers, to the subtle edges of becoming. 
    </p>
    <p className="text-[#fbfeffc7] text-xl">
      In the soft rhythm of Lisbon’s light, we will listen more than speak, wander more than plan, and allow the unseen threads between us to emerge and weave something new.
    </p>

    <div className='space-y-10 mt-10 w-full'>
    <Button asChild className={'bg-white text-black hover:bg-[#fbfeffc7] transition-colors hover:text-black  w-full'}
    >
      <Link href={'http://piara.li/wa'}>Host a Sandboxer</Link></Button>
      </div>

      

<Dialog>
  <DialogTrigger asChild><Button className={'bg-white text-black hover:bg-[#fbfeffc7] transition-colors hover:text-black w-full cursor-pointer'}
    >
      Get Tickets</Button></DialogTrigger>
  <DialogContent className='min-w-screen min-h-screen rounded-none bg-[#040429] border-[#040429]'>
    <DialogHeader className='w-full text-center self-center items-center space-y-3'>
      <DialogTitle className={'text-white'}>Enter the secret password</DialogTitle>
      
        <InputOTP maxLength={4}>
  <InputOTPGroup>
    <InputOTPSlot className={'w-10 h-14 text-white'} index={0} />
    <InputOTPSlot className={'w-10 h-14 text-white'} index={1} />
    <InputOTPSlot className={'w-10 h-14 text-white'} index={2} />
    <InputOTPSlot className={'w-10 h-14 text-white'} index={3} />
  </InputOTPGroup>
  
</InputOTP>
      
    </DialogHeader>
  </DialogContent>
</Dialog>
        </div>

        
          
     </div>
    
  );
}

export function Motto() {
  return (
    <p className="hover:text-tertiary fixed bottom-20 mx-3 my-1 rotate-180 cursor-default text-xs uppercase tracking-wider text-[#c5f0fb95] animate-in transition-all duration-300 [writing-mode:vertical-lr] hover:animate-pulse max-sm:hidden">
      Only you know who you can be
    </p>
  );
}

export function BlobAnimation() {
  return (
    <div className="bg-[#070759] w-full h-full overflow-hidden relative rounded-xl -z-10">
      <div className="rounded-3xl inset-0 absolute after:content-[''] after:w-full after:h-full after:bg-[url('https://i.imgur.com/PsjPzdO.png')] after:bg-[length:200px] after:mix-blend-overlay after:absolute after:top-0 after:left-0">
        <div className="w-[50vh] h-[50vh] block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-in-login-screen">
          <div className="w-full h-full rounded-full absolute bg-[#07B8E4] mix-blend-multiply blur-[80px] animate-circular2 bg-opacity-80" />
          <div className="w-full h-full rounded-full absolute bg-[#1a55f7] mix-blend-multiply blur-[80px] animate-circular bg-opacity-50" />
          <div className="w-full h-full rounded-full absolute bg-[#07B8E4] mix-blend-multiply blur-[60px] animate-circular-slow" />
        </div>
      </div>
    </div>
  );
};