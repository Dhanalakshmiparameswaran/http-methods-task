import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Band, Festival, RecordLabelBand } from './app.interface';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class FestivalService {
  constructor(private readonly httpService: HttpService) {}

  private fetchData(): Observable<AxiosResponse<Festival[]>> {
    return this.httpService.get<Festival[]>(
      'https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals',
    );
  }

  public transformData(festivals: Festival[]): RecordLabelBand[] {
    const labelBandsMap = new Map<string, Map<string, string[]>>();

    festivals.forEach((festival) => {
      festival.bands.forEach((band) => {
        const label = band.recordLabel || 'Unknown';
        const bandName = band.name;

        if (!labelBandsMap.has(label)) {
          labelBandsMap.set(label, new Map());
        }

        const bandsMap = labelBandsMap.get(label);

        if (!bandsMap.has(bandName)) {
          bandsMap.set(bandName, []);
        }

        bandsMap.get(bandName).push(festival.name);
      });
    });

    return Array.from(labelBandsMap.entries())
      .sort(([labelA], [labelB]) => labelA.localeCompare(labelB))
      .map(([label, bandsMap]) => ({
        label,
        bands: Array.from(bandsMap.entries()).map(([name, festivals]) => ({
          name,
          festivals: festivals.map((festivalName) => ({ name: festivalName })),
        })),
      }));
  }

  getTransformedData(): Observable<RecordLabelBand[]> {
    return this.fetchData().pipe(
      map((response) => this.transformData(response.data)),
    );
  }
}
