import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';


declare var $: any;
//import * as RecordRTC from 'recordrtc';
import * as RecordRTC from 'recordrtc';

import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-home-to-talk',
  templateUrl: './home-to-talk.component.html',
  styleUrls: ['./home-to-talk.component.css'],
  template: `
    <div>
      <h3>{{ question.label }}</h3>
      <select [(ngModel)]="selectedOption">
        <option *ngFor="let opt of question.options" 
          [value]="opt.key" 
          [selected]="opt.selected == true">
          {{ opt.selected ? '*' : '' }} {{ opt.value }}
        </option>
      </select>
    </div>
  `
})


export class HomeToTalkComponent {
  title = 'micRecorder';
  //Lets declare Record OBJ
  record: any;
  //Will use this flag for toggeling recording
  recording = false;
  //URL of Blob
  url: any;
  error: any;
  selectedLanguage: string = 'en';
  question = {
    label: 'Select an option:',
    options: [
      { key: 'opt1', value: 'English', selected: false },
      { key: 'opt2', value: 'France', selected: true },
      { key: 'opt3', value: 'German', selected: false },
      { key: 'opt3', value: 'Indian', selected: false },
      { key: 'opt3', value: 'Cheeness', selected: false },
      { key: 'opt3', value: 'Serbian', selected: false }
    ]
  };
  selectedOption = 'opt2';


  constructor(private domSanitizer: DomSanitizer, private http: HttpClient) {
    if (isDevMode()) {
      console.log("Development")
    } else {
      console.log("Production")
    }
  }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
    video: false,
    audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }
  /**
  * Will be called automatically.
  */
  successCallback(stream: MediaStream) {
  
  var options = {
    mimeType: "audio/wav",
    numberOfAudioChannels: 2,
    sampleRate: 44100
  };
  //16000
  //Start Actuall Recording
  var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
  this.record = new StereoAudioRecorder(stream); //options
  this.record.record();
  }
  /**
  * Stop recording.
  */
  stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));



  }
  /**
  * processRecording Do what ever you want with blob
  * @param  {any} blob Blog
  */
  processRecording(blob: Blob) {
    const formData = new FormData();
    formData.append('video', blob, 'recorded-video.webm');
    console.log("begin")
      this.http.post<any>('https://localhost:7129/Home/Upload', formData).subscribe(
        response => console.log(response),
        error => console.error(error)
    );
    console.log("end")
    this.url = URL.createObjectURL(blob);
    console.log("blob", blob);
    console.log("url", this.url);


    
  }
  /**
  * Process Error.
  */
  errorCallback(error: any) {
    this.error = 'Can not play audio in your browser';
  }
  ngOnInit() {}
    
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

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    // Call a translation service or update the language of your app here
  }

}

