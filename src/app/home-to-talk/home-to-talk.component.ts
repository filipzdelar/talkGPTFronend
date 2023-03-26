import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-to-talk',
  templateUrl: './home-to-talk.component.html',
  styleUrls: ['./home-to-talk.component.css']
})
export class HomeToTalkComponent {

  constructor() { 

    
  }
  ngAfterViewInit() {
    
    console.log("init");
    //this.startButton.nativeElement.addEventListener('click', this.talkToBot());
  }
  
  talkToBot(): void {/*
    startRecord.disabled = true;
    stopRecord.disabled=false;
    // This will prompt for permission if not allowed earlier
    navigator.mediaDevices.getUserMedia({audio:true})
      .then(stream => {
        audioChunks = []; 
        rec = new MediaRecorder(stream);
        rec.ondataavailable = e => {
          audioChunks.push(e.data);
          if (rec.state == "inactive"){
            let blob = new Blob(audioChunks,{type:'audio/x-mpeg-3'});
            recordedAudio.src = URL.createObjectURL(blob);
            recordedAudio.controls=true;
            recordedAudio.autoplay=true;
            audioDownload.href = recordedAudio.src;
            audioDownload.download = 'mp3';
            audioDownload.innerHTML = 'download';
         }
        }
      rec.start();  
      })
      .catch(e=>console.log(e));
  }
  
  console.log("save a methode");
    //this.http.post('https://my-api.azurewebsites.net/api/bot', { message: 'Hello' })
    //  .subscribe(response => console.log(response));*/
  }

  IfNeededBot() : void {
    /*
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      let audioChunks: ArrayBuffer[] = [];
      mediaRecorder.addEventListener("dataavailable", event => {
        event.data.arrayBuffer().then(buffer => {
            audioChunks.push(buffer);
          }
        )
      });
  
      mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        console.log("stop")
        console.log(audioBlob)
        const audioUrl = URL.createObjectURL(audioBlob);
        console.log(audioUrl)
        const audio = new Audio(audioUrl);
        console.log(audio)
        audio.play();
      });
  
      setTimeout(() => {
        mediaRecorder.stop();
      }, 3000);
    });
    */
  }

  endTalkBot() : void {

    

  }

  

}
