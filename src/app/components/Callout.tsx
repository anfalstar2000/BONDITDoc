import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

interface CalloutProps {
 type: 'info' | 'warning' | 'tip';
 children: React.ReactNode;
}

export function Callout({ type, children }: CalloutProps) {
 const styles = {
 info: {
 container: 'bg-white',
 icon: <Info className="size-5 text-[#3B82F6]" />,
 text: 'text-black',
 },
 warning: {
 container: 'bg-white',
 icon: <AlertTriangle className="size-5 text-gray-500" />,
 text: 'text-black',
 },
 tip: {
 container: 'bg-white',
 icon: <Lightbulb className="size-5 text-[#3B82F6]" />,
 text: 'text-black',
 },
 };

 const style = styles[type];

 return (
 <div className={`flex gap-3 p-4 rounded-none ${style.container} ${style.text}`}>
 <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
 <div className="text-sm leading-relaxed">{children}</div>
 </div>
 );
}