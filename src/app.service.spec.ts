import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { FestivalService } from './app.service';
import { Festival, RecordLabelBand } from './app.interface';

describe('FestivalService', () => {
  let service: FestivalService;
  let httpService: HttpService;

  const mockFestivalData: Festival[] = [
    {
      name: 'Festival1',
      bands: [
        { name: 'Band1', recordLabel: 'Label1' },
        { name: 'Band2', recordLabel: 'Label2' },
      ],
    },
    {
      name: 'Festival2',
      bands: [
        { name: 'Band1', recordLabel: 'Label1' },
        { name: 'Band3', recordLabel: 'Label1' },
      ],
    },
  ];

  const mockResponse = {
    data: mockFestivalData,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FestivalService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn().mockReturnValue(of(mockResponse)),
          },
        },
      ],
    }).compile();

    service = module.get<FestivalService>(FestivalService);
    httpService = module.get<HttpService>(HttpService);
  });

  describe('transformData', () => {
    it('should transform the data correctly', () => {
      const transformedData: RecordLabelBand[] =
        service.transformData(mockFestivalData);

      expect(transformedData).toEqual([
        {
          label: 'Label1',
          bands: [
            {
              name: 'Band1',
              festivals: [{ name: 'Festival1' }, { name: 'Festival2' }],
            },
            {
              name: 'Band3',
              festivals: [{ name: 'Festival2' }],
            },
          ],
        },
        {
          label: 'Label2',
          bands: [
            {
              name: 'Band2',
              festivals: [{ name: 'Festival1' }],
            },
          ],
        },
      ]);
    });
  });

  describe('getTransformedData', () => {
    it('should fetch and transform data correctly', (done) => {
      service.getTransformedData().subscribe((result) => {
        expect(result).toEqual([
          {
            label: 'Label1',
            bands: [
              {
                name: 'Band1',
                festivals: [{ name: 'Festival1' }, { name: 'Festival2' }],
              },
              {
                name: 'Band3',
                festivals: [{ name: 'Festival2' }],
              },
            ],
          },
          {
            label: 'Label2',
            bands: [
              {
                name: 'Band2',
                festivals: [{ name: 'Festival1' }],
              },
            ],
          },
        ]);
        done();
      });
    });
  });
});
