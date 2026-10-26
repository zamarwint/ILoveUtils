import express, { Request, Response } from "express";

const app = express();
const PORT = 5000;

// // Properly configured CORS origins with protocols
// const corsOptions = {
//     origin: [
//         "http://localhost:3000",
//         "http://localhost:5173",
//         "https://zamarwint.vercel.app"
//     ],
//     methods: ["GET", "POST", "OPTIONS"]
// };

// app.use(cors(corsOptions));

// // Resolve the assets directory safely using the current working directory
// // This works reliably whether run from src/server.ts or dist/server.js
// const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets');

// // Default route
// app.get("/", (req: Request, res: Response) => {
//     res.send("Assets backend is running!");
// });

// // Route to serve an image by name
// app.get('/image/:imageName', (req, res) => {
//     const imageName = req.params.imageName;
//     const imagePath = path.join(ASSETS_DIR, imageName);

//     res.sendFile(imagePath, (err) => {
//         if (err) {
//             res.status(404).send(err.message);
//         }
//     });
// });

// const CHUNK_SIZE = 2 ** 18; // 262144 bytes

// // Route to serve a video by name using streaming
// app.get('/video/:videoName', (req, res) => {
//     const videoName = req.params.videoName;
//     const videoPath = path.join(ASSETS_DIR, videoName);

//     // Check if the file exists to prevent crashing the server
//     if (!fs.existsSync(videoPath)) {
//         res.status(404).send('Video not found');
//         return;
//     }

//     const stat = fs.statSync(videoPath);
//     const fileSize = stat.size;

//     // Parse Range Header
//     const range = req.headers.range;
//     if (!range) {
//         // Fallback for requests without a range header
//         res.writeHead(200, {
//             'Content-Length': fileSize,
//             'Content-Type': 'video/mp4',
//         });
//         fs.createReadStream(videoPath).pipe(res);
//         return;
//     }

//     const start = Number(range.replace(/\D/g, ""));
//     const end = Math.min(start + CHUNK_SIZE, fileSize - 1);
//     const contentLength = end - start + 1;

//     // Set Headers
//     const headers = {
//         'Content-Range': `bytes ${start}-${end}/${fileSize}`,
//         'Accept-Ranges': 'bytes',
//         'Content-Length': contentLength,
//         'Content-Type': 'video/mp4',
//     };

//     // Send Partial Content
//     res.writeHead(206, headers);

//     // Stream the chunk
//     const fileStream = fs.createReadStream(videoPath, { start, end });
//     fileStream.pipe(res);
// });

// app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
