const http =require("http");
const fs = require('fs');

const html_file = "html_file"
const audio = "audio";
const video = "video";
const img = "img";
const pdf = "pdf";

const server = http.createServer((req, res)=>{

    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
            res.write(`Welcome to my Server<br>
                <a href="${html_file}">html_file</a><br>
                <a href="${audio}">audio</a><br>
                <a href="${video}">video</a><br>          
                <a href="${img}">img</a><br>
                <a href="${pdf}">pdf</a><br>
                `);
            res.end();
    }

    if(req.url === `/${html_file}`){
        
        fs.readFile('Html_File.html', (err, data)=> {
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();
          });

    }

    if(req.url === `/${audio}`){

        fs.readFile('mortal_kombat_audio.mp3', (err, data)=> {
            res.setHeader("Content-Type", "audio/mp3");
            res.write(data);
            res.end();
          });
    }

    if(req.url === `/${video}`){

        fs.readFile('mortal_kombat_video.mp4', (err, data)=> {
            res.setHeader("Content-Type", "video/mp4");
            res.write(data);
            res.end();
          });
    }

    if(req.url === `/${img}`){

        fs.readFile('mortal_kombat_img.jpg', (err, data)=> {
            res.setHeader("Content-Type", "image/jpg");
            res.write(data);
            res.end();
          });
    }

    if(req.url === `/${pdf}`){

        fs.readFile('New.pdf', (err, data)=> {
            res.setHeader("Content-Type", "application/pdf");
            res.write(data);
            res.end();
          });
    }
    
});


const PORT = 8000;
server.listen(PORT, () =>{
    console.log(`Listening to port: ${PORT}`)
}
)