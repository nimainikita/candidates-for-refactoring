class ScreenShare {
  startPresentationWithoutSound(mediaStream: MediaStream, isExistsAudioTracks: boolean) {
    this.stopPresentation();
    this.startPresentation(mediaStream);
    this.handleAudioTracks(isExistsAudioTracks);
  }

  private handleAudioTracks(isExistsAudioTracks: boolean) {
    if (isExistsAudioTracks) {
      this.muteAudio();
    }
  }

  stopPresentation() {}
  startPresentation(mediaStream: MediaStream) {}
  muteAudio() {}
}

/*Что было плохо:
1) Метод startPresentationWithoutSound объединяет несколько разных задач
Это делает метод более сложным
2) 
*/

/*Что стало лучше:
1) Метод handleAudioTracks изолирует логику управления звуком
Теперь код более явно отражает, какие действия выполняются в процессе запуска презентации и обработки аудио
*/