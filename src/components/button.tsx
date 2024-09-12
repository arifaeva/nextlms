import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "block w-full rounded-lg border text-sm font-semibold shadow-sm shadow-slate-200 transition duration-200 disabled:opacity-50",
  variants: {
    variant: {
      primary: "border-indigo-600 bg-indigo-600 text-indigo-50 hover:bg-indigo-500 active:bg-indigo-700",
      secondary: "border-slate-300 bg-white text-slate-600 hover:text-slate-700 active:bg-slate-50 active:text-slate-800",
      danger: "border-rose-500 bg-rose-500 hover:bg-rose-600 active:bg-rose-700 active:text-rose-50",
    },
    size: {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-[15px]",
      lg: "px-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// ini untuk menambahkan attribute native (agar kita bisa menambahkan className, onClick, dll ketika memanggilnya)
type TButton = VariantProps<typeof style>; //TButton mengambil atau inferring data yang ada di atas, oleh karenanya ia memiliki variant dan size
interface Props extends TButton, React.ComponentPropsWithRef<"button"> {}

export const Button = (props: Props) => {
  return (
    <button {...props} className={twMerge(style({ ...props }), props.className)}>
      {props.children}
    </button>
  );
};

//Tujuan menambahkan style({...props} adalah agar kita bisa melakukan set secara otomatis pada key yang diperlukan oleh style, yaitu size dan variant
//bagian <button {...props} untuk melakukan extending pada functionality-nya
//className={twMerge(style({ ...props }), props.className)} -> apabila kita memanggil button props dan memberikan custom class maka tailwind-merge akan melakukan merging.

//Kita butuh tailwind-merge agar apabila ketika kita melakukan sebuah duplikasi className, maka props className yaang kita berikan pada tempat kita memanggil button component ini akan didahulukan, sehingga yang di dalam style akan di-remove
