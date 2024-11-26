import type { NextConfig } from "next";
import { tree } from "next/dist/build/templates/app-page";

const nextConfig: NextConfig = {
  env :{
      TOKEN :   'MY-TOKEN'
  },
  // basePath : '/about',
  // // Server can only access
  // serverRuntimeConfig : {
  // },
  // // Server and Client both can access
  // publicRuntimeConfig : {
  // }
  // redirects : async () => {
  //   return [
  //     {
  //       source :'/',
  //       destination : '/Home',
  //       permanent : true
  //     }
  //   ]
  // }
};

export default nextConfig;
