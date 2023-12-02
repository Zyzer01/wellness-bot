import Image from "next/image";
import ChatPanel from "../../../components/ChatPanel";
import ThemeToggle from "../../../components/ThemeToggle";


export default function Chat() {
  return (
    <div className="">
  <div className="grid grid-cols-5">
    <div className="col-span-1 p-4 dark:bg-black bg-gray-500">
      <div className="grid grid-rows-2 h-full">
        <div className="row-span-1 dark:text-white">
          <h1 className="text-xl">Wellness AI</h1>
        </div>
        <div className="row-span-1 flex items-end">
          <ThemeToggle />
        </div>
      </div>
    </div>
    <div className="col-span-4 dark:bg-dark">
      <ChatPanel />
    </div>
  </div>
</div>

  
  );
}

//       <section class="text-gray-600 body-font relative">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-col text-center w-full mb-12">
//       <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
//       <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
//     </div>
//     <div class="lg:w-1/2 md:w-2/3 mx-auto">
//       <div class="flex flex-wrap -m-2">
//         <div class="p-2 w-full">
//           <div class="relative">
//             <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
//             <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//           </div>
//         </div>
//         <div class="p-2 w-full">
//           <div class="relative">
//             <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
//             <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//           </div>
//         </div>
//         <div class="p-2 w-full">
//           <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//         </div>
//         <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
//           <a class="text-indigo-500">example@email.com</a>

//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       <div class="relative">
//         <label for="Search" class="sr-only">
//           {" "}
//           Search{" "}
//         </label>

//         <input
//           type="text"
//           id="Search"
//           placeholder="Search for..."
//           class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
//         />

//         <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
//           <button type="button" class="text-gray-600 hover:text-gray-700">
//             <span class="sr-only">Search</span>
//             <IoMdSend />
//           </button>
//         </span>
//       </div>
