// En tu página o componente donde necesitas usar el formulario de contacto
import dynamic from 'next/dynamic';

const DynamicClientOnlyContactForm = dynamic(() => import('@/components/ClientOnlyContactForm'), { ssr: false });

const Page = () => {
  return (
    <div className="w-screen h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/bg-3.jpg')" }}>
      <div className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white" style={{ backgroundImage: "url('/atombg-comp.webp')" }}>
        <div className="absolute left-20 bottom-16 w-[70%] md:w-[30%]">
          <DynamicClientOnlyContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
