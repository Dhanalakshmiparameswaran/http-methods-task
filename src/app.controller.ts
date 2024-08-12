import { Controller, Get } from '@nestjs/common';
import { FestivalService } from './app.service';
import { RecordLabelBand } from './app.interface';
import { Observable } from 'rxjs';

@Controller('festivals')
export class FestivalController {
  constructor(private readonly festivalService: FestivalService) {}

  @Get()
  getTransformedData(): Observable<RecordLabelBand[]> {
    return this.festivalService.getTransformedData();
  }
}
