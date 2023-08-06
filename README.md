# React a deep approach

# Parcel

-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm -written in C++
-Caching - Faster Builds
-Image Optimization
-Minification of files
-Bundling
-compress(remove white space)
-Consistent Hashing ?
-code splitting
-Differential Bundling [app can be open in new as well as old browsers when use <script type="module"></script></script> parcel automatically generate a nodemodule fallback for all browsers ]
-Diagnostics (Beautiful error suggestion in terminal)
-Error Handling
-HTTPS [npx parcel index.html --https lodes in https mode not http]
-Tree shaking - remove unuse code

-Different dev and prod bundles(build)

npx parcel build index.html
GIVES ERROR bec
parcel conflict with PACKAGE.JSON main:"App.js" file i.e entry point
but we use [npx parcel build index.html] entry point index.html

so remove it from package.json

npx parcel index.html ::-- this creates DEV BUILD

npx parcel index.html ::-- this creates PRODUCTION BUILD
