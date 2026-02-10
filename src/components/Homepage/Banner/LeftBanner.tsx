export default function LeftBanner({ className }: { className?: string }) {
  return (
    <div
      className={`flex h-full flex-col items-center justify-center font-coiny text-secondary md:items-start ${className}`}
    >
      <div className='flex h-full flex-col text-center md:text-right'>
        <div className='text-3xl lg:text-6xl'>Re-imagine with </div>
        <div className='text-2xl lg:text-5xl'>
          <span className='text-primary'>{"UK-UV'"}</span> Touch!
        </div>
      </div>
    </div>
  );
}
