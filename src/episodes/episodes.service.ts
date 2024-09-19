import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Episode } from './entity/episode.entity';
import { CreateEpisodeDto } from './dto/create-episode.dto';

// Providers where nearly every thing in Nest.js is a Provider with injectable decorator into other classes
// create Provider (Service) using Nest CLI write >> nest generate service episodes >>

// Wrong implementation
//type Episode = { id: string; name: string; featured: boolean };
//type CreateEpisodeDto = { name: string; featured: boolean };

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = [];
  // async because we used in-memory array
  async findAll(sort: 'asc' | 'desc' = 'asc') {
    const sortAsc = (a: Episode, b: Episode) => (a.name > b.name ? 1 : -1);
    const sortDesc = (a: Episode, b: Episode) => (a.name < b.name ? 1 : -1);

    return sort === 'asc'
      ? this.episodes.sort(sortAsc)
      : this.episodes.sort(sortDesc);
  }

  async findFeatured() {
    return this.episodes.filter((episode) => episode.featured);
  }

  async findOne(id: string) {
    return this.episodes.find((episode) => episode.id === id);
  }

  async create(createEpisodeDto: CreateEpisodeDto) {
    const newEpisode = { ...createEpisodeDto, id: randomUUID() };
    this.episodes.push(newEpisode);

    return newEpisode;
  }
}
