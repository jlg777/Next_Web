import {  Lusitana } from 'next/font/google';

const lusitana = Lusitana({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Mi tienda",
  description: "Pagina"
}
const page = () => {
  return <div className={lusitana.className}>page</div>
}
export default page
