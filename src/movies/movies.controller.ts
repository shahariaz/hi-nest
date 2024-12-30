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
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll() {
    return this.moviesService.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.moviesService.getOne(id);
  }
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    console.log(movieData);
    return 'This will create a new movie';
  }
  @Delete('/:id')
  remove(@Param('id') id: number) {
    return `This will delete a movie with the id: ${id}`;
  }
  @Put('/:id')
  update(@Param('id') id: number) {
    return `This will update a movie with the id: ${id}`;
  }
  @Patch('/:id')
  partialUpdate(@Param('id') id: number, @Body() movieData: UpdateMovieDto) {
    const update = this.moviesService.update(id, movieData);
    return update;
  }
}
