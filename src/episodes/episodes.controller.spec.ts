import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesController } from './episodes.controller';
import { ConfigModule } from 'src/config/config.module';
import { EpisodesService } from './episodes.service';

describe('EpisodesController', () => {
  let controller: EpisodesController;

  // npm run test episode.controller
  const mockEpisodeService = {
    findAll: async () => [{ id: 'id' }],
    findFeaturedEpisode: async () => [{ id: 'id' }],
    findOne: async () => ({ id: 'id' }),
    create: async () => ({ id: 'id' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [EpisodesController],
      //providers: [EpisodesService],
      providers: [{ provide: EpisodesService, useValue: mockEpisodeService }],
    }).compile();

    controller = module.get<EpisodesController>(EpisodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    it('Should return correct response', async () => {
      const episodeId = 'id';
      const result = await controller.findOne(episodeId);
      expect(result).toEqual({ id: 'id' });
    });
  });

  /// Remaining Test out of my scope for now
});
