import { Store } from "lucide-react"; 

export function AlproLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-500/20 md:h-9 md:w-9">
        {/* Menggunakan Store icon dari lucide-react */}
        <Store className="h-5 w-5 text-white md:h-6 md:w-6" strokeWidth={2.5} />
      </div>
      <span className="font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-white md:text-2xl">
        Alpro Shop
      </span>
    </div>
  );
}