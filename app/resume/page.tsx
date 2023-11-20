import Head from "next/head";
import { Container, Typography } from "@mui/material";

export default function Resume() {
  const pdfUrl = "/pdfs/sample.pdf";

  return (
    <div>
      <Head>
        <title>Resume</title>
      </Head>
      <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          // src={pdfUrl}
          width="100%"
          height="100%"
          title="PDF Viewer"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}

// export default function Resume() {
//   const pdfUrl = "/pdfs/sample.pdf";
//   return (
//     <main>
//       <h1>Hlooo</h1>
//       <div style={{ height: "100vh", overflowY: "hidden" }}>
//         <iframe
//           //   src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
//           src={pdfUrl}
//           width="100%"
//           height="100%"
//           title="PDF Viewer"
//           style={{ border: "none" }}
//         />
//       </div>
//     </main>
//   );
// }
