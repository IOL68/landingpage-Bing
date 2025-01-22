import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)
            })(window,document,'script','dataLayer','GTM-K2S4JC4M');
          `
        }} />

        {/* Fathom Analytics */}
        <script
          src="https://cdn.usefathom.com/script.js"
          data-site="FWWXLZGR"
          defer
        />

        {/* Full Story */}
        <script dangerouslySetInnerHTML={{
          __html: `
            window['_fs_host'] = 'fullstory.com';
            window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
            window['_fs_org'] = 'RT1S3';
            window['_fs_namespace'] = 'FS';
            !function(n,e,o,t,s,c){var i,a,r,f,l,u,d,p,h,v=[];n.forEach((function(n){n&&v.push(n)})),v.length&&(f=e.createElement(o),l=e.getElementsByTagName(o)[0],u="async"in f,d=u?f:f.appendChild(e.createElement("script")),p=u?f:d,h=function(){var n=this.readyState;n&&"complete"!==n&&"loaded"!==n||t&&t()},u?(f.async=!0,l.parentNode.insertBefore(f,l)):(d.async=!0),p.onload=h,p.onreadystatechange=h,p.src=s,u||l.parentNode.insertBefore(d,l))}([window],document,"script",(function(){var n=function(n){return function(){window[n].push(arguments)}},e=n("FS"),o=n("_fs_namespace");e("set","user",{uid_attr:"id"}),e("set","session",{uid_attr:"id"}),e("set","page",{uid_attr:"id"}),e("set","cstm",{uid_attr:"id"}),o("setProperties",{type:"session"}),o("setIdentity",{id:"anonymous"}),o("clearUserCookie"),o("restart")}),c="fetch",f="XMLHttpRequest",window,document,window._fs_namespace);
          `
        }} />
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2S4JC4M"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
