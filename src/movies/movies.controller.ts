/* eslint-disable prettier/prettier */
import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll() {
    return this.moviesService.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.moviesService.getOne(id);
  }
  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'This will create a new movie';
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete a movie with the id: ${id}`;
  }
  @Put('/:id')
  update(@Param('id') id: string) {
    return `This will update a movie with the id: ${id}`;
  }
  @Patch('/:id')
  partialUpdate(@Param('id') id: string, @Body() movieData: Movie) {
    const update = this.moviesService.update(id, movieData);
    return update;
  }
}
