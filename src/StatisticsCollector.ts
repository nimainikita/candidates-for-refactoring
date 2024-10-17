type TFormatType = 'bytes' | 'Mb';

const BYTES_IN_MEGABYTE = 1_048_576;

class StatisticsCollector {
  sentUserVideoTraffic=0;
  sentShareVideoTraffic=0;
  isActiveAutoFormatTraffic=false;

  getSentVideoTraffic() {
    const sentVideoTrafficInBytes = this.sentUserVideoTraffic + this.sentShareVideoTraffic;
    const formatType = this.isActiveAutoFormatTraffic ? 'Mb' : 'bytes';

    return this.formatTraffic(sentVideoTrafficInBytes, formatType);
  }

  formatTraffic(trafficInBytes: number, formatType: TFormatType) {
    if (trafficInBytes < 0) {
      throw new Error('Traffic can`t be < 0');
    }

    switch (formatType) {
      case 'bytes':
        return trafficInBytes;
      case 'Mb':
        return trafficInBytes / BYTES_IN_MEGABYTE;
      default:
        throw new Error(`Unsupported format: ${formatType}`);
    }
  }
}


/*Что было плохо:
1) Магические числа не вынесенные в константу ( 1_048_576 )
2) Метод formatTraffic не обрабатывает случаи, когда trafficInBytes может быть отрицательным
*/

/*Что стало лучше:
1) Обработка исключений, проверка trafficInBytes на негативное число, чистота кода с помощью константы
*/